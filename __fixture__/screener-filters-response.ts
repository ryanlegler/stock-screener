import { ScreenerFiltersResponse } from '@/app/types';

export const screenerFiltersResponse: ScreenerFiltersResponse = {
    finance: {
        result: [
            {
                fields: {
                    'altmanzscoreusingtheaveragestockinformationforaperiod.lasttwelvemonths': {
                        fieldId:
                            'altmanzscoreusingtheaveragestockinformationforaperiod.lasttwelvemonths',
                        category: {
                            categoryId: 'keystats',
                            displayName: 'Share Statistics',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName:
                            'Altman Z Score Using the Average Stock Information for a Period',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    average_analyst_rating: {
                        fieldId: 'average_analyst_rating',
                        category: {
                            categoryId: 'userInsights',
                            displayName: 'User Insights',
                        },
                        labels: [],
                        type: 'STRING',
                        deprecated: false,
                        displayName: 'Avg. Analyst Rating',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'averagedayspayableoutstanding.lasttwelvemonths': {
                        fieldId: 'averagedayspayableoutstanding.lasttwelvemonths',
                        category: {
                            categoryId: 'balance_sheet',
                            displayName: 'Balance Sheet',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: true,
                        displayName: 'Average Days Payable Outstanding',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    avgdailyvol3m: {
                        fieldId: 'avgdailyvol3m',
                        category: {
                            categoryId: 'keystats',
                            displayName: 'Share Statistics',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Average Daily 3m Volume',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'basicepscontinuingoperations.lasttwelvemonths': {
                        fieldId: 'basicepscontinuingoperations.lasttwelvemonths',
                        category: {
                            categoryId: 'income',
                            displayName: 'Income',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Basic EPS - Continuing Operations',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'basicweightedaveragesharesoutstanding.lasttwelvemonths': {
                        fieldId: 'basicweightedaveragesharesoutstanding.lasttwelvemonths',
                        category: {
                            categoryId: 'keystats',
                            displayName: 'Share Statistics',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: true,
                        displayName: 'Basic Weighted Average Shares Outstanding',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    bearish_confidence_lower_bound: {
                        fieldId: 'bearish_confidence_lower_bound',
                        category: {
                            categoryId: 'userInsights',
                            displayName: 'User Insights',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Bearish Confidence Lower Bound',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: true,
                    },
                    bearish_count: {
                        fieldId: 'bearish_count',
                        category: {
                            categoryId: 'userInsights',
                            displayName: 'User Insights',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Bearish Count',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: true,
                    },
                    bearish_proportion: {
                        fieldId: 'bearish_proportion',
                        category: {
                            categoryId: 'userInsights',
                            displayName: 'User Insights',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Bearish Proportion',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: true,
                    },
                    beta: {
                        fieldId: 'beta',
                        category: {
                            categoryId: 'keystats',
                            displayName: 'Share Statistics',
                        },
                        labels: [
                            {
                                displayName: '< -0.2',
                                criteria: {
                                    operator: 'LT',
                                    operands: ['beta', -0.2],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: '-0.2 to 0.2',
                                criteria: {
                                    operator: 'BTWN',
                                    operands: ['beta', -0.2, 0.2],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: '0.2 to 0.8',
                                criteria: {
                                    operator: 'BTWN',
                                    operands: ['beta', 0.2, 0.8],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: '0.8 to 1.2',
                                criteria: {
                                    operator: 'BTWN',
                                    operands: ['beta', 0.8, 1.2],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: '1.2 to 2.0',
                                criteria: {
                                    operator: 'BTWN',
                                    operands: ['beta', 1.2, 2],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: '> 2.0',
                                criteria: {
                                    operator: 'GT',
                                    operands: ['beta', 2],
                                },
                                dependentFilterLabel: null,
                            },
                        ],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Beta',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'beta1year.lasttwelvemonths': {
                        fieldId: 'beta1year.lasttwelvemonths',
                        category: {
                            categoryId: 'keystats',
                            displayName: 'Share Statistics',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: true,
                        displayName: 'Beta - 1 Year',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'bookvalueshare.lasttwelvemonths': {
                        fieldId: 'bookvalueshare.lasttwelvemonths',
                        category: {
                            categoryId: 'valuation',
                            displayName: 'Valuation Measures',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Book Value / Share',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    bought_confidence_lower_bound: {
                        fieldId: 'bought_confidence_lower_bound',
                        category: {
                            categoryId: 'userInsights',
                            displayName: 'User Insights',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Bought Confidence Lower Bound',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: true,
                    },
                    bought_count: {
                        fieldId: 'bought_count',
                        category: {
                            categoryId: 'userInsights',
                            displayName: 'User Insights',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Bought Count',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: true,
                    },
                    bought_proportion: {
                        fieldId: 'bought_proportion',
                        category: {
                            categoryId: 'userInsights',
                            displayName: 'User Insights',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Bought Proportion',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: true,
                    },
                    bullish_confidence_lower_bound: {
                        fieldId: 'bullish_confidence_lower_bound',
                        category: {
                            categoryId: 'userInsights',
                            displayName: 'User Insights',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Bullish Confidence Lower Bound',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: true,
                    },
                    bullish_count: {
                        fieldId: 'bullish_count',
                        category: {
                            categoryId: 'userInsights',
                            displayName: 'User Insights',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Bullish Count',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: true,
                    },
                    bullish_proportion: {
                        fieldId: 'bullish_proportion',
                        category: {
                            categoryId: 'userInsights',
                            displayName: 'User Insights',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Bullish Proportion',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: true,
                    },
                    'capitalexpenditure.lasttwelvemonths': {
                        fieldId: 'capitalexpenditure.lasttwelvemonths',
                        category: {
                            categoryId: 'cashflowstatement',
                            displayName: 'Cash Flow Statement',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Capital Expenditure',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'cashandequivalents.lasttwelvemonths': {
                        fieldId: 'cashandequivalents.lasttwelvemonths',
                        category: {
                            categoryId: 'cashflowstatement',
                            displayName: 'Cash Flow Statement',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: true,
                        displayName: 'Cash And Equivalents',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'cashfromoperations.lasttwelvemonths': {
                        fieldId: 'cashfromoperations.lasttwelvemonths',
                        category: {
                            categoryId: 'cashflowstatement',
                            displayName: 'Cash Flow Statement',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Cash from Operations',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'cashfromoperations1yrgrowth.lasttwelvemonths': {
                        fieldId: 'cashfromoperations1yrgrowth.lasttwelvemonths',
                        category: {
                            categoryId: 'cashflowstatement',
                            displayName: 'Cash Flow Statement',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Cash From Operations, 1 Yr. Growth %',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'cashincometaxpaidrefund.lasttwelvemonths': {
                        fieldId: 'cashincometaxpaidrefund.lasttwelvemonths',
                        category: {
                            categoryId: 'cashflowstatement',
                            displayName: 'Cash Flow Statement',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: true,
                        displayName: 'Cash Income Tax Paid (Refund)',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'cashinterestpaid.lasttwelvemonths': {
                        fieldId: 'cashinterestpaid.lasttwelvemonths',
                        category: {
                            categoryId: 'cashflowstatement',
                            displayName: 'Cash Flow Statement',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: true,
                        displayName: 'Cash Interest Paid',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    change_in_number_of_institutional_holders: {
                        fieldId: 'change_in_number_of_institutional_holders',
                        category: {
                            categoryId: 'institutional_interest',
                            displayName: 'Institutional Interest',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Change in # of Institutional Holders',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: true,
                    },
                    community_sentiment_date: {
                        fieldId: 'community_sentiment_date',
                        category: {
                            categoryId: 'userInsights',
                            displayName: 'User Insights',
                        },
                        labels: [],
                        type: 'STRING',
                        deprecated: false,
                        displayName: 'Community Sentiment Date',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: true,
                    },
                    consecutive_years_of_dividend_growth_count: {
                        fieldId: 'consecutive_years_of_dividend_growth_count',
                        category: {
                            categoryId: 'dividends_and_splits',
                            displayName: 'Dividends and Splits',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Consecutive Years of Dividend Growth Count',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    count: {
                        fieldId: 'count',
                        category: {
                            categoryId: 'visualizations',
                            displayName: 'Visualizations',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Document Count',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'currentratio.lasttwelvemonths': {
                        fieldId: 'currentratio.lasttwelvemonths',
                        category: {
                            categoryId: 'valuation',
                            displayName: 'Valuation Measures',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Current Ratio',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    dateisestimate: {
                        fieldId: 'dateisestimate',
                        category: {
                            categoryId: 'visualizations',
                            displayName: 'Visualizations',
                        },
                        labels: [],
                        type: 'BOOLEAN',
                        deprecated: false,
                        displayName: 'Estimate Date',
                        dropdownSupported: false,
                        sortable: false,
                        isPremium: false,
                    },
                    'days_to_cover_short.value': {
                        fieldId: 'days_to_cover_short.value',
                        category: {
                            categoryId: 'short_interest',
                            displayName: 'Short Interest',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Short Interest Ratio',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'daysoutstandinginventoryaverageinventory.lasttwelvemonths': {
                        fieldId: 'daysoutstandinginventoryaverageinventory.lasttwelvemonths',
                        category: {
                            categoryId: 'cashflowstatement',
                            displayName: 'Cash Flow Statement',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: true,
                        displayName: 'Days Outstanding Inventory (Average Inventory)',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'dayssalesoutstandingaveragereceivables.lasttwelvemonths': {
                        fieldId: 'dayssalesoutstandingaveragereceivables.lasttwelvemonths',
                        category: {
                            categoryId: 'cashflowstatement',
                            displayName: 'Cash Flow Statement',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: true,
                        displayName: 'Days Sales Outstanding (Average Receivables)',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    dayvolume: {
                        fieldId: 'dayvolume',
                        category: {
                            categoryId: 'keystats',
                            displayName: 'Share Statistics',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Day Volume',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'dilutedeps1yrgrowth.lasttwelvemonths': {
                        fieldId: 'dilutedeps1yrgrowth.lasttwelvemonths',
                        category: {
                            categoryId: 'income',
                            displayName: 'Income',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Diluted EPS, 1 Yr. Growth %',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'dilutedepscontinuingoperations.lasttwelvemonths': {
                        fieldId: 'dilutedepscontinuingoperations.lasttwelvemonths',
                        category: {
                            categoryId: 'income',
                            displayName: 'Income',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Diluted EPS - Continuing Operations',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'dilutedweightedaveragesharesoutstanding.lasttwelvemonths': {
                        fieldId: 'dilutedweightedaveragesharesoutstanding.lasttwelvemonths',
                        category: {
                            categoryId: 'keystats',
                            displayName: 'Share Statistics',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: true,
                        displayName: 'Diluted Weighted Average Shares Outstanding',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'dividendpershare.lasttwelvemonths': {
                        fieldId: 'dividendpershare.lasttwelvemonths',
                        category: {
                            categoryId: 'non_screenable_field',
                            displayName: 'Field is not screenable',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Dividend Per Share',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    dividendyield: {
                        fieldId: 'dividendyield',
                        category: {
                            categoryId: 'ratios',
                            displayName: 'Ratios',
                        },
                        labels: [
                            {
                                displayName: '< 2%',
                                criteria: {
                                    operator: 'LT',
                                    operands: ['dividendyield', 2],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: '2% to 5%',
                                criteria: {
                                    operator: 'BTWN',
                                    operands: ['dividendyield', 2, 5],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: '5% to 8%',
                                criteria: {
                                    operator: 'BTWN',
                                    operands: ['dividendyield', 5, 8],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: '8% to 10%',
                                criteria: {
                                    operator: 'BTWN',
                                    operands: ['dividendyield', 8, 10],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: '> 10%',
                                criteria: {
                                    operator: 'GT',
                                    operands: ['dividendyield', 10],
                                },
                                dependentFilterLabel: null,
                            },
                        ],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Dividend Yield',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    earnings_consistency: {
                        fieldId: 'earnings_consistency',
                        category: {
                            categoryId: 'fair_value',
                            displayName: 'Fair Value',
                        },
                        labels: [
                            {
                                displayName: 'Low',
                                criteria: {
                                    operator: 'BTWN',
                                    operands: ['earnings_consistency', 0.85, 0.97],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Medium',
                                criteria: {
                                    operator: 'BTWN',
                                    operands: ['earnings_consistency', 0.97, 0.985],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'High',
                                criteria: {
                                    operator: 'GT',
                                    operands: ['earnings_consistency', 0.985],
                                },
                                dependentFilterLabel: null,
                            },
                        ],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Earnings Consistency',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: true,
                    },
                    'earningsfromcontinuingoperations.lasttwelvemonths': {
                        fieldId: 'earningsfromcontinuingoperations.lasttwelvemonths',
                        category: {
                            categoryId: 'income',
                            displayName: 'Income',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: true,
                        displayName: 'Earnings From Continuing Operations',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'ebit.lasttwelvemonths': {
                        fieldId: 'ebit.lasttwelvemonths',
                        category: {
                            categoryId: 'income',
                            displayName: 'Income',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'EBIT',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'ebitda.lasttwelvemonths': {
                        fieldId: 'ebitda.lasttwelvemonths',
                        category: {
                            categoryId: 'income',
                            displayName: 'Income',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'EBITDA',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'ebitda1yrgrowth.lasttwelvemonths': {
                        fieldId: 'ebitda1yrgrowth.lasttwelvemonths',
                        category: {
                            categoryId: 'income',
                            displayName: 'Income',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'EBITDA, 1 Yr. Growth %',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'ebitdainterestexpense.lasttwelvemonths': {
                        fieldId: 'ebitdainterestexpense.lasttwelvemonths',
                        category: {
                            categoryId: 'valuation',
                            displayName: 'Valuation Measures',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'EBITDA / Interest Expense',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'ebitdamargin.lasttwelvemonths': {
                        fieldId: 'ebitdamargin.lasttwelvemonths',
                        category: {
                            categoryId: 'valuation',
                            displayName: 'Valuation Measures',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'EBITDA Margin %',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'ebitinterestexpense.lasttwelvemonths': {
                        fieldId: 'ebitinterestexpense.lasttwelvemonths',
                        category: {
                            categoryId: 'valuation',
                            displayName: 'Valuation Measures',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'EBIT / Interest Expense',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'ebtexclunusualitems.lasttwelvemonths': {
                        fieldId: 'ebtexclunusualitems.lasttwelvemonths',
                        category: {
                            categoryId: 'income',
                            displayName: 'Income',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: true,
                        displayName: 'EBT, Excl. Unusual Items',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'ecstotalcommonsharesoutstanding.lasttwelvemonths': {
                        fieldId: 'ecstotalcommonsharesoutstanding.lasttwelvemonths',
                        category: {
                            categoryId: 'keystats',
                            displayName: 'Share Statistics',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: true,
                        displayName: 'ECS Total Common Shares Outstanding',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'ecstotalsharesoutstandingonfilingdate.lasttwelvemonths': {
                        fieldId: 'ecstotalsharesoutstandingonfilingdate.lasttwelvemonths',
                        category: {
                            categoryId: 'keystats',
                            displayName: 'Share Statistics',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: true,
                        displayName: 'ECS Total Shares Outstanding on Filing Date',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    enddatetime: {
                        fieldId: 'enddatetime',
                        category: {
                            categoryId: 'visualizations',
                            displayName: 'Visualizations',
                        },
                        labels: [],
                        type: 'DATE',
                        deprecated: false,
                        displayName: 'Event End Date',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    environmental_score: {
                        fieldId: 'environmental_score',
                        category: {
                            categoryId: 'esg_scores',
                            displayName: 'ESG Scores',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Environmental Score',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    eodprice: {
                        fieldId: 'eodprice',
                        category: {
                            categoryId: 'keystats',
                            displayName: 'Share Statistics',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'EOD Price',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    eodvolume: {
                        fieldId: 'eodvolume',
                        category: {
                            categoryId: 'keystats',
                            displayName: 'Share Statistics',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'EOD Volume',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    epsactual: {
                        fieldId: 'epsactual',
                        category: {
                            categoryId: 'visualizations',
                            displayName: 'Visualizations',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Reported EPS',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    epsconsensus: {
                        fieldId: 'epsconsensus',
                        category: {
                            categoryId: 'visualizations',
                            displayName: 'Visualizations',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'EPS Consensus',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    epsestimate: {
                        fieldId: 'epsestimate',
                        category: {
                            categoryId: 'visualizations',
                            displayName: 'Visualizations',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'EPS Estimate',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'epsgrowth.lasttwelvemonths': {
                        fieldId: 'epsgrowth.lasttwelvemonths',
                        category: {
                            categoryId: 'earnings',
                            displayName: 'Earnings',
                        },
                        labels: [
                            {
                                displayName: '< 15%',
                                criteria: {
                                    operator: 'LT',
                                    operands: ['epsgrowth.lasttwelvemonths', 15],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: '15% to 25%',
                                criteria: {
                                    operator: 'BTWN',
                                    operands: ['epsgrowth.lasttwelvemonths', 15, 25],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: '25% to 50%',
                                criteria: {
                                    operator: 'BTWN',
                                    operands: ['epsgrowth.lasttwelvemonths', 25, 50],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: '50% to 100%',
                                criteria: {
                                    operator: 'BTWN',
                                    operands: ['epsgrowth.lasttwelvemonths', 50, 100],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: '> 100%',
                                criteria: {
                                    operator: 'GT',
                                    operands: ['epsgrowth.lasttwelvemonths', 100],
                                },
                                dependentFilterLabel: null,
                            },
                        ],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'EPS Growth',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    epssurprisepct: {
                        fieldId: 'epssurprisepct',
                        category: {
                            categoryId: 'visualizations',
                            displayName: 'Visualizations',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Surprise (%)',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    esg_score: {
                        fieldId: 'esg_score',
                        category: {
                            categoryId: 'esg_scores',
                            displayName: 'ESG Scores',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'ESG Score',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    estimated_earnings_growth: {
                        fieldId: 'estimated_earnings_growth',
                        category: {
                            categoryId: 'fair_value',
                            displayName: 'Fair Value',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Estimated Earnings Growth YoY %',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: true,
                    },
                    estimated_revenue_growth: {
                        fieldId: 'estimated_revenue_growth',
                        category: {
                            categoryId: 'fair_value',
                            displayName: 'Fair Value',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Estimated Revenue Growth YoY %',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: true,
                    },
                    eventId: {
                        fieldId: 'eventId',
                        category: {
                            categoryId: 'visualizations',
                            displayName: 'Visualizations',
                        },
                        labels: [],
                        type: 'STRING',
                        deprecated: false,
                        displayName: 'Event Id',
                        dropdownSupported: false,
                        sortable: false,
                        isPremium: false,
                    },
                    eventid: {
                        fieldId: 'eventid',
                        category: {
                            categoryId: 'visualizations',
                            displayName: 'Visualizations',
                        },
                        labels: [],
                        type: 'STRING',
                        deprecated: false,
                        displayName: 'Event Id',
                        dropdownSupported: false,
                        sortable: false,
                        isPremium: false,
                    },
                    eventname: {
                        fieldId: 'eventname',
                        category: {
                            categoryId: 'visualizations',
                            displayName: 'Visualizations',
                        },
                        labels: [],
                        type: 'STRING',
                        deprecated: false,
                        displayName: 'Event Name',
                        dropdownSupported: false,
                        sortable: false,
                        isPremium: false,
                    },
                    eventtype: {
                        fieldId: 'eventtype',
                        category: {
                            categoryId: 'visualizations',
                            displayName: 'Visualizations',
                        },
                        labels: [],
                        type: 'STRING',
                        deprecated: false,
                        displayName: 'Event Type',
                        dropdownSupported: false,
                        sortable: false,
                        isPremium: false,
                    },
                    exchange: {
                        fieldId: 'exchange',
                        category: {
                            categoryId: 'profile',
                            displayName: 'Profile',
                        },
                        labels: [
                            {
                                displayName: 'NasdaqGS',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['exchange', 'NMS'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'NYSE',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['exchange', 'NYQ'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Nasdaq',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['exchange', 'NAS'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'YHD',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['exchange', 'YHD'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'NasdaqCM',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['exchange', 'NCM'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'NasdaqGM',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['exchange', 'NGM'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'BSE',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['exchange', 'BSE'],
                                },
                                dependentFilterLabel: null,
                            },
                        ],
                        type: 'STRING',
                        deprecated: false,
                        displayName: 'Exchange',
                        dropdownSupported: true,
                        sortable: true,
                        isPremium: false,
                    },
                    fiftytwowkpercentchange: {
                        fieldId: 'fiftytwowkpercentchange',
                        category: {
                            categoryId: 'keystats',
                            displayName: 'Share Statistics',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: '52 Week Percent Change',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    fiscalyear: {
                        fieldId: 'fiscalyear',
                        category: {
                            categoryId: 'visualizations',
                            displayName: 'Visualizations',
                        },
                        labels: [],
                        type: 'STRING',
                        deprecated: false,
                        displayName: 'Financial Calendar Year',
                        dropdownSupported: false,
                        sortable: false,
                        isPremium: false,
                    },
                    forward_dividend_per_share: {
                        fieldId: 'forward_dividend_per_share',
                        category: {
                            categoryId: 'dividends_and_splits',
                            displayName: 'Dividends and Splits',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Forward Dividend Per Share',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    forward_dividend_yield: {
                        fieldId: 'forward_dividend_yield',
                        category: {
                            categoryId: 'dividends_and_splits',
                            displayName: 'Dividends and Splits',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Forward Dividend Yield',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    governance_score: {
                        fieldId: 'governance_score',
                        category: {
                            categoryId: 'esg_scores',
                            displayName: 'ESG Scores',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Governance Score',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'grossprofit.lasttwelvemonths': {
                        fieldId: 'grossprofit.lasttwelvemonths',
                        category: {
                            categoryId: 'income',
                            displayName: 'Income',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Gross Profit',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'grossprofitmargin.lasttwelvemonths': {
                        fieldId: 'grossprofitmargin.lasttwelvemonths',
                        category: {
                            categoryId: 'financials',
                            displayName: 'Financial Highlights',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Gross Profit Margin %',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    highest_controversy: {
                        fieldId: 'highest_controversy',
                        category: {
                            categoryId: 'esg_scores',
                            displayName: 'ESG Scores',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Highest Controversy',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    holders_fund_types: {
                        fieldId: 'holders_fund_types',
                        category: {
                            categoryId: 'institutional_interest',
                            displayName: 'Institutional Interest',
                        },
                        labels: [
                            {
                                displayName: 'Investment Advisor',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['holders_fund_types', 'Investment Advisor'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Investment Advisor/Hedge Fund',
                                criteria: {
                                    operator: 'EQ',
                                    operands: [
                                        'holders_fund_types',
                                        'Investment Advisor/Hedge Fund',
                                    ],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Bank and Trust',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['holders_fund_types', 'Bank and Trust'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Pension Fund',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['holders_fund_types', 'Pension Fund'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Research Firm',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['holders_fund_types', 'Research Firm'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Hedge Fund',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['holders_fund_types', 'Hedge Fund'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Sovereign Wealth Fund',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['holders_fund_types', 'Sovereign Wealth Fund'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Insurance Company',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['holders_fund_types', 'Insurance Company'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Private Equity',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['holders_fund_types', 'Private Equity'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Endowment Fund',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['holders_fund_types', 'Endowment Fund'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Venture Capital',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['holders_fund_types', 'Venture Capital'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Foundation',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['holders_fund_types', 'Foundation'],
                                },
                                dependentFilterLabel: null,
                            },
                        ],
                        type: 'STRING',
                        deprecated: false,
                        displayName: 'Institutional Owner Types',
                        dropdownSupported: true,
                        sortable: true,
                        isPremium: true,
                    },
                    indexmembership: {
                        fieldId: 'indexmembership',
                        category: {
                            categoryId: 'indexmembership',
                            displayName: 'Index Membership',
                        },
                        labels: [],
                        type: 'STRING',
                        deprecated: false,
                        displayName: 'Index Membership',
                        dropdownSupported: false,
                        sortable: false,
                        isPremium: false,
                    },
                    industry: {
                        fieldId: 'industry',
                        category: {
                            categoryId: 'sector_industry',
                            displayName: 'Sector & Industry',
                        },
                        labels: [
                            {
                                displayName: 'Agricultural Inputs',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Agricultural Inputs'],
                                },
                                dependentFilterLabel: 'Basic Materials',
                            },
                            {
                                displayName: 'Building Materials',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Building Materials'],
                                },
                                dependentFilterLabel: 'Basic Materials',
                            },
                            {
                                displayName: 'Chemicals',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Chemicals'],
                                },
                                dependentFilterLabel: 'Basic Materials',
                            },
                            {
                                displayName: 'Specialty Chemicals',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Specialty Chemicals'],
                                },
                                dependentFilterLabel: 'Basic Materials',
                            },
                            {
                                displayName: 'Lumber & Wood Production',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Lumber & Wood Production'],
                                },
                                dependentFilterLabel: 'Basic Materials',
                            },
                            {
                                displayName: 'Paper & Paper Products',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Paper & Paper Products'],
                                },
                                dependentFilterLabel: 'Basic Materials',
                            },
                            {
                                displayName: 'Aluminum',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Aluminum'],
                                },
                                dependentFilterLabel: 'Basic Materials',
                            },
                            {
                                displayName: 'Copper',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Copper'],
                                },
                                dependentFilterLabel: 'Basic Materials',
                            },
                            {
                                displayName: 'Other Industrial Metals & Mining',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Other Industrial Metals & Mining'],
                                },
                                dependentFilterLabel: 'Basic Materials',
                            },
                            {
                                displayName: 'Gold',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Gold'],
                                },
                                dependentFilterLabel: 'Basic Materials',
                            },
                            {
                                displayName: 'Silver',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Silver'],
                                },
                                dependentFilterLabel: 'Basic Materials',
                            },
                            {
                                displayName: 'Other Precious Metals & Mining',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Other Precious Metals & Mining'],
                                },
                                dependentFilterLabel: 'Basic Materials',
                            },
                            {
                                displayName: 'Coking Coal',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Coking Coal'],
                                },
                                dependentFilterLabel: 'Basic Materials',
                            },
                            {
                                displayName: 'Steel',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Steel'],
                                },
                                dependentFilterLabel: 'Basic Materials',
                            },
                            {
                                displayName: 'Auto & Truck Dealerships',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Auto & Truck Dealerships'],
                                },
                                dependentFilterLabel: 'Consumer Cyclical',
                            },
                            {
                                displayName: 'Auto Manufacturers',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Auto Manufacturers'],
                                },
                                dependentFilterLabel: 'Consumer Cyclical',
                            },
                            {
                                displayName: 'Auto Parts',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Auto Parts'],
                                },
                                dependentFilterLabel: 'Consumer Cyclical',
                            },
                            {
                                displayName: 'Recreational Vehicles',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Recreational Vehicles'],
                                },
                                dependentFilterLabel: 'Consumer Cyclical',
                            },
                            {
                                displayName: 'Furnishings, Fixtures & Appliances',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Furnishings, Fixtures & Appliances'],
                                },
                                dependentFilterLabel: 'Consumer Cyclical',
                            },
                            {
                                displayName: 'Residential Construction',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Residential Construction'],
                                },
                                dependentFilterLabel: 'Consumer Cyclical',
                            },
                            {
                                displayName: 'Textile Manufacturing',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Textile Manufacturing'],
                                },
                                dependentFilterLabel: 'Consumer Cyclical',
                            },
                            {
                                displayName: 'Apparel Manufacturing',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Apparel Manufacturing'],
                                },
                                dependentFilterLabel: 'Consumer Cyclical',
                            },
                            {
                                displayName: 'Footwear & Accessories',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Footwear & Accessories'],
                                },
                                dependentFilterLabel: 'Consumer Cyclical',
                            },
                            {
                                displayName: 'Packaging & Containers',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Packaging & Containers'],
                                },
                                dependentFilterLabel: 'Consumer Cyclical',
                            },
                            {
                                displayName: 'Personal Services',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Personal Services'],
                                },
                                dependentFilterLabel: 'Consumer Cyclical',
                            },
                            {
                                displayName: 'Restaurants',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Restaurants'],
                                },
                                dependentFilterLabel: 'Consumer Cyclical',
                            },
                            {
                                displayName: 'Apparel Retail',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Apparel Retail'],
                                },
                                dependentFilterLabel: 'Consumer Cyclical',
                            },
                            {
                                displayName: 'Department Stores',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Department Stores'],
                                },
                                dependentFilterLabel: 'Consumer Cyclical',
                            },
                            {
                                displayName: 'Home Improvement Retail',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Home Improvement Retail'],
                                },
                                dependentFilterLabel: 'Consumer Cyclical',
                            },
                            {
                                displayName: 'Luxury Goods',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Luxury Goods'],
                                },
                                dependentFilterLabel: 'Consumer Cyclical',
                            },
                            {
                                displayName: 'Internet Retail',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Internet Retail'],
                                },
                                dependentFilterLabel: 'Consumer Cyclical',
                            },
                            {
                                displayName: 'Specialty Retail',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Specialty Retail'],
                                },
                                dependentFilterLabel: 'Consumer Cyclical',
                            },
                            {
                                displayName: 'Gambling',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Gambling'],
                                },
                                dependentFilterLabel: 'Consumer Cyclical',
                            },
                            {
                                displayName: 'Leisure',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Leisure'],
                                },
                                dependentFilterLabel: 'Consumer Cyclical',
                            },
                            {
                                displayName: 'Lodging',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Lodging'],
                                },
                                dependentFilterLabel: 'Consumer Cyclical',
                            },
                            {
                                displayName: 'Resorts & Casinos',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Resorts & Casinos'],
                                },
                                dependentFilterLabel: 'Consumer Cyclical',
                            },
                            {
                                displayName: 'Travel Services',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Travel Services'],
                                },
                                dependentFilterLabel: 'Consumer Cyclical',
                            },
                            {
                                displayName: 'Asset Management',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Asset Management'],
                                },
                                dependentFilterLabel: 'Financial Services',
                            },
                            {
                                displayName: 'Banks—Diversified',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Banks—Diversified'],
                                },
                                dependentFilterLabel: 'Financial Services',
                            },
                            {
                                displayName: 'Banks—Regional',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Banks—Regional'],
                                },
                                dependentFilterLabel: 'Financial Services',
                            },
                            {
                                displayName: 'Mortgage Finance',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Mortgage Finance'],
                                },
                                dependentFilterLabel: 'Financial Services',
                            },
                            {
                                displayName: 'Capital Markets',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Capital Markets'],
                                },
                                dependentFilterLabel: 'Financial Services',
                            },
                            {
                                displayName: 'Financial Data & Stock Exchanges',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Financial Data & Stock Exchanges'],
                                },
                                dependentFilterLabel: 'Financial Services',
                            },
                            {
                                displayName: 'Insurance—Life',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Insurance—Life'],
                                },
                                dependentFilterLabel: 'Financial Services',
                            },
                            {
                                displayName: 'Insurance—Property & Casualty',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Insurance—Property & Casualty'],
                                },
                                dependentFilterLabel: 'Financial Services',
                            },
                            {
                                displayName: 'Insurance—Reinsurance',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Insurance—Reinsurance'],
                                },
                                dependentFilterLabel: 'Financial Services',
                            },
                            {
                                displayName: 'Insurance—Specialty',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Insurance—Specialty'],
                                },
                                dependentFilterLabel: 'Financial Services',
                            },
                            {
                                displayName: 'Insurance Brokers',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Insurance Brokers'],
                                },
                                dependentFilterLabel: 'Financial Services',
                            },
                            {
                                displayName: 'Insurance—Diversified',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Insurance—Diversified'],
                                },
                                dependentFilterLabel: 'Financial Services',
                            },
                            {
                                displayName: 'Shell Companies',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Shell Companies'],
                                },
                                dependentFilterLabel: 'Financial Services',
                            },
                            {
                                displayName: 'Financial Conglomerates',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Financial Conglomerates'],
                                },
                                dependentFilterLabel: 'Financial Services',
                            },
                            {
                                displayName: 'Credit Services',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Credit Services'],
                                },
                                dependentFilterLabel: 'Financial Services',
                            },
                            {
                                displayName: 'Real Estate—Development',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Real Estate—Development'],
                                },
                                dependentFilterLabel: 'Real Estate',
                            },
                            {
                                displayName: 'Real Estate Services',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Real Estate Services'],
                                },
                                dependentFilterLabel: 'Real Estate',
                            },
                            {
                                displayName: 'Real Estate—Diversified',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Real Estate—Diversified'],
                                },
                                dependentFilterLabel: 'Real Estate',
                            },
                            {
                                displayName: 'REIT—Healthcare Facilities',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'REIT—Healthcare Facilities'],
                                },
                                dependentFilterLabel: 'Real Estate',
                            },
                            {
                                displayName: 'REIT—Hotel & Motel',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'REIT—Hotel & Motel'],
                                },
                                dependentFilterLabel: 'Real Estate',
                            },
                            {
                                displayName: 'REIT—Industrial',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'REIT—Industrial'],
                                },
                                dependentFilterLabel: 'Real Estate',
                            },
                            {
                                displayName: 'REIT—Office',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'REIT—Office'],
                                },
                                dependentFilterLabel: 'Real Estate',
                            },
                            {
                                displayName: 'REIT—Residential',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'REIT—Residential'],
                                },
                                dependentFilterLabel: 'Real Estate',
                            },
                            {
                                displayName: 'REIT—Retail',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'REIT—Retail'],
                                },
                                dependentFilterLabel: 'Real Estate',
                            },
                            {
                                displayName: 'REIT—Mortgage',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'REIT—Mortgage'],
                                },
                                dependentFilterLabel: 'Real Estate',
                            },
                            {
                                displayName: 'REIT—Specialty',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'REIT—Specialty'],
                                },
                                dependentFilterLabel: 'Real Estate',
                            },
                            {
                                displayName: 'REIT—Diversified',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'REIT—Diversified'],
                                },
                                dependentFilterLabel: 'Real Estate',
                            },
                            {
                                displayName: 'Beverages—Brewers',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Beverages—Brewers'],
                                },
                                dependentFilterLabel: 'Consumer Defensive',
                            },
                            {
                                displayName: 'Beverages—Wineries & Distilleries',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Beverages—Wineries & Distilleries'],
                                },
                                dependentFilterLabel: 'Consumer Defensive',
                            },
                            {
                                displayName: 'Beverages—Non-Alcoholic',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Beverages—Non-Alcoholic'],
                                },
                                dependentFilterLabel: 'Consumer Defensive',
                            },
                            {
                                displayName: 'Confectioners',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Confectioners'],
                                },
                                dependentFilterLabel: 'Consumer Defensive',
                            },
                            {
                                displayName: 'Farm Products',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Farm Products'],
                                },
                                dependentFilterLabel: 'Consumer Defensive',
                            },
                            {
                                displayName: 'Household & Personal Products',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Household & Personal Products'],
                                },
                                dependentFilterLabel: 'Consumer Defensive',
                            },
                            {
                                displayName: 'Packaged Foods',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Packaged Foods'],
                                },
                                dependentFilterLabel: 'Consumer Defensive',
                            },
                            {
                                displayName: 'Education & Training Services',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Education & Training Services'],
                                },
                                dependentFilterLabel: 'Consumer Defensive',
                            },
                            {
                                displayName: 'Discount Stores',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Discount Stores'],
                                },
                                dependentFilterLabel: 'Consumer Defensive',
                            },
                            {
                                displayName: 'Food Distribution',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Food Distribution'],
                                },
                                dependentFilterLabel: 'Consumer Defensive',
                            },
                            {
                                displayName: 'Grocery Stores',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Grocery Stores'],
                                },
                                dependentFilterLabel: 'Consumer Defensive',
                            },
                            {
                                displayName: 'Tobacco',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Tobacco'],
                                },
                                dependentFilterLabel: 'Consumer Defensive',
                            },
                            {
                                displayName: 'Biotechnology',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Biotechnology'],
                                },
                                dependentFilterLabel: 'Healthcare',
                            },
                            {
                                displayName: 'Drug Manufacturers—General',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Drug Manufacturers—General'],
                                },
                                dependentFilterLabel: 'Healthcare',
                            },
                            {
                                displayName: 'Drug Manufacturers—Specialty & Generic',
                                criteria: {
                                    operator: 'EQ',
                                    operands: [
                                        'industry',
                                        'Drug Manufacturers—Specialty & Generic',
                                    ],
                                },
                                dependentFilterLabel: 'Healthcare',
                            },
                            {
                                displayName: 'Healthcare Plans',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Healthcare Plans'],
                                },
                                dependentFilterLabel: 'Healthcare',
                            },
                            {
                                displayName: 'Medical Care Facilities',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Medical Care Facilities'],
                                },
                                dependentFilterLabel: 'Healthcare',
                            },
                            {
                                displayName: 'Pharmaceutical Retailers',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Pharmaceutical Retailers'],
                                },
                                dependentFilterLabel: 'Healthcare',
                            },
                            {
                                displayName: 'Health Information Services',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Health Information Services'],
                                },
                                dependentFilterLabel: 'Healthcare',
                            },
                            {
                                displayName: 'Medical Devices',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Medical Devices'],
                                },
                                dependentFilterLabel: 'Healthcare',
                            },
                            {
                                displayName: 'Medical Instruments & Supplies',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Medical Instruments & Supplies'],
                                },
                                dependentFilterLabel: 'Healthcare',
                            },
                            {
                                displayName: 'Diagnostics & Research',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Diagnostics & Research'],
                                },
                                dependentFilterLabel: 'Healthcare',
                            },
                            {
                                displayName: 'Medical Distribution',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Medical Distribution'],
                                },
                                dependentFilterLabel: 'Healthcare',
                            },
                            {
                                displayName: 'Utilities—Independent Power Producers',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Utilities—Independent Power Producers'],
                                },
                                dependentFilterLabel: 'Utilities',
                            },
                            {
                                displayName: 'Utilities—Renewable',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Utilities—Renewable'],
                                },
                                dependentFilterLabel: 'Utilities',
                            },
                            {
                                displayName: 'Utilities—Regulated Water',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Utilities—Regulated Water'],
                                },
                                dependentFilterLabel: 'Utilities',
                            },
                            {
                                displayName: 'Utilities—Regulated Electric',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Utilities—Regulated Electric'],
                                },
                                dependentFilterLabel: 'Utilities',
                            },
                            {
                                displayName: 'Utilities—Regulated Gas',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Utilities—Regulated Gas'],
                                },
                                dependentFilterLabel: 'Utilities',
                            },
                            {
                                displayName: 'Utilities—Diversified',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Utilities—Diversified'],
                                },
                                dependentFilterLabel: 'Utilities',
                            },
                            {
                                displayName: 'Telecom Services',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Telecom Services'],
                                },
                                dependentFilterLabel: 'Communication Services',
                            },
                            {
                                displayName: 'Advertising Agencies',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Advertising Agencies'],
                                },
                                dependentFilterLabel: 'Communication Services',
                            },
                            {
                                displayName: 'Publishing',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Publishing'],
                                },
                                dependentFilterLabel: 'Communication Services',
                            },
                            {
                                displayName: 'Broadcasting',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Broadcasting'],
                                },
                                dependentFilterLabel: 'Communication Services',
                            },
                            {
                                displayName: 'Entertainment',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Entertainment'],
                                },
                                dependentFilterLabel: 'Communication Services',
                            },
                            {
                                displayName: 'Internet Content & Information',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Internet Content & Information'],
                                },
                                dependentFilterLabel: 'Communication Services',
                            },
                            {
                                displayName: 'Electronic Gaming & Multimedia',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Electronic Gaming & Multimedia'],
                                },
                                dependentFilterLabel: 'Communication Services',
                            },
                            {
                                displayName: 'Oil & Gas Drilling',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Oil & Gas Drilling'],
                                },
                                dependentFilterLabel: 'Energy',
                            },
                            {
                                displayName: 'Oil & Gas E&P',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Oil & Gas E&P'],
                                },
                                dependentFilterLabel: 'Energy',
                            },
                            {
                                displayName: 'Oil & Gas Integrated',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Oil & Gas Integrated'],
                                },
                                dependentFilterLabel: 'Energy',
                            },
                            {
                                displayName: 'Oil & Gas Midstream',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Oil & Gas Midstream'],
                                },
                                dependentFilterLabel: 'Energy',
                            },
                            {
                                displayName: 'Oil & Gas Refining & Marketing',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Oil & Gas Refining & Marketing'],
                                },
                                dependentFilterLabel: 'Energy',
                            },
                            {
                                displayName: 'Oil & Gas Equipment & Services',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Oil & Gas Equipment & Services'],
                                },
                                dependentFilterLabel: 'Energy',
                            },
                            {
                                displayName: 'Thermal Coal',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Thermal Coal'],
                                },
                                dependentFilterLabel: 'Energy',
                            },
                            {
                                displayName: 'Uranium',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Uranium'],
                                },
                                dependentFilterLabel: 'Energy',
                            },
                            {
                                displayName: 'Aerospace & Defense',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Aerospace & Defense'],
                                },
                                dependentFilterLabel: 'Industrials',
                            },
                            {
                                displayName: 'Specialty Business Services',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Specialty Business Services'],
                                },
                                dependentFilterLabel: 'Industrials',
                            },
                            {
                                displayName: 'Consulting Services',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Consulting Services'],
                                },
                                dependentFilterLabel: 'Industrials',
                            },
                            {
                                displayName: 'Rental & Leasing Services',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Rental & Leasing Services'],
                                },
                                dependentFilterLabel: 'Industrials',
                            },
                            {
                                displayName: 'Security & Protection Services',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Security & Protection Services'],
                                },
                                dependentFilterLabel: 'Industrials',
                            },
                            {
                                displayName: 'Staffing & Employment Services',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Staffing & Employment Services'],
                                },
                                dependentFilterLabel: 'Industrials',
                            },
                            {
                                displayName: 'Conglomerates',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Conglomerates'],
                                },
                                dependentFilterLabel: 'Industrials',
                            },
                            {
                                displayName: 'Engineering & Construction',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Engineering & Construction'],
                                },
                                dependentFilterLabel: 'Industrials',
                            },
                            {
                                displayName: 'Infrastructure Operations',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Infrastructure Operations'],
                                },
                                dependentFilterLabel: 'Industrials',
                            },
                            {
                                displayName: 'Building Products & Equipment',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Building Products & Equipment'],
                                },
                                dependentFilterLabel: 'Industrials',
                            },
                            {
                                displayName: 'Farm & Heavy Construction Machinery',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Farm & Heavy Construction Machinery'],
                                },
                                dependentFilterLabel: 'Industrials',
                            },
                            {
                                displayName: 'Industrial Distribution',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Industrial Distribution'],
                                },
                                dependentFilterLabel: 'Industrials',
                            },
                            {
                                displayName: 'Business Equipment & Supplies',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Business Equipment & Supplies'],
                                },
                                dependentFilterLabel: 'Industrials',
                            },
                            {
                                displayName: 'Specialty Industrial Machinery',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Specialty Industrial Machinery'],
                                },
                                dependentFilterLabel: 'Industrials',
                            },
                            {
                                displayName: 'Metal Fabrication',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Metal Fabrication'],
                                },
                                dependentFilterLabel: 'Industrials',
                            },
                            {
                                displayName: 'Pollution & Treatment Controls',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Pollution & Treatment Controls'],
                                },
                                dependentFilterLabel: 'Industrials',
                            },
                            {
                                displayName: 'Tools & Accessories',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Tools & Accessories'],
                                },
                                dependentFilterLabel: 'Industrials',
                            },
                            {
                                displayName: 'Electrical Equipment & Parts',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Electrical Equipment & Parts'],
                                },
                                dependentFilterLabel: 'Industrials',
                            },
                            {
                                displayName: 'Airports & Air Services',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Airports & Air Services'],
                                },
                                dependentFilterLabel: 'Industrials',
                            },
                            {
                                displayName: 'Airlines',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Airlines'],
                                },
                                dependentFilterLabel: 'Industrials',
                            },
                            {
                                displayName: 'Railroads',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Railroads'],
                                },
                                dependentFilterLabel: 'Industrials',
                            },
                            {
                                displayName: 'Marine Shipping',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Marine Shipping'],
                                },
                                dependentFilterLabel: 'Industrials',
                            },
                            {
                                displayName: 'Trucking',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Trucking'],
                                },
                                dependentFilterLabel: 'Industrials',
                            },
                            {
                                displayName: 'Integrated Freight & Logistics',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Integrated Freight & Logistics'],
                                },
                                dependentFilterLabel: 'Industrials',
                            },
                            {
                                displayName: 'Waste Management',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Waste Management'],
                                },
                                dependentFilterLabel: 'Industrials',
                            },
                            {
                                displayName: 'Information Technology Services',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Information Technology Services'],
                                },
                                dependentFilterLabel: 'Technology',
                            },
                            {
                                displayName: 'Software—Application',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Software—Application'],
                                },
                                dependentFilterLabel: 'Technology',
                            },
                            {
                                displayName: 'Software—Infrastructure',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Software—Infrastructure'],
                                },
                                dependentFilterLabel: 'Technology',
                            },
                            {
                                displayName: 'Communication Equipment',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Communication Equipment'],
                                },
                                dependentFilterLabel: 'Technology',
                            },
                            {
                                displayName: 'Computer Hardware',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Computer Hardware'],
                                },
                                dependentFilterLabel: 'Technology',
                            },
                            {
                                displayName: 'Consumer Electronics',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Consumer Electronics'],
                                },
                                dependentFilterLabel: 'Technology',
                            },
                            {
                                displayName: 'Electronic Components',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Electronic Components'],
                                },
                                dependentFilterLabel: 'Technology',
                            },
                            {
                                displayName: 'Electronics & Computer Distribution',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Electronics & Computer Distribution'],
                                },
                                dependentFilterLabel: 'Technology',
                            },
                            {
                                displayName: 'Scientific & Technical Instruments',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Scientific & Technical Instruments'],
                                },
                                dependentFilterLabel: 'Technology',
                            },
                            {
                                displayName: 'Semiconductor Equipment & Materials',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Semiconductor Equipment & Materials'],
                                },
                                dependentFilterLabel: 'Technology',
                            },
                            {
                                displayName: 'Semiconductors',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Semiconductors'],
                                },
                                dependentFilterLabel: 'Technology',
                            },
                            {
                                displayName: 'Solar',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['industry', 'Solar'],
                                },
                                dependentFilterLabel: 'Technology',
                            },
                        ],
                        type: 'STRING',
                        dependentField: 'sector',
                        deprecated: false,
                        displayName: 'Industry',
                        dropdownSupported: true,
                        sortable: true,
                        isPremium: false,
                    },
                    intradaymarketcap: {
                        fieldId: 'intradaymarketcap',
                        category: {
                            categoryId: 'valuation',
                            displayName: 'Valuation Measures',
                        },
                        labels: [
                            {
                                displayName: 'Small Cap',
                                criteria: {
                                    operator: 'LT',
                                    operands: ['intradaymarketcap', 2000000000],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Mid Cap',
                                criteria: {
                                    operator: 'BTWN',
                                    operands: ['intradaymarketcap', 2000000000, 10000000000],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Large Cap',
                                criteria: {
                                    operator: 'BTWN',
                                    operands: ['intradaymarketcap', 10000000000, 100000000000],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Mega Cap',
                                criteria: {
                                    operator: 'GT',
                                    operands: ['intradaymarketcap', 100000000000],
                                },
                                dependentFilterLabel: null,
                            },
                        ],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Market Cap (Intraday)',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    intradayprice: {
                        fieldId: 'intradayprice',
                        category: {
                            categoryId: 'keystats',
                            displayName: 'Share Statistics',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Intraday Price',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    intradaypricechange: {
                        fieldId: 'intradaypricechange',
                        category: {
                            categoryId: 'keystats',
                            displayName: 'Share Statistics',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Change',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    is_morningstar_primary: {
                        fieldId: 'is_morningstar_primary',
                        category: {
                            categoryId: 'security_mapping',
                            displayName: 'Security Mapping',
                        },
                        labels: [],
                        type: 'BOOLEAN',
                        deprecated: false,
                        displayName: 'Morningstar Primary Key Identifier For Equities',
                        dropdownSupported: false,
                        sortable: false,
                        isPremium: false,
                    },
                    isin: {
                        fieldId: 'isin',
                        category: {
                            categoryId: 'security_mapping',
                            displayName: 'Security Mapping',
                        },
                        labels: [],
                        type: 'STRING',
                        deprecated: false,
                        displayName: 'Isin',
                        dropdownSupported: false,
                        sortable: false,
                        isPremium: false,
                    },
                    'lastclose52weekhigh.lasttwelvemonths': {
                        fieldId: 'lastclose52weekhigh.lasttwelvemonths',
                        category: {
                            categoryId: 'keystats',
                            displayName: 'Share Statistics',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Last Close 52 Week High',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'lastclose52weeklow.lasttwelvemonths': {
                        fieldId: 'lastclose52weeklow.lasttwelvemonths',
                        category: {
                            categoryId: 'keystats',
                            displayName: 'Share Statistics',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Last Close 52 Week Low',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'lastclosebsshout.lasttwelvemonths': {
                        fieldId: 'lastclosebsshout.lasttwelvemonths',
                        category: {
                            categoryId: 'keystats',
                            displayName: 'Share Statistics',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: true,
                        displayName: 'Last Close BS Shout',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'lastcloseindicateddividendstockprice.lasttwelvemonths': {
                        fieldId: 'lastcloseindicateddividendstockprice.lasttwelvemonths',
                        category: {
                            categoryId: 'keystats',
                            displayName: 'Share Statistics',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: true,
                        displayName: 'Last Close Indicated Dividend / Stock Price',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'lastclosemarketcap.lasttwelvemonths': {
                        fieldId: 'lastclosemarketcap.lasttwelvemonths',
                        category: {
                            categoryId: 'keystats',
                            displayName: 'Share Statistics',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Last Close Market Cap',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'lastclosemarketcapebtexclunusualitems.lasttwelvemonths': {
                        fieldId: 'lastclosemarketcapebtexclunusualitems.lasttwelvemonths',
                        category: {
                            categoryId: 'keystats',
                            displayName: 'Share Statistics',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: true,
                        displayName: 'Last Close Market Cap / EBT Excl. Unusual Items',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'lastclosemarketcaptotalrevenue.lasttwelvemonths': {
                        fieldId: 'lastclosemarketcaptotalrevenue.lasttwelvemonths',
                        category: {
                            categoryId: 'valuation',
                            displayName: 'Valuation Measures',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Last Close Market Cap / Total Revenue',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'lastcloseprice.lasttwelvemonths': {
                        fieldId: 'lastcloseprice.lasttwelvemonths',
                        category: {
                            categoryId: 'keystats',
                            displayName: 'Share Statistics',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: true,
                        displayName: 'Last Close Price',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'lastclosepricebookvalue.lasttwelvemonths': {
                        fieldId: 'lastclosepricebookvalue.lasttwelvemonths',
                        category: {
                            categoryId: 'valuation',
                            displayName: 'Valuation Measures',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Last Close Price / Book Value',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'lastclosepriceearnings.lasttwelvemonths': {
                        fieldId: 'lastclosepriceearnings.lasttwelvemonths',
                        category: {
                            categoryId: 'keystats',
                            displayName: 'Share Statistics',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Last Close Price / Earnings',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'lastclosepricetangiblebookvalue.lasttwelvemonths': {
                        fieldId: 'lastclosepricetangiblebookvalue.lasttwelvemonths',
                        category: {
                            categoryId: 'valuation',
                            displayName: 'Valuation Measures',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Last Close Price / Tangible Book Value',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'lastclosetevebit.lasttwelvemonths': {
                        fieldId: 'lastclosetevebit.lasttwelvemonths',
                        category: {
                            categoryId: 'valuation',
                            displayName: 'Valuation Measures',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Last Close TEV / EBIT',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'lastclosetevebitda.lasttwelvemonths': {
                        fieldId: 'lastclosetevebitda.lasttwelvemonths',
                        category: {
                            categoryId: 'valuation',
                            displayName: 'Valuation Measures',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Last Close TEV / EBITDA',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'lastclosetevtotalrevenue.lasttwelvemonths': {
                        fieldId: 'lastclosetevtotalrevenue.lasttwelvemonths',
                        category: {
                            categoryId: 'valuation',
                            displayName: 'Valuation Measures',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Last Close TEV / Total Revenue',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'leveredfreecashflow.lasttwelvemonths': {
                        fieldId: 'leveredfreecashflow.lasttwelvemonths',
                        category: {
                            categoryId: 'cashflowstatement',
                            displayName: 'Cash Flow Statement',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Levered Free Cash Flow',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'leveredfreecashflow1yrgrowth.lasttwelvemonths': {
                        fieldId: 'leveredfreecashflow1yrgrowth.lasttwelvemonths',
                        category: {
                            categoryId: 'cashflowstatement',
                            displayName: 'Cash Flow Statement',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Levered Free Cash Flow, 1 Yr. Growth %',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'ltdebtequity.lasttwelvemonths': {
                        fieldId: 'ltdebtequity.lasttwelvemonths',
                        category: {
                            categoryId: 'keystats',
                            displayName: 'Share Statistics',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'LT Debt/Equity',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    morningstar_economic_moat: {
                        fieldId: 'morningstar_economic_moat',
                        category: {
                            categoryId: 'morningstar_rating',
                            displayName: 'Morningstar Rating',
                        },
                        labels: [
                            {
                                displayName: 'Wide',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['morningstar_economic_moat', 'Wide'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Narrow',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['morningstar_economic_moat', 'Narrow'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'None',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['morningstar_economic_moat', 'None'],
                                },
                                dependentFilterLabel: null,
                            },
                        ],
                        type: 'STRING',
                        deprecated: false,
                        displayName: 'Economic Moat',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: true,
                    },
                    morningstar_last_close_price_to_fair_value: {
                        fieldId: 'morningstar_last_close_price_to_fair_value',
                        category: {
                            categoryId: 'morningstar_rating',
                            displayName: 'Morningstar Rating',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Last Close Price To Morningstar Fair Value Ratio',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: true,
                    },
                    morningstar_moat_trend: {
                        fieldId: 'morningstar_moat_trend',
                        category: {
                            categoryId: 'morningstar_rating',
                            displayName: 'Morningstar Rating',
                        },
                        labels: [
                            {
                                displayName: 'Stable',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['morningstar_moat_trend', 'Stable'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Positive',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['morningstar_moat_trend', 'Positive'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Negative',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['morningstar_moat_trend', 'Negative'],
                                },
                                dependentFilterLabel: null,
                            },
                        ],
                        type: 'STRING',
                        deprecated: false,
                        displayName: 'Moat Trend',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: true,
                    },
                    morningstar_rating: {
                        fieldId: 'morningstar_rating',
                        category: {
                            categoryId: 'morningstar_rating',
                            displayName: 'Morningstar Rating',
                        },
                        labels: [
                            {
                                displayName: '★',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['morningstar_rating', 1],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: '★★',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['morningstar_rating', 2],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: '★★★',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['morningstar_rating', 3],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: '★★★★',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['morningstar_rating', 4],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: '★★★★★',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['morningstar_rating', 5],
                                },
                                dependentFilterLabel: null,
                            },
                        ],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Morningstar Rating',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: true,
                    },
                    morningstar_rating_change: {
                        fieldId: 'morningstar_rating_change',
                        category: {
                            categoryId: 'morningstar_rating',
                            displayName: 'Morningstar Rating',
                        },
                        labels: [
                            {
                                displayName: 'Upgrade',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['morningstar_rating_change', 'Upgrade'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Downgrade',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['morningstar_rating_change', 'Downgrade'],
                                },
                                dependentFilterLabel: null,
                            },
                        ],
                        type: 'STRING',
                        deprecated: false,
                        displayName: 'Morningstar Rating Change',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: true,
                    },
                    morningstar_rating_updated_time: {
                        fieldId: 'morningstar_rating_updated_time',
                        category: {
                            categoryId: 'morningstar_rating',
                            displayName: 'Morningstar Rating',
                        },
                        labels: [
                            {
                                displayName: 'Today',
                                criteria: {
                                    operator: 'GTE',
                                    operands: ['morningstar_rating_updated_time', 'now/d', 'UTC'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Last Week',
                                criteria: {
                                    operator: 'GTE',
                                    operands: [
                                        'morningstar_rating_updated_time',
                                        'now-1w/d',
                                        'UTC',
                                    ],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Last Month',
                                criteria: {
                                    operator: 'GTE',
                                    operands: [
                                        'morningstar_rating_updated_time',
                                        'now-1M/d',
                                        'UTC',
                                    ],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Last 3 Months',
                                criteria: {
                                    operator: 'GTE',
                                    operands: [
                                        'morningstar_rating_updated_time',
                                        'now-3M/d',
                                        'UTC',
                                    ],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Last 6 Months',
                                criteria: {
                                    operator: 'GTE',
                                    operands: [
                                        'morningstar_rating_updated_time',
                                        'now-6M/d',
                                        'UTC',
                                    ],
                                },
                                dependentFilterLabel: null,
                            },
                        ],
                        type: 'STRING',
                        deprecated: false,
                        displayName: 'Morningstar Ratings Updated Time',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: true,
                    },
                    morningstar_stewardship: {
                        fieldId: 'morningstar_stewardship',
                        category: {
                            categoryId: 'morningstar_rating',
                            displayName: 'Morningstar Rating',
                        },
                        labels: [
                            {
                                displayName: 'Exemplary',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['morningstar_stewardship', 'Exemplary'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Standard',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['morningstar_stewardship', 'Standard'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Poor',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['morningstar_stewardship', 'Poor'],
                                },
                                dependentFilterLabel: null,
                            },
                        ],
                        type: 'STRING',
                        deprecated: false,
                        displayName: 'Stewardship',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: true,
                    },
                    morningstar_uncertainty: {
                        fieldId: 'morningstar_uncertainty',
                        category: {
                            categoryId: 'morningstar_rating',
                            displayName: 'Morningstar Rating',
                        },
                        labels: [
                            {
                                displayName: 'Low',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['morningstar_uncertainty', 'Low'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Medium',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['morningstar_uncertainty', 'Medium'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'High',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['morningstar_uncertainty', 'High'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Very High',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['morningstar_uncertainty', 'Very High'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Extreme',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['morningstar_uncertainty', 'Extreme'],
                                },
                                dependentFilterLabel: null,
                            },
                        ],
                        type: 'STRING',
                        deprecated: false,
                        displayName: 'Uncertainty Rating',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: true,
                    },
                    'netdebtebitda.lasttwelvemonths': {
                        fieldId: 'netdebtebitda.lasttwelvemonths',
                        category: {
                            categoryId: 'keystats',
                            displayName: 'Share Statistics',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Net Debt / EBITDA',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'netepsbasic.lasttwelvemonths': {
                        fieldId: 'netepsbasic.lasttwelvemonths',
                        category: {
                            categoryId: 'income',
                            displayName: 'Income',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Net EPS - Basic',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'netepsdiluted.lasttwelvemonths': {
                        fieldId: 'netepsdiluted.lasttwelvemonths',
                        category: {
                            categoryId: 'income',
                            displayName: 'Income',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Net EPS - Diluted',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'netincome1yrgrowth.lasttwelvemonths': {
                        fieldId: 'netincome1yrgrowth.lasttwelvemonths',
                        category: {
                            categoryId: 'income',
                            displayName: 'Income',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Net Income, 1 Yr. Growth %',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'netincomeis.lasttwelvemonths': {
                        fieldId: 'netincomeis.lasttwelvemonths',
                        category: {
                            categoryId: 'income',
                            displayName: 'Income',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Net Income - (IS)',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'netincomemargin.lasttwelvemonths': {
                        fieldId: 'netincomemargin.lasttwelvemonths',
                        category: {
                            categoryId: 'income',
                            displayName: 'Income',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Net Income Margin %',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'netincometocommonexclextraitems.lasttwelvemonths': {
                        fieldId: 'netincometocommonexclextraitems.lasttwelvemonths',
                        category: {
                            categoryId: 'income',
                            displayName: 'Income',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: true,
                        displayName: 'Net Income to Common Excl. Extra Items',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    neutral_count: {
                        fieldId: 'neutral_count',
                        category: {
                            categoryId: 'userInsights',
                            displayName: 'User Insights',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Neutral Count',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: true,
                    },
                    neutral_proportion: {
                        fieldId: 'neutral_proportion',
                        category: {
                            categoryId: 'userInsights',
                            displayName: 'User Insights',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Neutral Proportion',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: true,
                    },
                    new_listing_date: {
                        fieldId: 'new_listing_date',
                        category: {
                            categoryId: 'security_mapping',
                            displayName: 'Security Mapping',
                        },
                        labels: [],
                        type: 'STRING',
                        deprecated: false,
                        displayName: 'New Listing Date',
                        dropdownSupported: false,
                        sortable: false,
                        isPremium: false,
                    },
                    number_of_institutional_buyers: {
                        fieldId: 'number_of_institutional_buyers',
                        category: {
                            categoryId: 'institutional_interest',
                            displayName: 'Institutional Interest',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: '# of Institutional Buyers',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: true,
                    },
                    number_of_institutional_holders: {
                        fieldId: 'number_of_institutional_holders',
                        category: {
                            categoryId: 'institutional_interest',
                            displayName: 'Institutional Interest',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: '# of Institutional Holders',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: true,
                    },
                    number_of_institutional_sellers: {
                        fieldId: 'number_of_institutional_sellers',
                        category: {
                            categoryId: 'institutional_interest',
                            displayName: 'Institutional Interest',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: '# of Institutional Sellers',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: true,
                    },
                    'operatingcashflowtocurrentliabilities.lasttwelvemonths': {
                        fieldId: 'operatingcashflowtocurrentliabilities.lasttwelvemonths',
                        category: {
                            categoryId: 'valuation',
                            displayName: 'Valuation Measures',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Operating Cash Flow to Current Liabilities',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'operatingincome.lasttwelvemonths': {
                        fieldId: 'operatingincome.lasttwelvemonths',
                        category: {
                            categoryId: 'financials',
                            displayName: 'Financial Highlights',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Operating Income',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    page_view_growth_weekly: {
                        fieldId: 'page_view_growth_weekly',
                        category: {
                            categoryId: 'userInsights',
                            displayName: 'User Insights',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Page Views Weekly Growth',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    pctheldinsider: {
                        fieldId: 'pctheldinsider',
                        category: {
                            categoryId: 'keystats',
                            displayName: 'Share Statistics',
                        },
                        labels: [
                            {
                                displayName: '< 15%',
                                criteria: {
                                    operator: 'LT',
                                    operands: ['pctheldinsider', 15],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: '15% to 25%',
                                criteria: {
                                    operator: 'BTWN',
                                    operands: ['pctheldinsider', 15, 25],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: '25% to 50%',
                                criteria: {
                                    operator: 'BTWN',
                                    operands: ['pctheldinsider', 25, 50],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: '50% to 100%',
                                criteria: {
                                    operator: 'BTWN',
                                    operands: ['pctheldinsider', 50, 100],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: '> 100%',
                                criteria: {
                                    operator: 'GT',
                                    operands: ['pctheldinsider', 100],
                                },
                                dependentFilterLabel: null,
                            },
                        ],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Percent of shares held by insiders',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    pctheldinst: {
                        fieldId: 'pctheldinst',
                        category: {
                            categoryId: 'keystats',
                            displayName: 'Share Statistics',
                        },
                        labels: [
                            {
                                displayName: '< 15%',
                                criteria: {
                                    operator: 'LT',
                                    operands: ['pctheldinst', 15],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: '15% to 25%',
                                criteria: {
                                    operator: 'BTWN',
                                    operands: ['pctheldinst', 15, 25],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: '25% to 50%',
                                criteria: {
                                    operator: 'BTWN',
                                    operands: ['pctheldinst', 25, 50],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: '50% to 100%',
                                criteria: {
                                    operator: 'BTWN',
                                    operands: ['pctheldinst', 50, 100],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: '> 100%',
                                criteria: {
                                    operator: 'GT',
                                    operands: ['pctheldinst', 100],
                                },
                                dependentFilterLabel: null,
                            },
                        ],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Percent of shares held by institutions',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    peer_group: {
                        fieldId: 'peer_group',
                        category: {
                            categoryId: 'esg_scores',
                            displayName: 'ESG Scores',
                        },
                        labels: [
                            {
                                displayName: 'Software & Services',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'Software & Services'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Pharmaceuticals',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'Pharmaceuticals'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Real Estate',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'Real Estate'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Banks',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'Banks'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Diversified Financials',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'Diversified Financials'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Machinery',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'Machinery'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Healthcare',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'Healthcare'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Food Products',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'Food Products'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Retailing',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'Retailing'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Utilities',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'Utilities'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Technology Hardware',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'Technology Hardware'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Chemicals',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'Chemicals'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Consumer Services',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'Consumer Services'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Insurance',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'Insurance'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Transportation',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'Transportation'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Commercial Services',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'Commercial Services'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Oil & Gas Producers',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'Oil & Gas Producers'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Semiconductors',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'Semiconductors'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Media',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'Media'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Diversified Metals',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'Diversified Metals'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Construction & Engineering',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'Construction & Engineering'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Telecommunication Services',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'Telecommunication Services'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Electrical Equipment',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'Electrical Equipment'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Precious Metals',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'Precious Metals'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Consumer Durables',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'Consumer Durables'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Auto Components',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'Auto Components'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Textiles & Apparel',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'Textiles & Apparel'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Traders & Distributors',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'Traders & Distributors'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Food Retailers',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'Food Retailers'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Refiners & Pipelines',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'Refiners & Pipelines'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Aerospace & Defense',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'Aerospace & Defense'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Building Products',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'Building Products'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Automobiles',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'Automobiles'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Energy Services',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'Energy Services'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Industrial Conglomerates',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'Industrial Conglomerates'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Household Products',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'Household Products'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Steel',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'Steel'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Containers & Packaging',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'Containers & Packaging'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Transportation Infrastructure',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'Transportation Infrastructure'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Construction Materials',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'Construction Materials'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Paper & Forestry',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'Paper & Forestry'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Homebuilders',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'Homebuilders'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'China Fund Equity Funds',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'China Fund Equity Funds'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Greater China Equity',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'Greater China Equity'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'EAA Fund Other Equity',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'EAA Fund Other Equity'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'India Fund Large-Cap',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'India Fund Large-Cap'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'EAA Fund Global Large-Cap Blend Equity',
                                criteria: {
                                    operator: 'EQ',
                                    operands: [
                                        'peer_group',
                                        'EAA Fund Global Large-Cap Blend Equity',
                                    ],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'US Fund Miscellaneous Region',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'US Fund Miscellaneous Region'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Global Equity Large Cap',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'Global Equity Large Cap'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'EAA Fund US Large-Cap Blend Equity',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'EAA Fund US Large-Cap Blend Equity'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'EAA Fund Denmark Equity',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'EAA Fund Denmark Equity'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'EAA Fund Other Bond',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'EAA Fund Other Bond'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'EAA Fund Global Emerging Markets Equity',
                                criteria: {
                                    operator: 'EQ',
                                    operands: [
                                        'peer_group',
                                        'EAA Fund Global Emerging Markets Equity',
                                    ],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'EAA Fund Sector Equity Technology',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'EAA Fund Sector Equity Technology'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'China Fund Aggressive Allocation Fund',
                                criteria: {
                                    operator: 'EQ',
                                    operands: [
                                        'peer_group',
                                        'China Fund Aggressive Allocation Fund',
                                    ],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'EAA Fund EUR Moderate Allocation - Global',
                                criteria: {
                                    operator: 'EQ',
                                    operands: [
                                        'peer_group',
                                        'EAA Fund EUR Moderate Allocation - Global',
                                    ],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'EAA Fund USD Corporate Bond',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'EAA Fund USD Corporate Bond'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Europe Equity Large Cap',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'Europe Equity Large Cap'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'US CE Options-based',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'US CE Options-based'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'EAA Fund Eurozone Large-Cap Equity',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'EAA Fund Eurozone Large-Cap Equity'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'EAA Fund Europe Large-Cap Blend Equity',
                                criteria: {
                                    operator: 'EQ',
                                    operands: [
                                        'peer_group',
                                        'EAA Fund Europe Large-Cap Blend Equity',
                                    ],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'EAA Fund China Equity - A Shares',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'EAA Fund China Equity - A Shares'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'EAA Fund EUR Aggressive Allocation - Global',
                                criteria: {
                                    operator: 'EQ',
                                    operands: [
                                        'peer_group',
                                        'EAA Fund EUR Aggressive Allocation - Global',
                                    ],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'EAA Fund Global Large-Cap Growth Equity',
                                criteria: {
                                    operator: 'EQ',
                                    operands: [
                                        'peer_group',
                                        'EAA Fund Global Large-Cap Growth Equity',
                                    ],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'US Fund Large Blend',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'US Fund Large Blend'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'EAA Fund Global Flex-Cap Equity',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'EAA Fund Global Flex-Cap Equity'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'US Fund Trading--Leveraged Equity',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'US Fund Trading--Leveraged Equity'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'EAA Fund China Equity',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'EAA Fund China Equity'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'EAA Fund Sector Equity Consumer Goods & Services',
                                criteria: {
                                    operator: 'EQ',
                                    operands: [
                                        'peer_group',
                                        'EAA Fund Sector Equity Consumer Goods & Services',
                                    ],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'US Equity Large Cap Blend',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'US Equity Large Cap Blend'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'US Fund Technology',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'US Fund Technology'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'EAA Fund EUR Corporate Bond',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'EAA Fund EUR Corporate Bond'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'EAA Fund Sector Equity Financial Services',
                                criteria: {
                                    operator: 'EQ',
                                    operands: [
                                        'peer_group',
                                        'EAA Fund Sector Equity Financial Services',
                                    ],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'EAA CE Global Large-Cap Blend Equity',
                                criteria: {
                                    operator: 'EQ',
                                    operands: [
                                        'peer_group',
                                        'EAA CE Global Large-Cap Blend Equity',
                                    ],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'US Fund China Region',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'US Fund China Region'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'EAA Fund Sector Equity Industrial Materials',
                                criteria: {
                                    operator: 'EQ',
                                    operands: [
                                        'peer_group',
                                        'EAA Fund Sector Equity Industrial Materials',
                                    ],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Mexico Fund Mexico Equity',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'Mexico Fund Mexico Equity'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'US Fund Health',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'US Fund Health'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'US Fund Large Value',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'US Fund Large Value'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'China Fund QDII Sector Equity',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'China Fund QDII Sector Equity'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'EAA CE Sector Equity Biotechnology',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'EAA CE Sector Equity Biotechnology'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'EAA Fund Asia ex-Japan Equity',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'EAA Fund Asia ex-Japan Equity'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'EAA Fund Japan Large-Cap Equity',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'EAA Fund Japan Large-Cap Equity'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'EAA Fund South Africa & Namibia Equity',
                                criteria: {
                                    operator: 'EQ',
                                    operands: [
                                        'peer_group',
                                        'EAA Fund South Africa & Namibia Equity',
                                    ],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'EAA Fund Switzerland Equity',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'EAA Fund Switzerland Equity'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'US CE Preferred Stock',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'US CE Preferred Stock'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'US Fund Diversified Emerging Mkts',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'US Fund Diversified Emerging Mkts'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Europe Fixed Income',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'Europe Fixed Income'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'India Fund Sector - Financial Services',
                                criteria: {
                                    operator: 'EQ',
                                    operands: [
                                        'peer_group',
                                        'India Fund Sector - Financial Services',
                                    ],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'US Fund Large Growth',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'US Fund Large Growth'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'US Fund Natural Resources',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'US Fund Natural Resources'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'China Fund QDII Greater China Equity',
                                criteria: {
                                    operator: 'EQ',
                                    operands: [
                                        'peer_group',
                                        'China Fund QDII Greater China Equity',
                                    ],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'EAA CE UK Small-Cap Equity',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'EAA CE UK Small-Cap Equity'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'EAA Fund Germany Equity',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'EAA Fund Germany Equity'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'India CE Multi-Cap',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'India CE Multi-Cap'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'US Fund Financial',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'US Fund Financial'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Asia ex-Japan Equity',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'Asia ex-Japan Equity'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'China Fund Sector Equity Financial and Real Estate',
                                criteria: {
                                    operator: 'EQ',
                                    operands: [
                                        'peer_group',
                                        'China Fund Sector Equity Financial and Real Estate',
                                    ],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Global Equity Mid/Small Cap',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'Global Equity Mid/Small Cap'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'US CE Convertibles',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'US CE Convertibles'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'US Fund Consumer Cyclical',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'US Fund Consumer Cyclical'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'US Fund Equity Energy',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'US Fund Equity Energy'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'US Fund Equity Precious Metals',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'US Fund Equity Precious Metals'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'US Fund Foreign Large Blend',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['peer_group', 'US Fund Foreign Large Blend'],
                                },
                                dependentFilterLabel: null,
                            },
                        ],
                        type: 'STRING',
                        deprecated: false,
                        displayName: 'Peer Group',
                        dropdownSupported: true,
                        sortable: true,
                        isPremium: false,
                    },
                    pegratio_5y: {
                        fieldId: 'pegratio_5y',
                        category: {
                            categoryId: 'valuation',
                            displayName: 'Valuation Measures',
                        },
                        labels: [
                            {
                                displayName: '< 1',
                                criteria: {
                                    operator: 'LT',
                                    operands: ['pegratio_5y', 1],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: '1 to 2',
                                criteria: {
                                    operator: 'BTWN',
                                    operands: ['pegratio_5y', 1, 2],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: '2 to 3',
                                criteria: {
                                    operator: 'BTWN',
                                    operands: ['pegratio_5y', 2, 3],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: '> 3',
                                criteria: {
                                    operator: 'GT',
                                    operands: ['pegratio_5y', 3],
                                },
                                dependentFilterLabel: null,
                            },
                        ],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'PEG Ratio (5 yr expected)',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'peratio.lasttwelvemonths': {
                        fieldId: 'peratio.lasttwelvemonths',
                        category: {
                            categoryId: 'valuation',
                            displayName: 'Valuation Measures',
                        },
                        labels: [
                            {
                                displayName: '< 0',
                                criteria: {
                                    operator: 'LT',
                                    operands: ['peratio.lasttwelvemonths', 0],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: '0 - 20',
                                criteria: {
                                    operator: 'BTWN',
                                    operands: ['peratio.lasttwelvemonths', 0, 20],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: '20 - 50',
                                criteria: {
                                    operator: 'BTWN',
                                    operands: ['peratio.lasttwelvemonths', 20, 50],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: '50 - 80',
                                criteria: {
                                    operator: 'BTWN',
                                    operands: ['peratio.lasttwelvemonths', 50, 80],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: '> 80',
                                criteria: {
                                    operator: 'GT',
                                    operands: ['peratio.lasttwelvemonths', 80],
                                },
                                dependentFilterLabel: null,
                            },
                        ],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Trailing P/E',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    percent_change_in_number_of_institutional_holders: {
                        fieldId: 'percent_change_in_number_of_institutional_holders',
                        category: {
                            categoryId: 'institutional_interest',
                            displayName: 'Institutional Interest',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: '% Change in # of Institutional Holders',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: true,
                    },
                    percent_change_in_shares_held_by_funds: {
                        fieldId: 'percent_change_in_shares_held_by_funds',
                        category: {
                            categoryId: 'institutional_interest',
                            displayName: 'Institutional Interest',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: '% Change in Shares Held by Institutions',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: true,
                    },
                    percent_in_funds_holding: {
                        fieldId: 'percent_in_funds_holding',
                        category: {
                            categoryId: 'institutional_interest',
                            displayName: 'Institutional Interest',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Institutional Holders %',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: true,
                    },
                    percent_in_top_ten_holdings: {
                        fieldId: 'percent_in_top_ten_holdings',
                        category: {
                            categoryId: 'institutional_interest',
                            displayName: 'Institutional Interest',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: '% in Top 10 Holdings of Institutions',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: true,
                    },
                    percent_of_shares_outstanding_bought_by_institutions: {
                        fieldId: 'percent_of_shares_outstanding_bought_by_institutions',
                        category: {
                            categoryId: 'institutional_interest',
                            displayName: 'Institutional Interest',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: '% of Shares Outstanding Bought by Institutions',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: true,
                    },
                    percent_of_shares_outstanding_sold_by_institutions: {
                        fieldId: 'percent_of_shares_outstanding_sold_by_institutions',
                        category: {
                            categoryId: 'institutional_interest',
                            displayName: 'Institutional Interest',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: '% of Shares Outstanding Sold by Institutions',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: true,
                    },
                    percentchange: {
                        fieldId: 'percentchange',
                        category: {
                            categoryId: 'keystats',
                            displayName: 'Share Statistics',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Percent Change',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    portfolio_sentiment_date: {
                        fieldId: 'portfolio_sentiment_date',
                        category: {
                            categoryId: 'userInsights',
                            displayName: 'User Insights',
                        },
                        labels: [],
                        type: 'STRING',
                        deprecated: false,
                        displayName: 'Portfolio Sentiment Date',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: true,
                    },
                    portfolioheldcount: {
                        fieldId: 'portfolioheldcount',
                        category: {
                            categoryId: 'portfoliostatistics',
                            displayName: 'Portfolio Statistics',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Portfolio Held Count',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'price_signal_fifty_two_wk_high.datetime': {
                        fieldId: 'price_signal_fifty_two_wk_high.datetime',
                        category: {
                            categoryId: 'signals',
                            displayName: 'Signals',
                        },
                        labels: [],
                        type: 'STRING',
                        deprecated: false,
                        displayName: '52 Week High Date Time',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'price_signal_fifty_two_wk_low.datetime': {
                        fieldId: 'price_signal_fifty_two_wk_low.datetime',
                        category: {
                            categoryId: 'signals',
                            displayName: 'Signals',
                        },
                        labels: [],
                        type: 'STRING',
                        deprecated: false,
                        displayName: '52 Week Low Date Time',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'pricebookratio.quarterly': {
                        fieldId: 'pricebookratio.quarterly',
                        category: {
                            categoryId: 'valuation',
                            displayName: 'Valuation Measures',
                        },
                        labels: [
                            {
                                displayName: '< 1',
                                criteria: {
                                    operator: 'LT',
                                    operands: ['pricebookratio.quarterly', 1],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: '1 - 2',
                                criteria: {
                                    operator: 'BTWN',
                                    operands: ['pricebookratio.quarterly', 1, 2],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: '2 - 3',
                                criteria: {
                                    operator: 'BTWN',
                                    operands: ['pricebookratio.quarterly', 2, 3],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: '> 3',
                                criteria: {
                                    operator: 'GT',
                                    operands: ['pricebookratio.quarterly', 3],
                                },
                                dependentFilterLabel: null,
                            },
                        ],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Price/Book',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    quarter: {
                        fieldId: 'quarter',
                        category: {
                            categoryId: 'visualizations',
                            displayName: 'Visualizations',
                        },
                        labels: [],
                        type: 'STRING',
                        deprecated: false,
                        displayName: 'Quarter',
                        dropdownSupported: false,
                        sortable: false,
                        isPremium: false,
                    },
                    'quarterlyrevenuegrowth.quarterly': {
                        fieldId: 'quarterlyrevenuegrowth.quarterly',
                        category: {
                            categoryId: 'income',
                            displayName: 'Income',
                        },
                        labels: [
                            {
                                displayName: '< 15%',
                                criteria: {
                                    operator: 'LT',
                                    operands: ['quarterlyrevenuegrowth.quarterly', 15],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: '15% to 25%',
                                criteria: {
                                    operator: 'BTWN',
                                    operands: ['quarterlyrevenuegrowth.quarterly', 15, 25],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: '25% to 50%',
                                criteria: {
                                    operator: 'BTWN',
                                    operands: ['quarterlyrevenuegrowth.quarterly', 25, 50],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: '50% to 100%',
                                criteria: {
                                    operator: 'BTWN',
                                    operands: ['quarterlyrevenuegrowth.quarterly', 50, 100],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: '> 100%',
                                criteria: {
                                    operator: 'GT',
                                    operands: ['quarterlyrevenuegrowth.quarterly', 100],
                                },
                                dependentFilterLabel: null,
                            },
                        ],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Quarterly Revenue Growth',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'quickratio.lasttwelvemonths': {
                        fieldId: 'quickratio.lasttwelvemonths',
                        category: {
                            categoryId: 'valuation',
                            displayName: 'Valuation Measures',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Quick Ratio',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'rank_ar_es-ar': {
                        fieldId: 'rank_ar_es-ar',
                        category: {
                            categoryId: 'ranking',
                            displayName: 'Ranking',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Rank',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'rank_at_de-at': {
                        fieldId: 'rank_at_de-at',
                        category: {
                            categoryId: 'ranking',
                            displayName: 'Ranking',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Rank',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'rank_au_en-au': {
                        fieldId: 'rank_au_en-au',
                        category: {
                            categoryId: 'ranking',
                            displayName: 'Ranking',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Rank',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'rank_br_pt-br': {
                        fieldId: 'rank_br_pt-br',
                        category: {
                            categoryId: 'ranking',
                            displayName: 'Ranking',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Rank',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'rank_ca_en-ca': {
                        fieldId: 'rank_ca_en-ca',
                        category: {
                            categoryId: 'ranking',
                            displayName: 'Ranking',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Rank',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'rank_ca_fr-ca': {
                        fieldId: 'rank_ca_fr-ca',
                        category: {
                            categoryId: 'ranking',
                            displayName: 'Ranking',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Rank',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'rank_cl_es-cl': {
                        fieldId: 'rank_cl_es-cl',
                        category: {
                            categoryId: 'ranking',
                            displayName: 'Ranking',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Rank',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'rank_cn_zh-hans-cn': {
                        fieldId: 'rank_cn_zh-hans-cn',
                        category: {
                            categoryId: 'ranking',
                            displayName: 'Ranking',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Rank',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'rank_de_de-de': {
                        fieldId: 'rank_de_de-de',
                        category: {
                            categoryId: 'ranking',
                            displayName: 'Ranking',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Rank',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'rank_dk_da-dk': {
                        fieldId: 'rank_dk_da-dk',
                        category: {
                            categoryId: 'ranking',
                            displayName: 'Ranking',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Rank',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'rank_ee_et-ee': {
                        fieldId: 'rank_ee_et-ee',
                        category: {
                            categoryId: 'ranking',
                            displayName: 'Ranking',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Rank',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'rank_es_es-es': {
                        fieldId: 'rank_es_es-es',
                        category: {
                            categoryId: 'ranking',
                            displayName: 'Ranking',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Rank',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'rank_fi_fi-fi': {
                        fieldId: 'rank_fi_fi-fi',
                        category: {
                            categoryId: 'ranking',
                            displayName: 'Ranking',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Rank',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'rank_fr_fr-fr': {
                        fieldId: 'rank_fr_fr-fr',
                        category: {
                            categoryId: 'ranking',
                            displayName: 'Ranking',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Rank',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'rank_gb_en-gb': {
                        fieldId: 'rank_gb_en-gb',
                        category: {
                            categoryId: 'ranking',
                            displayName: 'Ranking',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Rank',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'rank_gr_el-gr': {
                        fieldId: 'rank_gr_el-gr',
                        category: {
                            categoryId: 'ranking',
                            displayName: 'Ranking',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Rank',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'rank_hk_zh-hant-hk': {
                        fieldId: 'rank_hk_zh-hant-hk',
                        category: {
                            categoryId: 'ranking',
                            displayName: 'Ranking',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Rank',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'rank_ie_en-ie': {
                        fieldId: 'rank_ie_en-ie',
                        category: {
                            categoryId: 'ranking',
                            displayName: 'Ranking',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Rank',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'rank_il_he-il': {
                        fieldId: 'rank_il_he-il',
                        category: {
                            categoryId: 'ranking',
                            displayName: 'Ranking',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Rank',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'rank_in_en-in': {
                        fieldId: 'rank_in_en-in',
                        category: {
                            categoryId: 'ranking',
                            displayName: 'Ranking',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Rank',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'rank_is_is-is': {
                        fieldId: 'rank_is_is-is',
                        category: {
                            categoryId: 'ranking',
                            displayName: 'Ranking',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Rank',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'rank_it_it-it': {
                        fieldId: 'rank_it_it-it',
                        category: {
                            categoryId: 'ranking',
                            displayName: 'Ranking',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Rank',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'rank_jp_ja-hani': {
                        fieldId: 'rank_jp_ja-hani',
                        category: {
                            categoryId: 'ranking',
                            displayName: 'Ranking',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Rank',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'rank_jp_ja-hira': {
                        fieldId: 'rank_jp_ja-hira',
                        category: {
                            categoryId: 'ranking',
                            displayName: 'Ranking',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Rank',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'rank_jp_ja-jp': {
                        fieldId: 'rank_jp_ja-jp',
                        category: {
                            categoryId: 'ranking',
                            displayName: 'Ranking',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Rank',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'rank_jp_ja-kana': {
                        fieldId: 'rank_jp_ja-kana',
                        category: {
                            categoryId: 'ranking',
                            displayName: 'Ranking',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Rank',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'rank_kr_ko-kr': {
                        fieldId: 'rank_kr_ko-kr',
                        category: {
                            categoryId: 'ranking',
                            displayName: 'Ranking',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Rank',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'rank_lt_lt-lt': {
                        fieldId: 'rank_lt_lt-lt',
                        category: {
                            categoryId: 'ranking',
                            displayName: 'Ranking',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Rank',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'rank_lv_lv-lv': {
                        fieldId: 'rank_lv_lv-lv',
                        category: {
                            categoryId: 'ranking',
                            displayName: 'Ranking',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Rank',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'rank_mx_es-mx': {
                        fieldId: 'rank_mx_es-mx',
                        category: {
                            categoryId: 'ranking',
                            displayName: 'Ranking',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Rank',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'rank_my_ms-my': {
                        fieldId: 'rank_my_ms-my',
                        category: {
                            categoryId: 'ranking',
                            displayName: 'Ranking',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Rank',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'rank_nl_nl-nl': {
                        fieldId: 'rank_nl_nl-nl',
                        category: {
                            categoryId: 'ranking',
                            displayName: 'Ranking',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Rank',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'rank_no_nb-no': {
                        fieldId: 'rank_no_nb-no',
                        category: {
                            categoryId: 'ranking',
                            displayName: 'Ranking',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Rank',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'rank_nz_en-nz': {
                        fieldId: 'rank_nz_en-nz',
                        category: {
                            categoryId: 'ranking',
                            displayName: 'Ranking',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Rank',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'rank_pt_pt-pt': {
                        fieldId: 'rank_pt_pt-pt',
                        category: {
                            categoryId: 'ranking',
                            displayName: 'Ranking',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Rank',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'rank_qa_ar-qa': {
                        fieldId: 'rank_qa_ar-qa',
                        category: {
                            categoryId: 'ranking',
                            displayName: 'Ranking',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Rank',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'rank_ru_ru-ru': {
                        fieldId: 'rank_ru_ru-ru',
                        category: {
                            categoryId: 'ranking',
                            displayName: 'Ranking',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Rank',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'rank_sa_ar-sa': {
                        fieldId: 'rank_sa_ar-sa',
                        category: {
                            categoryId: 'ranking',
                            displayName: 'Ranking',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Rank',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'rank_se_sv-se': {
                        fieldId: 'rank_se_sv-se',
                        category: {
                            categoryId: 'ranking',
                            displayName: 'Ranking',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Rank',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'rank_sg_en-sg': {
                        fieldId: 'rank_sg_en-sg',
                        category: {
                            categoryId: 'ranking',
                            displayName: 'Ranking',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Rank',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'rank_th_th-th': {
                        fieldId: 'rank_th_th-th',
                        category: {
                            categoryId: 'ranking',
                            displayName: 'Ranking',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Rank',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'rank_tr_tr-tr': {
                        fieldId: 'rank_tr_tr-tr',
                        category: {
                            categoryId: 'ranking',
                            displayName: 'Ranking',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Rank',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'rank_tw_zh-hant-tw': {
                        fieldId: 'rank_tw_zh-hant-tw',
                        category: {
                            categoryId: 'ranking',
                            displayName: 'Ranking',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Rank',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'rank_us_en-us': {
                        fieldId: 'rank_us_en-us',
                        category: {
                            categoryId: 'ranking',
                            displayName: 'Ranking',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Rank',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'rank_us_es-us': {
                        fieldId: 'rank_us_es-us',
                        category: {
                            categoryId: 'ranking',
                            displayName: 'Ranking',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Rank',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    region: {
                        fieldId: 'region',
                        category: {
                            categoryId: 'keystats',
                            displayName: 'Share Statistics',
                        },
                        labels: [
                            {
                                displayName: 'Argentina',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'ar'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Austria',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'at'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Australia',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'au'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Belgium',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'be'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Brazil',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'br'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Canada',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'ca'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Switzerland',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'ch'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Chile',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'cl'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'China',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'cn'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Czechia',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'cz'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Germany',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'de'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Denmark',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'dk'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Estonia',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'ee'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Egypt',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'eg'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Spain',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'es'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Finland',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'fi'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'France',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'fr'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'United Kingdom',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'gb'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Greece',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'gr'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Hong Kong SAR China',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'hk'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Hungary',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'hu'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Indonesia',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'id'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Ireland',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'ie'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Israel',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'il'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'India',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'in'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Iceland',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'is'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Italy',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'it'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Japan',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'jp'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'South Korea',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'kr'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Kuwait',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'kw'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Sri Lanka',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'lk'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Lithuania',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'lt'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Latvia',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'lv'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Mexico',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'mx'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Malaysia',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'my'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Netherlands',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'nl'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Norway',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'no'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'New Zealand',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'nz'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Peru',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'pe'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Philippines',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'ph'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Pakistan',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'pk'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Poland',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'pl'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Portugal',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'pt'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Qatar',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'qa'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Romania',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'ro'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Russia',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'ru'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Saudi Arabia',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'sa'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Sweden',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'se'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Singapore',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'sg'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Suriname',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'sr'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Thailand',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'th'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Turkey',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'tr'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Taiwan',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'tw'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'United States',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'us'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Venezuela',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 've'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Vietnam',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'vn'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'South Africa',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['region', 'za'],
                                },
                                dependentFilterLabel: null,
                            },
                        ],
                        type: 'STRING',
                        deprecated: false,
                        displayName: 'Region',
                        dropdownSupported: true,
                        sortable: true,
                        isPremium: false,
                    },
                    'returnonassets.lasttwelvemonths': {
                        fieldId: 'returnonassets.lasttwelvemonths',
                        category: {
                            categoryId: 'financials',
                            displayName: 'Financial Highlights',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Return on Assets',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'returnonequity.lasttwelvemonths': {
                        fieldId: 'returnonequity.lasttwelvemonths',
                        category: {
                            categoryId: 'financials',
                            displayName: 'Financial Highlights',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Return On Equity %',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'returnontotalcapital.lasttwelvemonths': {
                        fieldId: 'returnontotalcapital.lasttwelvemonths',
                        category: {
                            categoryId: 'keystats',
                            displayName: 'Share Statistics',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Return on Total Capital',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    revenue_consistency: {
                        fieldId: 'revenue_consistency',
                        category: {
                            categoryId: 'fair_value',
                            displayName: 'Fair Value',
                        },
                        labels: [
                            {
                                displayName: 'Low',
                                criteria: {
                                    operator: 'BTWN',
                                    operands: ['revenue_consistency', 0.7, 0.85],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Medium',
                                criteria: {
                                    operator: 'BTWN',
                                    operands: ['revenue_consistency', 0.85, 0.95],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'High',
                                criteria: {
                                    operator: 'GT',
                                    operands: ['revenue_consistency', 0.95],
                                },
                                dependentFilterLabel: null,
                            },
                        ],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Revenue Consistency',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: true,
                    },
                    ror_percent: {
                        fieldId: 'ror_percent',
                        category: {
                            categoryId: 'fair_value',
                            displayName: 'Fair Value',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Rate of Return',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: true,
                    },
                    sector: {
                        fieldId: 'sector',
                        category: {
                            categoryId: 'sector_industry',
                            displayName: 'Sector & Industry',
                        },
                        labels: [
                            {
                                displayName: 'Basic Materials',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['sector', 'Basic Materials'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Consumer Cyclical',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['sector', 'Consumer Cyclical'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Financial Services',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['sector', 'Financial Services'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Real Estate',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['sector', 'Real Estate'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Consumer Defensive',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['sector', 'Consumer Defensive'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Healthcare',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['sector', 'Healthcare'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Utilities',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['sector', 'Utilities'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Communication Services',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['sector', 'Communication Services'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Energy',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['sector', 'Energy'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Industrials',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['sector', 'Industrials'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Technology',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['sector', 'Technology'],
                                },
                                dependentFilterLabel: null,
                            },
                        ],
                        type: 'STRING',
                        deprecated: false,
                        dependFor: ['industry'],
                        displayName: 'Sector',
                        dropdownSupported: true,
                        sortable: true,
                        isPremium: false,
                    },
                    security_lifecycle: {
                        fieldId: 'security_lifecycle',
                        category: {
                            categoryId: 'security_lifecycle',
                            displayName: 'Security Lifecycle',
                        },
                        labels: [],
                        type: 'STRING',
                        deprecated: false,
                        displayName: 'Security Lifecycle',
                        dropdownSupported: false,
                        sortable: false,
                        isPremium: false,
                    },
                    'sgandamargin.lasttwelvemonths': {
                        fieldId: 'sgandamargin.lasttwelvemonths',
                        category: {
                            categoryId: 'income',
                            displayName: 'Income',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: true,
                        displayName: 'SG&A Margin',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'short_interest.value': {
                        fieldId: 'short_interest.value',
                        category: {
                            categoryId: 'short_interest',
                            displayName: 'Short Interest',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Short Interest',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'short_interest_percentage_change.value': {
                        fieldId: 'short_interest_percentage_change.value',
                        category: {
                            categoryId: 'short_interest',
                            displayName: 'Short Interest',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Short Interest % Change',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'short_percentage_of_float.value': {
                        fieldId: 'short_percentage_of_float.value',
                        category: {
                            categoryId: 'short_interest',
                            displayName: 'Short Interest',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Short % of Float',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'short_percentage_of_shares_outstanding.value': {
                        fieldId: 'short_percentage_of_shares_outstanding.value',
                        category: {
                            categoryId: 'short_interest',
                            displayName: 'Short Interest',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Short % of Shares Outstanding',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    shortcuts: {
                        fieldId: 'shortcuts',
                        category: {
                            categoryId: 'tickeralias',
                            displayName: 'Ticker Alias',
                        },
                        labels: [],
                        type: 'STRING',
                        deprecated: false,
                        displayName: 'Shortcuts',
                        dropdownSupported: false,
                        sortable: false,
                        isPremium: false,
                    },
                    social_score: {
                        fieldId: 'social_score',
                        category: {
                            categoryId: 'esg_scores',
                            displayName: 'ESG Scores',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Social Score',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    sold_confidence_lower_bound: {
                        fieldId: 'sold_confidence_lower_bound',
                        category: {
                            categoryId: 'userInsights',
                            displayName: 'User Insights',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Sold Confidence Lower Bound',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: true,
                    },
                    sold_count: {
                        fieldId: 'sold_count',
                        category: {
                            categoryId: 'userInsights',
                            displayName: 'User Insights',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Sold Count',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: true,
                    },
                    sold_proportion: {
                        fieldId: 'sold_proportion',
                        category: {
                            categoryId: 'userInsights',
                            displayName: 'User Insights',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Sold Proportion',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: true,
                    },
                    startdatetime: {
                        fieldId: 'startdatetime',
                        category: {
                            categoryId: 'visualizations',
                            displayName: 'Visualizations',
                        },
                        labels: [],
                        type: 'DATE',
                        deprecated: false,
                        displayName: 'Event Start Date',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    startdatetimetype: {
                        fieldId: 'startdatetimetype',
                        category: {
                            categoryId: 'visualizations',
                            displayName: 'Visualizations',
                        },
                        labels: [],
                        type: 'STRING',
                        deprecated: false,
                        displayName: 'Event Start Time',
                        dropdownSupported: false,
                        sortable: false,
                        isPremium: false,
                    },
                    ticker: {
                        fieldId: 'ticker',
                        category: {
                            categoryId: 'popular_filters',
                            displayName: 'Popular Filters',
                        },
                        labels: [],
                        type: 'STRING',
                        deprecated: false,
                        displayName: 'Symbol',
                        enableSearch: true,
                        searchSource: 'ticker',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    tickersharesoutstanding: {
                        fieldId: 'tickersharesoutstanding',
                        category: {
                            categoryId: 'keystats',
                            displayName: 'Share Statistics',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: true,
                        displayName: 'Ticker Shares Outstanding',
                        dropdownSupported: false,
                        sortable: false,
                        isPremium: false,
                    },
                    top_fund_holder_names: {
                        fieldId: 'top_fund_holder_names',
                        category: {
                            categoryId: 'institutional_interest',
                            displayName: 'Institutional Interest',
                        },
                        labels: [],
                        type: 'STRING',
                        deprecated: false,
                        displayName: 'Top 10 Institutional Holder Names',
                        enableSearch: true,
                        searchSource: 'screener_field',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: true,
                    },
                    total_commenter_count: {
                        fieldId: 'total_commenter_count',
                        category: {
                            categoryId: 'userInsights',
                            displayName: 'User Insights',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Total Commenter Count',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: true,
                    },
                    total_portfolio_active_users: {
                        fieldId: 'total_portfolio_active_users',
                        category: {
                            categoryId: 'userInsights',
                            displayName: 'User Insights',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Total Portfolio Active Users',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: true,
                    },
                    'totalassets.lasttwelvemonths': {
                        fieldId: 'totalassets.lasttwelvemonths',
                        category: {
                            categoryId: 'keystats',
                            displayName: 'Share Statistics',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Total Assets',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'totalcapitalratio.lasttwelvemonths': {
                        fieldId: 'totalcapitalratio.lasttwelvemonths',
                        category: {
                            categoryId: 'keystats',
                            displayName: 'Share Statistics',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: true,
                        displayName: 'Total Capital - (Ratio)',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'totalcashandshortterminvestments.lasttwelvemonths': {
                        fieldId: 'totalcashandshortterminvestments.lasttwelvemonths',
                        category: {
                            categoryId: 'keystats',
                            displayName: 'Share Statistics',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Total Cash And Short Term Investments',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'totalcommonequity.lasttwelvemonths': {
                        fieldId: 'totalcommonequity.lasttwelvemonths',
                        category: {
                            categoryId: 'keystats',
                            displayName: 'Share Statistics',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Total Common Equity',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'totalcommonsharesoutstanding.lasttwelvemonths': {
                        fieldId: 'totalcommonsharesoutstanding.lasttwelvemonths',
                        category: {
                            categoryId: 'keystats',
                            displayName: 'Share Statistics',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Total Common Shares Outstanding',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'totalcurrentassets.lasttwelvemonths': {
                        fieldId: 'totalcurrentassets.lasttwelvemonths',
                        category: {
                            categoryId: 'keystats',
                            displayName: 'Share Statistics',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Total Current Assets',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'totalcurrentliabilities.lasttwelvemonths': {
                        fieldId: 'totalcurrentliabilities.lasttwelvemonths',
                        category: {
                            categoryId: 'keystats',
                            displayName: 'Share Statistics',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Total Current Liabilities',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'totaldebt.lasttwelvemonths': {
                        fieldId: 'totaldebt.lasttwelvemonths',
                        category: {
                            categoryId: 'keystats',
                            displayName: 'Share Statistics',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Total Debt',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'totaldebtebitda.lasttwelvemonths': {
                        fieldId: 'totaldebtebitda.lasttwelvemonths',
                        category: {
                            categoryId: 'keystats',
                            displayName: 'Share Statistics',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Total Debt / EBITDA',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'totaldebtequity.lasttwelvemonths': {
                        fieldId: 'totaldebtequity.lasttwelvemonths',
                        category: {
                            categoryId: 'keystats',
                            displayName: 'Share Statistics',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Total Debt/Equity',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'totalequity.lasttwelvemonths': {
                        fieldId: 'totalequity.lasttwelvemonths',
                        category: {
                            categoryId: 'keystats',
                            displayName: 'Share Statistics',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Total Equity',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'totalrevenues.lasttwelvemonths': {
                        fieldId: 'totalrevenues.lasttwelvemonths',
                        category: {
                            categoryId: 'income',
                            displayName: 'Income',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Total Revenues',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'totalrevenues1yrgrowth.lasttwelvemonths': {
                        fieldId: 'totalrevenues1yrgrowth.lasttwelvemonths',
                        category: {
                            categoryId: 'income',
                            displayName: 'Income',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Total Revenues, 1 Yr. Growth %',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    totalsharesoutstanding: {
                        fieldId: 'totalsharesoutstanding',
                        category: {
                            categoryId: 'keystats',
                            displayName: 'Share Statistics',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Total Shares Outstanding',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    'totalsharesoutstandingonfilingdate.lasttwelvemonths': {
                        fieldId: 'totalsharesoutstandingonfilingdate.lasttwelvemonths',
                        category: {
                            categoryId: 'keystats',
                            displayName: 'Share Statistics',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: true,
                        displayName: 'Total Shares Outstanding on Filing Date',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    trading_central_last_close_price_to_fair_value: {
                        fieldId: 'trading_central_last_close_price_to_fair_value',
                        category: {
                            categoryId: 'fair_value',
                            displayName: 'Fair Value',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Last Close Price / Fair Value',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: true,
                    },
                    'unleveredfreecashflow.lasttwelvemonths': {
                        fieldId: 'unleveredfreecashflow.lasttwelvemonths',
                        category: {
                            categoryId: 'cashflowstatement',
                            displayName: 'Cash Flow Statement',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Unlevered Free Cash Flow',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: false,
                    },
                    value_description: {
                        fieldId: 'value_description',
                        category: {
                            categoryId: 'fair_value',
                            displayName: 'Fair Value',
                        },
                        labels: [
                            {
                                displayName: 'Undervalued',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['value_description', 'Under Valued'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Near Fair Value',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['value_description', 'Near Fair Value'],
                                },
                                dependentFilterLabel: null,
                            },
                            {
                                displayName: 'Overvalued',
                                criteria: {
                                    operator: 'EQ',
                                    operands: ['value_description', 'Over Valued'],
                                },
                                dependentFilterLabel: null,
                            },
                        ],
                        type: 'STRING',
                        deprecated: false,
                        displayName: 'Value Description',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: true,
                    },
                    years_of_consecutive_positive_eps: {
                        fieldId: 'years_of_consecutive_positive_eps',
                        category: {
                            categoryId: 'fair_value',
                            displayName: 'Fair Value',
                        },
                        labels: [],
                        type: 'NUMBER',
                        deprecated: false,
                        displayName: 'Years of Consecutive Positive EPS',
                        dropdownSupported: false,
                        sortable: true,
                        isPremium: true,
                    },
                },
            },
        ],
        error: null,
    },
};
