import { getHistoricData } from '../lib/api/get-historic-data';
import { getLatestReport } from '../lib/reports';
import { StockChart } from './stock-chart';
import { ChartDataPoint } from '../types/api';

export async function StockDataContainer() {
    const report = await getLatestReport();
    if (!report) {
        return <div>No report data available</div>;
    }

    // Get historical data for top 3 symbols
    const top3Symbols = report.data.quotes
        .sort((a, b) => (b.marketCap || 0) - (a.marketCap || 0))
        .slice(0, 3)
        .map(quote => quote.symbol);

    const historicData = await getHistoricData(top3Symbols);

    return (
        <div className="space-y-8">
            {Object.entries(historicData).map(([symbol, data]) => (
                <div key={symbol} className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-4">{symbol}</h3>
                    <StockChart data={data} ratio={1} />
                </div>
            ))}
        </div>
    );
}
