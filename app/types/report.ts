import { ScreenerResult } from './screener';
import { ChartDataPoint } from './api';

export interface Report {
    id: string;
    generatedAt: string;
    data: ScreenerResult & {
        historicalData: Record<string, ChartDataPoint[]>;
    };
}

export interface ReportSummary {
    id: string;
    generatedAt: string;
}
