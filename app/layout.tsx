import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import QueryProvider from './providers/QueryProvider';
import { FxCheckerProvider } from './providers/FxCheckerProvider';

const JetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'FX Checker by Morin Sultan',
  description:
    'the app converts between currencies using live exchange rates, with a rate-history chart, a multi-currency comparison, pinned favorite pairs, and a running log of conversions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${JetBrainsMono.className} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <QueryProvider>
          <FxCheckerProvider>{children}</FxCheckerProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
