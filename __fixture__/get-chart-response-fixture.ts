import { GetChartResponse } from '@/app/types/api';

export const getChartResponseFixture: GetChartResponse = {
    error: null,
    symbol: 'AAPL',
    results: [
        {
            meta: {
                currency: 'USD',
                symbol: 'AAPL',
                exchangeName: 'NMS',
                fullExchangeName: 'NasdaqGS',
                instrumentType: 'EQUITY',
                firstTradeDate: 345479400,
                regularMarketTime: 1746216001,
                hasPrePostMarketData: true,
                gmtoffset: -14400,
                timezone: 'EDT',
                exchangeTimezoneName: 'America/New_York',
                regularMarketPrice: 205.35,
                fiftyTwoWeekHigh: 260.1,
                fiftyTwoWeekLow: 169.21,
                regularMarketDayHigh: 206.99,
                regularMarketDayLow: 202.16,
                regularMarketVolume: 101010621,
                longName: 'Apple Inc.',
                shortName: 'Apple Inc.',
                chartPreviousClose: 223.89,
                priceHint: 2,
                currentTradingPeriod: {
                    pre: {
                        timezone: 'EDT',
                        start: 1746172800,
                        end: 1746192600,
                        gmtoffset: -14400,
                    },
                    regular: {
                        timezone: 'EDT',
                        start: 1746192600,
                        end: 1746216000,
                        gmtoffset: -14400,
                    },
                    post: {
                        timezone: 'EDT',
                        start: 1746216000,
                        end: 1746230400,
                        gmtoffset: -14400,
                    },
                },
                dataGranularity: '1wk',
                range: '1mo',
                validRanges: [
                    '1d',
                    '5d',
                    '1mo',
                    '3mo',
                    '6mo',
                    '1y',
                    '2y',
                    '5y',
                    '10y',
                    'ytd',
                    'max',
                ],
            },
            timestamp: [1743393600, 1743998400, 1744603200, 1745208000, 1745812800, 1746216001],
            indicators: {
                quote: [
                    {
                        high: [
                            225.19000244140625, 200.61000061035156, 212.94000244140625, 209.75,
                            214.55999755859375, 206.99000549316406,
                        ],
                        low: [
                            187.33999633789062, 169.2100067138672, 192.3699951171875,
                            189.80999755859375, 202.16000366210938, 202.16000366210938,
                        ],
                        close: [
                            188.3800048828125, 198.14999389648438, 196.97999572753906,
                            209.27999877929688, 205.35000610351562, 205.35000610351562,
                        ],
                        open: [
                            221.32000732421875, 177.1999969482422, 211.44000244140625,
                            193.27000427246094, 210, 206.08999633789062,
                        ],
                        volume: [265235800, 675037600, 263763500, 238181400, 286135400, 101010621],
                    },
                ],
                adjclose: [
                    {
                        adjclose: [
                            188.3800048828125, 198.14999389648438, 196.97999572753906,
                            209.27999877929688, 205.35000610351562, 205.35000610351562,
                        ],
                    },
                ],
            },
        },
    ],
};
