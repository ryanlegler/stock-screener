import { macd } from 'react-financial-charts';
import { ChartDataPoint } from '../../types/api';
import { MACDChartDataPoint } from '../../types/api';

export function hydrateMACD(data: ChartDataPoint[]): MACDChartDataPoint[] {
    // Convert timestamps to Date objects

    const processedData = data.map(d => ({
        ...d,
        date: new Date(d.date),
        close: d.close,
    }));

    if (!processedData || processedData.length < 26) {
        throw new Error(
            `Need at least 26 data points for MACD calculation. Current: ${processedData?.length}`
        );
    }

    const macdCalculator = macd()
        .options({
            fast: 12,
            slow: 26,
            signal: 9,
            sourcePath: 'close',
        })
        .merge(
            (
                d: MACDChartDataPoint,
                macdData: { macd: number; signal: number; histogram: number }
            ) => {
                d.macd = macdData;
                return d;
            }
        )
        .accessor((d: MACDChartDataPoint) => d.macd);

    // Apply the MACD calculator to the processed data
    return macdCalculator(processedData) as MACDChartDataPoint[];
}
