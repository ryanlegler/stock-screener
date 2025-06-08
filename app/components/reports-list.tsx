'use client';

import { useEffect, useState } from 'react';
import { listReports, deleteReport } from '../lib/reports/save-report';

export function ReportsList() {
    const [reports, setReports] = useState<{ timestamp: string; path: string }[]>([]);
    const [isDeleting, setIsDeleting] = useState<string | null>(null);

    const fetchReports = async () => {
        const reportsList = await listReports();
        setReports(reportsList);
    };

    useEffect(() => {
        fetchReports();
    }, []);

    const handleDelete = async (path: string) => {
        setIsDeleting(path);
        try {
            const success = await deleteReport(path);
            if (success) {
                await fetchReports(); // Refresh the list
            }
        } finally {
            setIsDeleting(null);
        }
    };

    if (reports.length === 0) {
        return <div className="text-gray-500">No archived reports found</div>;
    }

    return (
        <div className="mt-8">
            <h2 className="mb-4 text-xl font-semibold">Previous Reports</h2>
            <div className="space-y-2">
                {reports.map(report => (
                    <div
                        key={report.path}
                        className="rounded-lg bg-white p-4 shadow transition-shadow hover:shadow-md"
                    >
                        <div className="flex justify-between items-center">
                            <div>{report.timestamp}</div>
                            <button
                                onClick={() => handleDelete(report.path)}
                                disabled={isDeleting === report.path}
                                className="px-3 py-1 text-sm text-red-600 hover:text-red-800 disabled:text-gray-400"
                            >
                                {isDeleting === report.path ? 'Deleting...' : 'Delete'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
