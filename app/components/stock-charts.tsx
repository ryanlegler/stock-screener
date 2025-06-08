import { ChartDataPoint } from '../types/api';
import { StockChartWrapper } from './stock-chart-wrapper';

import { ScreenerResult } from '../types/screener';

interface StockChartsProps {
    data: ScreenerResult & { historicalData: Record<string, ChartDataPoint[]>; };
}

export function StockCharts({ data }: StockChartsProps) {
    return (
        <div className="space-y-8">
            {Object.entries(data.historicalData).map(([symbol, chartData]) => (
                <div key={symbol} className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-4">{symbol}</h3>
                    <StockChartWrapper data={chartData} width={800} height={400} />
                </div>
            ))}
        </div>
    );
}
