'use server';
import { db } from '@/db';
import { reports } from '@/db/schema';
import { desc } from 'drizzle-orm';
import { Report } from '@/app/types/report';

export async function getReports(): Promise<Report[]> {
    try {
        const results = await db.select().from(reports).orderBy(desc(reports.createdAt));

        return results.map(report => ({
            generatedAt: report.generatedAt,
            data: report.data as Report['data'],
            id: report.id,
        }));
    } catch (error) {
        console.error('Error listing reports:', error);
        return [];
    }
}
