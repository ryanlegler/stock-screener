import { ChartComponent } from './components/chart';
import { StockScreener } from './components/stock-screener';
import { candleStickDataFixture } from '@/__fixture__/candle-stick-data-fixture';

export default function Home() {
    return (
        <div className="container mx-auto px-4 py-8">
            <StockScreener />
            <ChartComponent data={candleStickDataFixture} />
        </div>
    );
}
