// src/app/case-studies/lightdesign-ai-roof-measurement/page.jsx
// LightDesign: AI roof-line detection, single-photo measurement and lighting design.
// Source: LightDesign project overview (Aug–Oct 2026). Built for KeystoneSTS.

import Link from "next/link";
import { pageMetadata, breadcrumbJsonLd, absoluteUrl, PERSON_ID, WEBSITE_ID } from "@/lib/seo";
import { LuBrainCircuit, LuRuler, LuLayoutDashboard } from "react-icons/lu";

const PATH = "/case-studies/lightdesign-ai-roof-measurement";

const GITHUB_URL = "https://github.com/Hammad-Asif/lightDesign-AI-App";

const DESCRIPTION =
  "How SAM 3, a vision LLM and single-photo camera calibration turn one house photo into typed roof lines, real lengths in feet and a lighting estimate.";

export const metadata = pageMetadata({
  title: "LightDesign: AI Roof Measurement From One Photo",
  description: DESCRIPTION,
  path: PATH,
  type: "article",
  article: {
    publishedTime: "2026-11-26T00:00:00.000Z",
    modifiedTime: "2026-11-26T00:00:00.000Z",
    tags: ["Computer vision", "SAM 3", "Vision LLM", "Single-image metrology", "FastAPI", "React"],
  },
});

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${absoluteUrl(PATH)}#article`,
    headline: "LightDesign: AI Roof-Line Detection and Measurement From a Single House Photo",
    description: DESCRIPTION,
    datePublished: "2026-11-26",
    dateModified: "2026-11-26",
    author: { "@id": PERSON_ID },
    publisher: { "@id": PERSON_ID },
    isPartOf: { "@id": WEBSITE_ID },
    image: absoluteUrl(`${PATH}/opengraph-image`),
    mainEntityOfPage: absoluteUrl(PATH),
    keywords:
      "Computer vision, roof measurement from photo, SAM 3 segmentation, vision LLM, vanishing points, camera calibration, FastAPI, React, PostgreSQL",
  },
  breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "LightDesign", path: PATH },
  ]),
];

// ── Content ───────────────────────────────────────────────────────────────

const workflow = [
  ["Upload", "The photo is EXIF-rotated, size-checked and stored, and a project is created with a thumbnail."],
  ["Detect", "AI finds the target house, its typed roof lines, hedges, shrubs, palms (trunk, collar, fronds), trees and obstructions."],
  ["Check lines", "The salesperson reviews and corrects in the editor: drag points, draw missing lines, tap roofs in or out of the house, or “find lines in box”."],
  ["Measure", "One known length is entered (for example a 16 ft garage door). Every line gets a real length, a confidence and a “measure next” hint if a wall is unreached."],
  ["Lighting & approve", "The instruction is read into requests, matched to products and colours, confirmed, and bulbs are placed and counted for the estimate."],
];

const detectionSteps = [
  { title: "Upload & normalise", text: "EXIF rotation, size limits, working copy at 1280 px." },
  { title: "SAM 3 segmentation", text: "Masks for roof planes, hedge, bush, topiary, palm, tree, car and sky.", note: "Customer photos are sent inline as base64, never uploaded to third-party storage." },
  { title: "Target-house selection", text: "Seed on the largest central roof and grow across shared seams, with no extra model call.", note: "Frame-cut and set-back neighbouring houses are rejected." },
  { title: "Sky-bounded crop", text: "A padded house box whose top extends to where the sky begins." },
  { title: "Vision-LLM roof lines", text: "Typed lines drawn on the crop, cached by pixel hash.", note: "If the LLM fails (key, timeout, bad JSON), a geometric partition pipeline draws the lines instead." },
  { title: "Crop → photo coordinates", text: "One canonical RoofLine type for every source." },
  { title: "Conservative geometry", text: "Edge snapping, vanishing-point facades and corner closure.", note: "An endpoint moves only on strong, parallel, local evidence, and a line never turns more than 2.5°." },
  { title: "Occlusion", text: "Join pieces behind palms and cars, and mark the hidden stretches.", note: "A join needs a detected blocker covering the gap." },
  { title: "Confidence & editor regions", text: "Evidence-weighted score from source, edge strength, VP fit, connectivity, plane agreement and visibility. Low scores are drawn dashed." },
];

