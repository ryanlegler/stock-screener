'use client';
import React from 'react';
import {
    ChartCanvas,
    Chart,
    CandlestickSeries,
    XAxis,
    YAxis,
    discontinuousTimeScaleProvider,
    MACDSeries,
    MACDTooltip,
    macd,
} from 'react-financial-charts';
import { ChartDataPoint } from '../types/api';

export function ChartComponent({
    data,
    height,
    width,
}: {
    data: ChartDataPoint[];
    height?: number;
    width?: number;
}) {
    if (!data || data.length === 0) {
        return <div>No chart data available</div>;
    }

    const scaleProvider = discontinuousTimeScaleProvider.inputDateAccessor(d => d.date);
    const { data: chartData, xScale, xAccessor, displayXAccessor } = scaleProvider(data);

    if (!chartData || chartData.length === 0) {
        return <div>Invalid chart data</div>;
    }

    const xExtents = [xAccessor(chartData[0]), xAccessor(chartData[chartData.length - 1])];

    // Calculate MACD
    type StockData = ChartDataPoint & {
        macd?: {
            macd: number;
            signal: number;
            divergence: number;
        };
    };

    const macdCalculator = macd()
        .options({
            fast: 12,
            slow: 26,
            signal: 9,
        })
        .merge((d: StockData, macdData: { macd: number; signal: number; divergence: number }) => ({
            ...d,
            macd: macdData,
        }))
        .accessor((d: StockData) => d.macd);

    const calculatedData = macdCalculator(chartData);

    return (
        <ChartCanvas
            height={height || 600}
            width={width || 800}
            ratio={3}
            margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
            seriesName="Data"
            data={calculatedData}
            xScale={xScale}
            xAccessor={xAccessor}
            displayXAccessor={displayXAccessor}
            xExtents={xExtents}
        >
            <Chart id={1} height={400} yExtents={d => [d.high, d.low]}>
                <XAxis />
                <YAxis />
                <CandlestickSeries />
            </Chart>
            <Chart id={2} height={150} yExtents={d => d.macd} origin={(w, h) => [0, h - 150]}>
                <XAxis />
                <YAxis />
                <MACDSeries yAccessor={d => d.macd} />
                <MACDTooltip
                    origin={[-38, 15]}
                    yAccessor={d => d.macd}
                    options={{
                        fast: 12,
                        slow: 26,
                        signal: 9,
                    }}
                    appearance={{
                        strokeStyle: {
                            macd: '#000000',
                            signal: '#000000',
                        },
                        fillStyle: {
                            divergence: '#000000',
                        },
                    }}
                    labelFill="#000000"
                    fontSize={12}
                />
            </Chart>
        </ChartCanvas>
    );
}
