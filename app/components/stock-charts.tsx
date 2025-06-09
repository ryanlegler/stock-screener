import { CandlestickChart } from './candlestick-chart';
import { Report } from '../types/report';
import { MACDIndicator } from './macd-indicator';
import { checkMACDQualification } from '../lib/indicators';
import { hydrateMACD } from '../lib/utils/calculate-macd';
import { getMACDAnalysis } from '../lib/technical-analysis';
import { MAX_CANDLES } from '../constants';

interface StockChartsProps {
    report: Report;
}

export function StockCharts({ report }: StockChartsProps) {
    // Get all symbols and their data
    const entries = Object.entries(report.data.historicalData);

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {entries.map(([symbol, chartData]) => {
                const isQualified = checkMACDQualification(chartData);
                const macdAnalysis = getMACDAnalysis(chartData);
                const macdData = hydrateMACD(chartData);
                const limitedData = macdData.slice(MAX_CANDLES);

                return (
                    <div
                        key={symbol}
                        className={`rounded-lg p-4 ${isQualified ? 'border-2 border-red-500' : 'border'}`}
                    >
                        <div className="mb-4 flex items-center justify-between">
                            <h3 className="text-lg font-semibold">{symbol}</h3>
                        </div>
                        <CandlestickChart data={limitedData} />
                        <MACDIndicator data={limitedData} />

                        <ul className="mt-2 space-y-1 text-sm">
                            <li>
                                {macdAnalysis?.bullishCrossover ? '✅' : '❌'} Bullish Crossover
                            </li>
                            <li>{macdAnalysis?.higherLow ? '✅' : '❌'} Higher Low</li>
                            <li>{macdAnalysis?.supportBounce ? '✅' : '❌'} Support Bounce</li>
                            <li>
                                {macdAnalysis?.waningBearishMomentum ? '✅' : '❌'} Waning Bearish
                                Momentum
                            </li>
                        </ul>
                    </div>
                );
            })}
        </div>
    );
}
