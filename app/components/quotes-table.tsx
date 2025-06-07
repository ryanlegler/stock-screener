import { QuoteItem } from '@/app/types/api';
import { formatCurrency, formatPercent } from '@/app/lib/formatters';

interface QuotesTableProps {
    data: QuoteItem[];
}

export function QuotesTable({ data }: QuotesTableProps) {
    if (!data || data.length === 0) {
        return <div className="p-4 text-center">No quote data available</div>;
    }

    return (
        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                        >
                            Symbol
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                        >
                            Name
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-right text-xs font-medium tracking-wider text-gray-500 uppercase"
                        >
                            Price
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-right text-xs font-medium tracking-wider text-gray-500 uppercase"
                        >
                            Change %
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-right text-xs font-medium tracking-wider text-gray-500 uppercase"
                        >
                            Market Cap
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                    {data.map(quote => (
                        <tr key={quote.symbol} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="font-medium text-gray-900">{quote.symbol}</div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm text-gray-900">{quote.shortName}</div>
                            </td>
                            <td className="px-6 py-4 text-right whitespace-nowrap">
                                <div className="text-sm text-gray-900">
                                    {quote.regularMarketPrice
                                        ? formatCurrency(quote.regularMarketPrice)
                                        : '-'}
                                </div>
                            </td>
                            <td className="px-6 py-4 text-right whitespace-nowrap">
                                <div
                                    className={`text-sm ${getChangeColor(quote.regularMarketChangePercent)}`}
                                >
                                    {quote.regularMarketChangePercent
                                        ? formatPercent(quote.regularMarketChangePercent / 100)
                                        : '-'}
                                </div>
                            </td>
                            <td className="px-6 py-4 text-right whitespace-nowrap">
                                <div className="text-sm text-gray-900">
                                    {quote.marketCap ? formatMarketCap(quote.marketCap) : '-'}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

// Helper function to determine text color based on change percentage
function getChangeColor(changePercent: number | undefined): string {
    if (!changePercent) return 'text-gray-500';
    return changePercent > 0 ? 'text-green-600' : 'text-red-600';
}

// Helper function to format market cap in a readable format (B, M, K)
function formatMarketCap(marketCap: number): string {
    if (marketCap >= 1e9) {
        return `$${(marketCap / 1e9).toFixed(2)}B`;
    } else if (marketCap >= 1e6) {
        return `$${(marketCap / 1e6).toFixed(2)}M`;
    } else if (marketCap >= 1e3) {
        return `$${(marketCap / 1e3).toFixed(2)}K`;
    }
    return `$${marketCap.toFixed(2)}`;
}
