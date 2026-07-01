// src/app/case-studies/tenderml-ai-document-classification/page.jsx
// Import the dedicated CSS — scoped class names so nothing leaks to rest of site

import Link from "next/link";
import { LuBrainCircuit } from "react-icons/lu";
import { TbBinaryTree } from "react-icons/tb";
import { GrDeploy } from "react-icons/gr";

// ── SEO + Social Metadata ──────────────────────────────────────────────────
// NOTE on keywords below: these are reasoned long-tail candidates based on
// page content, NOT pulled from a keyword-difficulty tool. Verify actual
// search volume / competition in Ahrefs, Semrush, or Google Keyword Planner
// before treating these as validated targets.
export const metadata = {
  title:
    "TenderML: AI Document Classification for German Construction Tenders | Muhammad Hammad Asif",
  description:
    "Case study: a semi-supervised SVM + CRF pipeline that classifies German construction tender PDFs at 95% production accuracy. Sole developer, FastAPI + AWS EC2 deployment.",
  keywords: [
    // Primary
    "AI document classification case study",
    "semi-supervised learning NLP pipeline",
    "FastAPI machine learning deployment",
    // Long-tail (lower competition — verify volume before relying on these)
    "construction tender PDF automation Python",
    "SVM CRF text classification pipeline",
    "DFS tree traversal document parsing",
    "German construction document AI extraction",
    "freelance AI engineer case study FastAPI",
    "Ray cluster AWS EC2 ML deployment example",
    // Branded
    "Muhammad Hammad Asif AI engineer portfolio",
    "Zaytrics AI document classification project",
  ],
  authors: [
    {
      name: "Muhammad Hammad Asif",
      url: "https://hammad-portfolio.recursivedata.com",
    },
  ],

  // ── Open Graph (Facebook, LinkedIn, WhatsApp, Slack) ──────────────────
  openGraph: {
    title:
      "TenderML: 95% Accurate AI Classification of German Construction PDFs",
    description:
      "Case study: semi-supervised SVM + CRF pipeline with DFS tree traversal that replaced manual tender review for a German construction firm. Built solo in 4+ months.",
    url: "https://hammad-portfolio.recursivedata.com/case-studies/tenderml-ai-document-classification",
    type: "article",
    siteName: "Muhammad Hammad Asif — Portfolio",
    locale: "en_US",
    images: [
      {
        // Replace with a real 1200x630 OG image once you have one.
        url: "https://hammad-portfolio.recursivedata.com/og/tenderml-og.png",
        width: 1200,
        height: 630,
        alt: "TenderML — AI document classification system architecture by Muhammad Hammad Asif",
      },
    ],
    article: {
      publishedTime: "2023-06-01T00:00:00.000Z",
      authors: ["https://www.linkedin.com/in/hammad-asif/"],
      tags: [
        "Machine Learning",
        "NLP",
        "Python",
        "FastAPI",
        "AWS",
        "Document Classification",
      ],
    },
  },

  // ── Twitter / X card ──────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title:
      "TenderML: AI Classification of German Construction Tender PDFs — 95% Accuracy",
    description:
      "Semi-supervised SVM + CRF + DFS tree traversal. Solo project — ML training through FastAPI on AWS EC2. Case study by Muhammad Hammad Asif.",
    images: [
      "https://hammad-portfolio.recursivedata.com/og/tenderml-og.png",
    ],
    creator: "@HammadAsif", // verify this is your real handle
  },

  alternates: {
    canonical:
      "https://hammad-portfolio.recursivedata.com/case-studies/tenderml-ai-document-classification",
  },
};

