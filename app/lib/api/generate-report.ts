'use server';

import { revalidatePath } from 'next/cache';
import { fetchRawScreenerData } from '@/app/lib/screener';
import { fetchReportData } from '@/app/lib/api/fetch-report-data';
import { saveReport } from '@/app/lib/api/save-report';
import { Report } from '@/app/types/report';
import { MAX_TOP_SYMBOLS } from '@/app/constants';
import { randomUUID } from 'crypto';

export async function generateReport(): Promise<{ success: boolean; error?: string }> {
    try {
        const screenerData = await fetchRawScreenerData();

        // Get top symbols by market cap
        const topSymbols = screenerData.quotes
            .sort((a, b) => (b.marketCap || 0) - (a.marketCap || 0))
            .slice(0, MAX_TOP_SYMBOLS)
            .map(quote => quote.symbol);

        const historicData = await fetchReportData(topSymbols);

        // Create the report
        const report: Report = {
            generatedAt: new Date().toISOString(),
            id: randomUUID(),
            data: {
                ...screenerData,
                historicalData: historicData,
            },
        };

        await saveReport(report);

        // Revalidate all pages that use the report data
        // lets revalidate the root page
        revalidatePath('/');

        return { success: true };
    } catch (error) {
        console.error('Error generating report:', error);
        return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
}
