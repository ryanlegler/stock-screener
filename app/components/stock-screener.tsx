import { IS_OFFLINE } from '../constants';
import { getAllScreenerResults } from '../lib/api/screener-pagination';
import { RenderStockScreener } from './render-stock-screener';
import { screenerListCombinedResultsFixture } from '@/__fixture__/screener-list-combined-results-fixture';

export async function StockScreener() {
    const result = IS_OFFLINE
        ? screenerListCombinedResultsFixture
        : await getAllScreenerResults({
              sortType: 'DESC',
              sortField: 'percentchange',
              size: 30,
              delayMs: 1000, // 1 second delay between requests
          });

    console.log(JSON.stringify(result, null, 2));

    return <RenderStockScreener screenerResult={result} />;
}
