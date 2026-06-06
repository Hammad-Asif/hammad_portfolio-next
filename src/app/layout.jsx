
// src/app/layout.jsx
import ClientProviders from "@/components/ClientProviders";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  weight: ['300', '400', '500', '600', '700'], // only weights you actually use
  variable: '--font-space-grotesk',
})
import './globals.css'
export const metadata = {
  title: "Muhammad Hammad Asif — Senior AI Engineer & Python Backend Developer | Remote US/UK/EU",
  description: "Toptal-vetted AI and Python backend engineer with 5+ years of experience building LLM integrations, ML pipelines, and FastAPI systems. Seeking full-time remote roles with US, UK, and European teams.",
  keywords: "AI engineer for hire, Python backend developer, LLM integration developer, FastAPI developer, remote AI developer, ML engineer remote, hire Python developer Pakistan, NLP engineer, OpenAI API developer, machine learning engineer remote",
  authors: [{ name: "Muhammad Hammad Asif" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://hammad-portfolio.recursivedata.com/",
  },
  openGraph: {
    title: "Muhammad Hammad Asif — AI & Python Backend Engineer",
    description: "Toptal-vetted engineer specializing in LLM integration, ML systems, and production APIs. Open to remote roles with US, UK, and EU teams.",
    url: "https://hammad-portfolio.recursivedata.com/",
    type: "website",
    images: [
      {
        url: "https://hammad-portfolio.recursivedata.com/profile_pic.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Hammad Asif — AI and Python Backend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Hammad Asif — AI & Python Backend Engineer",
    description: "Toptal-vetted. LLM integration, ML pipelines, FastAPI. Open to remote work.",
    images: ["https://hammad-portfolio.recursivedata.com/profile_pic.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Muhammad Hammad Asif",
      url: "https://hammad-portfolio.recursivedata.com",
      image: "https://hammad-portfolio.recursivedata.com/profile_pic.jpg",
      jobTitle: "AI & Python Backend Engineer",
      description: "Toptal-vetted AI and backend engineer specializing in LLM integration, ML pipelines, and FastAPI systems.",
      email: "Hammadcto786@gmail.com",
      telephone: "+923087724490",
      address: { "@type": "PostalAddress", addressCountry: "PK" },
      sameAs: [
        "https://github.com/Hammad-Asif",
        "https://www.linkedin.com/in/hammad-asif/"
      ],
      knowsAbout: [
        "Python", "FastAPI", "LLM Integration", "Machine Learning",
        "NLP", "React", "Node.js", "AWS", "Docker", "OpenAI API"
      ],
      worksFor: { "@type": "Organization", name: "Toptal" }
    })
  }}
/>
      </head>
      <body suppressHydrationWarning><ClientProviders>
          {children}
        </ClientProviders>
        <Analytics />
        <SpeedInsights />
        </body>
    </html>
  )
}
