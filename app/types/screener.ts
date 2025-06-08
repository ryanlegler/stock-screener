import { ChartDataPoint } from './api';

export interface ScreenerResult {
  results: ScreenerItem[];
  start: number;
  count: number;
  total: number;
  quotes: ScreenerItem[];
  useRecords: boolean;
}

export interface ScreenerItem {
  symbol: string;
  shortName?: string;
  regularMarketPrice?: number;
  regularMarketChangePercent?: number;
  regularMarketChange?: number;
  regularMarketVolume?: number;
  marketCap?: number;
  fiftyTwoWeekHigh?: number;
  fiftyTwoWeekLow?: number;
}

export interface CombinedScreenerResult extends ScreenerResult {
  historicalData: Record<string, ChartDataPoint[]>;
}

export interface ScreenerOptions {
  limit?: number;
}
