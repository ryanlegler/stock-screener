'use client';

import { ChartCanvas, Chart } from '@react-financial-charts/core';
import { CandlestickSeries } from '@react-financial-charts/series';
import { discontinuousTimeScaleProviderBuilder } from '@react-financial-charts/scales';
import { useMeasure } from '@uidotdev/usehooks';
import { ChartDataPoint } from '@/app/types/api';

interface CandlestickChartProps {
    data: ChartDataPoint[];
    chartHeight?: number;
}

export function CandlestickChart({ data, chartHeight }: CandlestickChartProps) {
    const [ref, { width: containerWidth, height: containerHeight }] = useMeasure();
    if (!data?.length) {
        return <div>No data available</div>;
    }

    // Convert timestamps to Date objects
    const dataWithDates = data.map(d => ({
        ...d,
        date: new Date(d.date),
    }));

    const scaleProvider = discontinuousTimeScaleProviderBuilder().inputDateAccessor(
        (d: ChartDataPoint & { date: Date }) => d.date
    );

    const { data: scaledData, xScale, xAccessor, displayXAccessor } = scaleProvider(dataWithDates);

    return (
        <div ref={ref} className="w-full" style={{ height: chartHeight }}>
            {containerWidth && containerHeight && (
                <ChartCanvas
                    margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    width={containerWidth}
                    height={containerHeight}
                    ratio={window.devicePixelRatio}
                    seriesName="Candlestick Chart"
                    data={scaledData}
                    xScale={xScale}
                    xAccessor={xAccessor}
                    displayXAccessor={displayXAccessor}
                >
                    <Chart id={1} yExtents={(d: ChartDataPoint) => [d.high || 0, d.low || 0]}>
                        <CandlestickSeries
                        // widthRatio={0.8}
                        // fill={(d) => d.close > d.open ? "var(--chart-2)" : "var(--chart-1)"}
                        // stroke={(d) => d.close > d.open ? "var(--chart-2)" : "var(--chart-1)"}
                        />
                    </Chart>
                </ChartCanvas>
            )}
        </div>
    );
}
