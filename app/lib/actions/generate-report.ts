'use server';

import { revalidateTag } from 'next/cache';
import { fetchRawScreenerData } from '../screener';
import { fetchStockCharts } from '../api/fetch-stock-charts';
import { saveReport } from '../reports/save-report';
import { Report } from '../../types/report';
import { MAX_TOP_SYMBOLS } from '@/app/constants';

export async function generateReport(): Promise<{ success: boolean; error?: string }> {
    try {
        const screenerData = await fetchRawScreenerData();

        // Get top symbols by market cap
        const topSymbols = screenerData.quotes
            .sort((a, b) => (b.marketCap || 0) - (a.marketCap || 0))
            .slice(0, MAX_TOP_SYMBOLS)
            .map(quote => quote.symbol);

        const historicData = await fetchStockCharts(topSymbols);

        // Create the report
        const report: Report = {
            generatedAt: new Date().toISOString(),
            data: {
                ...screenerData,
                historicalData: historicData,
            },
        };

        await saveReport(report);

        // Revalidate all pages that use the report data
        revalidateTag('report');
        revalidateTag('reports-list');

        return { success: true };
    } catch (error) {
        console.error('Error generating report:', error);
        return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
}
