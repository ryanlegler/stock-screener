import { MACDResult } from '@/app/lib/indicators';

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
