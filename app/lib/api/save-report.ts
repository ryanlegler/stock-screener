'use server';
import { db } from '@/db';
import { reports } from '@/db/schema';
import { Report } from '@/app/types/report';
import { randomUUID } from 'crypto';

export async function saveReport(report: Report): Promise<void> {
    try {
        await db.insert(reports).values({
            id: randomUUID(),
            generatedAt: report.generatedAt,
            data: report.data,
        });
    } catch (error) {
        console.error('Error saving report:', error);
        throw error;
    }
}
