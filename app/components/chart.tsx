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

// export { default as algo } from "./algorithm";
// export { default as ema } from "./ema";
// export { default as sma } from "./sma";
// export { default as wma } from "./wma";
// export { default as tma } from "./tma";
// export { default as bollingerBand } from "./bollingerBand";
// export { default as heikinAshi } from "./heikinAshi";
// export { default as kagi } from "./kagi";
// export { default as pointAndFigure } from "./pointAndFigure";
// export { default as renko } from "./renko";
// export { default as macd } from "./macd";
// export { default as rsi } from "./rsi";
// export { default as atr } from "./atr";
// export { default as stochasticOscillator } from "./stochasticOscillator";
// export { default as forceIndex } from "./forceIndex";
// export { default as sar } from "./sar";
// export { default as elderRay } from "./elderRay";
// export { default as change } from "./change";
// export { default as elderImpulse } from "./elderImpulse";
// export { default as compare } from "./compare";
// import * as defaultOptionsForComputation from "../calculator/defaultOptionsForComputation";
// import * as defaultOptionsForAppearance from "./defaultOptionsForAppearance";
// export { defaultOptionsForComputation, defaultOptionsForAppearance };

// export { ChartCanvas, ChartCanvasContext } from "./ChartCanvas";
// export * from "./Chart";
// export * from "./GenericChartComponent";
// export * from "./GenericComponent";
// export * from "./MoreProps";
// export * from "./utils";
// export * from "./zoom";

// export * from "./EdgeIndicator";
// export * from "./CrossHairCursor";
// export * from "./CurrentCoordinate";
// export * from "./Cursor";
// export * from "./MouseCoordinateX";
// export { MouseCoordinateXV2 } from "./MouseCoordinateXV2";
// export { MouseCoordinateY } from "./MouseCoordinateY";
// export * from "./PriceCoordinate";

// export * from "./Annotate";
// export * from "./BarAnnotation";
// export * from "./LabelAnnotation";
// export * from "./SvgPathAnnotation";
// export * from "./Label";

// export * from "./Axis";
// export * from "./XAxis";
// export * from "./YAxis";

// export { TrendLine } from "./TrendLine";
// export { FibonacciRetracement } from "./FibonacciRetracement";
// export { EquidistantChannel } from "./EquidistantChannel";
// export { StandardDeviationChannel } from "./StandardDeviationChannel";
// export { GannFan } from "./GannFan";
// export { ClickCallback } from "./ClickCallback";
// export { Brush } from "./Brush";
// export { InteractiveText } from "./InteractiveText";
// export { InteractiveYCoordinate } from "./InteractiveYCoordinate";
// export { DrawingObjectSelector } from "./DrawingObjectSelector";
// export { ZoomButtons } from "./ZoomButtons";

const initialData = [
    { date: new Date(2023, 0, 1), open: 100.0, high: 105.0, low: 98.0, close: 103.0 },
    { date: new Date(2023, 0, 2), open: 103.0, high: 107.0, low: 101.0, close: 106.0 },
    { date: new Date(2023, 0, 3), open: 106.0, high: 110.0, low: 104.0, close: 108.0 },
    { date: new Date(2023, 0, 4), open: 108.0, high: 112.5, low: 107.25, close: 111.75 },
    { date: new Date(2023, 0, 5), open: 111.75, high: 115.25, low: 110.5, close: 113.25 },
    { date: new Date(2023, 0, 6), open: 113.25, high: 114.0, low: 109.75, close: 110.5 },
    { date: new Date(2023, 0, 7), open: 110.5, high: 111.75, low: 107.0, close: 109.25 },
    { date: new Date(2023, 0, 8), open: 109.25, high: 113.5, low: 108.75, close: 112.75 },
    { date: new Date(2023, 0, 9), open: 112.75, high: 116.25, low: 112.0, close: 115.5 },
    { date: new Date(2023, 0, 10), open: 115.5, high: 117.0, low: 114.25, close: 116.75 },
    { date: new Date(2023, 0, 11), open: 116.75, high: 118.5, low: 115.0, close: 117.25 },
    { date: new Date(2023, 0, 12), open: 117.25, high: 119.75, low: 116.5, close: 119.0 },
    { date: new Date(2023, 0, 13), open: 119.0, high: 120.25, low: 116.75, close: 117.5 },
    { date: new Date(2023, 0, 14), open: 117.5, high: 118.75, low: 115.25, close: 116.0 },
    { date: new Date(2023, 0, 15), open: 116.0, high: 116.5, low: 112.75, close: 113.25 },
    { date: new Date(2023, 0, 16), open: 113.25, high: 115.75, low: 112.5, close: 115.0 },
    { date: new Date(2023, 0, 17), open: 115.0, high: 118.25, low: 114.5, close: 117.75 },
    { date: new Date(2023, 0, 18), open: 117.75, high: 121.0, low: 117.0, close: 120.5 },
    { date: new Date(2023, 0, 19), open: 120.5, high: 122.75, low: 119.75, close: 122.0 },
    { date: new Date(2023, 0, 20), open: 122.0, high: 123.5, low: 120.25, close: 121.75 },
    { date: new Date(2023, 0, 21), open: 121.75, high: 124.25, low: 121.0, close: 123.0 },
    { date: new Date(2023, 0, 22), open: 123.0, high: 125.5, low: 122.75, close: 124.25 },
    { date: new Date(2023, 0, 23), open: 124.25, high: 126.75, low: 123.5, close: 125.0 },
    { date: new Date(2023, 0, 24), open: 125.0, high: 127.25, low: 124.75, close: 126.5 },
    { date: new Date(2023, 0, 25), open: 126.5, high: 128.75, low: 125.25, close: 127.25 },
    { date: new Date(2023, 0, 26), open: 127.25, high: 129.5, low: 126.75, close: 128.0 },
    { date: new Date(2023, 0, 27), open: 128.0, high: 129.75, low: 126.25, close: 127.5 },
    { date: new Date(2023, 0, 28), open: 127.5, high: 128.25, low: 125.75, close: 126.75 },
    { date: new Date(2023, 0, 29), open: 126.75, high: 127.5, low: 124.25, close: 125.75 },
];

export function ChartComponent() {
    const scaleProvider = discontinuousTimeScaleProvider.inputDateAccessor(d => d.date);
    const { data: chartData, xScale, xAccessor, displayXAccessor } = scaleProvider(initialData);
    const xExtents = [xAccessor(chartData[0]), xAccessor(chartData[chartData.length - 1])];

    // Calculate MACD
    interface StockData {
        date: Date;
        open: number;
        high: number;
        low: number;
        close: number;
        macd?: {
            macd: number;
            signal: number;
            divergence: number;
        };
    }

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
            height={600}
            width={800}
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
