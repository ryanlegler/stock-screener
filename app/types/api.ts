// ==========================================
// 1. RAW API RESPONSE TYPES
// ==========================================
// These types represent the exact shape of data returned from the API

export interface APIError {
    status: number;
    message: string;
}

// Yahoo Finance API Response Types
// Chart API
export interface ChartResponse {
    chart: {
        result: ChartResult[];
        error: null | string;
    };
}

export interface ChartResult {
    meta: Meta;
    timestamp: number[];
    indicators: Indicators;
}

export interface Meta {
    currency: string;
    symbol: string;
    exchangeName: string;
    fullExchangeName: string;
    instrumentType: string;
    firstTradeDate: number;
    regularMarketTime: number;
    hasPrePostMarketData: boolean;
    gmtoffset: number;
    timezone: string;
    exchangeTimezoneName: string;
    regularMarketPrice: number;
    fiftyTwoWeekHigh: number;
    fiftyTwoWeekLow: number;
    regularMarketDayHigh: number;
    regularMarketDayLow: number;
    regularMarketVolume: number;
    longName: string;
    shortName: string;
    chartPreviousClose: number;
    priceHint: number;
    currentTradingPeriod: CurrentTradingPeriod;
    dataGranularity: string;
    range: string;
    validRanges: string[];
}

export interface CurrentTradingPeriod {
    pre: TradingPeriod;
    regular: TradingPeriod;
    post: TradingPeriod;
}

export interface TradingPeriod {
    timezone: string;
    start: number;
    end: number;
    gmtoffset: number;
}

export interface Indicators {
    quote: Quote[];
    adjclose?: Adjclose[];
}

export interface Quote {
    high: number[];
    low: number[];
    close: number[];
    open: number[];
    volume: number[];
}

export interface Adjclose {
    adjclose: number[];
}

// Quotes API
export interface QuoteResponse {
    quoteResponse: {
        result: QuoteResult[];
        error: null | string;
    };
}

export interface QuoteResult {
    symbol: string;
    shortName?: string;
    longName?: string;
    regularMarketPrice?: number;
    regularMarketChangePercent?: number;
    // ... other fields from the API
    language?: string;
    region?: string;
    quoteType?: string;
    typeDisp?: string;
    exchange?: string;
    market?: string;
    fullExchangeName?: string;
    marketState?: string;
    currency?: string;
    logoUrl?: string;
    quoteSourceName?: string;
    triggerable?: boolean;
    customPriceAlertConfidence?: string;
    regularMarketPriceFmt?: string;
    regularMarketChange?: number;
    regularMarketChangeFmt?: string;
    regularMarketDayHigh?: number;
    regularMarketDayLow?: number;
    regularMarketOpen?: number;
    regularMarketPreviousClose?: number;
    regularMarketVolume?: number;
    regularMarketTime?: number;
    regularMarketSource?: string;
    preMarketPrice?: number;
    preMarketChange?: number;
    preMarketChangePercent?: number;
    preMarketTime?: number;
    preMarketSource?: string;
    postMarketPrice?: number;
    postMarketChange?: number;
    postMarketChangePercent?: number;
    postMarketTime?: number;
    postMarketSource?: string;
    bid?: number;
    ask?: number;
    bidSize?: number;
    askSize?: number;
    priceHint?: number;
    fiftyTwoWeekLow?: number;
    fiftyTwoWeekHigh?: number;
    fiftyTwoWeekLowChange?: number;
    fiftyTwoWeekLowChangePercent?: number;
    fiftyTwoWeekHighChange?: number;
    fiftyTwoWeekHighChangePercent?: number;
    fiftyDayAverage?: number;
    fiftyDayAverageChange?: number;
    fiftyDayAverageChangePercent?: number;
    twoHundredDayAverage?: number;
    twoHundredDayAverageChange?: number;
    twoHundredDayAverageChangePercent?: number;
    averageDailyVolume3Month?: number;
    averageDailyVolume10Day?: number;
    averageVolume?: number;
    averageVolume10days?: number;
    volume?: number;
    marketCap?: number;
    sharesOutstanding?: number;
    sharesOutstandingBfdb?: number;
    sharesOutstandingCiq?: number;
    sharesOutstandingMarketCap?: number;
    sharesOutstandingForDisplay?: number;
    sharesShort?: number;
    sharesShortPrevMonth?: number;
    shortPercentFloat?: number;
    shortRatio?: number;
    floatShares?: number;
    heldPercentInsiders?: number;
    heldPercentInstitutions?: number;
    bookValue?: number;
    priceToBook?: number;
    priceToSales?: number;
    trailingPE?: number;
    forwardPE?: number;
    pegRatio?: number;
    earningsTimestamp?: number;
    earningsTimestampStart?: number;
    earningsTimestampEnd?: number;
    epsTrailingTwelveMonths?: number;
    epsForward?: number;
    epsCurrentYear?: number;
    epsNextQuarter?: number;
    priceEpsCurrentYear?: number;
    priceEpsNextQuarter?: number;
    dividendRate?: number;
    dividendYield?: number;
    trailingAnnualDividendRate?: number;
    trailingAnnualDividendYield?: number;
    dividendsPerShare?: number;
    dividendDate?: number;
    exDividendDate?: number;
    lastDividend?: number;
    revenue?: number;
    ebitda?: number;
    totalCash?: number;
    yield?: number;
    ytdReturn?: number;
    beta?: number;
    beta3y?: number;
    morningstarRating?: number;
    morningstarRiskRating?: number;
    netExpenseRatio?: number;
    fundCategory?: string;
    circulatingSupply?: number;
    maxSupply?: number;
    volume24hr?: number;
    volumeAllCurrencies?: number;
    strike?: number;
    openInterest?: number;
    expireDate?: number;
    underlyingSymbol?: string;
    targetPriceMean?: number;
    targetPriceMedian?: number;
    targetPriceHigh?: number;
    targetPriceLow?: number;
    quoteSummary?: {
        summaryDetail?: {
            maxAge?: number;
            priceHint?: number;
            previousClose?: number;
            open?: number;
            dayLow?: number;
            dayHigh?: number;
            regularMarketPreviousClose?: number;
            regularMarketOpen?: number;
            regularMarketDayLow?: number;
            regularMarketDayHigh?: number;
            trailingPE?: number;
            volume?: number;
            regularMarketVolume?: number;
            averageVolume?: number;
            averageVolume10days?: number;
            averageDailyVolume10Day?: number;
            bid?: number;
            ask?: number;
            bidSize?: number;
            askSize?: number;
            yield?: number;
            totalAssets?: number;
            fiftyTwoWeekLow?: number;
            fiftyTwoWeekHigh?: number;
            fiftyDayAverage?: number;
            twoHundredDayAverage?: number;
            navPrice?: number;
            currency?: string;
            fromCurrency?: string | null;
            toCurrency?: string | null;
            lastMarket?: string | null;
            coinMarketCapLink?: string | null;
            algorithm?: string | null;
            tradeable?: boolean;
            [key: string]: string | number | boolean | null | undefined;
        };
        [key: string]: Record<string, string | number | boolean | null | undefined> | undefined;
    };
    esgPopulated?: boolean;
    tradeable?: boolean;
    cryptoTradeable?: boolean;
    sourceInterval?: number;
    exchangeDataDelayedBy?: number;
    exchangeTimezoneName?: string;
    exchangeTimezoneShortName?: string;
    gmtOffSetMilliseconds?: number;
    hasPrePostMarketData?: boolean;
    firstTradeDateMilliseconds?: number;
}

