import {
    APIError,
    ImpliedVolatilityParams,
    ImpliedVolatilityResponse,
    QuotesParams,
    QuoteItem,
    GetChartDataParams,
    GetChartResponse,
    ChartDataPoint,
    ChartResponse,
} from '@/app/types/api';

const BASE_URL = 'https://yahoo-finance166.p.rapidapi.com';

const headers = {
    'x-rapidapi-key': process.env.RAPIDAPI_KEY!,
};

export class APIClient {
    /**
     * Fetches historical price data for a specific symbol
     *
     * @param symbol - Stock symbol to fetch historical data for
     * @param interval - Time interval between data points (1d, 1wk, 1mo)
     * @param range - Time range to fetch data for (1d, 5d, 1mo, 3mo, 6mo, 1y, 2y, 5y, 10y, ytd, max)
     * @param region - Region for the data. Default is 'US'
     * @returns Promise with historical price data for the requested symbol
     */
    static async getChart({
        symbol,
        interval = '30m', // Using daily intervals
        range = '1mo', // Using 1 year range to get more data points
        region = 'US',
    }: GetChartDataParams): Promise<GetChartResponse> {
        try {
            // Construct query params according to API documentation
            const queryParams = new URLSearchParams({
                symbol: symbol, // singular 'symbol', not 'symbols'
                interval: interval, // valid values: 1m, 2m, 5m, 15m, 30m, 60m, 90m, 1h, 1d, 5d, 1wk, 1mo, 3mo
                range: range, // valid values: 1d, 5d, 1mo, 3mo, 6mo, 1y, 2y, 5y, 10y, ytd, max
                region: region, // valid values: AR, AU, BR, CA, CN, FR, DE, HK, IN, IT, MX, NZ, SG, KR, ES, TW, GB, US
            });

            const requestHeaders = {
                ...headers,
                host: 'yahoo-finance166.p.rapidapi.com',
                accept: '*/*',
                'accept-language': 'en-US,en;q=0.9',
                'accept-encoding': 'gzip, deflate, br, zstd',
            };

            // Using the correct endpoint path from the documentation
            const fullUrl = `${BASE_URL}/api/stock/get-chart?${queryParams.toString()}`;

            console.log(
                `Fetching historical data for ${symbol} with interval=${interval}, range=${range}`
            );

            const response = await fetch(fullUrl, {
                headers: requestHeaders,
                next: {
                    revalidate: 3600, // Cache for 1 hour
                },
            });

            if (!response.ok) {
                const error: APIError = {
                    status: response.status,
                    message: `API request failed with status ${response.status}`,
                };
                throw error;
            }

            // Parse the raw API response
            const rawData: ChartResponse = await response.json();
            console.log('Historical data API response:', rawData);

            // Get the chart data from the response
            const chartResult = rawData.chart?.result?.[0];

            if (!chartResult || !chartResult.timestamp || !chartResult.indicators?.quote?.[0]) {
                console.error('Invalid chart data structure:', rawData);
                return {
                    symbol,
                    results: [],
                    error: 'No historical data available or invalid data structure',
                };
            }

            const { timestamp, indicators } = chartResult;
            const quotes = indicators.quote[0];
            const adjclose = indicators.adjclose?.[0]?.adjclose;

            // Validate that we have all the required data arrays
            if (!quotes.open || !quotes.high || !quotes.low || !quotes.close || !quotes.volume) {
                console.error('Missing required price data in response:', quotes);
                return {
                    symbol,
                    results: [],
                    error: 'Missing required price data in response',
                };
            }

            // Check if we have enough data points for MACD calculation (need at least 26 for basic MACD)
            if (timestamp.length < 26) {
                console.warn(
                    `Limited data points (${timestamp.length}) for ${symbol}, may affect MACD accuracy`
                );
            }

            // Transform the raw API data into our application's data format
            const mappedData = timestamp.map((time: number, index: number) => {
                // Skip any data points with null/undefined values
                if (
                    quotes.open[index] === null ||
                    quotes.high[index] === null ||
                    quotes.low[index] === null ||
                    quotes.close[index] === null
                ) {
                    return null;
                }

                return {
                    date: time * 1000, // Convert Unix seconds to milliseconds
                    open: quotes.open[index],
                    high: quotes.high[index],
                    low: quotes.low[index],
                    close: quotes.close[index],
                    volume: quotes.volume[index] || 0,
                    adjclose: adjclose ? adjclose[index] : undefined,
                };
            });

            // Filter out null values and create properly typed array
            const results: ChartDataPoint[] = mappedData.filter(
                (item): item is NonNullable<typeof item> => item !== null
            );

            return {
                symbol,
                results,
                error: null,
            };
        } catch (error) {
            console.error('Historical data API request failed:', error);
            return {
                symbol,
                results: [],
                error: error instanceof Error ? error.message : 'Unknown error',
            };
        }
    }

