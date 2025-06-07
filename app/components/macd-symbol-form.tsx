/**
 * MACD Symbol Form Component (Client Component)
 * Allows users to select symbols and parameters for MACD analysis
 */

'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

interface MACDSymbolFormProps {
    initialSymbols: string[];
    initialInterval?: string;
    initialRange?: string;
    initialBullishOnly?: boolean;
}

export default function MACDSymbolForm({
    initialSymbols,
    initialInterval = '30m',
    initialRange = '1mo',
    initialBullishOnly = false
}: MACDSymbolFormProps) {
    const router = useRouter();
    const [symbols, setSymbols] = useState<string[]>(initialSymbols);
    const [inputSymbol, setInputSymbol] = useState('');
    const [interval, setInterval] = useState(initialInterval);
    const [range, setRange] = useState(initialRange);
    const [bullishOnly, setBullishOnly] = useState(initialBullishOnly);

    // Add a new symbol to the list
    const addSymbol = () => {
        if (inputSymbol && !symbols.includes(inputSymbol.toUpperCase())) {
            setSymbols([...symbols, inputSymbol.toUpperCase()]);
            setInputSymbol('');
        }
    };

    // Remove a symbol from the list
    const removeSymbol = (symbolToRemove: string) => {
        setSymbols(symbols.filter(s => s !== symbolToRemove));
    };

    // Handle form submission
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (symbols.length === 0) {
            return; // Don't submit if no symbols are selected
        }

        // Update URL with new parameters
        const params = new URLSearchParams();
        params.set('symbols', symbols.join(','));
        params.set('interval', interval);
        params.set('range', range);
        params.set('bullishOnly', bullishOnly.toString());

        router.push(`/macd?${params.toString()}`);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="mb-4 text-xl font-semibold">Configure MACD Analysis</h2>

            <div className="flex flex-col gap-4 sm:flex-row">
                <div className="flex-1">
                    <label
                        htmlFor="symbol-input"
                        className="mb-1 block text-sm font-medium text-gray-700"
                    >
                        Add Symbol
                    </label>
                    <div className="flex">
                        <input
                            id="symbol-input"
                            type="text"
                            value={inputSymbol}
                            onChange={e => setInputSymbol(e.target.value.toUpperCase())}
                            placeholder="Enter stock symbol"
                            className="block w-full min-w-0 flex-1 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                            onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addSymbol())}
                        />
                        <button
                            type="button"
                            onClick={addSymbol}
                            className="ml-3 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
                        >
                            Add
                        </button>
                    </div>
                </div>

                <div className="sm:w-40">
                    <label
                        htmlFor="interval-select"
                        className="mb-1 block text-sm font-medium text-gray-700"
                    >
                        Interval
                    </label>
                    <select
                        id="interval-select"
                        value={interval}
                        onChange={e => setInterval(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 py-2 pr-10 pl-3 text-base focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none sm:text-sm"
                    >
                        <option value="1d">Daily</option>
                        <option value="1wk">Weekly</option>
                        <option value="1mo">Monthly</option>
                        <option value="60m">Hourly (60m)</option>
                    </select>
                </div>

                <div className="sm:w-40">
                    <label
                        htmlFor="range-select"
                        className="mb-1 block text-sm font-medium text-gray-700"
                    >
                        Range
                    </label>
                    <select
                        id="range-select"
                        value={range}
                        onChange={e => setRange(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 py-2 pr-10 pl-3 text-base focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none sm:text-sm"
                    >
                        <option value="1mo">1 Month</option>
                        <option value="3mo">3 Months</option>
                        <option value="6mo">6 Months</option>
                        <option value="1y">1 Year</option>
                        <option value="2y">2 Years</option>
                    </select>
                </div>
            </div>

            {symbols.length > 0 && (
                <div className="mt-4">
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        Selected Symbols
                    </label>
                    <div className="flex flex-wrap gap-2">
                        {symbols.map(symbol => (
                            <div
                                key={symbol}
                                className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium"
                            >
                                {symbol}
                                <button
                                    type="button"
                                    onClick={() => removeSymbol(symbol)}
                                    className="ml-2 text-gray-500 hover:text-gray-700"
                                >
                                    &times;
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            
            <div className="flex items-center my-4">
                <input
                    id="bullish-only"
                    type="checkbox"
                    checked={bullishOnly}
                    onChange={(e) => setBullishOnly(e.target.checked)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="bullish-only" className="ml-2 block text-sm text-gray-900">
                    Show only stocks with bullish MACD signals
                </label>
            </div>

            <div className="pt-4">
                <button
                    type="submit"
                    disabled={symbols.length === 0}
                    className="w-full rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                >
                    Analyze MACD
                </button>
            </div>
        </form>
    );
}
