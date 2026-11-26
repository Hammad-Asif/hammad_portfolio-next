// src/app/hire-me/page.jsx
import React from 'react';
import HireMeForm from '@/components/HireMeForm';
import { pageMetadata, breadcrumbJsonLd, absoluteUrl, PERSON_ID, WEBSITE_ID } from '@/lib/seo';
import {
  ShieldCheck,
  Clock,
  DollarSign,
  Zap,
  Video,
  MessageSquare,
  Check,
  ArrowRight,
  Briefcase
} from 'lucide-react';

export const metadata = pageMetadata({
  title: "Hire an AI Engineer & Full-Stack Developer",
  description:
    "Hire Muhammad Hammad Asif, a freelance AI engineer and full-stack developer for LLM apps, document AI and FastAPI + React products. Remote, US/UK/EU overlap.",
  path: "/hire-me",
});

const hireMeLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl("/hire-me")}#webpage`,
    url: absoluteUrl("/hire-me"),
    name: "Hire an AI Engineer & Full-Stack Developer",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": PERSON_ID },
  },
  breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Hire Me", path: "/hire-me" },
  ]),
];

const HireMePage = () => {
  const frameworkPoints = [
    {
      title: "Contracts and payroll",
      description: "Contract-ready through Deel, Remote.com or direct B2B billing. You don't take on international payroll or tax admin.",
      icon: <DollarSign size={18} />
    },
    {
      title: "Time-zone overlap",
      description: "4 to 5 hours of live overlap every day with EST, GMT and CET business hours.",
      icon: <Clock size={18} />
    },
    {
      title: "IP and NDAs",
      description: "Standard international contractor agreements and NDAs that cover US and EU intellectual-property and data terms.",
      icon: <ShieldCheck size={18} />
    },
    {
      title: "Backup power and internet",
      description: "A dedicated home office with UPS and solar backup and redundant fiber lines, so power cuts don't stop work.",
      icon: <Zap size={18} />
    },
    {
      title: "Async by default",
      description: "Slack updates, Jira tickets and Loom handovers, so work keeps moving with fewer meetings.",
      icon: <Video size={18} />
    },
    {
      title: "Clear technical English",
      description: "Direct written and spoken updates for engineers, product managers and leadership.",
      icon: <MessageSquare size={18} />
    }
  ];

  const expertiseBullets = [
    "LLM pipelines and RAG prototypes with OpenAI, Gemini and OpenRouter, including provider fallback (LangChain where it helps)",
    "Async Python REST APIs and backends with FastAPI and Flask, background workers and role-based access control",
    "Document AI and computer vision: PDF classification and extraction, OCR, SAM 3 segmentation and single-photo measurement",
    "Web scraping and data pipelines with Playwright, Selenium and BeautifulSoup",
    "ML deployments on Ray clusters, AWS EC2 autoscaling, Docker and Nginx"
  ];

  return (
    <main className="hm-root">
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hireMeLd) }}
      />

      <div className="hm-container">

        {/* ── HERO SECTION ────────────────────────────────────────── */}
        <section className="hm-hero">
          {/* Pulsing Availability Badge */}
          <div className="hm-badge">
            <span className="hm-badge-ping-container">
              <span className="hm-badge-ping"></span>
              <span className="hm-badge-dot"></span>
            </span>
            Available for B2B and Deel contracts
          </div>

          <h1 className="hm-title">
            Hire an AI engineer &amp; full-stack developer <span className="hm-title-gradient">without the local overhead</span>
          </h1>

          <p className="hm-subtitle">
            AI and Python backend engineer who passed Toptal&apos;s coding assessment and is listed in its talent marketplace.
            Available for full-time remote roles or long-term contracts, owning your AI pipelines, backend APIs and deployments end to end.
          </p>

          <div className="hm-buttons">
            <a href="#discovery-form" className="hm-btn-primary">
              Book a discovery call <ArrowRight size={18} />
            </a>
            <a
              href="/Hammad_Asif_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="hm-btn-secondary"
            >
              Download CV
            </a>
          </div>
        </section>

        {/* ── WHAT'S ALREADY HANDLED ─────────────────────────────── */}
        <section className="hm-terms-wrap">
          <div className="hm-section-title-wrap">
            <h2 className="hm-section-title">What&apos;s already handled before we start</h2>
            <p className="hm-section-subtitle">
              Contracts, time zones and power are sorted, so the work can start on day one.
            </p>
          </div>

          <ul className="terms terms-3">
            {frameworkPoints.map((point) => (
              <li key={point.title}>
                <span className="terms-icon" aria-hidden="true">{point.icon}</span>
                <h3 className="terms-title">{point.title}</h3>
                <p className="terms-desc">{point.description}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* ── CORE EXPERTISE ─────────────────────────────────────── */}
        <section className="hm-expertise">
          <div className="hm-expertise-left">
            <div className="hm-expertise-left-icon">
              <Briefcase size={20} />
            </div>
            <h2 className="hm-section-title" style={{ textAlign: 'left', marginBottom: '0' }}>Core expertise</h2>
            <p className="hm-card-desc">
              About five years of shipping AI and backend systems for clients, from the first prototype
              to a monitored deployment in the cloud.
            </p>
          </div>

          <div className="hm-expertise-right">
            <ul className="hm-bullet-list">
              {expertiseBullets.map((bullet, index) => (
                <li key={index} className="hm-bullet-item">
                  <span className="hm-bullet-icon">
                    <Check size={14} />
                  </span>
                  <span className="hm-bullet-text">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── CTA FORM SECTION ───────────────────────────────────── */}
        <section id="discovery-form" style={{ scrollMarginTop: '6rem' }}>
          <div className="hm-section-title-wrap" style={{ marginBottom: '2.5rem' }}>
            <h2 className="hm-section-title">Tell me about the role or project</h2>
            <p className="hm-section-subtitle">
              I usually reply to business inquiries within 12 hours.
            </p>
          </div>

          <HireMeForm />
        </section>

      </div>
    </main>
  );
};

export default HireMePage;
