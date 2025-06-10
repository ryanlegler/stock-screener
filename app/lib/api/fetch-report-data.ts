import { ChartDataPoint } from '@/app/types/api';
import { fetchYahooFinanceChart } from '@/app/lib/api/yahoo-finance-api';

/**
 * Fetches historical price data for multiple symbols
 * @param symbols - Array of stock symbols to fetch data for
 * @returns Promise<Record<string, ChartDataPoint[]>> Map of symbols to their historical data
 */
export async function fetchReportData(
    symbols: string[],
    onProgress?: (processed: number) => void
): Promise<Record<string, ChartDataPoint[]>> {
    const data: Record<string, ChartDataPoint[]> = {};
    for (const symbol of symbols) {
        try {
            const response = await fetchYahooFinanceChart({
                symbol,
                interval: '1h',
                range: '1mo',
            });

            if (response.error || !response.results?.length) {
                console.error(`No data returned for ${symbol}:`, response.error || 'Empty results');
                data[symbol] = [];
            } else {
                data[symbol] = response.results;
            }
        } catch (error) {
            console.error(`Failed to fetch data for ${symbol}:`, error);
            data[symbol] = [];
        }
        onProgress?.(Object.keys(data).length);
    }
    return data;
}
