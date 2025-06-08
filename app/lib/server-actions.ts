import { APIClient } from './api/client';
import { getLatestReport } from './reports';

// Check if report is from a different day
function isReportStale(generatedAt: string): boolean {
    const reportDate = new Date(generatedAt);
    const now = new Date();
    return reportDate.toDateString() !== now.toDateString();
}
import { CombinedScreenerResult, ScreenerOptions, ScreenerResult } from '../types/screener';
import { ChartDataPoint } from '../types/api';

export async function getScreenerData(options: ScreenerOptions = {}): Promise<CombinedScreenerResult> {
  try {
    // Get or generate report
    const report = await getLatestReport();
    let screenerData: ScreenerResult;

    if (!report || isReportStale(report.generatedAt)) {
      // Generate new report using APIClient directly
      const quotes = await APIClient.getQuotes({
        symbols: ['AAPL', 'MSFT', 'GOOGL'], // Default symbols
        region: 'US',
        language: 'en-US'
      });
      
      // Initialize screenerData with default values if data is missing
      screenerData = {
        results: quotes || [],
        start: 0,
        count: quotes?.length || 0,
        total: quotes?.length || 0,
        quotes: quotes || [],
        useRecords: false
      };
    } else {
      // Initialize screenerData with default values if data is missing
      screenerData = {
        results: report.data?.quotes || [],
        start: 0,
        count: report.data?.quotes?.length || 0,
        total: report.data?.total || 0,
        quotes: report.data?.quotes || [],
        useRecords: false
      };
    }

    // Limit the number of stocks if specified
    const limitedData = options.limit 
      ? { 
          ...screenerData,
          results: screenerData.results.slice(0, options.limit),
          quotes: screenerData.quotes.slice(0, options.limit),
          count: Math.min(options.limit, screenerData.count)
        }
      : screenerData;

    // Fetch historical data for the symbols
    const symbols = limitedData.results.map(result => result.symbol);
    const historicDataPromises = symbols.map(symbol =>
      APIClient.getChart({
        symbol,
        interval: '1h',
        range: '7d',
        region: 'US',
      })
    );

    const results = await Promise.all(historicDataPromises);
    const historicalData: Record<string, ChartDataPoint[]> = {};

    // Transform the data into the correct format
    symbols.forEach((symbol, index) => {
      const chartData = results[index];
      if (chartData && chartData.results) {
        historicalData[symbol] = chartData.results.map((point) => ({
          date: point.date,
          open: point.open,
          high: point.high,
          low: point.low,
          close: point.close,
          volume: point.volume,
          adjclose: point.adjclose,
        }));
      }
    });

    return {
      ...limitedData,
      historicalData,
    };
  } catch (error) {
    console.error('Error in getScreenerData:', error);
    throw error;
  }
}
