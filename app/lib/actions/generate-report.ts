'use server';

import { revalidateTag } from 'next/cache';
import { getScreenerData } from '../screener';
import { getHistoricData } from '../api/get-historic-data';
import { saveReport } from '../reports/save-report';
import { Report } from '../../types/report';

export async function generateReport() {
    try {
        // Get screener data first
        const screenerData = await getScreenerData();
        
        // Get top 3 symbols by market cap
        const top3Symbols = screenerData.quotes
            .sort((a, b) => (b.marketCap || 0) - (a.marketCap || 0))
            .slice(0, 3)
            .map(quote => quote.symbol);

        // Get historical data for these symbols
        const historicData = await getHistoricData(top3Symbols);

        // Create the report
        const report: Report = {
            generatedAt: new Date().toISOString(),
            data: {
                ...screenerData,
                historicalData: historicData
            }
        };

        // Save to file system
        await saveReport(report);

        // Revalidate all pages that use the report data
        revalidateTag('report');

        return { success: true };
    } catch (error) {
        console.error('Error generating report:', error);
        return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
}
