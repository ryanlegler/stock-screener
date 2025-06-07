'use client';

import { useEffect, useState } from 'react';
import { RenderStockScreener } from './render-stock-screener';
import { getLatestReport, isReportStale } from '../lib/reports';
import { Result } from '../types';
import { ChartDataPoint } from '../types/api';
import { ChartComponent } from './chart';
import { MACDIndicator } from './macd-indicator';

export function StockScreener() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<Result | null>(null);
    const [generating, setGenerating] = useState(false);
    const [historicData, setHistoricData] = useState<Record<string, ChartDataPoint[]>>({});

    async function generateReport() {
        setGenerating(true);
        try {
            const response = await fetch('/api/reports/generate', {
                method: 'POST',
            });
            const result = await response.json();
            if (!result.success) {
                throw new Error(result.error || 'Failed to generate report');
            }
            setData(result.report.data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to generate report');
        } finally {
            setGenerating(false);
        }
    }

    useEffect(() => {
        async function loadReport() {
            try {
                const report = await getLatestReport();
                if (!report) {
                    await generateReport();
                    return;
                }

                if (isReportStale(report.generatedAt)) {
                    await generateReport();
                    return;
                }

                setData(report.data);

                // Get historical data for top 3 symbols
                const top3Symbols = report.data.quotes
                    .sort((a, b) => (b.marketCap || 0) - (a.marketCap || 0))
                    .slice(0, 3)
                    .map(quote => quote.symbol);

                console.log('Fetching historical data for symbols:', top3Symbols);
                try {
                    const response = await fetch(
                        `/api/stock/historic?symbols=${top3Symbols.join(',')}`
                    );
                    const result = await response.json();
                    console.log('🚀 ~ loadReport ~ result:', JSON.stringify(result.data, null, 2));

                    if (!result.success) {
                        throw new Error(result.error || 'Failed to fetch historical data');
                    }

                    // Transform date strings to Date objects for each symbol's data
                    const transformedData = Object.fromEntries(
                        Object.entries(result.data as Record<string, ChartDataPoint[]>).map(
                            ([symbol, dataPoints]) => [
                                symbol,
                                dataPoints.map(point => ({
                                    ...point,
                                    date: new Date(point.date),
                                })),
                            ]
                        )
                    );
                    console.log('Historical data result:', transformedData);
                    setHistoricData(transformedData);
                } catch (historyError) {
                    console.error('Failed to fetch historical data:', historyError);
                    // Don't set error state, just log it since this is non-critical
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load report');
            } finally {
                setLoading(false);
            }
        }

        loadReport();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return (
            <div>
                <div className="text-red-500">{error}</div>
                <button
                    onClick={generateReport}
                    disabled={generating}
                    className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:bg-gray-400"
                >
                    {generating ? 'Generating...' : 'Retry'}
                </button>
            </div>
        );
    }

    return (
        <div>
            <div className="mb-4 flex items-center justify-between">
                <button
                    onClick={generateReport}
                    disabled={generating}
                    className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:bg-gray-400"
                >
                    {generating ? 'Generating...' : 'Generate New Report'}
                </button>
            </div>

            {data && (
                <div className="mb-4 rounded-lg bg-gray-50 p-4">
                    <h3 className="mb-2 text-lg font-semibold">Top 3 Symbols by Market Cap</h3>
                    <div className="mb-4 flex gap-4">
                        {data.quotes
                            .sort((a, b) => (b.marketCap || 0) - (a.marketCap || 0))
                            .slice(0, 3)
                            .map(quote => {
                                const symbol = quote.symbol;
                                const chartData = historicData[symbol] || [];
                                const latestHigh = chartData[chartData.length - 1]?.high;
                                const earliestHigh = chartData[0]?.high;
                                const highChange =
                                    latestHigh && earliestHigh
                                        ? (
                                              ((latestHigh - earliestHigh) / earliestHigh) *
                                              100
                                          ).toFixed(2)
                                        : null;

                                return (
                                    <div
                                        key={symbol}
                                        className="flex-1 cursor-pointer rounded-lg border border-gray-200 bg-white p-4 transition-colors hover:border-blue-500"
                                    >
                                        <div className="text-xl font-bold text-blue-600">
                                            {symbol}
                                        </div>
                                        <div className="mb-2 text-sm text-gray-600">
                                            {quote.shortName}
                                        </div>
                                        <div className="text-lg font-semibold">
                                            ${quote.regularMarketPrice?.toFixed(2)}
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            Market Cap: ${(quote.marketCap / 1e9).toFixed(2)}B
                                        </div>
                                        {chartData.length > 0 && (
                                            <div className="mt-2 border-t border-gray-100 pt-2">
                                                <div className="text-sm text-gray-600">
                                                    7D High Change:
                                                    <span
                                                        className={
                                                            highChange && Number(highChange) > 0
                                                                ? 'text-green-600'
                                                                : 'text-red-600'
                                                        }
                                                    >
                                                        {highChange ? `${highChange}%` : 'N/A'}
                                                    </span>
                                                </div>
                                                <div className="mt-1 h-[250px] border border-gray-200 text-xs text-gray-500">
                                                    <MACDIndicator
                                                        data={chartData}
                                                        height={250}
                                                        width={400}
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                    </div>

                    <h3 className="mb-2 text-lg font-semibold">
                        All Screened Symbols ({data.quotes.length})
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {data.quotes.map(quote => (
                            <span
                                key={quote.symbol}
                                className="cursor-pointer rounded border border-gray-200 bg-white px-3 py-1 text-sm font-medium transition-colors hover:border-blue-500"
                                onClick={() => console.log(`Selected ${quote.symbol}`)}
                            >
                                {quote.symbol}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {data && <RenderStockScreener screenerResult={data} />}
        </div>
    );
}
