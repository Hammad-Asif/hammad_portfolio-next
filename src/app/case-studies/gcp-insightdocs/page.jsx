// src/app/case-studies/gcp-insightdocs/page.jsx
import Link from "next/link";
import { pageMetadata, breadcrumbJsonLd, absoluteUrl, PERSON_ID, WEBSITE_ID } from "@/lib/seo";
import { Cloud, Server, Layout, FileSpreadsheet } from "lucide-react";
import { LuBrainCircuit } from "react-icons/lu";
import { TbBinaryTree } from "react-icons/tb";
import { GrDeploy } from "react-icons/gr";

export const metadata = pageMetadata({
  title: "GCP InsightDocs: Google Document AI Extraction",
  description:
    "How I built a Google Document AI and OCR platform that extracts data from CRA tax forms and contracts for a Canadian accountancy firm, with Flask and React.",
  path: "/case-studies/gcp-insightdocs",
  type: "article",
  article: {
    publishedTime: "2024-03-30T00:00:00.000Z",
    modifiedTime: "2026-11-26T00:00:00.000Z",
    tags: ['Google Document AI', 'OCR', 'Form extraction', 'Flask', 'React'],
  },
});

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${absoluteUrl("/case-studies/gcp-insightdocs")}#article`,
    headline: "GCP InsightDocs: CRA Tax Form Extraction with Google Document AI",
    description: "How I built a Google Document AI and OCR platform that extracts data from CRA tax forms and contracts for a Canadian accountancy firm, with Flask and React.",
    datePublished: "2024-03-30",
    dateModified: "2026-11-26",
    author: { "@id": PERSON_ID },
    publisher: { "@id": PERSON_ID },
    isPartOf: { "@id": WEBSITE_ID },
    image: absoluteUrl("/case-studies/gcp-insightdocs/opengraph-image"),
    mainEntityOfPage: absoluteUrl("/case-studies/gcp-insightdocs"),
    keywords: "Google Document AI, OCR, Form extraction, Flask, React",
  },
  breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "GCP InsightDocs", path: "/case-studies/gcp-insightdocs" },
  ]),
];

function StatCard({ value, label }) {
  return (
    <div className="cs-stat-card">
      <span className="cs-stat-value">{value}</span>
      <span className="cs-stat-label">{label}</span>
    </div>
  );
}

function SectionLabel({ children }) {
  return <span className="cs-section-label">{children}</span>;
}

