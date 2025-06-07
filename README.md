# Stock Market News Screener

A Next.js application that displays real-time financial news for selected stock symbols using the Yahoo Finance API via RapidAPI.

## Features

- Real-time financial news feed for multiple stock symbols
- Historical price data with customizable intervals and ranges
- Clean, responsive UI using shadcn/ui components
- Server-side API route with rate limiting and caching
- TypeScript support for type safety
- Modern React patterns with TanStack Query for data fetching
- Environment variable configuration for API credentials
- Report-driven architecture for efficient data management

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

- [Next.js 14](https://nextjs.org/) - React framework with [Geist](https://vercel.com/font) font optimization
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [TanStack Query](https://tanstack.com/query/latest) - Data fetching and caching
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Tailwind CSS](https://tailwindcss.com/) - Styling
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
│   ├── api/
│   │   ├── news/
│   │   │   └── route.ts       # News API route handler
│   │   └── reports/
│   │       └── generate/
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
