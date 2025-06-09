'use client';

import { ChartCanvas, Chart } from '@react-financial-charts/core';
import { CandlestickSeries } from '@react-financial-charts/series';
import { XAxis, YAxis } from '@react-financial-charts/axes';
import { discontinuousTimeScaleProviderBuilder } from '@react-financial-charts/scales';
import { ChartDataPoint } from '../types/api';
import { useMeasure } from '@uidotdev/usehooks';

interface CandlestickChartProps {
    data: ChartDataPoint[];
}

export function CandlestickChart({ data }: CandlestickChartProps) {
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
        <div ref={ref} className="h-[150px]">
            {containerWidth && containerHeight && (
                <ChartCanvas
                    width={containerWidth}
                    height={containerHeight}
                    ratio={1}
                    seriesName="Candlestick Chart"
                    data={scaledData}
                    xScale={xScale}
                    xAccessor={xAccessor}
                    displayXAccessor={displayXAccessor}
                >
                    <Chart id={1} yExtents={(d: ChartDataPoint) => [d.high || 0, d.low || 0]}>
                        <CandlestickSeries />
                    </Chart>
                </ChartCanvas>
            )}
        </div>
    );
}
