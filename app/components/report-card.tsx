'use client';
import { MACDChartDataPoint } from '../types/api';
import { CandlestickChart } from './candlestick-chart';
import { MACDIndicator } from './macd-indicator';
import { getMACDAnalysis } from '../lib/technical-analysis';
import { useMeasure } from '@uidotdev/usehooks';

interface ReportCardProps {
    symbol: string;
    chartData: MACDChartDataPoint[];
    isQualified: boolean;
    macdAnalysis: ReturnType<typeof getMACDAnalysis>;
}

export function ReportCard({ symbol, chartData, isQualified, macdAnalysis }: ReportCardProps) {
    const [ref, { width: containerWidth }] = useMeasure();
    const chartHeight = containerWidth ? containerWidth * 0.33 : 0;

    return (
        <div ref={ref} className="rounded-lg border border-gray-700 p-4">
            {isQualified ? (
                <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-semibold">✅ {symbol}</h3>
                </div>
            ) : (
                <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-semibold">❌ {symbol}</h3>
                </div>
            )}

            <div className="flex flex-col gap-4">
                <CandlestickChart data={chartData} chartHeight={chartHeight} />
                <MACDIndicator data={chartData} chartHeight={chartHeight} />
            </div>

            <ul className="mt-2 space-y-1 text-sm">
                <li>{macdAnalysis?.bullishCrossover ? '✅' : '❌'} Bullish Crossover</li>
                <li>{macdAnalysis?.higherLow ? '✅' : '❌'} Higher Low</li>
                <li>{macdAnalysis?.supportBounce ? '✅' : '❌'} Support Bounce</li>
                <li>{macdAnalysis?.waningBearishMomentum ? '✅' : '❌'} Waning Bearish Momentum</li>
            </ul>
        </div>
    );
}
