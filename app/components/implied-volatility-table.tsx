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
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symbol</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Change %</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Implied Volatility</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sector</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.length > 0 ? (
            data.map((item: ImpliedVolatilityItem, index: number) => (
              <tr key={`${item.symbol}-${index}`}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">{item.symbol}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item?.shortName || 'N/A'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${item?.regularMarketPrice ? item.regularMarketPrice.toFixed(2) : 'N/A'}</td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm ${(item?.regularMarketChangePercent ?? 0) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {(item?.regularMarketChangePercent ?? 0) >= 0 ? '+' : ''}{item?.regularMarketChangePercent ? item.regularMarketChangePercent.toFixed(2) : '0.00'}%
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item?.impliedVolatility !== undefined ? (item.impliedVolatility * 100).toFixed(2) : '0.00'}%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.sector || 'N/A'}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
