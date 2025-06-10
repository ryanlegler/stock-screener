import { checkMACDQualification } from '@/app/lib/indicators';
import { hydrateMACD } from '@/app/lib/utils/calculate-macd';
import { Report } from '@/app/types/report';
import { ReportCard } from '@/components/report-card';
import { getMACDAnalysis } from '@/app/lib/technical-analysis';
import { MAX_CANDLES } from '@/app/constants';

interface ReportCardsProps {
    report: Report;
}

export function ReportCards({ report }: ReportCardsProps) {
    // Get all symbols and their data
    const symbols = Object.entries(report.data.historicalData);

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {symbols.map(([symbol, chartData]) => {
                const macdAnalysis = getMACDAnalysis(chartData);
                const isQualified = checkMACDQualification(macdAnalysis);
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