// ── JSON-LD structured data (Google + AI/LLM crawlers) ─────────────────────
// Using TechArticle rather than plain Article — more precise schema.org type
// for a technical engineering write-up, which may help LLM-based crawlers
// and Google's understanding of page intent. Verify this renders as expected
// in Google's Rich Results Test before relying on it.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline:
    "TenderML: Building a 95%-Accurate AI Classification System for German Construction Tender PDFs",
  description:
    "A case study on how a semi-supervised SVM and CRF pipeline with DFS-based tree traversal was used to automate information extraction from structurally inconsistent German construction tender PDFs.",
  datePublished: "2023-06-01",
  dateModified: "2026-06-30",
  author: {
    "@type": "Person",
    name: "Muhammad Hammad Asif",
    url: "https://hammad-portfolio.recursivedata.com",
    sameAs: [
      "https://www.linkedin.com/in/hammad-asif/",
      "https://github.com/Hammad-Asif",
    ],
  },
  publisher: {
    "@type": "Person",
    name: "Muhammad Hammad Asif",
  },
  keywords:
    "AI document classification, SVM, CRF, FastAPI, semi-supervised learning, NLP, Python, AWS EC2, Ray",
  about: [
    { "@type": "Thing", name: "Machine Learning" },
    { "@type": "Thing", name: "Natural Language Processing" },
    { "@type": "Thing", name: "Document Classification" },
  ],
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://hammad-portfolio.recursivedata.com/case-studies/tenderml-ai-document-classification",
  },
};

// ── Sub-components ────────────────────────────────────────────────────────

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

