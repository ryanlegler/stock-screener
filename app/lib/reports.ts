import { readFile, readdir } from 'fs/promises';
import path from 'path';
import { unstable_cache } from 'next/cache';
import { Report } from '../types/report';

const REPORTS_DIR = path.resolve('./data/reports');
const LATEST_REPORT_PATH = path.join(REPORTS_DIR, 'latest.json');

export const getLatestReport = unstable_cache(
    async (): Promise<Report | null> => {
        try {
            const reportContent = await readFile(LATEST_REPORT_PATH, 'utf-8');
            return JSON.parse(reportContent) as Report;
        } catch (error) {
            if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
                // Report file doesn't exist yet
                return null;
            }
            console.error('Failed to get latest report:', error);
            return null;
        }
    },
    ['latest-report'],
    { tags: ['report'] }
);

export const getReport = unstable_cache(
    async (reportId: string): Promise<Report | null> => {
        try {
            // If it's the latest report, use getLatestReport
            if (reportId === 'latest') {
                return getLatestReport();
            }

            // Try to read the report file directly
            const reportPath = path.join(REPORTS_DIR, `${reportId}.json`);
            const reportContent = await readFile(reportPath, 'utf-8');
            return JSON.parse(reportContent) as Report;
        } catch (error) {
            if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
                return null;
            }
            console.error(`Failed to get report ${reportId}:`, error);
            return null;
        }
    },
    ['report'],
    { tags: ['report'] }
);

export interface ReportSummary {
    id: string;
    generatedAt: string;
}

export const listReports = unstable_cache(
    async (): Promise<ReportSummary[]> => {
        try {
            const files = await readdir(REPORTS_DIR);
            const reportFiles = files.filter(
                file => file.endsWith('.json') && file !== 'latest.json'
            );

            const reports: ReportSummary[] = [];
            for (const file of reportFiles) {
                try {
                    const reportId = file.replace(/\.json$/, '');
                    const reportPath = path.join(REPORTS_DIR, file);
                    const reportContent = await readFile(reportPath, 'utf-8');
                    const report = JSON.parse(reportContent) as Report;
                    reports.push({
                        id: reportId,
                        generatedAt: report.generatedAt,
                    });
                } catch (error) {
                    console.error(`Failed to read report ${file}:`, error);
                }
            }

            // Sort by generatedAt in descending order (newest first)
            return reports.sort(
                (a, b) => new Date(b.generatedAt).getTime() - new Date(a.generatedAt).getTime()
            );
        } catch (error) {
            console.error('Failed to list reports:', error);
            return [];
        }
    },
    ['reports-list'],
    { tags: ['report'] }
);
