import { ChartDataPoint } from '../types/api';
import { StockChartWrapper } from './stock-chart-wrapper';

import { ScreenerResult } from '../types/screener';
import { MACDIndicator } from './macd-indicator';

interface StockChartsProps {
    data: ScreenerResult & { historicalData: Record<string, ChartDataPoint[]> };
}

export function StockCharts({ data }: StockChartsProps) {
    return (
        <div className="space-y-8">
            {Object.entries(data.historicalData).map(([symbol, chartData]) => (
                <div key={symbol} className="rounded-lg border p-4">
                    <h3 className="mb-4 text-lg font-semibold">{symbol}</h3>
                    <MACDIndicator data={chartData} />
                    {/* <StockChartWrapper data={chartData} width={800} height={400} /> */}
                </div>
            ))}
        </div>
    );
}
