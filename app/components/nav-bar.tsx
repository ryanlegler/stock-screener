import Link from 'next/link';

export function NavBar() {
  return (
    <nav className="bg-white border-b border-gray-200 py-4 px-6 mb-8">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-semibold text-gray-900">
            Stock Screener
          </Link>
        </div>
        
        <div className="flex space-x-6">
          <Link 
            href="/" 
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Home
          </Link>
          <Link 
            href="/implied-volatility" 
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Implied Volatility
          </Link>
        </div>
      </div>
    </nav>
  );
}
