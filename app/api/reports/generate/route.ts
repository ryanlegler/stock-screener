import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { getAllScreenerResults } from '../../../lib/api/screener-pagination';
import { Result } from '../../../types';

const REPORTS_DIR = path.join(process.cwd(), 'reports');
const LATEST_REPORT_PATH = path.join(REPORTS_DIR, 'latest.json');

async function saveReport(data: Result) {
    const timestamp = new Date().toISOString();
    const report = {
        data,
        generatedAt: timestamp,
    };

    await fs.mkdir(REPORTS_DIR, { recursive: true });
    await fs.writeFile(LATEST_REPORT_PATH, JSON.stringify(report, null, 2));

    // Also save a timestamped version
    const archiveFilename = `report-${timestamp.replace(/[:.]/g, '-')}.json`;
    await fs.writeFile(
        path.join(REPORTS_DIR, archiveFilename),
        JSON.stringify(report, null, 2)
    );

    return report;
}

async function getLatestReport() {
    try {
        const content = await fs.readFile(LATEST_REPORT_PATH, 'utf-8');
        return JSON.parse(content);
    } catch {
        return null;
    }
}

function isReportStale(generatedAt: string): boolean {
    const reportDate = new Date(generatedAt);
    const now = new Date();
    return reportDate.toDateString() !== now.toDateString();
}

export async function POST() {
    try {
        const result = await getAllScreenerResults({
            sortType: 'DESC',
            sortField: 'percentchange',
            size: 30,
            delayMs: 1000,
        });

        const report = await saveReport(result);
        return NextResponse.json({ success: true, report });
    } catch (error) {
        console.error('Failed to generate report:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to generate report' },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        const report = await getLatestReport();
        if (!report) {
            return NextResponse.json({
                exists: false,
                report: null
            });
        }

        const isStale = isReportStale(report.generatedAt);
        return NextResponse.json({
            exists: true,
            isStale,
            report
        });
    } catch (error) {
        console.error('Failed to get report:', error);
        return NextResponse.json({
            exists: false,
            error: 'Failed to get report'
        }, { status: 500 });
    }
}
