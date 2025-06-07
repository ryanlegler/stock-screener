/**
 * Server Actions for the Stock Screener
 */

'use server';

import { APIClient } from './api/client';
import { calculateMACD, analyzeMACD } from './indicators';
import { MACDData } from '../types/api';

export interface MACDAnalysisResult {
    symbol: string;
    macdData: MACDData[];
    analysis: {
        waningBearishMomentum: boolean;
        bullishCrossover: boolean;
        higherLow: boolean;
        supportBounce: boolean;
    };
    error?: string | null;
}

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
): Promise<MACDAnalysisResult> {
    try {
        // Fetch historical data
        const data = await APIClient.getChart({ symbol, interval, range });

        // keep this

        if (!data.results.length) {
            return {
                symbol,
                macdData: [],
                analysis: {
                    waningBearishMomentum: false,
                    bullishCrossover: false,
                    higherLow: false,
                    supportBounce: false,
                },
                error: data.error || 'No historical data available',
            };
        }

        // Calculate MACD indicators
        const macdData = calculateMACD(data.results);

        // Analyze MACD for bullish signals
        const analysis = analyzeMACD(macdData);

        return {
            symbol,
            macdData,
            analysis,
            error: null,
        };
    } catch (error) {
        console.error(`Error analyzing MACD for ${symbol}:`, error);
        return {
            symbol,
            macdData: [],
            analysis: {
                waningBearishMomentum: false,
                bullishCrossover: false,
                higherLow: false,
                supportBounce: false,
            },
            error: error instanceof Error ? error.message : 'Unknown error',
        };
    }
}

/**
 * Fetches MACD analysis for multiple symbols
 *
 * @param symbols - Array of stock symbols to analyze
 * @param interval - Time interval between data points (1d, 1wk, 1mo)
 * @param range - Time range to fetch data for (1d, 5d, 1mo, 3mo, 6mo, 1y, 2y, 5y, 10y, ytd, max)
 * @returns Array of MACD analysis results for each symbol
 */
export async function getMACDAnalysisMultiple(
    symbols: string[],
    interval: string = '30m',
    range: string = '5d'
): Promise<MACDAnalysisResult[]> {
    // Process symbols in parallel for better performance
    const results = await Promise.all(
        symbols.map(symbol => getMACDAnalysis(symbol, interval, range))
    );
    console.log('🚀 ~ MACDAnalysisResult:', results);

    return results;
}
