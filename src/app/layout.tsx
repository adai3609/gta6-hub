import type { Metadata, Viewport } from 'next';
import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';
import { siteConfig } from '@/lib/seo';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  verification: { google: 'google7e546d6ee66352c8' },
  title: 'GTA 6 Hub — Release Date, Countdown, Pre-Order & Tracker',
  description: siteConfig.description,
  alternates: { canonical: '/' },
  openGraph: {
    title: 'GTA 6 Hub — Release Date, Countdown, Pre-Order & Tracker',
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GTA 6 Hub',
    description: siteConfig.description,
    images: ['/og.png'],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#07050e',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-neon-pink focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
