import { sql } from 'drizzle-orm';
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const reports = sqliteTable('reports', {
    id: text('id').primaryKey(),
    generatedAt: text('generated_at').notNull(),
    data: text('data', { mode: 'json' }).notNull(),
    createdAt: integer('created_at', { mode: 'timestamp' })
        .notNull()
        .default(sql`CURRENT_TIMESTAMP`),
});

export type DbReport = typeof reports.$inferSelect;

// lets create another table that will track specific list or sumbols per report
export const reportSymbols = sqliteTable('report_symbols', {
    id: text('id').primaryKey(),
    reportId: text('report_id').notNull(),
    symbol: text('symbol').notNull(),
    createdAt: integer('created_at', { mode: 'timestamp' })
        .notNull()
        .default(sql`CURRENT_TIMESTAMP`),
});

export type DbReportSymbol = typeof reportSymbols.$inferSelect;
