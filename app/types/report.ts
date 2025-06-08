import { ScreenerResult } from './screener';
import { ChartDataPoint } from './api';

export interface Report {
    generatedAt: string;
    data: ScreenerResult & {
        historicalData: Record<string, ChartDataPoint[]>;
    };
}
