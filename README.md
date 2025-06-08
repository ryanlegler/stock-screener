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

## Report-Driven Architecture

The application uses a report-driven architecture to efficiently manage stock data and reduce API calls:

### How it Works

1. **Report Generation**

    - Stock data is fetched and saved as JSON reports
    - Reports are stored in the `reports` directory
    - Each report is timestamped and archived

2. **Data Loading**

    - App loads the latest report on startup
    - Automatically detects and refreshes stale reports
    - Manual report generation available via UI button

3. **Benefits**
    - Reduces API calls and rate limiting issues
    - Improves application performance
    - Maintains historical data
    - Simplifies development and testing

### Report System

```
├── reports/
│   ├── latest.json           # Most recent report
│   └── report-{timestamp}.json # Archived reports
```

Reports are automatically generated when:

- No existing report is found
- The current report is from a previous day
- User manually triggers a refresh

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- Technical Analysis Libraries - For MACD calculations
- Yahoo Finance API - For stock data
- [Zod](https://zod.dev/) - Runtime type validation

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

## Environment Variables

| Variable      | Description                     | Required |
| ------------- | ------------------------------- | -------- |
| RAPIDAPI_KEY  | Your RapidAPI API key           | Yes      |
| RAPIDAPI_HOST | RapidAPI host for Yahoo Finance | Yes      |

## Deployment

The application can be deployed on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) for optimal performance and ease of use. Make sure to configure the environment variables in your deployment settings.

## License

MIT
