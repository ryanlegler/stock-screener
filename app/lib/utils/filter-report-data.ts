import { Report } from '@/app/types/report';
import { filterMarketData } from './filter-market-data';
import { MIN_EXPECTED_POINTS } from '@/app/constants';

/**
 * Takes a full report and filters all historical data to only include market hours
 * @param report The report to filter
 * @returns A new report with filtered historical data
 */
export function filterReportData(report: Report): Report {
    // Expected number of data points for a complete dataset
    // For 1 month (approx 22 trading days) with 7 points per day

    // Filter historical data to only include market hours and remove incomplete datasets
    const filteredHistoricalData = Object.fromEntries(
        Object.entries(report.data.historicalData)
            .map(([symbol, chartData]) => {
                const filtered = filterMarketData(chartData);
                console.log(`Symbol ${symbol}: ${filtered.length} points`);
                return [symbol, filtered] as const;
            })
            .filter(([symbol, filtered]) => {
                const hasEnoughPoints = filtered.length >= MIN_EXPECTED_POINTS;
                if (!hasEnoughPoints) {
                    console.log(
                        `Filtering out ${symbol}: only has ${filtered.length} points, need ${EXPECTED_POINTS}`
                    );
                }
                return hasEnoughPoints;
            })
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
