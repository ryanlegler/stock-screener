import { checkMACDQualification } from '../lib/indicators';
import { hydrateMACD } from '../lib/utils/calculate-macd';
import { Report } from '../types/report';
import { ReportCard } from './report-card';
import { getMACDAnalysis } from '../lib/technical-analysis';
import { MAX_CANDLES } from '../constants';

interface ReportCardsProps {
    report: Report;
}

export function ReportCards({ report }: ReportCardsProps) {
    // Get all symbols and their data
    const symbols = Object.entries(report.data.historicalData);

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {symbols.map(([symbol, chartData]) => {
                const isQualified = checkMACDQualification(chartData);
                const macdAnalysis = getMACDAnalysis(chartData);
                const macdData = hydrateMACD(chartData);
                const limitedData = macdData.slice(MAX_CANDLES);

                return (
                    <ReportCard
                        key={symbol}
                        symbol={symbol}
                        chartData={limitedData}
                        isQualified={isQualified}
                        macdAnalysis={macdAnalysis}
                    />
                );
            })}
        </div>
    );
}
