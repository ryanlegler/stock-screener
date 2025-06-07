export interface ScreenerField {
    fieldId: string;
    category: {
        categoryId: string;
        displayName: string;
    };
    labels: Array<{
        displayName: string;
        criteria: {
            operator: string;
            operands: Array<string | number>;
        };
        dependentFilterLabel: null | string;
    }>;
    type: 'NUMBER' | 'STRING' | 'BOOLEAN' | 'DATE';
    deprecated: boolean;
    displayName: string;
    dropdownSupported: boolean;
    sortable: boolean;
    isPremium: boolean;
    dependFor?: string | string[];
    enableSearch?: boolean;
    dependentField?: string;
    searchSource?: string;
}

///

export type ScreenerResult = ScreenerListResponse;

export interface ScreenerListResponse {
    finance: Finance;
}

export interface Finance {
    result: Result[];
    error: unknown;
}

export interface Result {
    start: number;
    count: number;
    total: number;
    quotes: Quote[];
    useRecords: boolean;
}

export interface Quote {
    language: string;
    region: string;
    quoteType: string;
    typeDisp: string;
    quoteSourceName: string;
    triggerable: boolean;
    customPriceAlertConfidence: string;
    lastCloseTevEbitLtm?: number;
    lastClosePriceToNNWCPerShare: number;
    currency: string;
    regularMarketChangePercent: number;
    exchange: string;
    fiftyTwoWeekHigh: number;
    fiftyTwoWeekLow: number;
    dividendYield?: number;
    shortName: string;
    bid: number;
    ask: number;
    hasPrePostMarketData: boolean;
    firstTradeDateMilliseconds: number;
    priceHint: number;
    regularMarketChange: number;
    regularMarketTime: number;
    regularMarketPrice: number;
    regularMarketDayHigh: number;
    regularMarketDayRange: string;
    regularMarketDayLow: number;
    regularMarketVolume: number;
    regularMarketPreviousClose: number;
    bidSize: number;
    askSize: number;
    market: string;
    messageBoardId: string;
    fullExchangeName: string;
    longName: string;
    financialCurrency: string;
    regularMarketOpen: number;
    averageDailyVolume3Month: number;
    averageDailyVolume10Day: number;
    corporateActions: any[];
    fiftyTwoWeekLowChange: number;
    fiftyTwoWeekLowChangePercent: number;
    fiftyTwoWeekRange: string;
    fiftyTwoWeekHighChange: number;
    fiftyTwoWeekHighChangePercent: number;
    fiftyTwoWeekChangePercent: number;
    earningsTimestamp?: number;
    earningsTimestampStart?: number;
    earningsTimestampEnd?: number;
    earningsCallTimestampStart?: number;
    earningsCallTimestampEnd?: number;
    isEarningsDateEstimate?: boolean;
    trailingAnnualDividendRate: number;
    trailingPE?: number;
    dividendRate?: number;
    trailingAnnualDividendYield: number;
    marketState: string;
    epsTrailingTwelveMonths: number;
    epsForward?: number;
    sharesOutstanding: number;
    bookValue: number;
    fiftyDayAverage: number;
    fiftyDayAverageChange: number;
    fiftyDayAverageChangePercent: number;
    twoHundredDayAverage: number;
    twoHundredDayAverageChange: number;
    twoHundredDayAverageChangePercent: number;
    marketCap: number;
    forwardPE?: number;
    priceToBook: number;
    sourceInterval: number;
    exchangeDataDelayedBy: number;
    exchangeTimezoneName: string;
    exchangeTimezoneShortName: string;
    gmtOffSetMilliseconds: number;
    esgPopulated: boolean;
    tradeable: boolean;
    cryptoTradeable: boolean;
    symbol: string;
    averageAnalystRating?: string;
    postMarketChangePercent?: number;
    postMarketTime?: number;
    postMarketPrice?: number;
    postMarketChange?: number;
    epsCurrentYear?: number;
    priceEpsCurrentYear?: number;
    ipoExpectedDate?: string;
    displayName?: string;
    dividendDate?: number;
}
