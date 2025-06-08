import { APIClient } from './api/client';
import { getLatestReport } from './reports';
import { getScreenerData as getScreenerResults } from './screener';
import { CombinedScreenerResult, ScreenerResult } from '../types/screener';
import { ChartDataPoint } from '../types/api';
import { MAX_TOP_SYMBOLS } from '../constants';

// Check if report is from a different day
function isReportStale(generatedAt: string): boolean {
    const reportDate = new Date(generatedAt);
    const now = new Date();
    return reportDate.toDateString() !== now.toDateString();
}

export async function getScreenerData(): Promise<CombinedScreenerResult> {
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
            count: Math.min(MAX_TOP_SYMBOLS, screenerData.count)
        };

        // Fetch historical data for the symbols
        const symbols = limitedData.results.map(result => result.symbol);
        const historicDataPromises = symbols.map(symbol =>
            APIClient.getChart({
                symbol,
                interval: '1h',
                range: '7d',
                region: 'US',
            })
        );

        const results = await Promise.all(historicDataPromises);
        const historicalData: Record<string, ChartDataPoint[]> = {};

        // Transform the data into the correct format
        symbols.forEach((symbol, index) => {
            const chartData = results[index];
            if (chartData && chartData.results) {
                historicalData[symbol] = chartData.results.map(point => ({
                    date: point.date,
                    open: point.open,
                    high: point.high,
                    low: point.low,
                    close: point.close,
                    volume: point.volume,
                    adjclose: point.adjclose,
                }));
            }
        });

        return {
            ...limitedData,
            historicalData,
        };
    } catch (error) {
        console.error('Error in getScreenerData:', error);
        throw error;
    }
}
