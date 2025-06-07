import { Quote, Result } from '../types';

function formatNumber(num: number | undefined, prefix = '', suffix = '', decimals = 2): string {
    if (num === undefined) return 'N/A';
    if (num >= 1e9) return `${prefix}${(num / 1e9).toFixed(decimals)}${suffix}B`;
    if (num >= 1e6) return `${prefix}${(num / 1e6).toFixed(decimals)}${suffix}M`;
    if (num >= 1e3) return `${prefix}${(num / 1e3).toFixed(decimals)}${suffix}K`;
    return `${prefix}${num.toFixed(decimals)}${suffix}`;
}

function StockCard({ quote }: { quote: Quote }) {
    const percentChange = quote.regularMarketChangePercent?.toFixed(2) || '0';
    const isPositive = Number(percentChange) > 0;
    const priceChange = quote.regularMarketChange?.toFixed(2) || '0';

    return (
        <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-md transition-shadow hover:shadow-lg">
            <div className="mb-3 flex items-start justify-between">
                <div>
                    <h3 className="text-lg font-bold tracking-tight">{quote.symbol}</h3>
                    <p
                        className="max-w-[200px] truncate text-sm text-gray-600"
                        title={quote.shortName}
                    >
                        {quote.shortName || 'Unknown'}
                    </p>
                </div>
                <div className={`text-right ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                    <p className="text-lg font-semibold">
                        ${quote.regularMarketPrice?.toFixed(2) || 'N/A'}
                    </p>
                    <div className="flex items-center justify-end space-x-1 text-sm">
                        <span>
                            {isPositive ? '+' : ''}
                            {priceChange}
                        </span>
                        <span>
                            ({isPositive ? '+' : ''}
                            {percentChange}%)
                        </span>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded bg-gray-50 p-2">
                    <p className="mb-1 text-xs font-medium text-gray-600">Volume</p>
                    <p className="font-medium">{formatNumber(quote.regularMarketVolume)}</p>
                </div>
                <div className="rounded bg-gray-50 p-2">
                    <p className="mb-1 text-xs font-medium text-gray-600">Market Cap</p>
                    <p className="font-medium">{formatNumber(quote.marketCap, '$')}</p>
                </div>
                <div className="rounded bg-gray-50 p-2">
                    <p className="mb-1 text-xs font-medium text-gray-600">52W High</p>
                    <p className="font-medium">{formatNumber(quote.fiftyTwoWeekHigh, '$')}</p>
                </div>
                <div className="rounded bg-gray-50 p-2">
                    <p className="mb-1 text-xs font-medium text-gray-600">52W Low</p>
                    <p className="font-medium">{formatNumber(quote.fiftyTwoWeekLow, '$')}</p>
                </div>
            </div>
        </div>
    );
}

export function RenderStockScreener({ screenerResult }: { screenerResult: Result }) {
    const listOfSymbols = screenerResult.quotes.map(quote => quote.symbol);
    console.log('🚀 ~ RenderStockScreener ~ listOfSymbols:', listOfSymbols);
    return (
        <div className="p-4">
            <div className="mb-4">
                <h2 className="mb-2 text-xl font-bold">Stock Screener Results</h2>
                <p className="text-sm text-gray-600">
                    Showing {screenerResult.count} of {screenerResult.total} results
                </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {screenerResult.quotes.map(quote => (
                    <StockCard key={quote.symbol} quote={quote} />
                ))}
            </div>
        </div>
    );
}
