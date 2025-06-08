import { CombinedScreenerResult, ScreenerItem } from '../types/screener';

function formatNumber(num: number | undefined, prefix = '', suffix = '', decimals = 2): string {
    if (num === undefined) return 'N/A';
    if (num >= 1e9) return `${prefix}${(num / 1e9).toFixed(decimals)}${suffix}B`;
    if (num >= 1e6) return `${prefix}${(num / 1e6).toFixed(decimals)}${suffix}M`;
    if (num >= 1e3) return `${prefix}${(num / 1e3).toFixed(decimals)}${suffix}K`;
    return `${prefix}${num.toFixed(decimals)}${suffix}`;
}

function StockCard({ quote }: { quote: ScreenerItem }) {
    const percentChange = quote.regularMarketChangePercent?.toFixed(2) || '0';
    const isPositive = Number(percentChange) > 0;
    const priceChange = '0'; // regularMarketChange is not in ScreenerItem

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

export function RenderStockScreener({ data }: { data: CombinedScreenerResult }) {
    const listOfSymbols = data.results.map(item => item.symbol);
    console.log('🚀 ~ RenderStockScreener ~ listOfSymbols:', listOfSymbols);
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.results.length === 0 ? (
                <p>No results found</p>
            ) : (
                data.results.map(item => <StockCard key={item.symbol} quote={item} />)
            )}
        </div>
    );
}
