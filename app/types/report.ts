import { ScreenerResult } from '@/app/types/screener';
import { ChartDataPoint } from '@/app/types/api';

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
