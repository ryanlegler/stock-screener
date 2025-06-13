'use client';
import { MACDChartDataPoint } from '@/app/types/api';
import { CandlestickChart } from '@/components/candlestick-chart';
import { MACDIndicator } from '@/components/macd-indicator';
import { getMACDAnalysis } from '@/app/lib/technical-analysis';
import { useMeasure } from '@uidotdev/usehooks';
import { useState } from 'react';
import { flagSymbolInReport } from '@/app/lib/api/flag-symbol-in-report';
import { unflagSymbolInReport } from '@/app/lib/api/un-flag-symbol-in-report';
import { getFlaggedReport } from '@/app/lib/api/get-flagged-report';

interface ReportCardProps {
    symbol: string;
    chartData: MACDChartDataPoint[];
    isQualified: boolean;
    macdAnalysis: ReturnType<typeof getMACDAnalysis>;
    reportId: string;
}

export function ReportCard({
    symbol,
    chartData,
    isQualified,
    macdAnalysis,
    reportId,
}: ReportCardProps) {
    const [ref, { width: containerWidth }] = useMeasure();
    const chartHeight = containerWidth ? containerWidth * 0.33 : 0;

    const [isDisputed, setIsDisputed] = useState(false);
    const handleFlagClick = () => {
        setIsDisputed(!isDisputed);
        if (isDisputed) {
            unflagSymbolInReport(symbol, reportId);
        } else {
            flagSymbolInReport(reportId, symbol);
        }
    };

    return (
        <div ref={ref} className="rounded-lg border border-gray-700 p-4">
            <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold">
                    {isQualified ? '✅' : '❌'} {symbol}
                </h3>

                {isDisputed ? (
                    <button
                        onClick={handleFlagClick}
                        className="rounded-lg border border-yellow-500 px-2 py-1 text-lg"
                        aria-label="Disputed"
                    >
                        🔖
                    </button>
                ) : (
                    <button
                        onClick={handleFlagClick}
                        className="rounded-lg border border-gray-500 px-2 py-1 text-lg"
                        aria-label="Disputed"
                    >
                        🔖
                    </button>
                )}
            </div>

            <div className="flex flex-col gap-4">
                <CandlestickChart data={chartData} chartHeight={chartHeight * 0.5} />
                <MACDIndicator data={chartData} chartHeight={chartHeight * 0.9} />
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