// ── Page ──────────────────────────────────────────────────────────────────
const TenderMLCaseStudy = () => {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/*
        Semantic structure:
        <main> — one per page, the case study itself
          <article> — the self-contained case study content (correct landmark
            for a single piece of authored content; <main> alone is not
            sufficient for content-type semantics that crawlers key off)
            <header> — hero/intro framing for the article
            <section> x N — each thematic block, each with its own
              accessible heading via aria-labelledby, single <h1> at the top,
              sequential <h2>/<h3> with no skipped levels
            <footer> — CTA, scoped to the article as a closing element
          <aside> — related case studies (genuinely tangential content,
            correct semantic use of aside rather than another <section>)
      */}
      <main className="cs-root">
        <article className="cs-article">
          {/* ── Hero / Article Header ──────────────────────────── */}
          <header className="cs-hero">
            <div className="cs-container">
              <div className="cs-tags">
                <span className="cs-tag cs-tag-blue">AI / Machine Learning</span>
                <span className="cs-tag cs-tag-outline">
                  Zaytrics (Pvt.) Limited
                </span>
                <span className="cs-tag cs-tag-outline">
                  German Construction Sector
                </span>
                <span className="cs-tag cs-tag-green">★ 5-star Clutch review</span>
              </div>

              <h1 className="hero-title">
                TenderML: AI Document Classification for German Construction
                Tenders
              </h1>

              <p className="cs-hero-lead">
                A German construction firm was manually sifting through dense
                tender PDFs — with over half of each document being
                irrelevant noise. I built a semi-supervised ML pipeline from
                scratch that automatically classifies text and extracts
                structured fields with{" "}
                <strong>95% production accuracy</strong>, eliminating the
                manual review bottleneck entirely.
              </p>

              <div className="cs-stats" role="list" aria-label="Project results at a glance">
                <div role="listitem">
                  <StatCard value="95%" label="Production accuracy" />
                </div>
                <div role="listitem">
                  <StatCard value="4+" label="Months solo development" />
                </div>
                <div role="listitem">
                  <StatCard value="1000+" label="PDFs in training corpus" />
                </div>
                <div role="listitem">
                  <StatCard value="5★" label="Clutch client review" />
                </div>
              </div>
            </div>
          </header>

          <hr className="cs-divider" />

          {/* ── Body ────────────────────────────────────────────── */}
          <div className="cs-body">
            {/* THE CHALLENGE */}
            <section className="cs-section" aria-labelledby="cs-challenge-heading">
              <SectionLabel>The Challenge</SectionLabel>
              <h2 id="cs-challenge-heading">
                Manual review of construction tenders was slow, inconsistent,
                and error-prone
              </h2>
              <p className="cs-prose">
                A large German construction company receives a high volume of
                tender documents — dense PDFs containing specification
                tables, pricing, SI units, and legal boilerplate all mixed
                together. More than half the text in every document was
                irrelevant filler. Staff had to read each document end-to-end
                just to locate the critical fields: section headings, unit
                measurements, and line-item prices.
              </p>
              <p className="cs-prose" style={{ marginTop: "16px" }}>
                The real technical difficulty was not just classifying text
                as relevant or irrelevant. The documents followed no
                consistent format. The same bullet-point hierarchy could be
                numbered as <code>1 / 1.1</code>, <code>1. / 1.10</code>, or{" "}
                <code>1.20</code> depending on the source. SI units and
                prices could appear on the same line as a heading, or several
                bullet levels below it. No regex or rule-based system could
                handle that variability reliably.
              </p>
            </section>

            {/* MY ROLE */}
            <section className="cs-section" aria-labelledby="cs-role-heading">
              <SectionLabel>My Role</SectionLabel>
              <h2 id="cs-role-heading">Sole developer — end-to-end ownership</h2>
              <p className="cs-prose">
                I owned this project entirely: problem framing, ML approach
                selection, data preparation, model training, the tree and DFS
                extraction logic, FastAPI backend development, and
                production deployment on AWS EC2 with Ray-based autoscaling.
                No other engineers were involved.
              </p>
              <div className="cs-role-grid" role="list">
                <div className="cs-role-card" role="listitem">
                  <span className="cs-role-icon" aria-hidden="true">
                    <LuBrainCircuit />
                  </span>
                  <span className="cs-role-label">ML Architecture &amp; Training</span>
                </div>
                <div className="cs-role-card" role="listitem">
                  <span className="cs-role-icon" aria-hidden="true">
                    <TbBinaryTree />
                  </span>
                  <span className="cs-role-label">Tree / DFS Extraction Logic</span>
                </div>
                <div className="cs-role-card" role="listitem">
                  <span className="cs-role-icon" aria-hidden="true">
                    <GrDeploy />
                  </span>
                  <span className="cs-role-label">FastAPI + AWS EC2 Deployment</span>
                </div>
              </div>
            </section>

            {/* ARCHITECTURE & STACK */}
            <section className="cs-section" aria-labelledby="cs-architecture-heading">
              <SectionLabel>Architecture &amp; Stack</SectionLabel>
              <h2 id="cs-architecture-heading">
                How structural inconsistency was solved with semi-supervised
                learning and tree traversal
              </h2>

              <div className="cs-challenges">
                <section aria-labelledby="cs-challenge1-heading">
                  <h3 id="cs-challenge1-heading">
                    Challenge 1 — Limited labeled data
                  </h3>
                  <p className="cs-prose">
                    The training corpus was 1,000+ German PDF documents, but
                    only a subset had been manually annotated — individual
                    lines highlighted as important or not important by domain
                    experts. Training a fully supervised classifier on this
                    partial data would generalize poorly to the unlabeled
                    majority.
                  </p>
                  <p className="cs-prose" style={{ marginTop: "14px" }}>
                    I used a <strong>semi-supervised approach</strong>: train
                    an initial SVM classifier on the labeled subset, then use
                    its confidence scores to propagate labels to unlabeled
                    documents iteratively — accepting only predictions above
                    a confidence threshold. This allowed the model to learn
                    from the full corpus without requiring exhaustive manual
                    annotation.
                  </p>
                </section>

                <section aria-labelledby="cs-challenge2-heading">
                  <h3 id="cs-challenge2-heading">
                    Challenge 2 — Structural inconsistency across documents
                  </h3>
                  <p className="cs-prose">
                    Even after classifying text as relevant, extracting the
                    specific fields — headings, SI units, prices — required
                    understanding each document's structure. The
                    bullet-point hierarchy was the semantic signal, but the
                    numbering formats varied too much for regex patterns to
                    handle reliably.
                  </p>
                  <p className="cs-prose" style={{ marginTop: "14px" }}>
                    My solution was to model each document as a{" "}
                    <strong>tree structure</strong> that mirrors the
                    bullet-point hierarchy, regardless of the numbering
                    format used. A custom parser normalizes the numbering
                    schemes and builds the tree. Then a{" "}
                    <strong>depth-first search (DFS) algorithm</strong>{" "}
                    traverses it to correctly associate parent headings with
                    their child body text, SI units, and prices — even when
                    those fields appear in non-standard positions.
                  </p>
                </section>

                <section aria-labelledby="cs-challenge3-heading">
                  <h3 id="cs-challenge3-heading">
                    Challenge 3 — Production reliability
                  </h3>
                  <p className="cs-prose">
                    The system had to integrate cleanly into the client's
                    existing software via API. I wrapped the entire inference
                    pipeline in a <strong>FastAPI</strong> backend, deployed
                    it on <strong>AWS EC2</strong> with{" "}
                    <strong>Ray clusters</strong> for autoscaling under
                    variable document load. The model artifacts — SVM, SGD,
                    CRF, and TF-IDF vectorizers — are serialized and loaded
                    at startup, keeping inference latency low.
                  </p>
                </section>
              </div>
            </section>

            {/* SYSTEM ARCHITECTURE DIAGRAM */}
            <section className="cs-section" aria-labelledby="cs-diagram-heading">
              <SectionLabel>System Architecture</SectionLabel>
              <h2 id="cs-diagram-heading">
                Pipeline overview: offline training → online inference
              </h2>
              <p className="cs-prose">
                The system has two distinct phases. Offline training — run
                once or periodically to retrain — produces serialized model
                artifacts. The online inference pipeline loads those
                artifacts at startup and processes new PDFs in real time via
                the FastAPI layer.
              </p>

              <figure className="cs-figure">
                <img
                  src="/tenderml-architecture.svg"
                  alt="TenderML system architecture diagram showing the offline training pipeline producing serialized SVM, CRF, and TF-IDF model artifacts, and the online inference pipeline loading those artifacts behind a FastAPI endpoint deployed on AWS EC2 with Ray cluster autoscaling"
                  className="cs-diagram-img"
                  width="1200"
                  height="675"
                  loading="lazy"
                />
                <figcaption className="cs-diagram-caption">
                  Fig 1. TenderML pipeline — offline training produces
                  serialized artifacts loaded by online inference
                </figcaption>
              </figure>
            </section>

            {/* IMPLEMENTATION HIGHLIGHTS */}
            <section className="cs-section" aria-labelledby="cs-highlights-heading">
              <SectionLabel>Implementation Highlights</SectionLabel>
              <h2 id="cs-highlights-heading">Key engineering decisions</h2>

              <div className="cs-highlight-stack">
                <article className="cs-highlight-card">
                  <h3>Why SVM over a neural approach</h3>
                  <p>
                    SVMs with TF-IDF features are highly interpretable and
                    generalize well on small, domain-specific corpora —
                    critical when labeled data is scarce. A fine-tuned
                    transformer would have required far more labeled examples
                    to avoid overfitting on this niche German construction
                    vocabulary. The SVM achieved 95% accuracy in production,
                    validating the choice.
                  </p>
                </article>

                <article className="cs-highlight-card">
                  <h3>CRF for sequence labeling</h3>
                  <p>
                    A Conditional Random Field (CRF) was used alongside the
                    SVM to handle sequence-level decisions — specifically,
                    labeling runs of lines within a bullet section. CRFs
                    capture dependencies between adjacent labels, which
                    matters when a single section spans multiple lines with
                    mixed relevant and irrelevant content.
                  </p>
                </article>

                <article className="cs-highlight-card">
                  <h3>Tree + DFS instead of regex</h3>
                  <p>
                    Rather than writing brittle regex patterns for each
                    numbering variant, I built a generalized parser that
                    constructs a tree from any bullet hierarchy. DFS
                    traversal then operates on the tree semantics —
                    parent/child relationships — rather than raw text
                    positions. This made the extraction logic robust to
                    format changes without requiring code updates for each
                    new document variant.
                  </p>
                </article>

                <article className="cs-highlight-card">
                  <h3>Semi-supervised confidence propagation</h3>
                  <p>
                    Labels were propagated from the annotated seed set by
                    running the trained classifier on unlabeled documents and
                    accepting predictions only above a confidence threshold,
                    tuned via held-out validation. This self-training loop
                    iterated until convergence, maximizing use of the
                    available unlabeled data without introducing noisy
                    pseudo-labels.
                  </p>
                </article>
              </div>
            </section>

            {/* METRICS & OUTCOMES */}
            <section className="cs-section" aria-labelledby="cs-results-heading">
              <SectionLabel>Metrics &amp; Outcomes</SectionLabel>
              <h2 id="cs-results-heading">Delivered and integrated into production</h2>
              <p className="cs-prose">
                The system achieved{" "}
                <strong>95% classification accuracy in production</strong> —
                measured against ground truth on held-out documents the
                model had never seen during training. After integration into
                the client's existing software stack via the FastAPI API
                layer, the time required to extract structured information
                from each tender document dropped significantly compared to
                the manual review process.
              </p>
              <p className="cs-prose" style={{ marginTop: "16px" }}>
                The client left a <strong>5-star review on Clutch.co</strong>,
                specifically calling out the quality of the engineering and
                the reliability of the delivered system. The project ran for
                4+ months from initial scoping through production
                deployment — handled entirely by a single engineer.
              </p>
              <figure className="cs-result-callout">
                <blockquote cite="https://clutch.co">
                  <p>
                    The system successfully automated the extraction of
                    critical tender information, significantly reducing
                    manual review time. The accuracy and reliability of the
                    pipeline exceeded our expectations.
                  </p>
                </blockquote>
                <figcaption>
                  <cite>— Clutch.co client review · German Construction Sector</cite>
                </figcaption>
              </figure>
            </section>

            {/* TECH STACK */}
            <section className="cs-section" aria-labelledby="cs-stack-heading">
              <SectionLabel>Tech Stack</SectionLabel>
              <h2 id="cs-stack-heading">Technologies used</h2>
              <ul className="cs-tech-pills">
                {[
                  "Python",
                  "SVM (scikit-learn)",
                  "CRF (sklearn-crfsuite)",
                  "SGD Classifier",
                  "TF-IDF Vectorizer",
                  "FastAPI",
                  "AWS EC2",
                  "Ray Clusters",
                  "PDF Processing",
                  "Semi-supervised Learning",
                  "DFS Tree Traversal",
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
                <a
                  href="https://github.com/Hammad-Asif/tenderML"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cs-btn-primary"
                >
                  View on GitHub →
                </a>
                <Link href="/#projects" className="cs-btn-secondary">
                  ← Back to Case Studies
                </Link>
              </nav>
            </section>
          </div>

          {/* ── CTA Footer ──────────────────────────────────────── */}
          <footer className="cs-cta">
            <h2>Need a production-grade AI or NLP system?</h2>
            <p>
              I build ML pipelines and backend APIs that go beyond
              prototypes — from training and evaluation through to deployed,
              monitored production systems.
            </p>
            <a href="/contact" className="cs-cta-btn">
              Let's talk →
            </a>
          </footer>
        </article>

        {/* ── Related Case Studies (genuinely tangential → <aside>) ── */}
        <aside className="cs-related" aria-labelledby="cs-related-heading">
          <h2 id="cs-related-heading">Related case studies</h2>
          <div className="cs-related-grid">
            <Link href="/case-studies/gcp-insightdocs" className="cs-related-card">
              <span className="cs-related-tag">Document AI</span>
              <h3>GCP InsightDocs — Document Extraction Platform</h3>
              <p>
                End-to-end cloud document extraction using Google Cloud
                Document AI and OCR, served as a client-facing API.
              </p>
            </Link>
            <Link href="/case-studies/gemini-ai-trainer" className="cs-related-card">
              <span className="cs-related-tag">LLM Training</span>
              <h3>Gemini AI Trainer — Google × Turing</h3>
              <p>
                Contributed SFT datasets and RLHF annotations to improve
                Gemini's data analysis reasoning capabilities.
              </p>
            </Link>
          </div>
        </aside>
      </main>
    </>
  );
};

export default TenderMLCaseStudy;