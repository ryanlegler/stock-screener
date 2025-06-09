'use client';
import React from 'react';
import {
    ChartCanvas,
    Chart,
    discontinuousTimeScaleProvider,
    MACDSeries,
    XAxis,
    YAxis,
    MouseCoordinateX,
    MouseCoordinateY,
    CrossHairCursor,
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
    try {
        const scaleProvider = discontinuousTimeScaleProvider.inputDateAccessor(d => d.date);
        const { data: chartData, xScale, xAccessor, displayXAccessor } = scaleProvider(data);

        if (!chartData || chartData.length === 0) {
            return <div>Invalid MACD data</div>;
        }

        const xExtents = [xAccessor(chartData[0]), xAccessor(chartData[chartData.length - 1])];
        const height = heightInit || 150;
        return (
            <ChartCanvas
                height={height}
                width={width || 400}
                ratio={3} // what does this do?
                seriesName="Data"
                data={chartData}
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
    } catch (error) {
        if (error instanceof Error) {
            return <div>Error: {error.message}</div>;
        }
        return <div>An unexpected error occurred</div>;
    }
}
