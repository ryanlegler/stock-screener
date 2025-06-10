'use server';
import { db } from '@/db';
import { reports } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function deleteReport(reportId: string): Promise<boolean> {
    try {
        await db.delete(reports).where(eq(reports.id, reportId));
        return true;
    } catch (error) {
        console.error('Error deleting report:', error);
        return false;
    }
}
