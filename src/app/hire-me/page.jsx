// src/app/hire-me/page.jsx
import React from 'react';
import HireMeForm from '@/components/HireMeForm';
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

const Json_LD= {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "mainEntity": {
    "@type": "Person",
    "name": "Muhammad Hammad Asif",
    "alternateName": "Hammad",
    "jobTitle": "Senior AI & Python Backend Engineer",
    "description": "Top 3% Vetted Toptal Engineer specializing in high-performance FastAPI backends, production-grade RAG pipelines, and automated web scraping infrastructures.",
    "url": "https://yourdomain.com/hire-me",
    "knowsAbout": [
      "Python",
      "FastAPI",
      "Flask",
      "LLMs",
      "RAG Pipelines",
      "AWS EC2",
      "Ray Clusters",
      "Google Cloud Document AI",
      "OCR",
      "Playwright",
      "Web Scraping"
    ],
    "nationality": {
      "@type": "Country",
      "name": "Pakistan"
    },
    "seeking": {
      "@type": "Demand",
      "availability": "https://schema.org/OnlineOnly",
      "areaServed": [
        {
          "@type": "Country",
          "name": "United States"
        },
        {
          "@type": "Country",
          "name": "United Kingdom"
        },
        {
          "@type": "Country",
          "name": "European Union"
        }
      ]
    }
  }
}

export const metadata = {
  title: "Hire Senior Remote AI & Python Developer (US/UK Overlap) | Hammad",
  description: "Hire Muhammad Hammad Asif, a top 3% vetted Toptal Engineer specializing in high-performance FastAPI backends, RAG pipelines, and LLMs. Contract-ready via Deel with guaranteed EST/GMT timezone overlap.",
  keywords: [
    "Hire Senior AI Engineer",
    "Hire Python Backend Developer",
    "Remote AI Developer US UK Overlap",
    "Toptal AI Engineer",
    "Deel Remote Contractor Python",
    "FastAPI RAG Developer"
  ],
  alternates: {
    canonical: "https://hammad-portfolio.recursivedata.com/hire-me",
  },
};

const HireMePage = () => {
  const frameworkPoints = [
    {
      title: "Zero Payroll/Tax Complexity",
      description: "100% contract-ready immediately via Deel, Remote.com, or direct corporate B2B billing. No administrative international hiring overhead.",
      icon: <DollarSign className="text-emerald-400" size={20} />
    },
    {
      title: "Timezone Synchronicity",
      description: "Guaranteed 4 to 5 hours of structured, synchronous daily overlap with EST, GMT, and CET standard business hours.",
      icon: <Clock className="text-emerald-400" size={20} />
    },
    {
      title: "Legal & IP Protection",
      description: "Fully compliant with US/EU intellectual property and data sovereignty laws under standard international contractor NDAs.",
      icon: <ShieldCheck className="text-emerald-400" size={20} />
    },
    {
      title: "Mission-Critical Uptime",
      description: "Operating from a dedicated home office equipped with secondary solar/UPS battery systems and redundant high-speed fiber lines.",
      icon: <Zap className="text-emerald-400" size={20} />
    },
    {
      title: "Async-First Workflow",
      description: "Deep integration with Slack documentation, Jira sprint management, and Loom video handovers to maximize execution and minimize meetings.",
      icon: <Video className="text-emerald-400" size={20} />
    },
    {
      title: "Native-Level Technical English",
      description: "Clear, direct, and unhindered verbal and written alignment with engineering stakeholders, product managers, and executive leadership.",
      icon: <MessageSquare className="text-emerald-400" size={20} />
    }
  ];

  const expertiseBullets = [
    "Production LLM Pipelines & Advanced RAG System Architectures (LangChain, vector indexing, semantic search optimization)",
    "Asynchronous, low-latency Python REST APIs & backend engines (FastAPI, Flask, complex threading, and worker tasks)",
    "Scalable, high-throughput web scraping & data mining infrastructures (Playwright, Selenium browser automation, extraction pipelines)",
    "Distributed machine learning workloads & deployments (Ray clusters, AWS EC2 autoscaling groups, Docker, Nginx)"
  ];

  return (
    <main className="hm-root">
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(Json_LD) }}
      />
      {/* Background gradients */}
      <div className="hm-glow-1" />
      <div className="hm-glow-2" />

      <div className="hm-container">
        
        {/* ── HERO SECTION ────────────────────────────────────────── */}
        <section className="hm-hero">
          {/* Pulsing Availability Badge */}
          <div className="hm-badge">
            <span className="hm-badge-ping-container">
              <span className="hm-badge-ping"></span>
              <span className="hm-badge-dot"></span>
            </span>
            Active Availability: B2B / Deel Contractor
          </div>

          <h1 className="hm-title">
            Premium, Core-Team AI &amp; Python Backend Engineering—<span className="hm-title-gradient">Without the Local Overhead</span>
          </h1>

          <p className="hm-subtitle">
            Top 3% Vetted Toptal Engineer available for full-time remote roles or long-term contract engagements. 
            Direct, senior-level ownership of your AI infrastructure, backend APIs, and pipeline deployments.
          </p>

          <div className="hm-buttons">
            <a href="#discovery-form" className="hm-btn-primary">
              Book a Technical Discovery Call <ArrowRight size={18} />
            </a>
            <a 
              href="/HammadCV_inter.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              download
              className="hm-btn-secondary"
            >
              Download CV / Resume
            </a>
          </div>
        </section>

        {/* ── THE FRICTIONLESS REMOTE FRAMEWORK ───────────────────── */}
        <section style={{ marginBottom: '6rem' }}>
          <div className="hm-section-title-wrap">
            <h2 className="hm-section-title">The Frictionless Remote Framework</h2>
            <p className="hm-section-subtitle">
              Hiring globally shouldn't introduce delivery overhead. My workflow is engineered to merge seamlessly into Western product teams from day one.
            </p>
          </div>

          <div className="hm-grid">
            {frameworkPoints.map((point, index) => (
              <div key={index} className="hm-card">
                <div className="hm-icon-box">
                  {point.icon}
                </div>
                <div>
                  <h3 className="hm-card-title">{point.title}</h3>
                  <p className="hm-card-desc">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CORE ARCHITECTURAL EXPERTISE ───────────────────────── */}
        <section className="hm-expertise">
          <div className="hm-expertise-left">
            <div className="hm-expertise-left-icon">
              <Briefcase size={20} />
            </div>
            <h2 className="hm-section-title" style={{ textAlign: 'left', marginBottom: '0' }}>Core Architectural Expertise</h2>
            <p className="hm-card-desc">
              When you hire a Senior Engineer, you are buying execution and decision-making maturity. 
              My engineering stack covers the entire pipeline from prototyping to cloud-deployed production.
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
            <h2 className="hm-section-title">Let's Discuss Technical Fit</h2>
            <p className="hm-section-subtitle">
              Average response time for verified business inquiries is under 12 hours.
            </p>
          </div>

          <HireMeForm />
        </section>

      </div>
    </main>
  );
};

export default HireMePage;
