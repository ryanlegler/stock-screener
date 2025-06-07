import { ChartDataPoint } from '@/app/types/api';
import { APIClient } from './client';

/**
 * Fetches historical price data for multiple symbols
 * @param symbols - Array of stock symbols to fetch data for
 * @returns Promise<Record<string, ChartDataPoint[]>> Map of symbols to their historical data
 */
export async function getHistoricData(symbols: string[]): Promise<Record<string, ChartDataPoint[]>> {
    const data: Record<string, ChartDataPoint[]> = {};
    for (const symbol of symbols) {
        try {
            const response = await getStockData(symbol);
            data[symbol] = response;
        } catch (error) {
            console.error(`Failed to fetch data for ${symbol}:`, error);
            data[symbol] = [];
        }
    }
    return data;
}

/**
 * Fetches historical price data for a single symbol
 * @param symbol - The stock symbol to fetch data for
 * @returns Promise<ChartDataPoint[]> Array of historical price data points
 */
export async function getStockData(symbol: string): Promise<ChartDataPoint[]> {
    const response = await APIClient.getChart({
        symbol,
        interval: '1h',
        range: '7d'
    });

    if (response.error || !response.results?.length) {
        throw new Error(response.error || 'No data returned');
    }

    return response.results;
}
