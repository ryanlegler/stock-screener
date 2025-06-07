'use client';

import { useEffect, useState } from 'react';
import { RenderStockScreener } from './render-stock-screener';
import { getLatestReport, isReportStale } from '../lib/reports';
import { Result } from '../types';

export function StockScreener() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<Result | null>(null);
    const [generating, setGenerating] = useState(false);

    async function generateReport() {
        setGenerating(true);
        try {
            const response = await fetch('/api/reports/generate', {
                method: 'POST',
            });
            const result = await response.json();
            if (!result.success) {
                throw new Error(result.error || 'Failed to generate report');
            }
            setData(result.report.data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to generate report');
        } finally {
            setGenerating(false);
        }
    }

    useEffect(() => {
        async function loadReport() {
            try {
                const report = await getLatestReport();
                if (!report) {
                    await generateReport();
                    return;
                }

                if (isReportStale(report.generatedAt)) {
                    await generateReport();
                    return;
                }

                setData(report.data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load report');
            } finally {
                setLoading(false);
            }
        }

        loadReport();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return (
            <div>
                <div className="text-red-500">{error}</div>
                <button
                    onClick={generateReport}
                    disabled={generating}
                    className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:bg-gray-400"
                >
                    {generating ? 'Generating...' : 'Retry'}
                </button>
            </div>
        );
    }

    return (
        <div>
            <div className="mb-4 flex items-center justify-between">
                <button
                    onClick={generateReport}
                    disabled={generating}
                    className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:bg-gray-400"
                >
                    {generating ? 'Generating...' : 'Generate New Report'}
                </button>
            </div>
            {data && <RenderStockScreener screenerResult={data} />}
        </div>
    );
}
