'use server';
import { mkdir, writeFile, readdir } from 'fs/promises';
import path from 'path';
import { Report } from '../../types/report';

const REPORTS_DIR = path.resolve('./data/reports');
const LATEST_REPORT_PATH = path.resolve('./data/reports/latest.json');

export async function saveReport(report: Report): Promise<void> {
    try {
        // Ensure reports directory exists
        await mkdir(REPORTS_DIR, { recursive: true });

        // Save as latest report
        await writeFile(LATEST_REPORT_PATH, JSON.stringify(report, null, 2));

        // Also save as archived report with timestamp
        const timestamp = report.generatedAt.replace(/[:.]/g, '-');
        const archivedReportPath = path.resolve(REPORTS_DIR, `report-${timestamp}.json`);
        await writeFile(archivedReportPath, JSON.stringify(report, null, 2));
    } catch (error) {
        console.error('Error saving report:', error);
        throw error;
    }
}

export async function listReports(): Promise<{ timestamp: string; path: string }[]> {
    try {
        const files = await readdir(REPORTS_DIR);
        return files
            .filter(file => file.startsWith('report-') && file.endsWith('.json'))
            .map(file => {
                // Extract timestamp and properly reconstruct ISO format
                const rawTimestamp = file.replace('report-', '').replace('.json', '');
                const [date, time] = rawTimestamp.split('T');
                const isoTimestamp = `${date.replace(/-/g, '-')}T${time.replace(/-/g, ':')}`;
                
                return {
                    timestamp: isoTimestamp,
                    path: path.resolve(REPORTS_DIR, file),
                };
            })
            .sort((a, b) => b.timestamp.localeCompare(a.timestamp));
    } catch (error) {
        console.error('Error listing reports:', error);
        return [];
    }
}
