import { NextResponse } from 'next/server';
import { APIClient } from '@/app/lib/api/client';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const symbols = searchParams.get('symbols')?.split(',') || [];

    if (!symbols.length) {
        return NextResponse.json({ error: 'No symbols provided' }, { status: 400 });
    }

    try {
        const historicDataPromises = symbols.map(symbol =>
            APIClient.getChart({
                symbol,
                interval: '1h',
                range: '7d',
                region: 'US',
            })
        );

        const results = await Promise.all(historicDataPromises);
        const historicData = Object.fromEntries(
            symbols.map((symbol, index) => [symbol, results[index].results])
        );

        return NextResponse.json({ success: true, data: historicData });
    } catch (error) {
        console.error('Failed to fetch historic data:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to fetch historic data' },
            { status: 500 }
        );
    }
}
