'use client';

import { ChartDataPoint } from '../types/api';
import { ChartCanvas, Chart } from '@react-financial-charts/core';
import { CandlestickSeries } from '@react-financial-charts/series';
import { XAxis, YAxis } from '@react-financial-charts/axes';
import { discontinuousTimeScaleProviderBuilder } from '@react-financial-charts/scales';
import { withSize } from 'react-financial-charts';
import { Component } from 'react';

interface StockChartProps {
    data: ChartDataPoint[];
    width?: number;
    height?: number;
    ratio?: number;
}

interface WithSizeProps {
    width: number;
    height: number;
    ratio: number;
}

class StockChartComponent extends Component<StockChartProps & WithSizeProps> {
    render() {
        const { data, width = 800, height = 400, ratio = 1 } = this.props;

        if (!data?.length) {
            return <div>No data available</div>;
        }

        const margin = { left: 50, right: 50, top: 20, bottom: 30 };
        const xScaleProvider = discontinuousTimeScaleProviderBuilder().inputDateAccessor(
            (d: ChartDataPoint) => d.date
        );
        const { data: chartData, xScale, xAccessor, displayXAccessor } = xScaleProvider(data);

        return (
            <ChartCanvas
                height={height}
                ratio={ratio}
                width={width}
                margin={margin}
                data={chartData}
                xScale={xScale}
                xAccessor={xAccessor}
                displayXAccessor={displayXAccessor}
                seriesName="Stock"
            >
                <Chart id={1} yExtents={(d: ChartDataPoint) => [d.high || 0, d.low || 0]}>
                    <XAxis />
                    <YAxis />
                    <CandlestickSeries />
                </Chart>
            </ChartCanvas>
        );
    }
}

export const StockChart = withSize({ style: { minHeight: 400 } })(StockChartComponent);
