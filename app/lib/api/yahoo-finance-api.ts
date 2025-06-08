import { APIError, GetChartDataParams, ChartResponse, ChartDataPoint } from '@/app/types/api';

const getHeaders = () => ({
    'x-rapidapi-key': process.env.RAPIDAPI_KEY!,
    'x-rapidapi-host': process.env.RAPIDAPI_HOST!,
});

/**
 * Fetches historical price data for a specific symbol
 */
export async function fetchYahooFinanceChart({
    symbol,
    interval = '30m',
    range = '1mo',
    region = 'US',
}: GetChartDataParams): Promise<{
    symbol: string;
    results: ChartDataPoint[];
    error: string | null;
}> {
    try {
        const queryParams = new URLSearchParams({
            symbol,
            interval,
            range,
            region,
        });

        const requestHeaders = {
            ...getHeaders(),
            host: process.env.RAPIDAPI_HOST!,
            accept: '*/*',
            'accept-language': 'en-US,en;q=0.9',
            'accept-encoding': 'gzip, deflate, br, zstd',
        };

        const baseUrl = `https://${process.env.RAPIDAPI_HOST!}`;
        const fullUrl = `${baseUrl}/api/stock/get-chart?${queryParams.toString()}`;

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

        const rawData: ChartResponse = await response.json();

        const chartResult = rawData.chart?.result?.[0];

        if (!chartResult || !chartResult.timestamp || !chartResult.indicators?.quote?.[0]) {
            return {
                symbol,
                results: [],
                error: 'No historical data available',
            };
        }

        const quoteData = chartResult.indicators.quote[0];
        if (Object.keys(quoteData).length === 0) {
            return {
                symbol,
                results: [],
                error: 'No price data available for this time range',
            };
        }

        const { timestamp } = chartResult;
        const adjclose = chartResult.indicators.adjclose?.[0]?.adjclose;

        if (
            !quoteData.open ||
            !quoteData.high ||
            !quoteData.low ||
            !quoteData.close ||
            !quoteData.volume
        ) {
            return {
                symbol,
                results: [],
                error: 'Missing required price data in response',
            };
        }

        // Map timestamp data to chart data points
        const results = timestamp
            .map((time: number, index: number) => {
                const date = new Date(time * 1000);
                const hasValidData = !(
                    quoteData.open[index] === null ||
                    quoteData.high[index] === null ||
                    quoteData.low[index] === null ||
                    quoteData.close[index] === null
                );

                if (!hasValidData) {
                    console.log(`${symbol}: Missing price data at ${date.toLocaleString()}`);
                    return null;
                }

                return {
                    date,
                    open: quoteData.open[index],
                    high: quoteData.high[index],
                    low: quoteData.low[index],
                    close: quoteData.close[index],
                    volume: quoteData.volume[index] || 0,
                    adjclose: adjclose ? adjclose[index] : undefined,
                };
            })
            .filter((item): item is NonNullable<typeof item> => item !== null);

        console.log(`${symbol}: Final data points after all filtering:`, results.length);
        if (results.length > 0) {
            console.log(`${symbol}: Date range:`, {
                start: results[0].date.toLocaleString(),
                end: results[results.length - 1].date.toLocaleString(),
            });
        }

        return {
            symbol,
            results,
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
