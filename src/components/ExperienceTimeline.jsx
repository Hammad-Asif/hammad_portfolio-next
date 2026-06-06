import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ExperienceTimeline = () => {
  const experiences = [
    {
      "company": "Toptal Vetted Senior Engineer",
      "location": "Available for Full-Time Engagement",
      "startDate": "2026-01-01T00:00:00.000Z",
      "endDate": "",
      "description": "Accepted into Toptal's top 3% network of global freelance engineers, vetted through a rigorous multi-stage technical screening. Available for senior full-stack and AI integration engagements through the network.",
      "current": false,
      "achievements": [
        "Rigorously vetted into the top 3% of global engineering talent through a multi-stage technical and communication screening process.",
        "Available for complex, high-scale AI integration and Python backend infrastructure engagements."
      ]
    }, {
      "company": "Scanify Dev",
      "location": "Remote (Contract Concluded)",
      "startDate": "2025-07-01T00:00:00.000Z",
      "endDate": "2025-11-30T00:00:00.000Z",
      "description": "Contributed to an AI-powered Shopify theme generation platform that used OpenAI APIs to automatically create store content and images for ecommerce clients.",
      "current": false,
      "achievements": [
        "Architected and maintained OpenAI API integrations for a production-level Shopify SaaS platform, enabling automated content and asset generation for active e-commerce storefronts.",
        "Audited and optimized asynchronous Python FastAPI backend endpoints, reducing latency and eliminating bugs affecting real-time AI feature delivery.",
      ]
    },
    {
      "company": "Turing.com (Google Gemini Project) | AI Training Engineer (Remote)",
      "location": "Remote",
      "startDate": "2024-04-01T00:00:00.000Z",
      "endDate": "2025-05-31T00:00:00.000Z",
      "description": "Contributed to a Google-commissioned project through Turing to improve Gemini's data analysis reasoning capabilities.",
      "current": false,
      "achievements": [
        "Vetted by Turing to collaborate on a specialized engineering team training Google's Gemini models, specifically focusing on advanced data analytics and complex logical reasoning.",
        "Engineered high-quality Supervised Fine-Tuning (SFT) datasets, designed evaluation frameworks, and performed Reinforcement Learning from Human Feedback (RLHF) annotations to maximize model accuracy."
      ]
    },
    {
      "company": "Recursive Data Ltd.",
      "location": "Remote contractor",
      "startDate": "2023-07-01T00:00:00.000Z",
      "endDate": "2024-03-30T00:00:00.000Z",
      "description": "Contributed to multiple short-term projects spanning web scraping, browser automation, and AI integration.",
      "current": false,
      "achievements": [
        "Built a unified parcel tracking platform that scrapes real-time delivery data across multiple courier sites and Airtable using a single tracking ID.",
        "Integrated ChatGPT into a mobile app, enabling intelligent conversational features within the existing product.",
        "Developed a real-time price comparison tool that scrapes and aggregates product listings across Amazon, eBay, and multiple ecommerce platforms simultaneously.",
      ]
    },
    {
      "company": "Zaytrics (Pvt.) Limited | Lead AI System Developer",
      "location": "Islamabad, Pakistan",
      "startDate": "2021-01-01T00:00:00.000Z",
      "endDate": "2023-06-30T00:00:00.000Z",
      "description": "Independently built and deployed multiple production AI systems as client-facing APIs.",
      "current": false,
      achievements: [
        "TenderML: Independently built, trained, and deployed an AI-driven text classification pipeline for parsing German construction PDFs, achieving a 95% production accuracy rate.",
        "GCP InsightDocs: Designed an end-to-end cloud data extraction engine using Google Cloud Document AI and OCR, serving it as a high-throughput, client-facing API.",
        "Orchestrated cloud infrastructure deployments on AWS EC2 leveraging Ray clusters for autoscaling distributed Python applications."
      ]
    }
  ]


  const formatDate = (dateString) => {
    if (!dateString) return 'Present';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };


  return (
    <section id="experience" className="section experience-timeline">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">My Journey</p>
          <h2 className="section-title">Work <span className="gradient-text">Experience</span></h2>
          <p className="section-description">
            Over 5 years of professional experience building digital products.
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className="timeline-dot"></div>
                <div className={`timeline-card ${exp.current ? 'current' : ''}`}>
                  <div className="timeline-header">
                    <div className="timeline-icon">
                      <FaBriefcase />
                    </div>
                    <div className="timeline-info">
                      <h3>{exp.title}</h3>
                      <p className="company">{exp.company}</p>
                    </div>
                  </div>

                  <div className="timeline-meta">
                    <span className="meta-item">
                      <FaCalendarAlt />
                      {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                    </span>
                    {exp.location && (
                      <span className="meta-item">
                        <FaMapMarkerAlt />
                        {exp.location}
                      </span>
                    )}
                  </div>

                  <p className="timeline-description">{exp.description}</p>
                  <ul className="timeline-achievements">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="timeline-tech">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  )}

                  {exp.current && (
                    <div className="current-badge">
                      <span className="badge">Current</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default ExperienceTimeline;