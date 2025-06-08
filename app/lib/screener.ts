import { getAllScreenerResults } from './api/screener-pagination';
import { ScreenerResult } from '../types/screener';
import { MAX_SCREENER_LIMIT } from '../constants';

export async function getScreenerData(): Promise<ScreenerResult> {
    const result = await getAllScreenerResults({
        sortField: 'percentchange',
        sortType: 'DESC',
        size: MAX_SCREENER_LIMIT,
        delayMs: 1000, // 1 second delay between paginated requests
    });

    return {
        ...result,
        results: result.quotes, // Maintain compatibility with old format
    };
}
