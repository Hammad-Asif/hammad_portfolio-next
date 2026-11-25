import React from 'react';
import Link from 'next/link';
import { Brain, FileText, Cloud, ArrowRight } from 'lucide-react';

const FeaturedProjects = () => {
  const featured = [
    {
      id: 'gemini-ai-trainer',
      title: "Gemini AI Trainer — Structured Data Reasoning & Human Evaluation",
      company: "Google × Turing",
      description: "Contributed to Google's Gemini development for 1.2 years, engineering SFT datasets for complex structured data reasoning and performing RLHF evaluation on automated model outputs.",
      icon: <Brain size={22} />,
      technologies: ["Python", "Gemini", "SFT Dataset Engineering", "RLHF Evaluation", "Tabular Reasoning"],
      caseLink: "/case-studies/gemini-ai-trainer"
    },
    {
      id: 'tenderml',
      title: "TenderML — AI Document Classification System",
      company: "Zaytrics (Pvt.) Limited",
      description: "Built a semi-supervised ML pipeline (SVM + CRF + DFS tree traversal) that classifies text and extracts data from German tender PDFs with 95% production accuracy.",
      icon: <FileText size={22} />,
      technologies: ["Python", "FastAPI", "Ray Cluster", "AWS EC2", "Machine Learning", "SVM/CRF"],
      caseLink: "/case-studies/tenderml-ai-document-classification"
    },
    {
      id: 'gcp-insightdocs',
      title: "GCP InsightDocs — Document Extraction Platform",
      company: "Canadian Accountancy Client",
      description: "Independently built a full-stack document extraction engine using Google Cloud Document AI and OCR to automate tax form and contract data extraction.",
      icon: <Cloud size={22} />,
      technologies: ["ReactJS", "Flask", "Python", "Google Cloud Document AI", "OCR API"],
      caseLink: "/case-studies/gcp-insightdocs"
    }
  ];

  return (
    <section id="featured-projects" className="section">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">My Work</p>
          <h2 className="section-title">Featured <span className="gradient-text">Case Studies</span></h2>
          <p className="section-description">
            Technical deep-dives into production-grade AI systems, datasets, and pipelines built for international clients.
          </p>
        </div>

        <div className="card-grid">
          {featured.map((project) => (
            <article key={project.id} className="card card-link">
              <div className="card-head">
                <div className="icon-box" aria-hidden="true">{project.icon}</div>
                <span className="card-kicker">{project.company}</span>
              </div>
              <h3 className="card-title">
                <Link href={project.caseLink} className="stretched-link">{project.title}</Link>
              </h3>
              <p className="card-desc card-grow">{project.description}</p>
              <ul className="chip-list chip-list-sm">
                {project.technologies.map((tech) => (
                  <li key={tech} className="chip">{tech}</li>
                ))}
              </ul>
              <span className="card-cta" aria-hidden="true">
                Read case study <ArrowRight size={16} />
              </span>
            </article>
          ))}
        </div>

        <div className="section-footer">
          <Link href="/case-studies" className="btn btn-secondary">
            View all projects &amp; archives <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