const GCPInsightDocsCaseStudy = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="cs-root">
        <article className="cs-article">
          {/* Hero Header */}
          <header className="cs-hero">
            <div className="cs-container">
              <div className="cs-tags">
                <span className="cs-tag cs-tag-blue">Document AI &amp; OCR</span>
                <span className="cs-tag cs-tag-outline">Canadian Accountancy Client</span>
                <span className="cs-tag cs-tag-outline">Flask + ReactJS</span>
                <span className="cs-tag cs-tag-green">Sole Developer</span>
              </div>

              <h1 className="hero-title">
                GCP InsightDocs: Automated Document Extraction Platform
              </h1>

              <p className="cs-hero-lead">
                Canadian accountancy and business firms handle high volumes of critical documents. 
                I independently built GCP InsightDocs from scratch — a full-stack platform that combines 
                Google Cloud Document AI and OCR with a side-by-side React UI, automating structured key-value 
                extraction from CRA tax forms and legal contracts to eliminate manual transcription workflows.
              </p>

              <div className="cs-stats" role="list" aria-label="Project results at a glance">
                <div role="listitem">
                  <StatCard value="100%" label="Manual Entry Eliminated" />
                </div>
                <div role="listitem">
                  <StatCard value="Solo" label="End-to-End Ownership" />
                </div>
                <div role="listitem">
                  <StatCard value="GCP" label="Document AI + OCR" />
                </div>
                <div role="listitem">
                  <StatCard value="SaaS" label="Flask &amp; React Architecture" />
                </div>
              </div>
            </div>
          </header>

          <hr className="cs-divider" />

          {/* Body */}
          <div className="cs-body">
            {/* THE CHALLENGE */}
            <section className="cs-section" aria-labelledby="cs-challenge-heading">
              <SectionLabel>The Challenge</SectionLabel>
              <h2 id="cs-challenge-heading">
                Brittle rules and manual transcription bottlenecks
              </h2>
              <p className="cs-prose">
                The client, a Canadian accounting and business advisory firm, regularly parses high volumes of Canada Revenue Agency (CRA) tax forms, legal contracts, and financial records. 
                Because these documents come from varying sources and scanning layouts, standard regex patterns or template-based document matching fail constantly.
              </p>
              <p className="cs-prose" style={{ marginTop: "16px" }}>
                Staff spent hours copy-pasting numbers from scanned PDFs into their internal tax and ledger systems. 
                They needed a unified web application that could ingest multiple input formats, extract key-value data reliably without custom model training costs, and present the output in a side-by-side layout for instant visual verification.
              </p>
            </section>

            {/* MY ROLE */}
            <section className="cs-section" aria-labelledby="cs-role-heading">
              <SectionLabel>My Role</SectionLabel>
              <h2 id="cs-role-heading">Sole Developer — Full-Stack Ownership</h2>
              <p className="cs-prose">
                I owned this project entirely as the sole developer, architecting and implementing the entire solution from scoping through deployment:
              </p>
              <div className="cs-role-grid" role="list" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
                <div className="cs-role-card" role="listitem">
                  <span className="cs-role-icon" aria-hidden="true">
                    <Server />
                  </span>
                  <span className="cs-role-label">Flask Python Backend API</span>
                </div>
                <div className="cs-role-card" role="listitem">
                  <span className="cs-role-icon" aria-hidden="true">
                    <Cloud />
                  </span>
                  <span className="cs-role-label">GCP Document AI Integration</span>
                </div>
                <div className="cs-role-card" role="listitem">
                  <span className="cs-role-icon" aria-hidden="true">
                    <Layout />
                  </span>
                  <span className="cs-role-label">ReactJS Side-by-Side UI</span>
                </div>
              </div>
            </section>

            {/* ARCHITECTURE & STACK */}
            <section className="cs-section" aria-labelledby="cs-architecture-heading">
              <SectionLabel>Architecture &amp; Stack</SectionLabel>
              <h2 id="cs-architecture-heading">
                Orchestrating cloud processors behind a decoupled API
              </h2>

              <div className="cs-challenges">
                <section aria-labelledby="cs-stack1-heading">
                  <h3 id="cs-stack1-heading">
                    Flask Backend &amp; GCP Orchestration
                  </h3>
                  <p className="cs-prose">
                    The backend was built in Python using Flask to keep the service footprint lightweight. 
                    Its primary job is API routing and data transformation: it receives uploaded files (PDFs and images), checks mime types, routes them to the correct GCP Document AI endpoints, and deserializes the structured JSON response into a clean schema the frontend can consume.
                  </p>
                </section>

                <section aria-labelledby="cs-stack2-heading">
                  <h3 id="cs-stack2-heading">
                    Processor Strategy: Form Parser + OCR
                  </h3>
                  <p className="cs-prose">
                    Instead of investing in expensive custom model training, I architected the extraction workflow utilizing standard pretrained GCP processors:
                  </p>
                  <ul className="cs-prose" style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '8px' }}>
                    <li><strong>Form Parser</strong>: Used for CRA forms. Form Parser is designed to parse tables and key-value fields (e.g. associating labels like "Total Income" directly to their corresponding numerical values) even when layout spacing shifts.</li>
                    <li><strong>OCR Processor</strong>: Used as a fallback for scanning contracts and text-heavy legal files, extracting raw content for review panels.</li>
                  </ul>
                </section>

                <section aria-labelledby="cs-stack3-heading">
                  <h3 id="cs-stack3-heading">
                    ReactJS Side-by-Side Panel UX
                  </h3>
                  <p className="cs-prose">
                    The UI was built with ReactJS to deliver a seamless verify-and-confirm workflow. 
                    It displays the original PDF or image inside an interactive viewer panel on the left. 
                    On the right, a structured extraction sidebar lists all the parsed key-value pairs. 
                    This UI allows users to easily confirm the extracted data against the source without toggling external windows or tools.
                  </p>
                </section>
              </div>
            </section>

            {/* METRICS & SUMMARY */}
            <section className="cs-section" aria-labelledby="cs-summary-heading">
              <SectionLabel>Outcomes</SectionLabel>
              <h2 id="cs-summary-heading">Frictionless manual workflow automation</h2>
              <p className="cs-prose">
                The platform successfully automated structured data extraction for the client's two target document classes (CRA forms and legal contracts). 
                By providing a direct side-by-side comparison screen, the system cut down transcription steps entirely and eliminated manual input errors, significantly increasing workflow speed.
              </p>
              
              <figure className="cs-result-callout">
                <blockquote>
                  <p>
                    Connecting pre-trained cloud vision processors with intuitive, verification-focused user interfaces is the fastest way to deliver measurable business automation.
                  </p>
                </blockquote>
                <figcaption>
                  <cite>— Enterprise Integration Principles</cite>
                </figcaption>
              </figure>
            </section>

            {/* TECH STACK */}
            <section className="cs-section" aria-labelledby="cs-stack-heading">
              <SectionLabel>Technologies Used</SectionLabel>
              <h2 id="cs-stack-heading">Stack details</h2>
              <ul className="cs-tech-pills">
                {[
                  "Flask (Python)",
                  "ReactJS",
                  "Google Cloud Document AI",
                  "Google Cloud OCR",
                  "RESTful API Design",
                  "PDF/Image Processing",
                  "JSON Data Parsing",
                  "Full-stack Web Integration"
                ].map((tech) => (
                  <li className="cs-tech-pill" key={tech}>
                    {tech}
                  </li>
                ))}
              </ul>
            </section>

            {/* LINKS */}
            <section className="cs-section">
              <nav className="cs-actions" aria-label="Case study actions">
                <Link href="/case-studies" className="cs-btn-primary">
                  ← Back to Case Studies
                </Link>
                <a
                  href="/contact"
                  className="cs-btn-secondary"
                >
                  Hire Me for Document AI Integration →
                </a>
              </nav>
            </section>
          </div>

          {/* CTA Footer */}
          <footer className="cs-cta">
            <h2>Need an enterprise document processing platform?</h2>
            <p>
              I build custom Document AI integration pipelines and intuitive React frontends that automate manual extraction workflows for contracts, tax forms, and reports.
            </p>
            <a href="/contact" className="cs-cta-btn">
              Let's talk →
            </a>
          </footer>
        </article>

        {/* Related Case Studies */}
        <aside className="cs-related" aria-labelledby="cs-related-heading">
          <h2 id="cs-related-heading">Related case studies</h2>
          <div className="cs-related-grid">
            <Link href="/services/document-ai" className="cs-related-card">
              <span className="cs-related-tag">Service</span>
              <h3>AI document &amp; PDF data extraction</h3>
              <p>Need a pipeline like this for your own documents? See how I scope, measure and deliver document-AI projects.</p>
            </Link>
            <Link href="/case-studies/tenderml-ai-document-classification" className="cs-related-card">
              <span className="cs-related-tag">Machine Learning</span>
              <h3>TenderML — PDF Text Classification</h3>
              <p>
                Semi-supervised learning pipeline (SVM + CRF + DFS tree traversal) parsing German construction PDFs with 95% production accuracy.
              </p>
            </Link>
            <Link href="/case-studies/gemini-ai-trainer" className="cs-related-card">
              <span className="cs-related-tag">AI Training</span>
              <h3>Gemini AI Trainer — Google × Turing</h3>
              <p>
                1.2 years engineering SFT datasets and conducting RLHF human evaluations to improve Gemini's data reasoning capabilities.
              </p>
            </Link>
          </div>
        </aside>
      </main>
    </>
  );
};

export default GCPInsightDocsCaseStudy;
