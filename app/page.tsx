import { ReportCards } from './components/report-cards';
import { getLatestReport } from './lib/reports';
import { GenerateReportButton } from './components/generate-report-button';
import { ReportStatus } from './components/report-status';
import { ReportsList } from './components/reports-list';
import { filterReportData } from './lib/utils/filter-report-data';

export default async function Home() {
    const report = await getLatestReport();
    const filteredReport = report ? filterReportData(report) : null;

    return (
        <main className="min-h-screen p-8">
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="mb-2 text-2xl font-bold">Stock Screener</h1>
                    {report && <ReportStatus generatedAt={report.generatedAt} />}
                </div>
                <GenerateReportButton />
            </div>

            {filteredReport ? (
                <>
                    <ReportCards report={filteredReport} />
                    <ReportsList />
                </>
            ) : (
                <div className="py-8 text-center">
                    <p className="text-gray-600">
                        No report available. Click &quot;Generate Report&quot; to create one.
                    </p>
                </div>
            )}
        </main>
    );
}
