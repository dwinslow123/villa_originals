import { Delius_Swash_Caps } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import { Viewport } from 'next';
import Nav from '@/app/components/Nav';
import Footer from '@/app/components/Footer';
import './globals.css';

const deliusSwashCaps = Delius_Swash_Caps({
  weight: [ '400' ],
  variable: '--font-delius-swash-caps',
  subsets: [ 'latin' ],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full h-full">
      <body className={`${deliusSwashCaps.className} min-h-screen bg-white max-w-screen w-full text-gray-900 grid grid-rows-[auto_1fr]`}>
        <Nav />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}