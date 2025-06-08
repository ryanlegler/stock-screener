import { mkdir, writeFile } from 'fs/promises';
import path from 'path';
import { Report } from '../../types/report';

const REPORTS_DIR = path.resolve('./data/reports');
const LATEST_REPORT_PATH = path.resolve('./data/reports/latest.json');

export async function saveReport(report: Report): Promise<void> {
    try {
        // Ensure reports directory exists
        await mkdir(REPORTS_DIR, { recursive: true });

        // Save the report
        await writeFile(LATEST_REPORT_PATH, JSON.stringify(report, null, 2));
    } catch (error) {
        console.error('Error saving report:', error);
        throw error;
    }
}
