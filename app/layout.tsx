import type React from 'react';
import type { Metadata } from 'next';
import { Source_Code_Pro } from 'next/font/google';
import { Inter } from 'next/font/google';
import { Provider } from 'jotai';
import './globals.css';

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-source-code-pro',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'atra.xyz',
  description:
    'digital studio and consultancy building custom web applications with engineering rigor and thoughtful design',
  icons: {
    icon: [
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
  },
  appleWebApp: {
    title: 'atra',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${sourceCodePro.variable} ${inter.variable}`}
    >
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
