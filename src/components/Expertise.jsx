import React from 'react';
import Link from 'next/link';
import { Sparkles, FileSearch, Server, LayoutTemplate, Workflow, ScanEye, ArrowRight } from 'lucide-react';

// Service pillars, each aimed at a keyword cluster in seo-data/keyword-map.csv.
// `href` is set once that pillar has its own service page.
const services = [
  {
    icon: <Sparkles size={20} />,
    title: 'LLM & Generative AI Integration',
    description: 'OpenAI, Gemini and OpenRouter pipelines with automatic provider fallback, prompts designed per generation stage, and LLM-generated text and images inside live products.',
  },
  {
    icon: <FileSearch size={20} />,
    title: 'Document AI & PDF Data Extraction',
    description: 'Classification and field extraction from PDFs and scanned forms with machine learning, OCR, Google Document AI and Azure Form Recognizer, at 95% accuracy in production.',
    href: '/services/document-ai',
  },
  {
    icon: <Server size={20} />,
    title: 'Python & FastAPI Backends',
    description: 'Async FastAPI services and REST APIs with authentication and role-based access control, on PostgreSQL or MongoDB, deployed to AWS EC2, GCP or DigitalOcean.',
  },
  {
    icon: <LayoutTemplate size={20} />,
    title: 'Full-Stack Web Development',
    description: 'React and TypeScript frontends on FastAPI or Node.js backends, from multi-tenant MERN SaaS platforms to interactive editors with zoom, undo/redo and measuring tools.',
  },
  {
    icon: <Workflow size={20} />,
    title: 'AI Automation & Web Scraping',
    description: 'Workflow automation around Airtable and your existing tools, plus Python scrapers with Selenium and BeautifulSoup for order tracking and price comparison.',
  },
  {
    icon: <ScanEye size={20} />,
    title: 'Computer Vision',
    description: 'SAM-based image segmentation with line tracing and classification, and real-world measurement from a single photo and one known length.',
  },
];

const Expertise = () => {
  return (
    <section id="expertise" className="section">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">Services</p>
          <h2 className="section-title">What I <span className="gradient-text">Build</span></h2>
          <p className="section-description">
            AI engineering and full-stack development, from the model or pipeline through the API to the interface your users touch.
          </p>
        </div>

        <div className="card-grid">
          {services.map((service) => (
            <div key={service.title} className={service.href ? 'card card-link' : 'card'}>
              <div className="icon-box" aria-hidden="true">{service.icon}</div>
              <h3 className="card-title">
                {service.href ? (
                  <Link href={service.href} className="stretched-link">{service.title}</Link>
                ) : (
                  service.title
                )}
              </h3>
              <p className="card-desc card-grow">{service.description}</p>
              {service.href && (
                <span className="card-cta" aria-hidden="true">
                  Explore this service <ArrowRight size={16} />
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
