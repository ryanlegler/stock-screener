import { Geist, Geist_Mono } from 'next/font/google';
import '@/app/globals.css';
import type { Metadata } from 'next';
import { Providers } from '@/components/providers';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Stock Screener',
    description: 'Financial news and technical analysis',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning className="dark">
            <body
                className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground antialiased`}
            >
                <Providers>
                    <main className="container mx-auto px-4">{children}</main>
                </Providers>
            </body>
        </html>
    );
}