const measurementSteps = [
  { title: "Vanishing points", text: "LSD line segments give a vertical VP plus one per facade." },
  { title: "Camera focal length", text: "f² = −(v₁ − c)·(v₂ − c), with EXIF used only as a cross-check.", note: "Ill-conditioned VP pairs are rejected by jittering each point and measuring the spread in f." },
  { title: "Facade planes", text: "Each facade normal is the facade direction crossed with the vertical." },
  { title: "Wall assignment", text: "Direction with a margin, else structure, else try every candidate.", note: "Near eye level every facade's VP lies on the horizon, so direction alone is not trusted." },
  { title: "One known length", text: "Fixes the measured wall's distance from the camera." },
  { title: "Propagate through corners", text: "Shared eave and rake corners, and roof faces at pitch, carry scale to every other wall.", note: "Set-back walls (dormers, upper storeys) link to the main wall through the roof pitch." },
  { title: "Independent checks", text: "Door sizes, roof pitch, eave height and plausibility.", note: "Checks use outside knowledge, so a wrong wall choice cannot validate itself." },
  { title: "Bulbs at real spacing", text: "Laid every N inches in 3-D and projected back, so on-screen spacing is correctly uneven and bulb size is f · diameter / depth." },
];

const benchmark = [
  ["F1 score", "0.858", "0.878", "0.865"],
  ["Recall, visible length", "0.863", "0.865", "0.864"],
  ["Precision", "0.860", "0.916", "0.878"],
  ["Eave recall", "0.891", "0.780", "0.854"],
  ["Auto vs. human house box, IoU (median)", "0.99", "0.95", "0.98"],
];

const editorTools = [
  ["Select / Points / Move", "Pick lines and areas, drag vertices, move or extend lines with snapping to existing ends."],
  ["House", "Tap a roof plane in or out of the quoted house; lines are redrawn from stored data with no model call."],
  ["Find lines", "Draw a box around a missed edge; the server runs detection on just that box and adds only new lines."],
  ["Add object / Brush / Erase", "Click-to-segment with SAM point and box prompts, and paint masks larger or smaller."],
  ["Measure", "Tap a line and type its length; review per-line lengths, confidence and “measure next”."],
  ["Wreath", "Place wreaths on the facade at real size."],
];

const stack = [
  ["Backend", "Python 3.11, FastAPI 0.115, Uvicorn, Pydantic v2 + pydantic-settings, httpx"],
  ["Computer vision", "OpenCV 4.10 (LSD line segments, morphology, contours), NumPy 2, Pillow; custom pinhole-camera and projective-geometry code"],
  ["AI models", "SAM 3 (Segment Anything 3) via fal.ai with text, box and point prompts; multimodal GPT-class vision LLM via OpenRouter with strict JSON-schema output"],
  ["Database", "PostgreSQL 15, SQLAlchemy 2.0 ORM, Alembic migrations, psycopg 3"],
  ["Auth & security", "Argon2 (argon2-cffi), server-side sessions, HTTP-only cookies, email-validator, CORS policy"],
  ["Frontend", "React 18, TypeScript 5.7, Vite 6, HTML5 Canvas rendering, CSS custom properties (light / dark)"],
  ["Testing", "pytest, Playwright, offline evaluation and benchmark scripts"],
  ["DevOps", "Docker, Docker Compose, nginx 1.27 reverse proxy, multi-stage builds, health checks, environment-based configuration"],
  ["Research", "Apple Depth Pro (monocular depth) experiment in Google Colab on a T4 GPU, compared against the geometric solve"],
];

