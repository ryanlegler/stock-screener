# Stock Screener Application Architecture

```mermaid
flowchart TD
    %% Pages
    HomePage["Home Page (app/page.tsx)"]
    MACDPage["MACD Page (components/macd-page.tsx)"]

    %% Server Components
    HomeImpliedVolatilityData["HomeImpliedVolatilityData (Server Component)"]
    MACDAnalysisData["MACDAnalysisData (Server Component)"]

    %% Client Components
    ImpliedVolatilityTable["ImpliedVolatilityTable"]
    QuotesTable["QuotesTable"]
    MACDAnalysisDisplay["MACDAnalysisDisplay"]
    MACDSymbolForm["MACDSymbolForm"]
    NavBar["NavBar"]

    %% Server Actions
    getMACDAnalysis["getMACDAnalysis (Server Action)"]
    getMACDAnalysisMultiple["getMACDAnalysisMultiple (Server Action)"]

    %% API Client Methods
    getChart["APIClient.getChart"]
    getQuotes["APIClient.getQuotes"]
    getHighestImpliedVolatility["APIClient.getHighestImpliedVolatility"]

    %% Utility Functions
    calculateMACD["calculateMACD"]
    analyzeMACD["analyzeMACD"]

    %% External API
    YahooFinanceAPI["Yahoo Finance API"]

    %% Relationships - Pages
    HomePage --> HomeImpliedVolatilityData
    HomePage --> NavBar

    %% Home Page Data Flow
    HomeImpliedVolatilityData --> getHighestImpliedVolatility
    HomeImpliedVolatilityData --> getQuotes
    HomeImpliedVolatilityData --> ImpliedVolatilityTable
    HomeImpliedVolatilityData --> QuotesTable

    %% MACD Page Data Flow
    MACDPage --> MACDAnalysisData
    MACDAnalysisData --> getMACDAnalysisMultiple
    MACDAnalysisData --> MACDAnalysisDisplay
    getMACDAnalysisMultiple --> getMACDAnalysis
    getMACDAnalysis --> getChart
    getMACDAnalysis --> calculateMACD
    getMACDAnalysis --> analyzeMACD

    %% API Calls
    getChart --> YahooFinanceAPI
    getQuotes --> YahooFinanceAPI
    getHighestImpliedVolatility --> YahooFinanceAPI

    %% Styling
    classDef page fill:#f9f,stroke:#333,stroke-width:2px
    classDef serverComponent fill:#bbf,stroke:#33f,stroke-width:1px
    classDef clientComponent fill:#bfb,stroke:#3f3,stroke-width:1px
    classDef serverAction fill:#fbb,stroke:#f33,stroke-width:1px
    classDef apiMethod fill:#fbf,stroke:#f3f,stroke-width:1px
    classDef utility fill:#bff,stroke:#3ff,stroke-width:1px
    classDef external fill:#ffd,stroke:#dd3,stroke-width:1px

    class HomePage,MACDPage page
    class HomeImpliedVolatilityData,MACDAnalysisData serverComponent
    class ImpliedVolatilityTable,QuotesTable,MACDAnalysisDisplay,MACDSymbolForm,NavBar clientComponent
    class getMACDAnalysis,getMACDAnalysisMultiple serverAction
    class getChart,getQuotes,getHighestImpliedVolatility apiMethod
    class calculateMACD,analyzeMACD utility
    class YahooFinanceAPI external
```

## Data Flow

### Home Page

1. The Home Page renders with a NavBar and a Suspense boundary for the HomeImpliedVolatilityData server component
2. HomeImpliedVolatilityData fetches:
    - Highest implied volatility stocks using APIClient.getHighestImpliedVolatility
    - Stock quotes for those symbols using APIClient.getQuotes
3. The data is passed to ImpliedVolatilityTable and QuotesTable components for display

### MACD Page

1. The MACD Page renders with a Suspense boundary for the MACDAnalysisData server component
2. MACDAnalysisData calls getMACDAnalysisMultiple server action
3. getMACDAnalysisMultiple calls getMACDAnalysis for each symbol in parallel
4. getMACDAnalysis:
    - Fetches historical data using APIClient.getChart
    - Calculates MACD indicators using calculateMACD utility
    - Analyzes MACD signals using analyzeMACD utility
5. The analysis results are passed to MACDAnalysisDisplay components for visualization

## API Endpoints Used

1. `/api/market/get-highest-implied-volatility` - Fetches stocks with highest implied volatility
2. `/api/market/get-quote-v2` - Fetches stock quotes for multiple symbols
3. `/api/stock/get-chart` - Fetches historical price data for MACD analysis

## Current Implementation Notes

- The application is currently using fixture data instead of live API calls (commented out in the code)
- MACD analysis functionality is implemented but commented out on the Home Page
- The application uses Next.js 15.3.1 with Server Components for data fetching
