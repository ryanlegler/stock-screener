'use server';
import { db } from '@/db';
import { reportSymbols } from '@/db/schema';
import { randomUUID } from 'crypto';
import { eq, and } from 'drizzle-orm';

// // lets create another table that will track specific list or sumbols per report
// export const reportSymbols = sqliteTable('report_symbols', {
//     id: text('id').primaryKey(),
//     reportId: text('report_id').notNull(),
//     symbol: text('symbol').notNull(),
//     createdAt: integer('created_at', { mode: 'timestamp' })
//         .notNull()
//         .default(sql`CURRENT_TIMESTAMP`),
// });

// export type DbReportSymbol = typeof reportSymbols.$inferSelect;

export async function unflagSymbolInReport(reportId: string, symbol: string): Promise<void> {
    try {
        await db
            .delete(reportSymbols)
            .where(and(eq(reportSymbols.reportId, reportId), eq(reportSymbols.symbol, symbol)));
    } catch (error) {
        console.error('Error unflagging symbol in report:', error);
        throw error;
    }
}
