import { GenerateReportButton } from '@/components/generate-report-button';
import { ReportStatus } from '@/components/report-status';
import { ReportsList } from '@/components/reports-list';
import { filterReportData } from '@/app/lib/utils/filter-report-data';
import { getReports } from '@/app/lib/api/get-reports';
import { ReportCards } from '@/components/report-cards';

export default async function Home() {
    const reports = await getReports();

    const latestReport = reports[0];
    const filteredReport = latestReport ? filterReportData(latestReport) : null;
    const disableGenerateButton =
        latestReport && Date.now() - new Date(latestReport.generatedAt).getTime() < 3600000;

    return (
        <main className="min-h-screen p-8">
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="mb-2 text-2xl font-bold">Stock Screener</h1>
                    {latestReport && <ReportStatus generatedAt={latestReport.generatedAt} />}
                </div>

                {!disableGenerateButton ? (
                    <GenerateReportButton />
                ) : (
                    <GenerateReportButton className="bg-red-900" label="Regenerate Report" />
                )}
            </div>

            {filteredReport ? (
                <>
                    <ReportCards report={filteredReport} />
                    <ReportsList reports={reports} />
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
