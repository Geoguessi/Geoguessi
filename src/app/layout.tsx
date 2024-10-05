import type { Metadata } from 'next';
import { Platypi } from 'next/font/google';
import './globals.css';
import { ReactQueryProvider } from './react-query';

import { Suspense } from 'react';

const platypi = Platypi({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${platypi.className} antialiased`}>
        <Suspense>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </Suspense>
      </body>
    </html>
  );
}
