'use client';
import { MACDChartDataPoint } from '@/app/types/api';
import { CandlestickChart } from '@/components/candlestick-chart';
import { MACDIndicator } from '@/components/macd-indicator';
import { getMACDAnalysis } from '@/app/lib/technical-analysis';
import { useMeasure } from '@uidotdev/usehooks';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
            <Tabs defaultValue={isQualified ? "qualified" : "not-qualified"} className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="qualified">Qualified</TabsTrigger>
                    <TabsTrigger value="not-qualified">Not Qualified</TabsTrigger>
                </TabsList>
                <TabsContent value="qualified">
                    <div className="mb-4 flex items-center justify-between">
                        <h3 className="text-lg font-semibold">{isQualified ? '✅' : ''} {symbol}</h3>
                    </div>
                </TabsContent>
                <TabsContent value="not-qualified">
                    <div className="mb-4 flex items-center justify-between">
                        <h3 className="text-lg font-semibold">{!isQualified ? '❌' : ''} {symbol}</h3>
                    </div>
                </TabsContent>
            </Tabs>

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
