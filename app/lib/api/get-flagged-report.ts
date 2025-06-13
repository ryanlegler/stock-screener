'use server';
import { db } from '@/db';
import { DbReportSymbol, reportSymbols } from '@/db/schema';
import { eq, and } from 'drizzle-orm';

export async function getFlaggedReport(reportId: string): Promise<DbReportSymbol[]> {
    try {
        return await db.select().from(reportSymbols).where(eq(reportSymbols.reportId, reportId));
    } catch (error) {
        console.error('Error getting flagged report:', error);
        throw error;
    }
}
