'use client';

import { CombinedScreenerResult } from '../types/screener';
import { StockCharts } from './stock-charts';

interface RenderStockScreenerProps {
    data: CombinedScreenerResult;
}

export function RenderStockScreener({ data }: RenderStockScreenerProps) {
    return (
        <div className="space-y-8">
            <StockCharts data={data} />
        </div>
    );
}
