import { ImpliedVolatilityItem } from '@/app/types/api';

interface ImpliedVolatilityTableProps {
    data: ImpliedVolatilityItem[];
}

export function ImpliedVolatilityTable({ data }: ImpliedVolatilityTableProps) {
    return (
        <div className="overflow-x-auto">
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
                            className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                        >
                            Price
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                        >
                            Change %
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                        >
                            Implied Volatility
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                        >
                            Sector
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                    {data.length > 0 ? (
                        data.map((item: ImpliedVolatilityItem, index: number) => (
                            <tr key={`${item.symbol}-${index}`}>
                                <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-blue-600">
                                    {item.symbol}
                                </td>
                                <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
                                    {item?.shortName || 'N/A'}
                                </td>
                                <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
                                    $
                                    {item?.regularMarketPrice
                                        ? item.regularMarketPrice.toFixed(2)
                                        : 'N/A'}
                                </td>
                                <td
                                    className={`px-6 py-4 text-sm whitespace-nowrap ${(item?.regularMarketChangePercent ?? 0) >= 0 ? 'text-green-600' : 'text-red-600'}`}
                                >
                                    {(item?.regularMarketChangePercent ?? 0) >= 0 ? '+' : ''}
                                    {item?.regularMarketChangePercent
                                        ? item.regularMarketChangePercent.toFixed(2)
                                        : '0.00'}
                                    %
                                </td>
                                <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
                                    {item?.impliedVolatility !== undefined
                                        ? (item.impliedVolatility * 100).toFixed(2)
                                        : '0.00'}
                                    %
                                </td>
                                <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
                                    {item.sector || 'N/A'}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan={6}
                                className="px-6 py-4 text-center text-sm whitespace-nowrap text-gray-500"
                            >
                                No data available
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
