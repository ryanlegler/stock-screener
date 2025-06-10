import { getReport } from '@/app/lib/api/get-report';
import { filterReportData } from '@/app/lib/utils/filter-report-data';
import { ReportCards } from '@/components/report-cards';
import { DeleteReportButton } from '@/components/delete-report-button';
import Link from 'next/link';

type Props = {
    params: Promise<{ reportId: string }>;
};

export default async function ReportPage({ params }: Props) {
    const { reportId } = await params;
    const report = await getReport(reportId);
    const filteredReport = report ? filterReportData(report) : null;

    if (!filteredReport) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div className="text-center">
                    <h1 className="mb-4 text-2xl font-bold">Report Not Found</h1>
                    <p>The requested report could not be found.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8 flex items-center justify-between">
                <div className="flex w-full justify-between gap-4">
                    <Link
                        href="/"
                        className="inline-flex items-center rounded-lg border border-gray-600 px-4 py-2 text-gray-100 transition-colors hover:bg-gray-900 hover:text-gray-100"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="mr-2 h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                            />
                        </svg>
                        Back
                    </Link>

                    <DeleteReportButton reportId={reportId} />
                </div>
            </div>
            <h1 className="mb-8 text-2xl font-bold">
                Report from {new Date(filteredReport.generatedAt).toLocaleString()}
            </h1>
            <ReportCards report={filteredReport} />
        </div>
    );
}
