/**
 * MACD Analysis Display Component (Server Component)
 * Displays MACD analysis results for a stock symbol
 */

import { MACDAnalysisResult } from '../lib/actions';

interface MACDAnalysisDisplayProps {
    analysis: MACDAnalysisResult;
}

export default function MACDAnalysisDisplay({ analysis }: MACDAnalysisDisplayProps) {
    const { symbol, macdData, analysis: signals, error } = analysis;

    if (error || !macdData.length) {
        return (
            <div className="rounded-lg border bg-red-50 p-4 text-red-700">
                <h3 className="font-semibold">Unable to load MACD data for {symbol}</h3>
                <p>{error || 'No data available'}</p>
            </div>
        );
    }

    // Get the most recent MACD data point
    const latestMACD = macdData[macdData.length - 1];

    if (!latestMACD) {
        return (
            <div className="rounded-lg border bg-red-50 p-4 text-red-700">
                <h3 className="font-semibold">Unable to load MACD data for {symbol}</h3>
                <p>No data available</p>
            </div>
        );
    }

    // Format date for display
    const formatDate = (timestamp: number) => {
        return new Date(timestamp).toLocaleDateString();
    };

    // Function to get the Webull URL for a stock symbol
    const getWebullUrl = (symbol: string) => {
        // Default to nasdaq, but this could be enhanced to determine the correct exchange
        return `https://www.webull.com/quote/nasdaq-${symbol.toLowerCase()}`;
    };

    return (
        <div className="rounded-lg border bg-white p-4 shadow-sm">
            <div className="mb-2 flex items-center justify-between">
                <h3 className="text-lg font-semibold">MACD Analysis for {symbol}</h3>
                <a
                    href={getWebullUrl(symbol)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-indigo-600 hover:text-indigo-800"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                    </svg>
                    View on Webull
                </a>
            </div>

            <div className="mb-4 grid grid-cols-2 gap-4">
                <div className="rounded bg-gray-50 p-3">
                    <p className="text-sm text-gray-500">MACD Line</p>
                    <p
                        className={`text-lg font-medium ${latestMACD.macdLine > 0 ? 'text-green-600' : 'text-red-600'}`}
                    >
                        {latestMACD.macdLine.toFixed(4)}
                    </p>
                </div>

                <div className="rounded bg-gray-50 p-3">
                    <p className="text-sm text-gray-500">Signal Line</p>
                    <p className="text-lg font-medium">{latestMACD.signalLine.toFixed(4)}</p>
                </div>

                <div className="rounded bg-gray-50 p-3">
                    <p className="text-sm text-gray-500">Histogram</p>
                    <p
                        className={`text-lg font-medium ${latestMACD.histogram > 0 ? 'text-green-600' : 'text-red-600'}`}
                    >
                        {latestMACD.histogram.toFixed(4)}
                    </p>
                </div>

                <div className="rounded bg-gray-50 p-3">
                    <p className="text-sm text-gray-500">Last Updated</p>
                    <p className="text-lg font-medium">{formatDate(latestMACD.date)}</p>
                </div>
            </div>

            <div className="space-y-2">
                <h4 className="font-medium">Signal Analysis:</h4>

                <div className="flex items-center space-x-2">
                    <div
                        className={`h-3 w-3 rounded-full ${signals.waningBearishMomentum ? 'bg-green-500' : 'bg-gray-300'}`}
                    ></div>
                    <p className={signals.waningBearishMomentum ? 'font-medium' : 'text-gray-500'}>
                        Decreasing red histogram bars (waning bearish momentum)
                    </p>
                </div>

                <div className="flex items-center space-x-2">
                    <div
                        className={`h-3 w-3 rounded-full ${signals.bullishCrossover ? 'bg-green-500' : 'bg-gray-300'}`}
                    ></div>
                    <p className={signals.bullishCrossover ? 'font-medium' : 'text-gray-500'}>
                        MACD line crossing above the Signal line (bullish crossover)
                    </p>
                </div>

                <div className="flex items-center space-x-2">
                    <div
                        className={`h-3 w-3 rounded-full ${signals.higherLow ? 'bg-green-500' : 'bg-gray-300'}`}
                    ></div>
                    <p className={signals.higherLow ? 'font-medium' : 'text-gray-500'}>
                        Price forming a higher low
                    </p>
                </div>

                <div className="flex items-center space-x-2">
                    <div
                        className={`h-3 w-3 rounded-full ${signals.supportBounce ? 'bg-green-500' : 'bg-gray-300'}`}
                    ></div>
                    <p className={signals.supportBounce ? 'font-medium' : 'text-gray-500'}>
                        Price bouncing off a support level
                    </p>
                </div>
            </div>

            {(signals.waningBearishMomentum ||
                signals.bullishCrossover ||
                signals.higherLow ||
                signals.supportBounce) && (
                <div className="mt-4 rounded-lg border border-green-100 bg-green-50 p-3">
                    <p className="font-medium text-green-700">
                        Potential bullish signals detected for {symbol}
                    </p>
                </div>
            )}
        </div>
    );
}
