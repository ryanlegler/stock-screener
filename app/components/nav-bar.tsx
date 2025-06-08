import Link from 'next/link';

export function NavBar() {
    return (
        <nav className="mb-8 border-b border-gray-200 bg-white px-6 py-4">
            <div className="container mx-auto flex flex-wrap items-center justify-between">
                <div className="flex items-center">
                    <Link href="/" className="text-xl font-semibold text-gray-900">
                        Stock Screener
                    </Link>
                </div>
            </div>
        </nav>
    );
}
