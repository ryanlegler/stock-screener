import { getScreenerList } from './screener';
import { Result, ScreenerListResponse } from '../../types';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export interface PaginatedScreenerParams {
    sortType: 'DESC' | 'ASC';
    sortField: string;
    size: number;
    delayMs?: number;
}

/**
 * Fetches all available screener results by handling pagination automatically.
 *
 * This wrapper function:
 * 1. Makes multiple API calls to fetch all pages of screener results
 * 2. Handles pagination by tracking offset and making subsequent API calls
 * 3. Implements throttling to respect API rate limits
 *
 * @param params Configuration object for the screener API
 * @param params.sortType Sort direction ('DESC' or 'ASC')
 * @param params.sortField Field to sort by (e.g., 'percentchange')
 * @param params.size Number of items per page
 * @param params.delayMs Optional delay between API calls in milliseconds (default: 1000ms)
 *
 * @returns A single merged Result object containing all quotes from all pages,
 * with count and total values reflecting the actual combined dataset
 *
 * @example
 * const allResults = await getAllScreenerResults({
 *   sortType: 'DESC',
 *   sortField: 'percentchange',
 *   size: 30,
 *   delayMs: 1000
 * });
 */
export async function getAllScreenerResults(params: PaginatedScreenerParams): Promise<Result> {
    const results: ScreenerListResponse[] = [];
    let offset = 0;
    let hasMore = true;
    const delayMs = params.delayMs || 1000; // Default to 1 second delay

    try {
        while (hasMore) {
            const response = await getScreenerList({
                params: {
                    ...params,
                    offset,
                },
            });

            if (!response || !response.finance?.result?.[0]) {
                hasMore = false;
                break;
            }

            results.push(response);

            const { count, total } = response.finance.result[0];
            offset += count;

            if (offset >= total) {
                hasMore = false;
            } else {
                await delay(delayMs);
            }
        }

        // Combine all results into a single Result object
        const allQuotes = results.flatMap(response => response?.finance?.result?.[0]?.quotes || []);

        // Now our counts reflect the actual combined data
        return {
            start: 0, // We're showing all results, so we start at 0
            count: allQuotes.length, // Total number of quotes we've collected
            total: allQuotes.length, // Since we've fetched everything, total equals count
            quotes: allQuotes,
            useRecords: false,
        };
    } catch (error) {
        console.error('❌ Error in getAllScreenerResults:', error);
        throw error;
    }
}