const techPills = [
  "Python", "FastAPI", "SAM 3", "Vision LLM", "OpenRouter", "fal.ai", "OpenCV", "NumPy",
  "Projective geometry", "React 18", "TypeScript", "HTML5 Canvas", "PostgreSQL", "SQLAlchemy 2",
  "Alembic", "Docker", "nginx", "pytest", "Playwright",
];

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

function Steps({ steps, label }) {
  return (
    <ol className="cs-steps" aria-label={label}>
      {steps.map((s, i) => (
        <li className="cs-step" key={s.title}>
          <span className="cs-step-num" aria-hidden="true">{i + 1}</span>
          <span className="cs-step-title">{s.title}</span>
          <span className="cs-step-text">{s.text}</span>
          {s.note && <span className="cs-step-note">{s.note}</span>}
        </li>
      ))}
    </ol>
  );
}

function KeyValueTable({ caption, head, rows }) {
  return (
    <div className="cs-table-wrap">
      <table className="cs-table">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr>
            {head.map((h) => (
              <th scope="col" key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([k, ...rest]) => (
            <tr key={k}>
              <th scope="row">{k}</th>
              {rest.map((v, i) => (
                <td key={i}>{v}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────

const LightDesignCaseStudy = () => {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="cs-root" id="main-content">
        <article className="cs-article">
          {/* ── Hero ─────────────────────────────────────────── */}
          <header className="cs-hero">
            <div className="cs-container">
              <div className="cs-tags">
                <span className="cs-tag cs-tag-blue">AI / Computer Vision</span>
                <span className="cs-tag cs-tag-outline">Full-Stack</span>
                <span className="cs-tag cs-tag-outline">KeystoneSTS</span>
                <span className="cs-tag cs-tag-green">Sole developer · Aug–Oct 2026</span>
              </div>

              <h1 className="hero-title">
                LightDesign: AI Roof Measurement and Lighting Design From a Single Photo
              </h1>

              <p className="cs-hero-lead">
                KeystoneSTS, a holiday-lighting company, needed its sales team to quote jobs without a
                ladder and a tape measure. I built a platform where a salesperson photographs
                a house, types what they want in plain English, and gets back an editable,
                measured design: every roof edge found and typed, its{" "}
                <strong>real length in feet</strong>, and every bulb placed at true spacing in
                perspective, using products from the company&apos;s own catalogue.
              </p>

              <div className="cs-stats" role="list" aria-label="Project results at a glance">
                <div role="listitem"><StatCard value="0.88" label="Roof-line F1 on held-out photos" /></div>
                <div role="listitem"><StatCard value="98%" label="Median overlap of the auto-picked house" /></div>
                <div role="listitem"><StatCard value="~37k" label="Lines of code (Python + TypeScript)" /></div>
                <div role="listitem"><StatCard value="95" label="Commits across 4 milestones" /></div>
              </div>
            </div>
          </header>

          <hr className="cs-divider" />

          <div className="cs-body">
            {/* THE CHALLENGE */}
            <section className="cs-section" aria-labelledby="cs-challenge-heading">
              <SectionLabel>The Challenge</SectionLabel>
              <h2 id="cs-challenge-heading">
                Quoting a lighting job needed a site visit, a tape measure and a manual mock-up
              </h2>
              <p className="cs-prose">
                Holiday-lighting installers price each job by how many feet of roofline,
                hedge and tree they will light, and then show the customer what it will look
                like. Both normally mean a site visit with a tape measure, followed by mock-ups
                by hand. The client wanted a tool their sales team could use from one phone
                photo.
              </p>
              <ul className="check-list cs-list">
                <li>
                  <strong>Roof lines must be exact and typed.</strong> An eave, rake, hip, ridge
                  or valley takes different products, and the line has to sit on the gutter, not
                  near it. Neighbouring houses in the frame must be ignored.
                </li>
                <li>
                  <strong>Real lengths from one photo.</strong> A photo has no scale and phone
                  browsers strip EXIF data, so the camera itself has to be recovered from the
                  image before anything can be measured.
                </li>
                <li>
                  <strong>Things in the way.</strong> Palms, trees and cars hide parts of the
                  roof. The hidden stretch is still installed and billed, so it has to be
                  measured, not dropped.
                </li>
                <li>
                  <strong>Free-text requests.</strong> Salespeople type instructions in their own
                  words, and these must map onto real catalogue products, never invented ones.
                </li>
                <li>
                  <strong>Cost and reliability.</strong> Hosted AI models are billed per call and
                  sometimes fail or time out. The app has to stay usable and predictable either way.
                </li>
              </ul>
            </section>

            {/* MY ROLE */}
            <section className="cs-section" aria-labelledby="cs-role-heading">
              <SectionLabel>My Role</SectionLabel>
              <h2 id="cs-role-heading">Sole developer, from architecture to deployment</h2>
              <p className="cs-prose">
                I designed and delivered the whole product: architecture, the ML detection
                pipeline, 3-D geometry, the API and database, the canvas editor and the Docker
                deployment. It shipped in four milestones with client demos, feature flags and
                written documentation for every mode.
              </p>
              <div className="cs-role-grid" role="list">
                <div className="cs-role-card" role="listitem">
                  <span className="cs-role-icon" aria-hidden="true"><LuBrainCircuit /></span>
                  <span className="cs-role-label">SAM 3 + vision-LLM detection</span>
                </div>
                <div className="cs-role-card" role="listitem">
                  <span className="cs-role-icon" aria-hidden="true"><LuRuler /></span>
                  <span className="cs-role-label">Single-photo 3-D measurement</span>
                </div>
                <div className="cs-role-card" role="listitem">
                  <span className="cs-role-icon" aria-hidden="true"><LuLayoutDashboard /></span>
                  <span className="cs-role-label">React canvas editor + FastAPI</span>
                </div>
              </div>
            </section>

            {/* WORKFLOW */}
            <section className="cs-section" aria-labelledby="cs-workflow-heading">
              <SectionLabel>User Workflow</SectionLabel>
              <h2 id="cs-workflow-heading">From one photo to an approved estimate in five steps</h2>
              <p className="cs-prose">
                A salesperson types something like{" "}
                <em>&ldquo;C9 warm white on the front roofline at 12-inch spacing, mini lights in
                the hedges, wrap the palm trunks&rdquo;</em>{" "}
                and the app walks them through a guided step bar:
              </p>
              <KeyValueTable caption="LightDesign user workflow" head={["Step", "What happens"]} rows={workflow} />
            </section>

            {/* ARCHITECTURE */}
            <section className="cs-section" aria-labelledby="cs-diagram-heading">
              <SectionLabel>System Architecture</SectionLabel>
              <h2 id="cs-diagram-heading">A three-container stack behind one origin</h2>
              <p className="cs-prose">
                nginx serves the compiled React app and forwards API traffic, so the browser
                only ever talks to one host and the session cookie stays first-party. FastAPI
                holds all business logic in a <strong>thin-router, thick-service</strong>{" "}
                layout: routers validate and authorise, and services are plain, testable Python
                with no web-framework dependency.
              </p>
              <figure className="cs-figure">
                <img
                  src="/lightdesign-architecture.svg"
                  alt="LightDesign architecture: a React and TypeScript browser app talks to an nginx container that reverse-proxies to a FastAPI container with auth, photos, regions, products and files routers and a pure-Python service layer. FastAPI stores data in PostgreSQL 15 and a file volume, and calls SAM 3 on fal.ai and a vision LLM through OpenRouter."
                  className="cs-diagram-img"
                  width="1000"
                  height="620"
                  loading="lazy"
                />
                <figcaption className="cs-diagram-caption">
                  Fig 1. Deployment and component view: nginx, FastAPI, PostgreSQL and file
                  storage in Docker Compose, with SAM 3 and a vision LLM as external services
                </figcaption>
              </figure>
            </section>

            {/* DETECTION PIPELINE */}
            <section className="cs-section" aria-labelledby="cs-detection-heading">
              <SectionLabel>AI Detection Pipeline</SectionLabel>
              <h2 id="cs-detection-heading">
                A foundation segmentation model, a vision LLM and classical computer vision, each
                doing what it does best
              </h2>
              <p className="cs-prose">
                <strong>SAM 3</strong> (Segment Anything 3, hosted on fal.ai) returns pixel masks
                for every roof plane and every object a light can go on or behind. A{" "}
                <strong>vision LLM</strong> (via OpenRouter, with strict JSON-schema output) sees
                only a crop of the house being quoted and returns typed roof lines. Classical
                computer vision then refines those lines conservatively: it may nudge an endpoint
                onto a strong image edge, but it never redraws what the model said.
              </p>
              <Steps steps={detectionSteps} label="Detection pipeline, from photo to editable typed roof lines" />

              <div className="cs-highlight-card cs-mt">
                <h3>Fallback: plane-partition geometry, so detection never hard-fails</h3>
                <p>
                  When the LLM is unavailable or switched off, roof lines are derived from the SAM
                  masks with an eight-stage geometric method: a hard pixel partition of the
                  planes, morphological clean-up, Douglas-Peucker corner seeding with Huber and
                  total-least-squares line fits, LSD vanishing points as direction priors, a
                  planar graph relaxed by block coordinate descent, interior crease detection, and
                  ridge, hip, valley, eave and rake roles from topology.
                </p>
              </div>
            </section>

            {/* MEASUREMENT */}
            <section className="cs-section" aria-labelledby="cs-measure-heading">
              <SectionLabel>Single-Photo 3-D Measurement</SectionLabel>
              <h2 id="cs-measure-heading">
                Real lengths in feet from one ordinary photo and one tape-measured length
              </h2>
              <p className="cs-prose">
                The most technically demanding part of the project. It is built from first
                principles on a <strong>pinhole camera model</strong>, and every line records
                what it had to assume.
              </p>
              <Steps steps={measurementSteps} label="Camera recovery, scale solve and bulb placement" />

              <div className="cs-highlight-stack cs-mt">
                <article className="cs-highlight-card">
                  <h3>Ambiguity is solved, not guessed</h3>
                  <p>
                    A line whose wall cannot be decided is tried on every candidate facade, and
                    the choice under which the whole house passes the independent checks is kept.
                    Level lines of the same kind at the same roof height form one continuous run,
                    so bulb spacing carries around corners without resetting.
                  </p>
                </article>
                <article className="cs-highlight-card">
                  <h3>Verified on synthetic ground truth</h3>
                  <p>
                    A test renders a corner house through a known camera. The app recovers the
                    focal length within <strong>3%</strong>, the measured wall within{" "}
                    <strong>1%</strong> and inherited walls within <strong>5%</strong>.
                  </p>
                </article>
                <article className="cs-highlight-card">
                  <h3>Hidden bulbs are counted, and every solve is explainable</h3>
                  <p>
                    Lights behind a palm or car are flagged hidden, not drawn, but still appear in
                    the estimate. A debug mode writes nine step-by-step overlays per solve (camera,
                    sides, walls, pitch, anchors, wall choices, checks, lengths) so any
                    measurement can be diagnosed.
                  </p>
                </article>
              </div>
            </section>

            {/* INSTRUCTIONS + EDITOR */}
            <section className="cs-section" aria-labelledby="cs-editor-heading">
              <SectionLabel>Instructions, Products &amp; Editor</SectionLabel>
              <h2 id="cs-editor-heading">
                Plain-English requests that can only name products the company sells
              </h2>
              <ul className="check-list cs-list">
                <li>
                  Two interchangeable readers sit behind one interface: an <strong>LLM reader</strong>{" "}
                  and an offline, deterministic <strong>rules reader</strong>. The confirmation
                  screen always says which one was used and why.
                </li>
                <li>
                  The LLM&apos;s vocabulary is generated from live data (place kinds, roof edges,
                  sides, and the customer&apos;s own product library and palette), so it cannot name
                  a product the company does not sell.
                </li>
                <li>
                  Every model answer is validated against that vocabulary; anything unknown is
                  dropped and reported, and on any failure the rules answer is used. Only the
                  instruction text is sent, never the photo.
                </li>
                <li>
                  One sentence can hold several requests, and each is confirmed separately before
                  anything is generated.
                </li>
              </ul>
              <p className="cs-prose cs-mt">
                Products (C9, C7, mini lights, icicle, garland, wreath) are data with
                category-specific attributes, archived rather than deleted. Colour patterns,
                spacing and twinkle are render parameters, never baked into pixels. Palms are
                split automatically into trunk, collar and frond zones, with trunks wrapped and
                fronds lit as strands from crown to tip.
              </p>
              <h3 className="cs-h3">Canvas editor (React + TypeScript)</h3>
              <KeyValueTable caption="LightDesign editor tools" head={["Tool", "Purpose"]} rows={editorTools} />
              <p className="cs-prose cs-mt">
                Hand-drawn lines snap their ends to nearby corners and get a suggested type from
                vanishing points and what their ends touch, confirmed with one tap. Undo and redo,
                toasts with undo, a shortcut sheet and the guided step bar round out the UX.
              </p>
            </section>

            {/* BENCHMARK */}
            <section className="cs-section" aria-labelledby="cs-results-heading">
              <SectionLabel>Metrics &amp; Outcomes</SectionLabel>
              <h2 id="cs-results-heading">
                Measured with a purpose-built benchmark, not impressions
              </h2>
              <p className="cs-prose">
                I built a separate annotation app that runs the product&apos;s exact detection
                code, lets a reviewer correct the lines into ground truth, and scores every
                prediction. Each prediction is frozen with a fingerprint (settings, prompt hash,
                git commit), and every error is traced to the stage that caused it: house
                selection, a crop that was too small, a line the model never drew, or a geometry
                stage that moved it.
              </p>
              <div className="cs-stats cs-mt" role="list" aria-label="Benchmark headline numbers">
                <div role="listitem"><StatCard value="0.87" label="Mean F1, all 21 photos" /></div>
                <div role="listitem"><StatCard value="0.88" label="Mean F1, held-out set (7)" /></div>
                <div role="listitem"><StatCard value="0.92" label="Precision, held-out set" /></div>
                <div role="listitem"><StatCard value="273/323" label="Truth roof edges found" /></div>
              </div>
              <KeyValueTable
                caption="Roof-line detection benchmark, mean over photos"
                head={["Metric (mean over photos)", "Tuning set (14)", "Held-out set (7)", "All (21)"]}
                rows={benchmark}
              />
              <p className="cs-table-note">
                Scores from the annotator&apos;s latest run over hand-corrected truth; tolerance is
                max(6 px, 0.8% of the house diagonal). The held-out photos were never used for
                tuning.
              </p>
            </section>

            {/* ENGINEERING PRACTICES */}
            <section className="cs-section" aria-labelledby="cs-practices-heading">
              <SectionLabel>Engineering Practices</SectionLabel>
              <h2 id="cs-practices-heading">Built to be tested, rolled out safely and kept cheap to run</h2>
              <div className="cs-highlight-stack">
                <article className="cs-highlight-card">
                  <h3>Testing</h3>
                  <p>
                    74 pytest unit tests (camera, scale, placement, drawn lines, plane filter, and
                    the LLM provider with a mocked network), an end-to-end API smoke test, offline
                    evaluation scripts for detection, parsing and measurement, and Playwright UI
                    smoke tests.
                  </p>
                </article>
                <article className="cs-highlight-card">
                  <h3>Cost control</h3>
                  <p>
                    Model answers are cached on disk by image pixels, crop, model and prompt, never
                    by filename. Editor actions never call a paid model, and latency, tokens and
                    cost are recorded for every detection.
                  </p>
                </article>
                <article className="cs-highlight-card">
                  <h3>Safe rollout and observability</h3>
                  <p>
                    Every new detection behaviour ships behind a feature flag that is off by
                    default, and <code>/health</code> reports which mode is live. Per-stage counts
                    and optional overlays show the first stage that damaged a good line.
                  </p>
                </article>
                <article className="cs-highlight-card">
                  <h3>Security</h3>
                  <p>
                    Argon2 password hashing with a constant-time path for unknown emails,
                    HTTP-only SameSite session cookies with expiry, owner-scoped file serving,
                    upload type and size validation, and customer-owned API keys kept out of the
                    repository.
                  </p>
                </article>
              </div>
            </section>

            {/* TECH STACK */}
            <section className="cs-section" aria-labelledby="cs-stack-heading">
              <SectionLabel>Tech Stack</SectionLabel>
              <h2 id="cs-stack-heading">Technologies used</h2>
              <ul className="cs-tech-pills">
                {techPills.map((tech) => (
                  <li className="cs-tech-pill" key={tech}>{tech}</li>
                ))}
              </ul>
              <KeyValueTable caption="LightDesign technology stack by category" head={["Category", "Technologies"]} rows={stack} />
              <p className="cs-table-note">
                Customer photos and proprietary prompts are omitted for confidentiality. Figures come from the project&apos;s own benchmark output and
                repository history (August to October 2026).
              </p>
            </section>

            {/* LINKS */}
            <section className="cs-section">
              <nav className="cs-actions" aria-label="Case study actions">
                {GITHUB_URL && (
                  <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="cs-btn-primary">
                    View on GitHub →
                  </a>
                )}
                <Link href="/case-studies" className="cs-btn-secondary">
                  ← Back to Case Studies
                </Link>
              </nav>
            </section>
          </div>

          {/* ── CTA ─────────────────────────────────────────── */}
          <footer className="cs-cta">
            <h2>Need a computer-vision or AI product built end to end?</h2>
            <p>
              I combine foundation models, LLMs and classical computer vision into products
              that measure, explain and fall back gracefully, with the backend, editor and
              deployment to match.
            </p>
            <a href="/contact" className="cs-cta-btn">
              Let&apos;s talk →
            </a>
          </footer>
        </article>

        {/* ── Related ─────────────────────────────────────────── */}
        <aside className="cs-related" aria-labelledby="cs-related-heading">
          <h2 id="cs-related-heading">Related case studies</h2>
          <div className="cs-related-grid">
            <Link href="/case-studies/tenderml-ai-document-classification" className="cs-related-card">
              <span className="cs-related-tag">Machine Learning</span>
              <h3>TenderML: PDF text classification</h3>
              <p>
                Semi-supervised SVM + CRF pipeline with DFS tree traversal, parsing German
                construction PDFs at 95% production accuracy.
              </p>
            </Link>
            <Link href="/case-studies/gcp-insightdocs" className="cs-related-card">
              <span className="cs-related-tag">Document AI</span>
              <h3>GCP InsightDocs: document extraction</h3>
              <p>
                CRA tax form and contract extraction for a Canadian accountancy firm with Google
                Cloud Document AI and OCR.
              </p>
            </Link>
            <Link href="/case-studies/gemini-ai-trainer" className="cs-related-card">
              <span className="cs-related-tag">LLM Training</span>
              <h3>Gemini AI Trainer: Google × Turing</h3>
              <p>
                SFT datasets and RLHF evaluations to improve Google Gemini&apos;s structured data
                reasoning.
              </p>
            </Link>
          </div>
        </aside>
      </main>
    </>
  );
};

export default LightDesignCaseStudy;
