/**
 * Technical Analysis functions for the Stock Screener
 */

import { analyzeMACD } from '@/app/lib/indicators';
import { ChartDataPoint } from '@/app/types/api';
import { hydrateMACD } from '@/app/lib/utils/calculate-macd';

/**
 * Analyzes MACD indicators for a given set of price data
 *
 * @param chartData - Array of chart data points
 * @returns Analysis results for MACD indicators
 */
export function getMACDAnalysis(chartData: ChartDataPoint[]) {
    try {
        if (!chartData || chartData.length === 0) {
            return null;
        }

        // Use hydrateMACD to calculate MACD values
        const hydratedData = hydrateMACD(chartData);

        if (!hydratedData || hydratedData.length === 0) {
            return null;
        }

        // Convert to the format expected by analyzeMACD
        const macdData = hydratedData
            .filter(
                (d): d is ChartDataPoint & { macd: NonNullable<typeof d.macd> } =>
                    d.macd !== undefined
            )
            .map(d => ({
                date: d.date,
                macd: d.macd.macd,
                signal: d.macd.signal,
                histogram: d.macd.histogram,
                value: d.close || 0,
                price: d.close || 0,
            }));

        return analyzeMACD(macdData);
    } catch (error) {
        console.error('Error in MACD analysis:', error);
        return {
            waningBearishMomentum: false,
            bullishCrossover: false,
            higherLow: false,
            supportBounce: false,
        };
    }
}
