import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight, FileSearch, Layers, FormInput, Workflow } from "lucide-react";
import { services, getService } from "@/data/services";
import { pageMetadata, breadcrumbJsonLd, jsonLdProps, absoluteUrl, PERSON_ID } from "@/lib/seo";

const ICONS = { fileSearch: FileSearch, layers: Layers, formInput: FormInput, workflow: Workflow };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const path = `/services/${service.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/#expertise" },
    { name: service.navLabel, path },
  ];

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name: service.h1,
    serviceType: service.navLabel,
    description: service.metaDescription,
    url: absoluteUrl(path),
    provider: { "@id": PERSON_ID },
    areaServed: "Worldwide",
    availableChannel: { "@type": "ServiceChannel", serviceUrl: absoluteUrl("/hire-me") },
  };

  return (
    <main className="svc-root">
      <script {...jsonLdProps(serviceLd)} />
      <script {...jsonLdProps(breadcrumbJsonLd(crumbs))} />

      <div className="page-glow page-glow-1" aria-hidden="true" />
      <div className="page-glow page-glow-2" aria-hidden="true" />

      {/* ── Hero ───────────────────────────────────────────── */}
      <header className="svc-hero">
        <div className="container">
          <nav aria-label="Breadcrumb">
            <ol className="breadcrumb">
              {crumbs.map((c, i) => (
                <li key={c.path}>
                  {i < crumbs.length - 1 ? (
                    <>
                      <Link href={c.path}>{c.name}</Link>
                      <ChevronRight size={14} aria-hidden="true" />
                    </>
                  ) : (
                    <span aria-current="page">{c.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <p className="section-subtitle">{service.eyebrow}</p>
          <h1 className="svc-title">
            {service.h1} <span className="gradient-text">{service.h1Accent}</span>
          </h1>
          <p className="svc-lead">{service.lead}</p>

          <div className="hero-buttons">
            <Link href="/hire-me#discovery-form" className="btn btn-primary">
              Discuss your documents <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a href="#case-studies" className="btn btn-secondary">See the case studies</a>
          </div>

          <dl className="hero-stats svc-stats">
            {service.stats.map((s) => (
              <div key={s.label} className="hero-stat">
                <dt className="hero-stat-label">{s.label}</dt>
                <dd className="hero-stat-value">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      {/* ── What I build ───────────────────────────────────── */}
      <section className="section section-alt" aria-labelledby="svc-offer-heading">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">What I Build</p>
            <h2 id="svc-offer-heading" className="section-title">Document AI, <span className="gradient-text">end to end</span></h2>
          </div>
          <div className="card-grid card-grid-2">
            {service.offerings.map((o) => {
              const Icon = ICONS[o.icon];
              return (
                <div key={o.title} className="card">
                  <div className="icon-box" aria-hidden="true"><Icon size={20} /></div>
                  <h3 className="card-title">{o.title}</h3>
                  <p className="card-desc">{o.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Proof ──────────────────────────────────────────── */}
      <section id="case-studies" className="section" aria-labelledby="svc-proof-heading">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Proof</p>
            <h2 id="svc-proof-heading" className="section-title">Shipped <span className="gradient-text">in production</span></h2>
            <p className="section-description">Full write-ups of the document-AI systems I have built for clients.</p>
          </div>
          <div className="card-grid card-grid-2">
            {service.caseStudies.map((c) => (
              <article key={c.href} className="card card-link">
                <span className="pill pill-accent">{c.tag}</span>
                <h3 className="card-title">
                  <Link href={c.href} className="stretched-link">{c.title}</Link>
                </h3>
                <p className="card-desc card-grow">{c.text}</p>
                <span className="card-cta" aria-hidden="true">Read case study <ArrowRight size={16} /></span>
              </article>
            ))}
          </div>
          <ul className="chip-list svc-stack" aria-label="Technologies">
            {service.stack.map((t) => <li key={t} className="chip">{t}</li>)}
          </ul>
        </div>
      </section>

      {/* ── Process ────────────────────────────────────────── */}
      <section className="section section-alt" aria-labelledby="svc-process-heading">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">How It Works</p>
            <h2 id="svc-process-heading" className="section-title">From sample documents <span className="gradient-text">to a live API</span></h2>
          </div>
          <ol className="card-grid svc-process">
            {service.process.map((p, i) => (
              <li key={p.title} className="card">
                <span className="svc-step" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="card-title">{p.title}</h3>
                <p className="card-desc">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────── */}
      <section className="section" aria-labelledby="svc-faq-heading">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">FAQ</p>
            <h2 id="svc-faq-heading" className="section-title">Common <span className="gradient-text">questions</span></h2>
          </div>
          <div className="faq-list">
            {service.faqs.map((f) => (
              <details key={f.q} className="faq-item svc-faq">
                <summary className="faq-question">
                  <span>{f.q}</span>
                  <ChevronRight className="faq-toggle-icon" size={18} aria-hidden="true" />
                </summary>
                <div className="faq-answer"><p>{f.a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="section svc-cta-wrap">
        <div className="container">
          <div className="footer-cta svc-cta">
            <div>
              <h2 className="footer-cta-title">Have documents that need structured data?</h2>
              <p className="footer-cta-text">Send a few samples and the fields you need. I&apos;ll tell you what accuracy is realistic before any work starts.</p>
            </div>
            <Link href="/hire-me#discovery-form" className="btn btn-primary">
              Start a conversation <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
