import { Suspense } from 'react';
import { APIClient } from '@/app/lib/api/client';
import { ImpliedVolatilityTable } from '@/app/components/implied-volatility-table';
import { QuotesTable } from '@/app/components/quotes-table';
import { volatilityDataFixtureStocks } from '@/__fixture__/volatility-data-fixture';
import { quoteDataResponseFixtureStocks } from '@/__fixture__/quotes-data-fixture';
import MACDChart from '../components/macd-chart';
import { IS_OFFLINE } from '../constants';
import { QuoteItem } from '../types/api';

export default async function Page() {
    const { result } = IS_OFFLINE
        ? volatilityDataFixtureStocks
        : await APIClient.getHighestImpliedVolatility();

    console.log('🚀 ~ HomeImpliedVolatilityData ~ result:', result);

    const symbols = result.map(item =>
        item?.shortName ? item.shortName.split(' ')[0] : item?.symbol || ''
    );
    console.log('🚀 ~ HomeImpliedVolatilityData ~ symbols:', symbols);
    const symbolShortList = symbols.slice(0, 13);

    const quotes: QuoteItem[] = (await IS_OFFLINE)
        ? quoteDataResponseFixtureStocks.result
        : await APIClient.getQuotes({
              symbols: symbolShortList,
              fields: 'regularMarketPrice,regularMarketChangePercent,marketCap,shortName',
          });

    return (
        <div className="space-y-8">
            <p className="mb-6 text-gray-600">
                This page shows stocks with the highest implied volatility. Implied volatility is a
                metric that represents the market&apos;s forecast of a likely movement in a
                security&apos;s price. Higher implied volatility indicates that the market expects
                significant price movement in the future.
            </p>

            <ImpliedVolatilityTable data={result} />
            <div className="mt-8">
                <h2 className="mb-4 text-2xl font-bold">Stock Quotes</h2>
                <QuotesTable data={quotes || []} />
            </div>
            <Suspense fallback={<div className="py-10 text-center">Loading MACD data...</div>}>
                <MACDChart symbols={symbolShortList} />
            </Suspense>
        </div>
    );
}
