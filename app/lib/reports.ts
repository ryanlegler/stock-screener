import { readFile } from 'fs/promises';
import path from 'path';
import { unstable_cache } from 'next/cache';
import { Report } from '../types/report';

const LATEST_REPORT_PATH = path.resolve('./data/reports/latest.json');

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
    ['report'],
    { tags: ['report'] }
);


