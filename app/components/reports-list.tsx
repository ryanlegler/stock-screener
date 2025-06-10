import Link from 'next/link';
import { Report } from '../types/report';

interface ReportsListProps {
    reports: Report[];
}

export function ReportsList({ reports }: ReportsListProps) {
    if (reports.length === 0) {
        return <div className="text-gray-500">No reports found</div>;
    }

    return (
        <div className="mt-8">
            <h2 className="mb-4 text-xl font-semibold">Previous Reports</h2>
            <div className="space-y-2">
                {reports.map((report, index) => (
                    <Link
                        key={index}
                        href={`/reports/${report.id}`}
                        className="block rounded-lg border border-gray-700 p-4 shadow transition-shadow hover:shadow-md"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="font-medium">
                                    {new Date(report.generatedAt).toLocaleString()}
                                </div>
                                <div className="text-sm text-gray-500">ID: {report.id}</div>
                            </div>
                            <div className="text-gray-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                    />
                                </svg>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
