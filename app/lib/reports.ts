import { Result } from '../types';

export async function getLatestReport(): Promise<{ data: Result; generatedAt: string } | null> {
    try {
        const response = await fetch('/api/reports/generate');
        const data = await response.json();

        if (!data.exists || !data.report) {
            return null;
        }

        return data.report;
    } catch (error) {
        console.error('Failed to get latest report:', error);
        return null;
    }
}

export function isReportStale(generatedAt: string): boolean {
    const reportDate = new Date(generatedAt);
    const now = new Date();
    return reportDate.toDateString() !== now.toDateString();
}
