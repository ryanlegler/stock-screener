import { APIClient } from './api/client';
import { ScreenerResult, ScreenerOptions } from '../types/screener';

export async function getScreenerData(options: ScreenerOptions = {}): Promise<ScreenerResult> {
    const quotes = await APIClient.getQuotes({
        symbols: ['AAPL', 'MSFT', 'GOOGL'], // Default symbols
        region: 'US',
        language: 'en-US'
    });

    const screenerData: ScreenerResult = {
        results: quotes || [],
        start: 0,
        count: quotes?.length || 0,
        total: quotes?.length || 0,
        quotes: quotes || [],
        useRecords: false
    };

    if (options.limit && screenerData.quotes.length > options.limit) {
        screenerData.quotes = screenerData.quotes.slice(0, options.limit);
        screenerData.count = screenerData.quotes.length;
    }

    return screenerData;
}
