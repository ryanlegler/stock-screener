import {
    APIError,
    GetChartDataParams,
    ChartResponse,
} from '@/app/types/api';

interface ChartDataPoint {
    date: Date;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    adjclose?: number;
}

interface GetChartResponse {
    symbol: string;
    results: ChartDataPoint[];
    error: string | null;
}

const getHeaders = () => ({
    'x-rapidapi-key': process.env.RAPIDAPI_KEY!,
    'x-rapidapi-host': process.env.RAPIDAPI_HOST!,
});



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
            console.log('🚀 ~ APIClient ~ queryParams:', queryParams);

            const requestHeaders = {
                ...getHeaders(),
                host: process.env.RAPIDAPI_HOST!,
                accept: '*/*',
                'accept-language': 'en-US,en;q=0.9',
                'accept-encoding': 'gzip, deflate, br, zstd',
            };

            // Using the correct endpoint path from the documentation
            const baseUrl = `https://${process.env.RAPIDAPI_HOST!}`;
            const fullUrl = `${baseUrl}/api/stock/get-chart?${queryParams.toString()}`;

            console.log('API Request:', {
                url: fullUrl,
                headers: requestHeaders,
                params: Object.fromEntries(queryParams.entries()),
            });

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
            console.log('🚀 ~ APIClient ~ chartResult:', chartResult);

            if (!chartResult || !chartResult.timestamp || !chartResult.indicators?.quote?.[0]) {
                console.warn(`No chart data available for ${symbol}`);
                return {
                    symbol,
                    results: [],
                    error: 'No historical data available',
                };
            }

            // Check if quote data is empty (some stocks return empty quote object)
            const quoteData = chartResult.indicators.quote[0];
            if (Object.keys(quoteData).length === 0) {
                console.warn(`Empty quote data for ${symbol}`);
                return {
                    symbol,
                    results: [],
                    error: 'No price data available for this time range',
                };
            }

            const { timestamp } = chartResult;
            const adjclose = chartResult.indicators.adjclose?.[0]?.adjclose;

            // Validate that we have all the required data arrays
            if (
                !quoteData.open ||
                !quoteData.high ||
                !quoteData.low ||
                !quoteData.close ||
                !quoteData.volume
            ) {
                console.warn(`Missing required price data for ${symbol}:`, quoteData);
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

            // Map the data into our format
            const results = timestamp.map((time: number, index: number) => {
                // Skip any data points with null/undefined values
                if (
                    quoteData.open[index] === null ||
                    quoteData.high[index] === null ||
                    quoteData.low[index] === null ||
                    quoteData.close[index] === null
                ) {
                    return null;
                }

                return {
                    date: new Date(time * 1000), // Convert Unix seconds to Date
                    open: quoteData.open[index],
                    high: quoteData.high[index],
                    low: quoteData.low[index],
                    close: quoteData.close[index],
                    volume: quoteData.volume[index] || 0,
                    adjclose: adjclose ? adjclose[index] : undefined,
                };
            });

            // Filter out null values
            const validResults = results.filter(
                (item): item is NonNullable<typeof item> => item !== null
            );

            return {
                symbol,
                results: validResults,
                error: null,
            };
        } catch (error) {
            console.error('API request failed:', error);
            return {
                symbol,
                results: [],
                error: error instanceof Error ? error.message : 'Unknown error',
            };
        }
    }
}
