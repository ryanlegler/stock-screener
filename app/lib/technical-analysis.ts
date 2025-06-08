/**
 * Server Actions for the Stock Screener
 */

'use server';

import { calculateMACD, analyzeMACD } from './indicators';
import { MACDAnalysisResult } from '../types/technical-analysis';
import { fetchYahooFinanceChart } from './api/yahoo-finance-api';

/**
 * Fetches historical data and calculates MACD indicators for a given symbol
 *
 * @param symbol - Stock symbol to analyze
 * @param interval - Time interval between data points (1d, 1wk, 1mo)
 * @param range - Time range to fetch data for (1d, 5d, 1mo, 3mo, 6mo, 1y, 2y, 5y, 10y, ytd, max)
 * @returns Object containing MACD data and analysis results
 */
export async function getMACDAnalysis(
    symbol: string,
    interval: string,
    range: string
): Promise<MACDAnalysisResult | null> {
    try {
        // Fetch historical data
        const data = await fetchYahooFinanceChart({ symbol, interval, range });

        // Return null for symbols with no data (they will be filtered out)
        if (!data || !data.results || !data.results.length) {
            return null;
        }

        // Calculate MACD for the historical data
        const closePrices = data.results
            .map(point => point.close)
            .filter((price): price is number => typeof price === 'number' && !isNaN(price));

        if (closePrices.length === 0) {
            return null;
        }

        const macdData = calculateMACD(closePrices);
        const analysis = analyzeMACD(macdData);

        return {
            symbol,
            macdData,
            analysis,
            error: null
        };
    } catch (error) {
        console.error('Error in MACD analysis:', error);
        return {
            symbol,
            macdData: [],
            analysis: {
                waningBearishMomentum: false,
                bullishCrossover: false,
                higherLow: false,
                supportBounce: false
            },
            error: error instanceof Error ? error.message : 'Failed to analyze MACD'
        };
    }
}


