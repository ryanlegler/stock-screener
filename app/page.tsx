import Link from 'next/link';
import { ChartComponent } from './components/chart';

export default function Home() {
    return (
        <div className="container mx-auto px-4 py-8">
            <Link href="/volitility">Volatility</Link>

            <ChartComponent />
        </div>
    );
}
