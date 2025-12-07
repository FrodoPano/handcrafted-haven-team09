import type { Metadata } from 'next';
import { EB_Garamond, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-eb-garamond',
  display: 'swap',
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant-garamond',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Handcrafted Haven - Unique Artisan Crafts',
  description: 'Discover handcrafted treasures from local artisans',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${ebGaramond.variable} ${cormorantGaramond.variable}`}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}