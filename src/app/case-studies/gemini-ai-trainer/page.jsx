// src/app/case-studies/gemini-ai-trainer/page.jsx
import Link from "next/link";
import { Brain, Database, CheckCircle, GraduationCap } from "lucide-react";
import { LuBrainCircuit } from "react-icons/lu";
import { TbBinaryTree } from "react-icons/tb";
import { GrDeploy } from "react-icons/gr";

export const metadata = {
  title: "Gemini AI Trainer — Structured Data Reasoning Case Study | Muhammad Hammad Asif",
  description: "Case study: 1.2 years engineering SFT datasets and performing RLHF human evaluations to improve Google Gemini's reasoning capabilities over structured tabular data.",
  keywords: [
    "Gemini AI training case study",
    "SFT dataset engineering",
    "RLHF human evaluation LLM",
    "tabular reasoning language models",
    "Turing Google contractor portfolio",
    "reinforcement learning human feedback"
  ],
  authors: [
    {
      name: "Muhammad Hammad Asif",
      url: "https://hammad-portfolio.recursivedata.com",
    },
  ],
  openGraph: {
    title: "Gemini AI Trainer — Structured Data Reasoning Case Study",
    description: "Engineering SFT datasets and performing RLHF evaluations to train Google Gemini models to handle messy, real-world Excel and CSV hierarchies.",
    url: "https://hammad-portfolio.recursivedata.com/case-studies/gemini-ai-trainer",
    type: "article",
    siteName: "Muhammad Hammad Asif — Portfolio",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://hammad-portfolio.recursivedata.com/case-studies/gemini-ai-trainer",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Gemini AI Trainer — Improving Structured Data Reasoning via SFT & RLHF",
  description: "A deep dive into SFT dataset engineering and RLHF human evaluations for training Google Gemini models to handle complex and ambiguous structured data.",
  datePublished: "2025-05-31",
  author: {
    "@type": "Person",
    name: "Muhammad Hammad Asif",
    url: "https://hammad-portfolio.recursivedata.com",
  },
};

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

const GeminiCaseStudy = () => {
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
                <span className="cs-tag cs-tag-blue">AI Training & Alignment</span>
                <span className="cs-tag cs-tag-outline">Google × Turing</span>
                <span className="cs-tag cs-tag-outline">Structured Data Track</span>
                <span className="cs-tag cs-tag-green">1.2 Years Engagement</span>
              </div>

              <h1 className="hero-title">
                Gemini AI Trainer — Structured Data Reasoning &amp; Human Evaluation
              </h1>

              <p className="cs-hero-lead">
                Large language models struggle to read and parse messy, real-world spreadsheet files. 
                Over a sustained 1.2-year engagement, I engineered high-quality Supervised Fine-Tuning (SFT) 
                datasets and conducted Reinforcement Learning from Human Feedback (RLHF) evaluations, 
                specifically training Google's Gemini models to handle complex tabular structures, 
                ambiguous column definitions, and multi-row header hierarchies.
              </p>

              <div className="cs-stats" role="list" aria-label="Project results at a glance">
                <div role="listitem">
                  <StatCard value="1.2 Yrs" label="Engagement Duration" />
                </div>
                <div role="listitem">
                  <StatCard value="Multi-Track" label="SFT + RLHF Pipelines" />
                </div>
                <div role="listitem">
                  <StatCard value="Tabular" label="Primary Domain Focus" />
                </div>
                <div role="listitem">
                  <StatCard value="Vetted" label="Turing Vetted Team" />
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
                Spreadsheets in the wild do not conform to clean database schemas
              </h2>
              <p className="cs-prose">
                For a language model, answering questions about a structured table goes far beyond basic text parsing. 
                Real-world files (CSV, Excel) are notoriously messy. They frequently arrive with missing headers, leading metadata blocks (e.g. report names, export parameters), and multi-row header hierarchies. 
                If a model cannot correctly rebuild the logical structure of a sheet, it cannot extract data, apply calculations, or generate accurate code representations.
              </p>
              <p className="cs-prose" style={{ marginTop: "16px" }}>
                The training objective was to teach Gemini to navigate these edge cases safely. 
                Instead of guessing blindly when confronted with ambiguous column layouts, the model needed to learn when to make structured assumptions, when to merge hierarchical headers, and when to pause and ask the user for clarification.
              </p>
            </section>

            {/* MY ROLE */}
            <section className="cs-section" aria-labelledby="cs-role-heading">
              <SectionLabel>My Role</SectionLabel>
              <h2 id="cs-role-heading">Independent Contractor — Two Operational Tracks</h2>
              <p className="cs-prose">
                I worked as an independent contractor vetted by Turing, collaborating on a specialized team training Google's Gemini models. My responsibilities were split into two core disciplines:
              </p>
              <div className="cs-role-grid" role="list" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
                <div className="cs-role-card" role="listitem">
                  <span className="cs-role-icon" aria-hidden="true">
                    <LuBrainCircuit />
                  </span>
                  <span className="cs-role-label">SFT Dataset Engineering</span>
                </div>
                <div className="cs-role-card" role="listitem">
                  <span className="cs-role-icon" aria-hidden="true">
                    <GraduationCap />
                  </span>
                  <span className="cs-role-label">RLHF Evaluation</span>
                </div>
                <div className="cs-role-card" role="listitem">
                  <span className="cs-role-icon" aria-hidden="true">
                    <Database />
                  </span>
                  <span className="cs-role-label">Structured Tabular Formats</span>
                </div>
              </div>
            </section>

            {/* DEEP DIVE: SFT DATASET ENGINEERING */}
            <section className="cs-section" aria-labelledby="cs-sft-heading">
              <SectionLabel>Dataset Engineering</SectionLabel>
              <h2 id="cs-sft-heading">
                Designing prompt-response pairs for structured data edge cases
              </h2>
              <p className="cs-prose">
                SFT dataset engineering involved hand-crafting prompts representing edge-case user queries, paired with flawless, step-by-step target responses. These examples taught the model the logical workflows required to resolve structural ambiguities.
              </p>

              <div className="cs-challenges">
                <section aria-labelledby="cs-scenario1-heading">
                  <h3 id="cs-scenario1-heading">
                    Scenario 1 — Headerless Files &amp; Direct Data
                  </h3>
                  <p className="cs-prose">
                    When raw data starts immediately on row one, the column mapping is implicit. I designed examples showcasing two correct behaviors depending on column structure:
                  </p>
                  <ul className="cs-prose" style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '8px' }}>
                    <li><strong>Single numerical column</strong>: The model infers this column is the primary target and calculates the query directly.</li>
                    <li><strong>Multiple numerical columns</strong>: Rather than guessing, the model halts and asks the user to specify which column to query.</li>
                  </ul>
                </section>

                <section aria-labelledby="cs-scenario2-heading">
                  <h3 id="cs-scenario2-heading">
                    Scenario 2 — Multi-row Hierarchical Headers
                  </h3>
                  <p className="cs-prose">
                    In multi-row header sheets, columns are nested under category headers. I engineered training targets demonstrating how to parse these:
                  </p>
                  <ul className="cs-prose" style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '8px' }}>
                    <li>Detect and isolate multi-row headers without treating headers as data rows.</li>
                    <li>Merge categories into unified, descriptive headers (e.g., merging "Region" and "GDP" into "Region — GDP").</li>
                    <li>Preserve standalone columns (e.g. "Unemployment Ratio") without applying the merge prefix incorrectly.</li>
                  </ul>
                </section>

                <section aria-labelledby="cs-scenario3-heading">
                  <h3 id="cs-scenario3-heading">
                    Scenario 3 — Leading Metadata Blocks
                  </h3>
                  <p className="cs-prose">
                    Report exports often start with titles, dates, or filter parameters in the first few rows before the table headers begin. SFT examples taught the model to search for the true tabular starting row, ignore leading metadata rows, and process only the active table.
                  </p>
                </section>
              </div>
            </section>

            {/* DEEP DIVE: HUMAN EVALUATION */}
            <section className="cs-section" aria-labelledby="cs-evaluation-heading">
              <SectionLabel>Human Evaluation</SectionLabel>
              <h2 id="cs-evaluation-heading">
                RLHF human feedback loops for automated pipeline validation
              </h2>
              <p className="cs-prose">
                The evaluation track focused on reviewing candidate responses generated by automated pipelines. By scoring and ranking model responses, we aligned Gemini's behavior to follow precise reasoning logic and avoid hallucinations:
              </p>

              <div className="cs-highlight-stack" style={{ marginTop: '20px' }}>
                <article className="cs-highlight-card">
                  <h3>Execution Correctness</h3>
                  <p>
                    Ensured that calculations, aggregations, and data point lookups matched the ground truth in the source files without error.
                  </p>
                </article>
                <article className="cs-highlight-card">
                  <h3>Reasoning Transparency</h3>
                  <p>
                    Evaluated the model's intermediate scratchpad/reasoning steps. Getting a correct final answer was not enough; the step-by-step logic had to be mathematically and structurally sound.
                  </p>
                </article>
                <article className="cs-highlight-card">
                  <h3>Clarification Behavior</h3>
                  <p>
                    Checked if the model correctly identified ambiguous inputs and requested confirmation from the user, reinforcing safety and avoiding false assumptions.
                  </p>
                </article>
              </div>
            </section>

            {/* METRICS & SUMMARY */}
            <section className="cs-section" aria-labelledby="cs-summary-heading">
              <SectionLabel>Engagement Summary</SectionLabel>
              <h2 id="cs-summary-heading">Sustained High-Quality Output</h2>
              <p className="cs-prose">
                The engagement spanned over a year (April 2024 to May 2025). The rigorous selection process, requiring deep Python, data analysis, and language model validation skills, ensured that only top engineering contractors remained on the pipeline.
              </p>
              
              <figure className="cs-result-callout" style={{ borderLeftColor: '#3b82f6' }}>
                <blockquote>
                  <p>
                    Training modern frontier LLMs relies on premium, highly contextual SFT data that matches the exact edge cases encountered by real-world enterprise applications.
                  </p>
                </blockquote>
                <figcaption>
                  <cite>— Alignment &amp; Fine-Tuning Principles</cite>
                </figcaption>
              </figure>
            </section>

            {/* TECH STACK */}
            <section className="cs-section" aria-labelledby="cs-stack-heading">
              <SectionLabel>Core Disciplines</SectionLabel>
              <h2 id="cs-stack-heading">Skills &amp; Methodologies</h2>
              <ul className="cs-tech-pills">
                {[
                  "SFT Dataset Engineering",
                  "RLHF Human Evaluation",
                  "Python",
                  "Tabular Data Analysis (CSV/XLSX)",
                  "Model Alignment & Evaluation",
                  "Data Annotation",
                  "Edge Case Scenario Design",
                  "Language Model Optimization"
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
                  Hire Me for AI Contracts →
                </a>
              </nav>
            </section>
          </div>

          {/* CTA Footer */}
          <footer className="cs-cta">
            <h2>Need to align or optimize your LLM pipeline?</h2>
            <p>
              I bring hands-on experience from frontier model training teams, specializing in structured data formats, custom dataset engineering, and evaluation setups.
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
            <Link href="/case-studies/tenderml-ai-document-classification" className="cs-related-card">
              <span className="cs-related-tag">Machine Learning</span>
              <h3>TenderML — PDF Text Classification</h3>
              <p>
                Semi-supervised learning pipeline (SVM + CRF + DFS tree traversal) parsing German construction PDFs with 95% production accuracy.
              </p>
            </Link>
            <Link href="/case-studies/gcp-insightdocs" className="cs-related-card">
              <span className="cs-related-tag">Document AI</span>
              <h3>GCP InsightDocs — Document Extraction</h3>
              <p>
                Automating key-value data extraction from CRA tax forms and legal contracts using Google Cloud Document AI and OCR.
              </p>
            </Link>
          </div>
        </aside>
      </main>
    </>
  );
};

export default GeminiCaseStudy;
