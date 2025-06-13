import { checkMACDQualification } from '@/app/lib/indicators';
import { hydrateMACD } from '@/app/lib/utils/calculate-macd';
import { Report } from '@/app/types/report';
import { ReportCard } from '@/components/report-card';
import { getMACDAnalysis } from '@/app/lib/technical-analysis';
import { MAX_CANDLES } from '@/app/constants';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ReportCardsProps {
    report: Report;
}

export function ReportCards({ report }: ReportCardsProps) {
    const { id: reportId, data } = report;
    // Get all symbols and their data
    const symbols = Object.entries(data.historicalData);

    // Process all symbols
    const processedSymbols = symbols.map(([symbol, chartData]) => {
        const macdAnalysis = getMACDAnalysis(chartData);
        const isQualified = checkMACDQualification(macdAnalysis);
        const macdData = hydrateMACD(chartData);
        const limitedData = macdData.slice(MAX_CANDLES);

        return {
            symbol,
            chartData: limitedData,
            isQualified,
            macdAnalysis,
        };
    });

    // Split into qualified and non-qualified
    const qualifiedSymbols = processedSymbols.filter(s => s.isQualified);
    const nonQualifiedSymbols = processedSymbols.filter(s => !s.isQualified);

    return (
        <Tabs defaultValue="qualified" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="qualified">Qualified ({qualifiedSymbols.length})</TabsTrigger>
                <TabsTrigger value="not-qualified">
                    Not Qualified ({nonQualifiedSymbols.length})
                </TabsTrigger>
            </TabsList>
            <TabsContent value="qualified">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {qualifiedSymbols.map(data => (
                        <ReportCard
                            reportId={reportId}
                            key={data.symbol}
                            symbol={data.symbol}
                            chartData={data.chartData}
                            isQualified={data.isQualified}
                            macdAnalysis={data.macdAnalysis}
                        />
                    ))}
                </div>
            </TabsContent>
            <TabsContent value="not-qualified">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {nonQualifiedSymbols.map(data => (
                        <ReportCard
                            reportId={reportId}
                            key={data.symbol}
                            symbol={data.symbol}
                            chartData={data.chartData}
                            isQualified={data.isQualified}
                            macdAnalysis={data.macdAnalysis}
                        />
                    ))}
                </div>
            </TabsContent>
        </Tabs>
    );
}
