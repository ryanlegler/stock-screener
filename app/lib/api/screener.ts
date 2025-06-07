/**
 * Yahoo Finance Stock Screener API
 *
 * This module provides functionality to interact with Yahoo Finance's stock screening capabilities.
 * It consists of two main parts:
 *
 * 1. Screener Filters (getScreenerFilters)
 *    - Returns metadata about available filtering options
 *    - Each filter includes:
 *      - Field information (name, type, category)
 *      - Valid operations (GT, LT, EQ, BTWN, etc.)
 *      - Pre-defined ranges and labels
 *      - Premium status
 *
 * 2. Screener List (getScreenerList)
 *    - Fetches actual stock data based on filter criteria
 *    - Supports complex filter combinations using AND/OR operations
 *    - Allows sorting and pagination
 *
 * Example Usage:
 * ```typescript
 * // 1. Get available filters
 * const filters = await getScreenerFilters();
 *
 * // 2. Use filters to create a query
 * const query = {
 *   operator: "and",
 *   operands: [
 *     {
 *       operator: "GT",
 *       operands: ["marketcap", 1000000000] // Market cap > $1B
 *     },
 *     {
 *       operator: "BTWN",
 *       operands: ["beta", 0.8, 1.2] // Beta between 0.8 and 1.2
 *     }
 *   ]
 * };
 *
 * // 3. Get filtered stock list
 * const stocks = await getScreenerList(query, {
 *   sortField: "marketcap",
 *   sortType: "DESC"
 * });
 * ```
 */

const BASE_URL = `https://${process.env.RAPIDAPI_HOST!}`;

const headers = {
    'X-Rapidapi-Key': process.env.RAPIDAPI_KEY!,
    'X-Rapidapi-Host': process.env.RAPIDAPI_HOST!,
};

/**
 * Fetches available filter options for the stock screener.
 *
 * This function returns a comprehensive list of fields that can be used to filter stocks.
 * Each field comes with metadata about its type, valid operations, and pre-defined ranges.
 *
 * Common filter categories include:
 * - Valuation (P/E, P/B ratios)
 * - Share Statistics (Beta, Volume)
 * - Financial Metrics (Revenue, Profit Margins)
 * - Technical Indicators (Moving Averages)
 *
 * @param type - The type of filters to fetch (default: 'earnings')
 * @returns Promise<ScreenerFiltersResponse> - The available filters and their metadata
 */
export async function getScreenerFilters(type: string = 'earnings'): Promise<any> {
    try {
        const response = await fetch(`${BASE_URL}/api/screener/get-filters?type=${type}`, {
            method: 'GET',
            headers,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching screener filters:', error);
        throw error;
    }
}

// Content-Type: application/json
// Host: process.env.RAPIDAPI_HOST!
// Content-Length: 597

// {"operator":"and","operands":[{"operator":"or","operands":[{"operator":"EQ","operands":["region","us"]}]},{"operator":"or","operands":[{"operator":"BTWN","operands":["intradaymarketcap",2000000000,10000000000]},{"operator":"BTWN","operands":["intradaymarketcap",10000000000,100000000000]},{"operator":"GT","operands":["intradaymarketcap",100000000000]}]},{"operator":"or","operands":[{"operator":"GT","operands":["percentchange",3]}]},{"operator":"or","operands":[{"operator":"gte","operands":["intradayprice",5]}]},{"operator":"or","operands":[{"operator":"GT","operands":["dayvolume",15000]}]}]}

export interface ScreenerListParams {
    sortType?: 'DESC' | 'ASC';
    sortField?: string;
    size?: number;
    offset?: number;
}

export interface ScreenerFilter {
    operator: string;
    operands: Array<string | number | ScreenerFilter>;
}

// Import the ScreenerListResponse type from types.ts
import { ScreenerListResponse } from '../../types';

/**
 * Fetches a list of stocks matching the specified filter criteria.
 *
 * This function allows complex filtering using combinations of AND/OR operations.
 * Filters can be constructed using the metadata from getScreenerFilters().
 *
 * Common filter operations:
 * - GT (Greater Than)
 * - LT (Less Than)
 * - EQ (Equals)
 * - BTWN (Between)
 * - GTE (Greater Than or Equal)
 * - LTE (Less Than or Equal)
 *
 * @example
 * // Find stocks with:
 * // - Market cap between $2B and $10B
 * // - Price > $5
 * // - Volume > 15000
 * const filter = {
 *   operator: "and",
 *   operands: [
 *     {
 *       operator: "BTWN",
 *       operands: ["intradaymarketcap", 2000000000, 10000000000]
 *     },
 *     {
 *       operator: "GT",
 *       operands: ["intradayprice", 5]
 *     },
 *     {
 *       operator: "GT",
 *       operands: ["dayvolume", 15000]
 *     }
 *   ]
 * };
 *
 * @param filter - The filter criteria to apply
 * @param params - Optional parameters for sorting and pagination
 * @returns Promise<ScreenerListResponse> - The filtered list of stocks
 */
export async function getScreenerList({
    filters,
    params,
}: {
    filters?: ScreenerFilter;
    params?: ScreenerListParams;
}): Promise<ScreenerListResponse | null> {
    const { sortType = 'DESC', sortField = 'percentchange', size = 30, offset = 0 } = params || {};
    const body = filters || {
        operator: 'and',
        operands: [
            { operator: 'or', operands: [{ operator: 'EQ', operands: ['region', 'us'] }] },
            {
                operator: 'or',
                operands: [
                    { operator: 'BTWN', operands: ['intradaymarketcap', 2000000000, 10000000000] },
                    {
                        operator: 'BTWN',
                        operands: ['intradaymarketcap', 10000000000, 100000000000],
                    },
                    { operator: 'GT', operands: ['intradaymarketcap', 100000000000] },
                ],
            },
            { operator: 'or', operands: [{ operator: 'GT', operands: ['percentchange', 3] }] },
            { operator: 'or', operands: [{ operator: 'gte', operands: ['intradayprice', 5] }] },
            { operator: 'or', operands: [{ operator: 'GT', operands: ['dayvolume', 15000] }] },
        ],
    };

    try {
        if (!process.env.RAPIDAPI_KEY) {
            throw new Error(
                'RAPIDAPI_KEY environment variable is not set. Please add it to your .env file.'
            );
        }

        const response = await fetch(
            `${BASE_URL}/api/screener/list?sortType=${sortType}&sortField=${sortField}&size=${size}&quote_type=EQUITY&offset=${offset}&region=US`,
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'X-RapidAPI-Key': process.env.RAPIDAPI_KEY!,
                    'X-RapidAPI-Host': process.env.RAPIDAPI_HOST!,
                },
                body: JSON.stringify(body),
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: ScreenerListResponse = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching screener list:', error);
        return null;
    }
}
