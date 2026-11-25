import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ExperienceTimeline = () => {
  const experiences = [
    {
      "company": "QASolution",
      "title": "AI Web Developer (Project-based Contract)",
      "location": "Remote (Contract in Progress)",
      "startDate": "2026-11-01T00:00:00.000Z",
      "endDate": "",
      "description": "Building an AI-powered web CMS project for a client.",
      "current": true,
      "achievements": [],
      "technologies": []
    },
    {
      "company": "KeystoneSTS",
      "title": "AI Engineer (Project-based Contract)",
      "location": "Remote (Contract Completed)",
      "startDate": "2026-09-01T00:00:00.000Z",
      "endDate": "2026-10-31T00:00:00.000Z",
      "description": "Solo-built an AI roof-measurement and holiday-lighting design platform for a client.",
      "current": false,
      "achievements": [
        "Built SAM-based roof segmentation, with roofline tracing and classification (eave, rake, hip, ridge, valley).",
        "Built a React/TypeScript editor (zoom, pan, undo/redo, measuring tools) and a FastAPI/PostgreSQL backend with authentication and authorization.",
        "Built a product library of bulbs and light images used when placing lights.",
        "Implemented measurement in feet from a single photo and one known length."
      ],
      "technologies": ["Python", "FastAPI", "PostgreSQL", "React", "TypeScript", "SAM"]
    },
    {
      "company": "Scanify Dev",
      "title": "AI Backend Contractor",
      "location": "Remote (Contract Completed)",
      "startDate": "2025-07-01T00:00:00.000Z",
      "endDate": "2025-11-30T00:00:00.000Z",
      "description": "Built the LLM and image-generation backend for highticket.io, a live platform that generates Shopify stores.",
      "current": false,
      "achievements": [
        "Built async FastAPI services and LLM pipelines for highticket.io. AI models generate each store's names, descriptions, logos and images, which are placed into a built-in theme design.",
        "Integrated OpenAI, Gemini and OpenRouter models with automatic fallback, so generation continues if a provider fails or stops responding.",
        "Designed prompts for each generation stage. About 10 stores were generated in the platform's initial stage."
      ],
      "technologies": ["Python", "FastAPI", "OpenAI", "Gemini", "OpenRouter"]
    },
    {
      "company": "Turing",
      "title": "AI Training Engineer",
      "location": "Remote (Contract Completed)",
      "startDate": "2024-04-01T00:00:00.000Z",
      "endDate": "2025-05-31T00:00:00.000Z",
      "description": "Large-scale LLM training project for a major AI lab.",
      "current": false,
      "achievements": [
        "Created data-analysis and visualization scenarios used to train and evaluate a large language model.",
        "Contributed to SFT data and RLHF-style evaluation of model responses, using prompt engineering to judge correctness, instruction adherence and reasoning quality.",
        "Briefly worked on agentic tool-use tasks, writing demo apps (such as Drive, Sheets and Slack) for the model to interact with, before the contract ended."
      ],
      "technologies": ["Python", "SFT", "RLHF", "Prompt Engineering", "Data Analysis", "LLM Evaluation"]
    },
    {
      "company": "Fiverr",
      "title": "Independent Developer",
      "location": "Remote",
      "startDate": "2023-06-01T00:00:00.000Z",
      "endDate": "2024-04-30T00:00:00.000Z",
      "description": "14 clients across the US, UK and UAE, with repeat orders.",
      "current": false,
      "achievements": [
        "FoodScanSaaS: built the AI integration layer in Python for a barcode-scanning food app, connecting to OpenAI through LangChain with prompts that generate ingredient definitions. Delivered to the client. (A teammate built the React Native app; the mobile backend was Node.js.)",
        "Order tracking automation: React web app where users enter a tracking number. The system checks Airtable first, and if the order is not found, scrapes courier websites in Python, shows the live status and writes it back to Airtable. Deployed on DigitalOcean behind Nginx.",
        "Also delivered web scraping projects, including an e-commerce price comparison tool (Python, Selenium, BeautifulSoup)."
      ],
      "technologies": ["Python", "OpenAI", "LangChain", "React", "Airtable", "Selenium", "BeautifulSoup", "DigitalOcean", "Nginx"]
    },
    {
      "company": "Zaytrics (Pvt.) Limited",
      "title": "Full Stack Developer → Team Lead → AI/ML Engineer",
      "location": "Islamabad, Pakistan",
      "startDate": "2021-01-01T00:00:00.000Z",
      "endDate": "2023-06-30T00:00:00.000Z",
      "description": "Grew from full-stack developer to team lead to AI/ML engineer, building document-AI pipelines and multi-tenant SaaS products for clients.",
      "current": false,
      "achievements": [
        "TenderML (solo, AI/ML): built a pipeline that classifies tender documents and extracts key information from about 1,000 German construction tender PDFs in varied formats. Trained an SVM with semi-supervised learning, since only a few PDFs were labeled. Regex extraction failed on unseen layouts, so I built a tree-based extractor using DFS, which also filtered the SVM's false positives.",
        "Reached about 95% end-to-end accuracy, measured on a manual review of about 20 tenders in formats unseen during training. The client later tested it on further unseen tenders, and it remains in production.",
        "Deployed as an API on AWS EC2 with FastAPI and a Ray cluster (master/worker) for load balancing and scaling, integrated into the client's existing system. Used Azure OCR and Azure Form Recognizer to read client information from the first pages.",
        "Client review of this PDF-extraction project on Zaytrics' Clutch profile (5.0 rating; extraction quality checked manually against the client's own samples).",
        "GCPInsight: built and deployed a web app on a GCP VM that extracts data from Canadian immigration forms using Google Document AI.",
        "CHappie (full stack, then team lead): led a team of 4–5 developers on a multi-tenant SaaS platform for calling agents, assigning tasks and reviewing and merging code. Built role-based access control (super admin, admin, manager, team lead, calling agent) with per-company data isolation.",
        "Built an admin-activity monitoring app (MERN) that records when admins log in and out and what they did."
      ],
      "technologies": ["Python", "SVM", "Semi-supervised Learning", "FastAPI", "Ray", "AWS EC2", "Azure OCR", "Azure Form Recognizer", "Google Document AI", "GCP", "MERN"]
    }
  ]


  const formatDate = (dateString) => {
    if (!dateString) return 'Present';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' });
  };


  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">My Journey</p>
          <h2 className="section-title">Work <span className="gradient-text">Experience</span></h2>
          <p className="section-description">
            Over 5 years of professional experience building digital products.
          </p>
        </div>

        <ol className="timeline">
          {experiences.map((exp) => (
            <li key={`${exp.company}-${exp.startDate}`} className={`timeline-item ${exp.current ? 'is-current' : ''}`}>
              <span className="timeline-dot" aria-hidden="true" />
              <article className="timeline-card">
                <div className="timeline-header">
                  <div className="icon-box" aria-hidden="true">
                    <FaBriefcase />
                  </div>
                  <div className="timeline-info">
                    <h3>{exp.title}</h3>
                    <p className="timeline-company">{exp.company}</p>
                  </div>
                  {exp.current && <span className="pill pill-accent">Current</span>}
                </div>

                <div className="timeline-meta">
                  <span className="meta-item">
                    <FaCalendarAlt aria-hidden="true" />
                    {formatDate(exp.startDate)} – {formatDate(exp.endDate)}
                  </span>
                  {exp.location && (
                    <span className="meta-item">
                      <FaMapMarkerAlt aria-hidden="true" />
                      {exp.location}
                    </span>
                  )}
                </div>

                <p className="timeline-description">{exp.description}</p>
                {exp.achievements.length > 0 && (
                  <ul className="check-list">
                    {exp.achievements.map((achievement) => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>
                )}
                {exp.technologies.length > 0 && (
                  <ul className="chip-list chip-list-sm">
                    {exp.technologies.map((tech) => (
                      <li key={tech} className="chip">{tech}</li>
                    ))}
                  </ul>
                )}
              </article>
            </li>
          ))}
        </ol>
      </div>

    </section>
  );
};

export default ExperienceTimeline;