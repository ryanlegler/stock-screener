'use client';

import { ChartComponent } from './chart';
import { MACDIndicator } from './macd-indicator';
import { RenderStockScreener } from './render-stock-screener';
import { CombinedScreenerResult } from '../types/screener';

interface StockDisplayProps {
  data: CombinedScreenerResult;
}

export function StockDisplay({ data }: StockDisplayProps) {
  if (!data) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Stock Screener Results</h1>
        <p className="text-gray-600">Showing {data.count} of {data.total} results</p>
      </div>

      <RenderStockScreener data={data} />

      <div className="mt-12 space-y-12">
        {data.results.map((result) => (
          <div key={result.symbol} className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">{result.symbol}</h2>
            <p className="text-gray-600 mb-6">{result.shortName}</p>
            
            {data.historicalData[result.symbol] ? (
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Price Chart</h3>
                  <ChartComponent 
                    data={data.historicalData[result.symbol]} 
                    height={400}
                    width={800}
                  />
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">MACD Indicator</h3>
                  <MACDIndicator 
                    data={data.historicalData[result.symbol]} 
                    height={200}
                    width={800}
                  />
                </div>
              </div>
            ) : (
              <div className="text-gray-500">Loading historical data...</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
