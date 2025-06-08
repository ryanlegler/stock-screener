import { ChartDataPoint } from '@/app/types/api';
import { isWithinMarketHours } from './market-hours';

/**
 * Filters chart data to only include points during market hours
 * @param data Array of chart data points to filter
 * @returns Filtered array containing only market hours data points
 */
export function filterMarketData(data: ChartDataPoint[]): ChartDataPoint[] {
    if (!Array.isArray(data)) {
        return [];
    }

    return data.filter(point => {
        const date = new Date(point.date);
        const timestamp = Math.floor(date.getTime() / 1000);
        return isWithinMarketHours(timestamp);
    });
}
