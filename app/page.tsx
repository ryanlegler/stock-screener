import { ChartComponent } from './components/chart';
import { StockScreener } from './components/stock-screener';

export default function Home() {
    return (
        <div className="container mx-auto px-4 py-8">
            <StockScreener />
            <ChartComponent />
        </div>
    );
}
