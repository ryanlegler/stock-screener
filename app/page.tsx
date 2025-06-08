import { StockCharts } from './components/stock-charts';
import { getLatestReport } from './lib/reports';
import { GenerateReportButton } from './components/generate-report-button';
import { ReportStatus } from './components/report-status';


export default async function Home() {
    const report = await getLatestReport();

    return (
        <main className="min-h-screen p-8">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-bold mb-2">Stock Screener</h1>
                    {report && <ReportStatus generatedAt={report.generatedAt} />}
                </div>
                <GenerateReportButton />
            </div>

            {report ? (
                <StockCharts data={report.data} />
            ) : (
                <div className="text-center py-8">
                    <p className="text-gray-600">No report available. Click &quot;Generate Report&quot; to create one.</p>
                </div>
            )}
        </main>
    );
}
