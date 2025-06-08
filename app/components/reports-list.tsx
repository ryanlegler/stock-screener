'use client';

import { useEffect, useState } from 'react';
import { listReports } from '../lib/reports/save-report';

export function ReportsList() {
    const [reports, setReports] = useState<{ timestamp: string; path: string }[]>([]);

    useEffect(() => {
        const fetchReports = async () => {
            const reportsList = await listReports();
            setReports(reportsList);
        };

        fetchReports();
    }, []);

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
                        <div>{report.timestamp}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
