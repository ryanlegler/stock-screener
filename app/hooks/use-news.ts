import { useQuery } from '@tanstack/react-query';
import { NewsAPIResponse } from '../types/api';

interface UseNewsOptions {
    symbols: string;
    region?: string;
    snippetCount?: number;
}

export function useNews({ symbols, region = 'US', snippetCount = 500 }: UseNewsOptions) {
    return useQuery<NewsAPIResponse>({
        queryKey: ['news', symbols, region, snippetCount],
        queryFn: async () => {
            const params = new URLSearchParams({
                symbols,
                region,
                snippetCount: snippetCount.toString(),
            });

            const response = await fetch(`/api/news?${params.toString()}`);
            if (!response.ok) {
                throw new Error('Failed to fetch news');
            }

            return response.json();
        },
    });
}
