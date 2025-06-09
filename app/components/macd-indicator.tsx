'use client';
import React from 'react';
import {
    ChartCanvas,
    Chart,
    discontinuousTimeScaleProvider,
    MACDSeries,
    CrossHairCursor,
} from 'react-financial-charts';
import { ChartDataPoint } from '../types/api';

import { useMeasure } from '@uidotdev/usehooks';

export function MACDIndicator({ data }: { data: ChartDataPoint[] }) {
    const [ref, { width: containerWidth, height: containerHeight }] = useMeasure();
    try {
        const scaleProvider = discontinuousTimeScaleProvider.inputDateAccessor(d => d.date);
        const { data: chartData, xScale, xAccessor, displayXAccessor } = scaleProvider(data);

        if (!chartData || chartData.length === 0) {
            return <div>Invalid MACD data</div>;
        }

        const xExtents = [xAccessor(chartData[0]), xAccessor(chartData[chartData.length - 1])];

        return (
            <div ref={ref} className="h-[150px]">
                {containerHeight && containerWidth && (
                    <ChartCanvas
                        height={containerHeight}
                        width={containerWidth}
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
                            height={containerHeight}
                            yExtents={d => d.macd}
                            origin={(w, h) => [0, h - containerHeight]}
                        >
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
                )}
            </div>
        );
    } catch (error) {
        if (error instanceof Error) {
            return <div>Error: {error.message}</div>;
        }
        return <div>An unexpected error occurred</div>;
    }
}
