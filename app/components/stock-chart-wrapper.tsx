'use client';

import { ChartCanvas, Chart } from '@react-financial-charts/core';
import { CandlestickSeries } from '@react-financial-charts/series';
import { XAxis, YAxis } from '@react-financial-charts/axes';
import { discontinuousTimeScaleProviderBuilder } from '@react-financial-charts/scales';
import { ChartDataPoint } from '../types/api';

interface StockChartProps {
    data: ChartDataPoint[];
    width?: number;
    height?: number;
}

export function StockChartWrapper({ data, width = 800, height = 400 }: StockChartProps) {
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
        <ChartCanvas
            width={width}
            height={height}
            ratio={1}
            seriesName="Stock Chart"
            data={scaledData}
            xScale={xScale}
            xAccessor={xAccessor}
            displayXAccessor={displayXAccessor}
        >
            <Chart id={1} yExtents={(d: ChartDataPoint) => [d.high || 0, d.low || 0]}>
                <CandlestickSeries />
                <XAxis />
                <YAxis />
            </Chart>
        </ChartCanvas>
    );
}
