
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
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://hammad-portfolio.recursivedata.com"),

  title: {
    default:
      "Muhammad Hammad Asif | AI Engineer, LLM Engineer & Python Backend Developer",
    template: "%s | Muhammad Hammad Asif",
  },

  description:
    "Explore the portfolio of Muhammad Hammad Asif, an AI Engineer specializing in production LLM applications, AI agents, FastAPI, Python backend development, RAG pipelines, machine learning, OpenAI integrations, and scalable AI systems. Featuring real-world case studies, technical architecture, and production-ready solutions.",

  applicationName: "Muhammad Hammad Asif Portfolio",

  authors: [
    {
      name: "Muhammad Hammad Asif",
      url: "https://hammad-portfolio.recursivedata.com",
    },
  ],

  creator: "Muhammad Hammad Asif",

  publisher: "Muhammad Hammad Asif",

  category: "Technology",

  classification:
    "Artificial Intelligence, Machine Learning, Software Engineering",

  referrer: "origin-when-cross-origin",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  keywords: [
    "AI Engineer",
    "Generative AI Engineer",
    "LLM Engineer",
    "Python Backend Developer",
    "FastAPI Developer",
    "OpenAI API",
    "Claude API",
    "Gemini API",
    "AI Agents",
    "RAG",
    "Retrieval Augmented Generation",
    "Machine Learning Engineer",
    "Prompt Engineering",
    "LangChain",
    "LangGraph",
    "MCP Server",
    "AI Automation",
    "Python",
    "Next.js",
    "Backend Engineer",
    "REST API",
    "Vector Database",
    "Semantic Search",
    "Production AI",
    "Computer Vision",
    "OCR",
    "NLP",
    "Portfolio",
    "Case Studies",
    "Remote AI Engineer",
    "Remote Python Developer",
    "Software Engineer",
  ],

  openGraph: {
    type: "website",

    locale: "en_US",

    url: "https://hammad-portfolio.recursivedata.com",

    siteName: "Muhammad Hammad Asif",

    title:
      "Muhammad Hammad Asif | AI Engineer, LLM Engineer & Python Backend Developer",

    description:
      "AI Engineer building production-ready LLM applications, AI agents, FastAPI backends, machine learning systems, and scalable Python architectures. Explore detailed case studies, technical blogs, and real-world AI projects.",

    images: [
      {
        url: "/profile_pic.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Hammad Asif - AI Engineer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    creator: "@hammadasif1437",

    title:
      "Muhammad Hammad Asif | AI Engineer & LLM Specialist",

    description:
      "Production AI Engineer specializing in LLMs, AI agents, FastAPI, Python, RAG pipelines, machine learning, and scalable backend systems.",

    images: ["/profile_pic.jpg"],
  },

 
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
