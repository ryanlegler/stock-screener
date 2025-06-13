'use server';
import { db } from '@/db';
import { reportSymbols } from '@/db/schema';
import { randomUUID } from 'crypto';

export async function flagSymbolInReport(reportId: string, symbol: string): Promise<void> {
    console.log('🚀 ~ flagSymbolInReport ~ symbol:', symbol);
    console.log('🚀 ~ flagSymbolInReport ~ reportId:', reportId);
    try {
        await db.insert(reportSymbols).values({
            id: randomUUID(),
            reportId,
            symbol,
        });
    } catch (error) {
        console.error('Error flagging symbol in report:', error);
        throw error;
    }
}
