/**
 * Server Actions for the Stock Screener
 */

'use server';

import { APIClient } from './api/client';
import { calculateMACD, analyzeMACD, MACDResult } from './indicators';

export interface MACDAnalysisResult {
    symbol: string;
    macdData: MACDResult[];
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
): Promise<MACDAnalysisResult | null> {
    try {
        // Fetch historical data
        const data = await APIClient.getChart({ symbol, interval, range });

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

    // Filter out null results (symbols with no data)
    const validResults = results.filter((result): result is MACDAnalysisResult => result !== null);
    console.log('🚀 ~ MACDAnalysisResult:', validResults);

    return validResults;
}

import { getHistoricData } from './api/get-historic-data';
import { writeFile } from 'fs/promises';
import { join } from 'path';

/**
 * Fetches historical data for multiple symbols and saves it to a report
 */
export async function generateStockReport(symbols: string[]) {
    // Fetch historical data for all symbols
    const historicalData = await getHistoricData(symbols);

    // Create report structure
    const timestamp = new Date().toISOString();
    const report = {
        timestamp,
        stocks: Object.entries(historicalData).map(([symbol, data]) => ({
            symbol,
            historicalData: data,
            error: data.length === 0 ? 'No historical data available' : null
        }))
    };

    // Save report to file
    const reportsDir = join(process.cwd(), 'reports');
    const reportPath = join(reportsDir, `report-${timestamp}.json`);
    await writeFile(reportPath, JSON.stringify(report, null, 2));

    return report;
}
