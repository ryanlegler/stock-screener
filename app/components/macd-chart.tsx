/**
 * MACD Page Component (Server Component)
 */

import { Suspense } from 'react';
import MACDAnalysisDisplay from './macd-analysis-display';
// import { getMACDAnalysisMultiple } from '../lib/actions';

import { MacdAnalysisResultFixture } from '@/__fixture__/macd-analysis-result-fixture';
import { IS_OFFLINE } from '../constants';
import { getMACDAnalysisMultiple } from '../lib/actions';

// Default symbols to analyze
const DEFAULT_SYMBOLS = ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'TSLA'];

// Server Component for fetching MACD data
async function MACDAnalysisData({
    symbols = DEFAULT_SYMBOLS,
    showBullishOnly = false,
}: {
    symbols: string[];
    showBullishOnly?: boolean;
}) {
    // Fetch MACD analysis for all symbols
    const analysisResults = IS_OFFLINE
        ? MacdAnalysisResultFixture
        : await getMACDAnalysisMultiple(symbols);

    // Filter results to show only those with bullish signals
    const bullishResults = analysisResults.filter(result => {
        const { analysis } = result;
        return (
            analysis.waningBearishMomentum ||
            analysis.bullishCrossover ||
            analysis.higherLow ||
            analysis.supportBounce
        );
    });

    // If showBullishOnly is true, only display stocks with bullish signals
    const displayResults = showBullishOnly ? bullishResults : analysisResults;

    return (
        <div className="space-y-6">
            <div className="mb-4 flex flex-wrap gap-2">
                {symbols.map(symbol => (
                    <div
                        key={symbol}
                        className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium"
                    >
                        {symbol}
                    </div>
                ))}
            </div>

            {displayResults.length === 0 ? (
                <div className="py-8 text-center text-gray-500">
                    <p>
                        {showBullishOnly
                            ? 'No stocks with bullish MACD signals found'
                            : 'No results found'}
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {displayResults.map(analysis => (
                        <MACDAnalysisDisplay key={analysis.symbol} analysis={analysis} />
                    ))}
                </div>
            )}

            {bullishResults.length > 0 && (
                <div className="mt-8 rounded-lg border border-green-100 bg-green-50 p-4">
                    <h3 className="mb-2 text-lg font-semibold text-green-800">
                        Bullish MACD Signals Detected
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {bullishResults.map(result => (
                            <div
                                key={result.symbol}
                                className="inline-flex items-center rounded-full bg-green-200 px-3 py-1 text-sm font-medium text-green-800"
                            >
                                {result.symbol}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

interface MACDChartProps {
    symbols?: string[];
    showBullishOnly?: boolean;
}

export default function MACDChart({
    symbols = DEFAULT_SYMBOLS,
    showBullishOnly = false,
}: MACDChartProps) {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="mb-6 text-3xl font-bold">MACD Stock Screener</h1>

            <p className="mb-6 text-gray-600">
                This tool helps you identify stocks with bullish MACD signals, including:
            </p>

            <ul className="mb-6 list-disc space-y-1 pl-6 text-gray-600">
                <li>Decreasing red histogram bars (waning bearish momentum)</li>
                <li>MACD line crossing above the Signal line (bullish crossover)</li>
                <li>Price bouncing off a support level or forming a higher low</li>
            </ul>

            <div className="rounded-lg bg-white p-6 shadow-md">
                <Suspense
                    fallback={<div className="py-10 text-center">Loading MACD analysis...</div>}
                >
                    <MACDAnalysisData symbols={symbols} showBullishOnly={showBullishOnly} />
                </Suspense>
            </div>
        </div>
    );
}
