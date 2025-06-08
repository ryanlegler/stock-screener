import { Report } from '@/app/types/report';
import { filterMarketData } from './filter-market-data';

/**
 * Takes a full report and filters all historical data to only include market hours
 * @param report The report to filter
 * @returns A new report with filtered historical data
 */
export function filterReportData(report: Report): Report {
    // Expected number of data points for a complete dataset
    const EXPECTED_POINTS = 49; // 7 points per day * 7 weekdays

    // Filter historical data to only include market hours and remove incomplete datasets
    const filteredHistoricalData = Object.fromEntries(
        Object.entries(report.data.historicalData)
            .map(([symbol, chartData]) => {
                const filtered = filterMarketData(chartData);
                return [symbol, filtered] as const;
            })
            .filter(([, filtered]) => filtered.length === EXPECTED_POINTS)
    );

    // Create a new report with the filtered data
    const filteredReport = {
        ...report,
        data: {
            ...report.data,
            historicalData: filteredHistoricalData,
        },
    };

    return filteredReport;
}
