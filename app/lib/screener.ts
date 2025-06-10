import { getAllScreenerResults } from '@/app/lib/api/screener-pagination';
import { ScreenerResult } from '@/app/types/screener';
import { MAX_SCREENER_LIMIT } from '@/app/constants';

export async function fetchRawScreenerData(): Promise<ScreenerResult> {
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