    /**
     * Fetches stock quotes for one or multiple symbols
     *
     * @param symbols - Single symbol or array of symbols to fetch quotes for
     * @param fields - Data fields to include in the response. Default is 'quoteSummary'.
     *                 Available options include: quoteSummary, regularMarketPrice, regularMarketChange,
     *                 regularMarketChangePercent, marketCap, longName, shortName, etc.
     *                 For a full list of fields, see the QuoteItem interface.
     * @param language - Language for the response. Default is 'en-US'
     * @param region - Region for the data. Default is 'US'
     * @returns Promise with quote data for the requested symbols
     */
    static async getQuotes({
        symbols,
        fields = 'quoteSummary',
        language = 'en-US',
        region = 'US',
    }: QuotesParams): Promise<QuoteItem[]> {
        try {
            // Convert symbols array to comma-separated string if it's an array
            const symbolsParam = Array.isArray(symbols) ? symbols.join(',') : symbols;

            const queryParams = new URLSearchParams({
                symbols: symbolsParam,
                fields,
                language,
                region,
            });

            const requestHeaders = {
                ...headers,
                host: 'yahoo-finance166.p.rapidapi.com',
                accept: '*/*',
                'accept-language': 'en-US,en;q=0.9',
                'accept-encoding': 'gzip, deflate, br, zstd',
            };

            const fullUrl = `${BASE_URL}/api/market/get-quote-v2?${queryParams.toString()}`;

            const response = await fetch(fullUrl, {
                headers: requestHeaders,
                next: {
                    revalidate: 300, // Cache for 5 minutes
                },
            });

            if (!response.ok) {
                const error: APIError = {
                    status: response.status,
                    message: `API request failed with status ${response.status}`,
                };
                throw error;
            }

            const data = await response.json();
            return data.quoteResponse?.result;
        } catch (error) {
            console.error('API request failed:', error);
            throw error;
        }
    }

    static async getHighestImpliedVolatility({
        language = 'en-US',
        region = 'US',
        offset = 0,
        // quote_type = 'STOCK',
        count = 30,
    }: ImpliedVolatilityParams = {}): Promise<ImpliedVolatilityResponse> {
        try {
            const queryParams = new URLSearchParams({
                language,
                region,
                offset: offset.toString(),
                // quote_type,
                count: count.toString(),
            });

            // Using the exact API endpoint and headers as provided
            const requestHeaders = {
                ...headers,
                host: 'yahoo-finance166.p.rapidapi.com',
                accept: '*/*',
                'accept-language': 'en-US,en;q=0.9',
                'accept-encoding': 'gzip, deflate, br, zstd',
            };

            const fullUrl = `${BASE_URL}/api/market/get-highest-implied-volatility?${queryParams.toString()}`;

            const response = await fetch(fullUrl, {
                headers: requestHeaders,
                next: {
                    revalidate: 300, // Cache for 5 minutes
                },
            });

            if (!response.ok) {
                const error: APIError = {
                    status: response.status,
                    message: `API request failed with status ${response.status}`,
                };
                throw error;
            }

            const { finance } = (await response.json()) || {};

            return finance;
        } catch (error) {
            console.error('API request failed:', error);
            throw error;
        }
    }
}
