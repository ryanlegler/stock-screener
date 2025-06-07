/**
 * Technical Indicators Utility Functions
 *
 * This file contains utility functions for calculating various technical indicators
 * used in stock analysis, including MACD, RSI, and others.
 */

import { MACDData, ChartDataPoint } from '../types/api';

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
 * @param historicalData - Array of historical price data points
 * @param fastPeriod - Period for the fast EMA (default: 12)
 * @param slowPeriod - Period for the slow EMA (default: 26)
 * @param signalPeriod - Period for the signal line EMA (default: 9)
 * @returns Array of MACD data points
 */
export function calculateMACD(
    chartData: ChartDataPoint[],
    fastPeriod: number = 12,
    slowPeriod: number = 26,
    signalPeriod: number = 9
): MACDData[] {
    if (chartData.length < slowPeriod + signalPeriod) {
        console.warn('Insufficient data for MACD calculation');
        return [];
    }

    // Extract closing prices
    const closingPrices = chartData.map(data => data.close);

    // Calculate fast and slow EMAs
    const fastEMA = calculateEMA(closingPrices, fastPeriod);
    const slowEMA = calculateEMA(closingPrices, slowPeriod);

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
    const result: MACDData[] = [];

    // Start index for the final dataset
    const dataStartIdx = slowPeriod + signalPeriod - 2;

    for (let i = 0; i < histogram.length; i++) {
        const dataIdx = i + dataStartIdx;
        if (dataIdx < chartData.length) {
            result.push({
                date: chartData[dataIdx].date,
                macdLine: macdLine[i + signalPeriod - 1],
                signalLine: signalLine[i],
                histogram: histogram[i],
                price: chartData[dataIdx].close,
            });
        }
    }

    return result;
}

/**
 * Analyzes MACD data to identify bullish signals
 *
 * @param macdData - Array of MACD data points
 * @returns Object containing analysis results
 */
export function analyzeMACD(macdData: MACDData[]) {
    if (macdData.length < 5) {
        return {
            waningBearishMomentum: false,
            bullishCrossover: false,
            higherLow: false,
            supportBounce: false,
        };
    }

    // Check for decreasing red histogram bars (waning bearish momentum)
    const waningBearishMomentum = checkWaningBearishMomentum(macdData);

    // Check for MACD line crossing above the Signal line (bullish crossover)
    const bullishCrossover = checkBullishCrossover(macdData);

    // Check for price forming a higher low
    const higherLow = checkHigherLow(macdData);

    // Check for price bouncing off support level
    const supportBounce = checkSupportBounce(macdData);

    return {
        waningBearishMomentum,
        bullishCrossover,
        higherLow,
        supportBounce,
    };
}

/**
 * Checks if there is waning bearish momentum (decreasing red histogram bars)
 */
function checkWaningBearishMomentum(macdData: MACDData[]): boolean {
    // Look at the last 3-5 bars
    const recentBars = macdData.slice(-5);

    // Check if we have negative histogram bars that are becoming less negative
    let consecutiveWaning = 0;
    for (let i = 1; i < recentBars.length; i++) {
        const current = recentBars[i].histogram;
        const previous = recentBars[i - 1].histogram;

        // Both bars are negative (red) and current is less negative than previous
        if (current < 0 && previous < 0 && current > previous) {
            consecutiveWaning++;
        } else {
            consecutiveWaning = 0;
        }
    }

    // Return true if we have at least 2 consecutive waning red bars
    return consecutiveWaning >= 2;
}

/**
 * Checks if there is a bullish crossover (MACD line crosses above Signal line)
 */
function checkBullishCrossover(macdData: MACDData[]): boolean {
    // Need at least 2 data points to check for a crossover
    if (macdData.length < 2) return false;

    const current = macdData[macdData.length - 1];
    const previous = macdData[macdData.length - 2];

    // MACD line was below signal line and is now above it
    return previous.macdLine < previous.signalLine && current.macdLine > current.signalLine;
}

/**
 * Checks if price is forming a higher low pattern
 */
function checkHigherLow(macdData: MACDData[]): boolean {
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
function checkSupportBounce(macdData: MACDData[]): boolean {
    // Need at least 10 data points to identify support levels
    if (macdData.length < 10) return false;

    const prices = macdData.map(d => d.price);

    // Simple support level detection (more sophisticated methods would use more data)
    // Find the lowest price in the first half of the data
    const firstHalf = prices.slice(0, Math.floor(prices.length / 2));
    const supportLevel = Math.min(...firstHalf);

    // Check if price approached support level (within 2%) and then bounced up
    const recentPrices = prices.slice(-5);
    const approachedSupport = recentPrices.some(p => p <= supportLevel * 1.02);

    // Check if price is now moving up after approaching support
    const isMovingUp =
        recentPrices[recentPrices.length - 1] > recentPrices[recentPrices.length - 3];

    return approachedSupport && isMovingUp;
}
