import { ExportReportButton } from '@/components/export-report-button';
import { title } from 'process';
import x from 'x-ray-scraper';
export default async function FinvizPage() {
    const tickers = await x(
        'https://finviz.com/screener.ashx?v=111&f=cap_smallunder%2Cexch_nasd%2Cgeo_usa%2Csh_avgvol_o500%2Csh_price_u20%2Csh_relvol_o2%2Cta_perf_d5o%2Cta_sma20_pa&ft=3',
        '.screener_table tr[valign="top"]',
        [
            {
                symbol: 'td:nth-of-type(2)',
            },
        ]
    );

    const tickerSymbols = tickers.map(ticker => ticker.symbol);
    return (
        <div>
            {tickers?.map(ticker => {
                return <div key={ticker.symbol}>{ticker.symbol}</div>;
            })}
            <ExportReportButton symbols={tickerSymbols} />
        </div>
    );
}
