'use client';

import { useEffect, useState } from 'react';
import { ReportSummary } from '../types/report';
import Link from 'next/link';

export function ReportsList() {
    const [reports, setReports] = useState<ReportSummary[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchReports = async () => {
            try {
                const response = await fetch('/api/reports');
                if (!response.ok) {
                    throw new Error('Failed to fetch reports');
                }
                const data = await response.json();
                setReports(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch reports');
            } finally {
                setIsLoading(false);
            }
        };

        fetchReports();
    }, []);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-red-600 py-4">
                Error loading reports: {error}
            </div>
        );
    }

    if (reports.length === 0) {
        return <div className="text-gray-500">No reports found</div>;
    }

    return (
        <div className="mt-8">
            <h2 className="mb-4 text-xl font-semibold">Stock Screening Reports</h2>
            <div className="space-y-2">
                {reports.map(report => (
                    <Link
                        key={report.id}
                        href={`/reports/${report.id}`}
                        className="block rounded-lg bg-white p-4 shadow transition-shadow hover:shadow-md"
                    >
                        <div className="flex justify-between items-center">
                            <div>
                                <div className="font-medium">
                                    {new Date(report.generatedAt).toLocaleString()}
                                </div>
                                <div className="text-sm text-gray-500">
                                    ID: {report.id}
                                </div>
                            </div>
                            <div className="text-blue-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
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

