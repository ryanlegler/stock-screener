import { StockChartWrapper } from './stock-chart-wrapper';
import { Report } from '../types/report';
import { MACDIndicator } from './macd-indicator';
import { checkMACDQualification } from '../lib/indicators';

interface StockChartsProps {
    report: Report;
}

export function StockCharts({ report }: StockChartsProps) {
    // Get all symbols and their data
    const entries = Object.entries(report.data.historicalData);
    console.log('Total stocks:', entries.length);

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {entries.map(([symbol, chartData]) => {
                // Check if this is the last symbol and if it qualifies

                const isQualified = checkMACDQualification(chartData);

                // how many data points for each chart
                const dataPoints = chartData.length;
                console.log('🚀 ~ {entries.map ~ dataPoints:', dataPoints);

                return (
                    <div
                        key={symbol}
                        className={`rounded-lg p-4 ${isQualified ? 'border-2 border-red-500' : 'border'}`}
                    >
                        <div className="mb-4 flex items-center justify-between">
                            <h3 className="text-lg font-semibold">{symbol}</h3>
                        </div>
                        <StockChartWrapper data={chartData} width={400} height={200} />
                        <MACDIndicator data={chartData} />
                    </div>
                );
            })}
        </div>
    );
}
