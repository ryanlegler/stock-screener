'use client';
import React from 'react';
import {
    ChartCanvas,
    Chart,
    discontinuousTimeScaleProvider,
    MACDSeries,
    macd,
    XAxis,
    YAxis,
    MouseCoordinateX,
    MouseCoordinateY,
    CrossHairCursor,
} from 'react-financial-charts';
import { ChartDataPoint } from '../types/api';

// Calculate MACD
type StockData = ChartDataPoint & {
    macd?: {
        macd: number;
        signal: number;
        histogram: number;
    };
};

export function MACDIndicator({
    data: rawData,
    height: heightInit,
    width,
}: {
    data: ChartDataPoint[];
    height?: number;
    width?: number;
}) {
    console.log('🚀 ~ data length:', rawData?.length);
    // Convert timestamps to Date objects
    const data = rawData.map(d => ({
        ...d,
        date: new Date(d.date),
        close: d.close, // Explicitly map close price
    }));
    if (!data || data.length < 26) { // Need at least 26 points for slow EMA
        return <div>Need at least 26 data points for MACD calculation. Current: {data?.length}</div>;
    }

    const scaleProvider = discontinuousTimeScaleProvider.inputDateAccessor(d => d.date);
    const { data: chartData, xScale, xAccessor, displayXAccessor } = scaleProvider(data);

    if (!chartData || chartData.length === 0) {
        return <div>Invalid MACD data</div>;
    }

    const xExtents = [xAccessor(chartData[0]), xAccessor(chartData[chartData.length - 1])];

    const macdCalculator = macd()
        .options({
            fast: 12,
            slow: 26,
            signal: 9,
            sourcePath: 'close',
        })
        .merge((d: StockData, macdData: { macd: number; signal: number; histogram: number }) => {
            d.macd = macdData;
            return d;
        })
        .accessor((d: StockData) => d.macd);

    const calculatedData = macdCalculator(chartData);
    console.log('🚀 ~ calculatedData:', calculatedData?.[0]);
    const height = heightInit || 150;
    return (
        <ChartCanvas
            height={height}
            width={width || 400}
            ratio={3} // what does this do?
            seriesName="Data"
            data={calculatedData}
            xScale={xScale}
            xAccessor={xAccessor}
            displayXAccessor={displayXAccessor}
            xExtents={xExtents}
        >
            <Chart
                id={2}
                height={height || 150}
                yExtents={d => d.macd}
                origin={(w, h) => [0, h - height]}
            >
                <XAxis axisAt="bottom" orient="bottom" />
                <YAxis axisAt="right" orient="right" ticks={5} />

                <MouseCoordinateX
                    at="bottom"
                    orient="bottom"
                    displayFormat={d => new Date(d).toLocaleDateString()}
                />
                <MouseCoordinateY
                    at="right"
                    orient="right"
                    displayFormat={value => value.toFixed(2)}
                />

                <MACDSeries
                    clip={true}
                    fillStyle={{
                        divergence: '#26a69a',
                    }}
                    strokeStyle={{
                        macd: '#FF0000',
                        signal: '#00F900',
                        zero: '#000000',
                    }}
                    widthRatio={0.8}
                    yAccessor={d => d.macd}
                />

                <CrossHairCursor />
            </Chart>
        </ChartCanvas>
    );
}
