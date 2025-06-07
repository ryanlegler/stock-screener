'use client';
import React from 'react';
import {
    ChartCanvas,
    Chart,
    discontinuousTimeScaleProvider,
    MACDSeries,
    macd,
} from 'react-financial-charts';
import { ChartDataPoint } from '../types/api';

export function MACDIndicator({
    data,
    height: heightInit,
    width,
}: {
    data: ChartDataPoint[];
    height?: number;
    width?: number;
}) {
    const scaleProvider = discontinuousTimeScaleProvider.inputDateAccessor(d => d.date);
    const { data: chartData, xScale, xAccessor, displayXAccessor } = scaleProvider(data);
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
                <MACDSeries
                    clip={true}
                    fillStyle={{
                        divergence: '#26a69a',
                    }}
                    strokeStyle={{
                        macd: 'magenta',
                        signal: 'green',
                        zero: 'black',
                    }}
                    widthRatio={0.8} // thisckness of the bar
                    yAccessor={d => d.macd}
                />
            </Chart>
        </ChartCanvas>
    );
}
