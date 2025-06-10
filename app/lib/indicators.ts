/**
 * Technical Indicators Utility Functions
 *
 * This file contains utility functions for calculating various technical indicators
 * used in stock analysis, including MACD, RSI, and others.
 */

import { getMACDAnalysis } from '@/app/lib/technical-analysis';

export interface MACDResult {
    date?: Date;
    macd: number;
    signal: number;
    histogram: number;
    value: number;
    price: number;
}

/**
 * Calculates the Exponential Moving Average (EMA) for a given dataset
 *
 * @param data - Array of price values
 * @param period - Period for the EMA calculation
 * @param smoothingFactor - Optional smoothing factor (default is 2/(period+1))
 * @returns Array of EMA values
 */
export function calculateEMA(data: number[], period: number, smoothingFactor?: number): number[] {
    const alpha = smoothingFactor || 2 / (period + 1);
    const ema: number[] = [];

    // Initialize EMA with SMA for the first period
    let sum = 0;
    for (let i = 0; i < period; i++) {
        sum += data[i];
    }
    ema.push(sum / period);

    // Calculate EMA for the rest of the data
    for (let i = period; i < data.length; i++) {
        ema.push(data[i] * alpha + ema[ema.length - 1] * (1 - alpha));
    }

    return ema;
}

/**
 * Calculates the Moving Average Convergence Divergence (MACD) for a given dataset
 *
 * @param closePrices - Array of closing prices
 * @param fastPeriod - Period for the fast EMA (default: 12)
 * @param slowPeriod - Period for the slow EMA (default: 26)
 * @param signalPeriod - Period for the signal line EMA (default: 9)
 * @returns Array of MACD data points
 */
export function calculateMACD(
    closePrices: number[],
    fastPeriod: number = 12,
    slowPeriod: number = 26,
    signalPeriod: number = 9
): MACDResult[] {
    if (closePrices.length < slowPeriod + signalPeriod) {
        console.warn('Insufficient data for MACD calculation');
        return [];
    }

    // Calculate fast and slow EMAs
    const fastEMA = calculateEMA(closePrices, fastPeriod);
    const slowEMA = calculateEMA(closePrices, slowPeriod);

    // Calculate MACD line (fast EMA - slow EMA)
    const macdLine: number[] = [];

    // Adjust for the difference in starting points of EMAs
    const startIdx = slowPeriod - fastPeriod;

    for (let i = 0; i < slowEMA.length; i++) {
        macdLine.push(fastEMA[i + startIdx] - slowEMA[i]);
    }

    // Calculate signal line (EMA of MACD line)
    const signalLine = calculateEMA(macdLine, signalPeriod);

    // Calculate histogram (MACD line - signal line)
    const histogram: number[] = [];
    for (let i = 0; i < signalLine.length; i++) {
        histogram.push(macdLine[i + signalPeriod - 1] - signalLine[i]);
    }

    // Combine data into result
    const result: MACDResult[] = [];

    for (let i = 0; i < histogram.length; i++) {
        const macd = macdLine[i + signalPeriod - 1];
        result.push({
            macd,
            signal: signalLine[i],
            histogram: histogram[i],
            value: closePrices[i + slowPeriod + signalPeriod - 2],
            price: closePrices[i + slowPeriod + signalPeriod - 2],
        });
    }

    return result;
}

/**
 * Analyzes MACD data to identify bullish signals
 *
 * @param macdData - Array of MACD data points
 * @returns Object containing analysis results
 */
export function analyzeMACD(macdData: MACDResult[]) {
    return {
        waningBearishMomentum: checkWaningBearishMomentum(macdData),
        bullishCrossover: checkBullishCrossover(macdData, 10),
        higherLow: checkHigherLow(macdData),
        supportBounce: checkSupportBounce(macdData),
    };
}

/**
 * Checks if there is waning bearish momentum (decreasing red histogram bars)
 */
function checkWaningBearishMomentum(macdData: MACDResult[]): boolean {
    if (macdData.length < 3) return false;

    const lastThree = macdData.slice(-3);
    const allNegative = lastThree.every(d => d.histogram < 0);
    const increasing =
        lastThree[0].histogram <= lastThree[1].histogram &&
        lastThree[1].histogram <= lastThree[2].histogram;

    return allNegative && increasing;
}

/**
 * Checks if there is a bullish crossover (MACD line crosses above Signal line)
 * within the last `lookback` candles (default is 2, equivalent to original behavior)
 */
function checkBullishCrossover(macdData: MACDResult[], lookback: number = 2): boolean {
    if (macdData.length < lookback) return false;

    const start = Math.max(0, macdData.length - lookback - 1);
    for (let i = start; i < macdData.length - 1; i++) {
        const prev = macdData[i];
        const next = macdData[i + 1];

        if (prev.macd <= prev.signal && next.macd > next.signal) {
            return true;
        }
    }

    return false;
}

/**
 * Checks if price is forming a higher low pattern
 */
function checkHigherLow(macdData: MACDResult[]): boolean {
    // Need at least 5 data points to identify a pattern
    if (macdData.length < 5) return false;

    // Look for local minima in the price
    const prices = macdData.map(d => d.price);
    const localMinima: number[] = [];

    for (let i = 2; i < prices.length - 2; i++) {
        if (
            prices[i] < prices[i - 1] &&
            prices[i] < prices[i - 2] &&
            prices[i] < prices[i + 1] &&
            prices[i] < prices[i + 2]
        ) {
            localMinima.push(prices[i]);
        }
    }

    // Check if we have at least 2 local minima and the latest is higher than the previous
    return (
        localMinima.length >= 2 &&
        localMinima[localMinima.length - 1] > localMinima[localMinima.length - 2]
    );
}

/**
 * Checks if price is bouncing off a support level
 */
function checkSupportBounce(macdData: MACDResult[]): boolean {
    if (macdData.length < 10) return false;

    const recentData = macdData.slice(-10);
    const lowestPrice = Math.min(...recentData.map(d => d.price));
    const currentPrice = recentData[recentData.length - 1].price;
    const priceChange = (currentPrice - lowestPrice) / lowestPrice;

    return priceChange > 0.02; // 2% bounce
}

/**
 * Checks if a stock qualifies for a MACD trading setup
 * For demonstration, we'll use a simple criterion:
 * - MACD line is above signal line
 * - MACD histogram is positive and increasing
 */
export function checkMACDQualification(macdAnalysis: ReturnType<typeof getMACDAnalysis>): boolean {
    // if all the indicators are true, return true
    // Count how many indicators are true
    const indicators = [
        !!macdAnalysis?.bullishCrossover,
        !!macdAnalysis?.higherLow,
        !!macdAnalysis?.supportBounce,
        !!macdAnalysis?.waningBearishMomentum,
    ];

    // Need at least 3 out of 4 indicators to be true
    const trueCount = indicators.filter(Boolean).length;
    return trueCount >= 3;
}
