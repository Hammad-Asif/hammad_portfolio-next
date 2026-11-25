
// src/app/layout.jsx
import ClientProviders from "@/components/ClientProviders";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import localFont from 'next/font/local'

// Fonts are self-hosted from @fontsource-variable packages, so builds never
// depend on reaching Google Fonts (which caused "Failed to download" warnings).
const spaceGrotesk = localFont({
  src: '../../node_modules/@fontsource-variable/space-grotesk/files/space-grotesk-latin-wght-normal.woff2',
  weight: '300 700',
  display: 'swap',
  variable: '--font-space-grotesk',
  fallback: ['ui-sans-serif', 'system-ui', 'sans-serif'],
})

const inter = localFont({
  src: '../../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2',
  weight: '100 900',
  display: 'swap',
  variable: '--font-inter',
  fallback: ['ui-sans-serif', 'system-ui', 'sans-serif'],
})

const jetbrainsMono = localFont({
  src: '../../node_modules/@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2',
  weight: '100 800',
  display: 'swap',
  preload: false,
  variable: '--font-mono',
  fallback: ['ui-monospace', 'Consolas', 'monospace'],
})
import './globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL, SITE_NAME, PERSON_NAME, siteJsonLd, jsonLdProps } from "@/lib/seo";

const DEFAULT_TITLE = "Hammad Asif | Freelance AI Engineer & Full-Stack Developer";
const DEFAULT_DESCRIPTION =
  "Muhammad Hammad Asif is a freelance AI engineer and full-stack developer: LLM integration, document AI and PDF data extraction, FastAPI backends and React apps.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: DEFAULT_TITLE, template: `%s | ${SITE_NAME}` },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: PERSON_NAME, url: SITE_URL }],
  creator: PERSON_NAME,
  publisher: PERSON_NAME,
  category: "Technology",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Defaults for any route without its own metadata; pages override via pageMetadata().
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  // Icons come from app/favicon.ico, app/icon.png and app/apple-icon.png.
  // Site-ownership verification for search engine webmaster tools
  verification: {
    other: {
      "msvalidate.01": "35298AD90EAFFE3F700486F253F54A02", // Bing Webmaster Tools
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script {...jsonLdProps(siteJsonLd())} />
      </head>
      <body suppressHydrationWarning><ClientProviders>
        <Navbar />
        {children}
        <Footer />
      </ClientProviders>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
