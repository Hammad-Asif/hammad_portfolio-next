import React from 'react';
import Link from 'next/link';
import { Sparkles, FileSearch, Server, LayoutTemplate, Workflow, ScanEye, ArrowRight } from 'lucide-react';

// Service pillars, each aimed at a keyword cluster in seo-data/keyword-map.csv.
// `href` is set once that pillar has its own service page.
const services = [
  {
    icon: <Sparkles size={18} />,
    title: 'LLM & generative AI integration',
    description: 'OpenAI, Gemini and OpenRouter pipelines with automatic provider fallback, prompts designed per generation stage, and LLM-generated text and images inside live products.',
  },
  {
    icon: <FileSearch size={18} />,
    title: 'Document AI & PDF data extraction',
    description: 'Classification and field extraction from PDFs and scanned forms with machine learning, OCR, Google Document AI and Azure Form Recognizer, at 95% accuracy in production.',
    href: '/services/document-ai',
  },
  {
    icon: <Server size={18} />,
    title: 'Python & FastAPI backends',
    description: 'Async FastAPI services and REST APIs with authentication and role-based access control, on PostgreSQL or MongoDB, deployed to AWS EC2, GCP or DigitalOcean.',
  },
  {
    icon: <LayoutTemplate size={18} />,
    title: 'Full-stack web development',
    description: 'React and TypeScript frontends on FastAPI or Node.js backends, from multi-tenant MERN SaaS platforms to interactive editors with zoom, undo/redo and measuring tools.',
  },
  {
    icon: <Workflow size={18} />,
    title: 'AI automation & web scraping',
    description: 'Workflow automation around Airtable and your existing tools, plus Python scrapers with Selenium and BeautifulSoup for order tracking and price comparison.',
  },
  {
    icon: <ScanEye size={18} />,
    title: 'Computer vision',
    description: 'SAM 3 segmentation fused with a vision LLM for typed line detection, and real-world measurement in feet from a single photo and one known length.',
    href: '/case-studies/lightdesign-ai-roof-measurement',
    cta: 'Read the case study',
  },
];

const Expertise = () => {
  return (
    <section id="expertise" className="section">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">Services</p>
          <h2 className="section-title">What I build</h2>
          <p className="section-description">
            AI engineering and full-stack development, from the model or pipeline through the API to the interface your users touch.
          </p>
        </div>

        <div className="card-grid card-grid-2 svc-featured">
          {services.filter((s) => s.href).map((service) => (
            <div key={service.title} className="card card-link">
              <div className="icon-box" aria-hidden="true">{service.icon}</div>
              <h3 className="card-title">
                <Link href={service.href} className="stretched-link">{service.title}</Link>
              </h3>
              <p className="card-desc card-grow">{service.description}</p>
              <span className="card-cta" aria-hidden="true">
                {service.cta || 'Explore this service'} <ArrowRight size={16} />
              </span>
            </div>
          ))}
        </div>

        <ul className="terms terms-4">
          {services.filter((s) => !s.href).map((service) => (
            <li key={service.title}>
              <span className="terms-icon" aria-hidden="true">{service.icon}</span>
              <h3 className="terms-title">{service.title}</h3>
              <p className="terms-desc">{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Expertise;
