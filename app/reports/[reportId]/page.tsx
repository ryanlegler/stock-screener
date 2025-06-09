import { getReport } from '@/app/lib/reports';
import { filterReportData } from '@/app/lib/utils/filter-report-data';
import { ReportCards } from '@/app/components/report-cards';
import Link from 'next/link';

interface Props {
    params: {
        reportId: string;
    };
}

export default async function ReportPage({ params }: Props) {
    const report = await getReport(params.reportId);
    const filteredReport = report ? filterReportData(report) : null;

    if (!filteredReport) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Report Not Found</h1>
                    <p>The requested report could not be found.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-between mb-8">
                <div className="flex gap-4">
                    <Link
                        href="/"
                        className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 mr-2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                            />
                        </svg>
                        Back
                    </Link>
                    {params.reportId !== 'latest' && (
                        <Link
                            href="/reports/latest"
                            className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5 mr-2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            View Latest Report
                        </Link>
                    )}
                </div>
            </div>
            <h1 className="text-2xl font-bold mb-8">
                Report from {new Date(filteredReport.generatedAt).toLocaleString()}
            </h1>
            <ReportCards report={filteredReport} />
        </div>
    );
}
