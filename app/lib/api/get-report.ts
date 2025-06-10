'use server';
import { db } from '@/db';
import { reports } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { Report } from '@/app/types/report';

export async function getReport(reportId: string): Promise<Report | null> {
    try {
        const result = await db.select().from(reports).where(eq(reports.id, reportId)).limit(1);

        if (result.length === 0) {
            return null;
        }

        const report = result[0];
        return {
            id: report.id,
            generatedAt: report.generatedAt,
            data: report.data as Report['data'],
        };
    } catch (error) {
        console.error('Error getting report:', error);
        return null;
    }
}
