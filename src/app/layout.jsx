
// src/app/layout.jsx
import ClientProviders from "@/components/ClientProviders";
import { Analytics } from '@vercel/analytics/next';
import './globals.css'
export const metadata = {
  title: 'Muhammad Hammad Asif - Portfolio',
  description: 'MS in Data Science graduate with 4+ years of experience building production ML systems, NLP pipelines, and scalable REST APIs. I specialize in AI integration — connecting large language models and machine learning into real backend systems that clients can use.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning><ClientProviders>
          {children}
        </ClientProviders>
        <Analytics /></body>
    </html>
  )
}
