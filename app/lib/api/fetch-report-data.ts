import { ChartDataPoint } from '@/app/types/api';
import { fetchYahooFinanceChart } from '@/app/lib/api/yahoo-finance-api';

// Delay between API calls (500ms = 2 requests per second)
const API_CALL_DELAY = 500;

/**
 * Adds a delay between API calls to respect rate limits
 */
const delay = () => new Promise(resolve => setTimeout(resolve, API_CALL_DELAY));

/**
 * Fetches historical price data for multiple symbols with rate limiting
 * @param symbols - Array of stock symbols to fetch data for
 * @param onProgress - Optional callback for progress updates
 * @returns Promise<Record<string, ChartDataPoint[]>> Map of symbols to their historical data
 */
export async function fetchReportData(
    symbols: string[],
    onProgress?: (processed: number, total: number) => void
): Promise<Record<string, ChartDataPoint[]>> {
    const data: Record<string, ChartDataPoint[]> = {};
    const total = symbols.length;
    const startTime = Date.now();
    let lastRequestTime = startTime;

    for (let i = 0; i < symbols.length; i++) {
        const symbol = symbols[i];
        try {
            // Add delay before each request (except the first one)
            if (i > 0) {
                await delay();
            }

            const requestStartTime = Date.now();
            const timeSinceLastRequest = requestStartTime - lastRequestTime;
            const totalElapsed = (requestStartTime - startTime) / 1000; // in seconds

            console.log(
                `[${totalElapsed.toFixed(1)}s] Fetching ${symbol} (${timeSinceLastRequest}ms since last request)`
            );

            const response = await fetchYahooFinanceChart({
                symbol,
                interval: '1h',
                range: '1mo',
            });

            lastRequestTime = Date.now();
            const requestDuration = lastRequestTime - requestStartTime;

            if (response.error || !response.results?.length) {
                console.error(`No data returned for ${symbol}:`, response.error || 'Empty results');
                data[symbol] = [];
            } else {
                data[symbol] = response.results;
                console.log(`✓ ${symbol} completed in ${requestDuration}ms`);
            }
        } catch (error) {
            console.error(`Failed to fetch data for ${symbol}:`, error);
            data[symbol] = [];
        }

        // Update progress with both current count and total
        onProgress?.(i + 1, total);
    }

    const totalTimeSeconds = (Date.now() - startTime) / 1000;
    console.log(
        `\n🕒 Completed ${total} API calls in ${totalTimeSeconds.toFixed(1)}s (avg ${(totalTimeSeconds / total).toFixed(1)}s per call)\n`
    );

    return data;
}