// Implied Volatility API
export interface ImpliedVolatilityResponse {
    finance: {
        result: ImpliedVolatilityResult[];
        error: null | string;
    };
}

export interface ImpliedVolatilityResult {
    symbol: string;
    shortName: string;
    regularMarketPrice: number;
    regularMarketChangePercent: number;
    impliedVolatility: number;
    sector?: string;
}
// ==========================================
// 2. API CLIENT PARAMETERS
// ==========================================
// These types define the parameters for API client methods

export interface GetChartDataParams {
    symbol: string;
    interval?: string; // 1d, 1wk, 1mo
    range?: string; // 1d, 5d, 1mo, 3mo, 6mo, 1y, 2y, 5y, 10y, ytd, max
    region?: string;
}

export interface QuotesParams {
    symbols: string | string[]; // Can be a comma-separated string or array of symbols
    fields?: string;
    language?: string;
    region?: string;
}

export interface ImpliedVolatilityParams {
    language?: string;
    region?: string;
    offset?: number;
    quote_type?: string;
    count?: number;
}

// ==========================================
// 3. TRANSFORMED DATA TYPES
// ==========================================
// These types represent the transformed data used in your application

// Chart data transformed for application use
export interface GetChartResponse {
    symbol: string;
    results: ChartDataPoint[];
    error: null | string;
}

export interface ChartDataPoint {
    date?: number;
    open?: number;
    high?: number;
    low?: number;
    close?: number;
    volume?: number;
    adjclose?: number;
    meta?: Meta;
    timestamp?: number[];
    indicators?: Indicators;
}

// Quotes data transformed for application use
export interface QuoteItem {
    symbol: string;
    shortName?: string;
    regularMarketPrice?: number;
    regularMarketChangePercent?: number;
    // Add other fields you commonly use in your application
    language?: string;
    region?: string;
    longName?: string;
    marketCap?: number;
    regularMarketChange?: number;
}

// Implied volatility data transformed for application use
export interface ImpliedVolatilityItem {
    symbol: string;
    shortName: string;
    regularMarketPrice: number;
    regularMarketChangePercent: number;
    impliedVolatility: number;
    sector?: string;
}

export interface ImpliedVolatilityResponse {
    result: ImpliedVolatilityItem[];
    error: null | string;
}

// ==========================================
// 4. ANALYSIS DATA TYPES
// ==========================================
// These types represent data used for analysis

export interface MACDData {
    date: number; // Unix timestamp
    macdLine: number; // MACD Line (12-period EMA - 26-period EMA)
    signalLine: number; // 9-period EMA of MACD Line
    histogram: number; // MACD Line - Signal Line
    price: number; // Closing price for reference
}

export interface MacdAnalysisResult {
    symbol: string;
    macdData: MACDData[];
    analysis: {
        waningBearishMomentum: boolean;
        bullishCrossover: boolean;
        higherLow: boolean;
        supportBounce: boolean;
    };
    error: string | null;
}

// ==========================================
// 5. NEWS DATA TYPES
// ==========================================

export interface NewsItem {
    title: string;
    link: string;
    publisher: string;
    published_at: string;
    snippet: string;
}

export interface NewsAPIResponse {
    status: string;
    data: NewsItem[];
}

export interface NewsAPIParams {
    s: string; // Comma-separated symbols
    region: string;
    snippetCount: number;
}

export interface NewsAPIHeaders {
    'x-rapidapi-host': string;
    'x-rapidapi-key': string;
}
