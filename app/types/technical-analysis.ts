import { MACDResult } from '../lib/indicators';

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
