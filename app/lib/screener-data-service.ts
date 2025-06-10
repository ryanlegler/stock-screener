import { fetchReportData } from './api/fetch-report-data';
import { getLatestReport } from './reports';
import { fetchRawScreenerData as getScreenerResults } from './screener';
import { CombinedScreenerResult, ScreenerResult } from '../types/screener';
import { MAX_TOP_SYMBOLS } from '../constants';

// Check if report is from a different day
function isReportStale(generatedAt: string): boolean {
    const reportDate = new Date(generatedAt);
    const now = new Date();
    return reportDate.toDateString() !== now.toDateString();
}

export async function fetchScreenerDataWithHistory(): Promise<CombinedScreenerResult> {
    try {
        // Get or generate report
        const report = await getLatestReport();
        let screenerData: ScreenerResult;

        if (!report || isReportStale(report.generatedAt)) {
            // Get screener data
            screenerData = await getScreenerResults();
        } else {
            // Use data from the existing report
            screenerData = report.data;
        }

        // Limit the number of stocks if specified
        const limitedData = {
            ...screenerData,
            results: screenerData.results.slice(0, MAX_TOP_SYMBOLS),
            quotes: screenerData.quotes.slice(0, MAX_TOP_SYMBOLS),
            count: Math.min(MAX_TOP_SYMBOLS, screenerData.count),
        };

        // Fetch historical data for the symbols
        const symbols = limitedData.results.map(result => result.symbol);
        const historicalData = await fetchReportData(symbols);

        return {
            ...limitedData,
            historicalData,
        };
    } catch (error) {
        console.error('Error in fetchScreenerDataWithHistory:', error);
        throw error;
    }
}
