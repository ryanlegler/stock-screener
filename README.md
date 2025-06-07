# Stock Market News Screener

A Next.js application that displays real-time financial news for selected stock symbols using the Yahoo Finance API via RapidAPI.

## Features

- Real-time financial news feed for multiple stock symbols
- Clean, responsive UI using shadcn/ui components
- Server-side API route with rate limiting and caching
- TypeScript support for type safety
- Modern React patterns with TanStack Query for data fetching
- Environment variable configuration for API credentials

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
│   │   └── news/
│   │       └── route.ts         # API route handler
│   ├── components/
│   │   ├── news-card.tsx       # News item card component
│   │   ├── news-feed.tsx       # News feed container
│   │   └── providers.tsx       # React Query provider
│   ├── hooks/
│   │   └── use-news.ts         # Custom hook for fetching news
│   ├── types/
│   │   └── api.ts              # TypeScript interfaces
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Home page
├── components/
│   └── ui/                     # shadcn/ui components
├── .env.local                  # Environment variables
├── tailwind.config.ts         # Tailwind configuration
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
