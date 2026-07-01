import React from 'react';
import Link from 'next/link';
import { Brain, FileText, Cloud, ChevronRight } from 'lucide-react';

const FeaturedProjects = () => {
  const featured = [
    {
      id: 'gemini-ai-trainer',
      title: "Gemini AI Trainer — Structured Data Reasoning & Human Evaluation",
      company: "Google × Turing",
      description: "Contributed to Google's Gemini development for 1.2 years, engineering SFT datasets for complex structured data reasoning and performing RLHF evaluation on automated model outputs.",
      icon: <Brain size={32} />,
      technologies: ["Python", "Gemini", "SFT Dataset Engineering", "RLHF Evaluation", "Tabular Reasoning"],
      caseLink: "/case-studies/gemini-ai-trainer",
      accentColor: "#3b82f6"
    },
    {
      id: 'tenderml',
      title: "TenderML - AI Document Classification System",
      company: "Zaytrics (Pvt.) Limited",
      description: "Built a semi-supervised ML pipeline (SVM + CRF + DFS tree traversal) that classifies text and extracts data from German tender PDFs with 95% production accuracy.",
      icon: <FileText size={32} />,
      technologies: ["Python", "FastAPI", "Ray Cluster", "AWS EC2", "Machine Learning", "SVM/CRF"],
      caseLink: "/case-studies/tenderml-ai-document-classification",
      accentColor: "#10b981"
    },
    {
      id: 'gcp-insightdocs',
      title: "GCP InsightDocs - Document Extraction Platform",
      company: "Canadian Accountancy Client",
      description: "Independently built a full-stack document extraction engine using Google Cloud Document AI and OCR to automate tax form and contract data extraction.",
      icon: <Cloud size={32} />,
      technologies: ["ReactJS", "Flask", "Python", "Google Cloud Document AI", "OCR API"],
      caseLink: "/case-studies/gcp-insightdocs",
      accentColor: "#8b5cf6"
    }
  ];

  return (
    <section id="featured-projects" className="section featured-projects" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">My Work</p>
          <h2 className="section-title">Featured <span className="gradient-text">Case Studies</span></h2>
          <p className="section-description">
            Technical deep-dives into production-grade AI systems, datasets, and pipelines built for international clients.
          </p>
        </div>

        <div className="projects-grid">
          <div className="grid grid-3">
            {featured.map((project) => (
              <div key={project.id} className="project-card card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div className="project-header">
                  <div className="project-icon" style={{ color: project.accentColor }}>
                    {project.icon}
                  </div>
                  <div className="project-title-section">
                    <h3 className="project-title" style={{ fontSize: '18px', fontWeight: '600', color: '#fff', marginBottom: '4px' }}>
                      {project.title}
                    </h3>
                    <span className="project-company" style={{ fontSize: '13px', color: '#9ca3af' }}>
                      {project.company}
                    </span>
                  </div>
                </div>

                <p className="project-description" style={{ fontSize: '14px', color: '#d1d5db', lineHeight: '1.6', margin: '16px 0', flexGrow: 1 }}>
                  {project.description}
                </p>

                <div className="project-technologies" style={{ marginBottom: '20px' }}>
                  <div className="tech-tags flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag" style={{ fontSize: '11px', padding: '3px 8px', borderRadius: '4px', background: '#1f2937', color: '#9ca3af' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Link 
                  href={project.caseLink} 
                  className="read-more-btn flex items-center gap-1 text-sm font-semibold mt-auto" 
                  style={{ color: project.accentColor, textDecoration: 'none', width: 'fit-content' }}
                >
                  Read Full Case Study <ChevronRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link href="/case-studies" className="btn btn-secondary">
            View All Side Projects &amp; Archives
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
