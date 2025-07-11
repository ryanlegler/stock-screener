# Stock Market Technical Analysis Screener

A Next.js application that performs technical analysis on stocks using MACD indicators and historical price data via the Yahoo Finance API.

## Features

- Automated stock screening with MACD (Moving Average Convergence Divergence) analysis
- Historical price data visualization with interactive charts
- Report-driven architecture for efficient data management and analysis
- Clean, responsive UI built with Tailwind CSS
- Server-side API integration with caching
- TypeScript support for type safety
- Environment variable configuration for API credentials

## Architecture

The application uses a layered architecture to efficiently manage stock data and reduce API calls:

### Data Flow

1. **API Layer** (`/app/lib/api/`)

    - `fetch-chart-data.ts` - Low-level function for fetching historical price data
    - `get-historic-data.ts` - Fetches and formats historical data for multiple symbols
    - `screener-pagination.ts` - Handles paginated screener API requests

2. **Core Business Logic** (`/app/lib/`)

    - `screener.ts` - `fetchRawScreenerData()` gets raw screener data
    - `server-actions.ts` - `getScreenerData()` orchestrates data flow:
        - Manages report caching
        - Adds historical data
        - Limits result set
        - Returns combined data

3. **Report System** (`/app/lib/reports/`)
    - Reports are stored as JSON files
    - Each report is timestamped
    - Latest report is cached for performance
    ```
    ├── reports/
    │   ├── latest.json           # Most recent report
    │   └── report-{timestamp}.json # Archived reports
    ```

### Report Generation

Reports are automatically generated when:

- No existing report is found
- Current report is from a previous day
- User manually triggers a refresh via UI

### Benefits

- Clear separation of concerns between API calls and business logic
- Efficient data caching through report system
- Rate limiting protection via pagination
- Simplified development and testing

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework with Server Actions
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Yahoo Finance API](https://rapidapi.com/apidojo/api/yahoo-finance1/) - Stock data
- [Geist](https://vercel.com/font) - Font optimization

## Prerequisites

- Node.js 18+
- pnpm
- RapidAPI Key for Yahoo Finance API

## Getting Started

1. Clone the repository
2. Install dependencies:

    ```bash
    pnpm install
    ```

3. Create a `.env.local` file in the root directory with your RapidAPI credentials:

    ```env
    RAPIDAPI_KEY=your_api_key_here
    RAPIDAPI_HOST=yahoo-finance166.p.rapidapi.com
    ```

4. Start the development server:

    ```bash
    pnpm dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── components/
│   │   ├── stock-charts.tsx        # Main chart grid component
│   │   ├── stock-chart-wrapper.tsx # Individual chart wrapper
│   │   ├── macd-indicator.tsx     # MACD analysis component
│   │   ├── generate-report-button.tsx
│   │   ├── report-status.tsx
│   │   └── reports-list.tsx
│   ├── lib/
│   │   ├── api/
│   │   │   ├── screener.ts         # Stock screening logic
│   │   │   └── screener-pagination.ts
│   │   └── reports/
│   │       └── generate/           # Report generation
│   │           └── route.ts   # Report generation API
│   ├── lib/
│   │   └── api/
│   │       ├── client.ts      # API client configuration
│   │       ├── screener.ts    # Stock screener functionality
│   │       └── get-historic-data.ts # Historical price data fetching
│   ├── components/
│   │   ├── news-card.tsx     # News item card component
│   │   ├── news-feed.tsx     # News feed container
│   │   ├── stock-screener.tsx # Stock screener component
│   │   └── providers.tsx     # React Query provider
│   ├── hooks/
│   │   └── use-news.ts       # Custom hook for fetching news
│   ├── lib/
│   │   └── reports.ts        # Report management utilities
│   ├── types/
│   │   └── api.ts            # TypeScript interfaces
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/
│   └── ui/                   # shadcn/ui components
├── reports/                  # Generated stock reports
│   ├── latest.json          # Most recent report
│   └── report-{timestamp}.json # Archived reports
├── .env.local               # Environment variables
├── tailwind.config.ts       # Tailwind configuration
└── package.json
```

## API Integration

The application uses the Yahoo Finance API through RapidAPI to fetch financial news. The API integration is handled through a server-side route that:

- Validates request parameters using Zod
- Properly handles API errors
- Implements caching with a 5-minute TTL
- Includes rate limiting for API requests

## Development

- Use `pnpm dev` to start the development server
- Use `pnpm build` to create a production build
- Use `pnpm start` to start the production server

## Database Setup

This project uses Turso as the database. To set up the database:

1. Install the Turso CLI and authenticate
2. Create a new database: `turso db create stock-screener`
3. Get your database URL: `turso db show stock-screener --url`
4. Generate an auth token: `turso db tokens create stock-screener`

### Schema Management

The database schema is managed with Drizzle ORM. After making changes to the schema:

1. Generate the types: `pnpm drizzle-kit generate`
2. Push schema changes: `pnpm drizzle-kit push`

## Environment Variables

| Variable            | Description                     | Required |
| ------------------- | ------------------------------- | -------- |
| DATABASE_URL        | Turso database URL              | Yes      |
| DATABASE_AUTH_TOKEN | Turso database auth token       | Yes      |
| RAPIDAPI_KEY        | Your RapidAPI API key           | Yes      |
| RAPIDAPI_HOST       | RapidAPI host for Yahoo Finance | Yes      |

## Deployment

The application can be deployed on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) for optimal performance and ease of use. Make sure to configure the environment variables in your deployment settings.

## License

MIT
