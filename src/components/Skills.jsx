import React from 'react';
import { Brain, Database, Server, Globe, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Brain size={22} />,
      title: "Generative AI & LLMs",
      skills: [
        "OpenAI, Gemini & OpenRouter APIs",
        "Multi-Provider LLM Fallback",
        "Prompt Engineering & Evaluation",
        "SFT Data & RLHF-Style Evaluation",
        "LangChain",
        "NLP & Text Classification",
        "OCR & Google Document AI",
        "Computer Vision (SAM)",
        "RAG & Agentic Frameworks (project-level)"
      ]
    },
    {
      icon: <Server size={22} />,
      title: "Backend Development",
      skills: [
        "Python (Advanced)",
        "FastAPI & Flask (Async)",
        "RESTful API Design",
        "Node.js & Express",
        "Microservices Architecture",
        "Web Scraping (Playwright/Selenium)",
        "Distributed Ray Clusters"
      ]
    },
    {
      icon: <Database size={22} />,
      title: "Databases & Data",
      skills: [
        "PostgreSQL & MySQL",
        "MongoDB & NoSQL",
        "Redis Caching & Queues",
        "pandas & NumPy",
        "Data Engineering & ETL",
        "Airtable API Integration"
      ]
    },
    {
      icon: <Settings size={22} />,
      title: "DevOps & Cloud Tools",
      skills: [
        "AWS (EC2, S3, Lambda, IAM)",
        "Docker & Containerization",
        "CI/CD Pipelines",
        "Nginx & Server Setup",
        "Git & GitFlow Version Control",
        "Linux Systems & Shell Scripting"
      ]
    },
    {
      icon: <Globe size={22} />,
      title: "Languages & Web",
      skills: [
        "JavaScript (ES6+) & TypeScript",
        "React.js & Redux Toolkit",
        "HTML5 Semantic Markup",
        "CSS3 & Responsive Design",
        "Client-Server State Sync",
        "C# & .NET Framework"
      ]
    }
  ];

  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">Toolbox</p>
          <h2 className="section-title">Skills &amp; <span className="gradient-text">Technologies</span></h2>
          <p className="section-description">
            A comprehensive overview of my technical skills and areas of expertise.
          </p>
        </div>

        <div className="card-grid">
          {skillCategories.map((category) => (
            <div key={category.title} className="card">
              <div className="card-head">
                <div className="icon-box" aria-hidden="true">{category.icon}</div>
                <h3 className="card-title">{category.title}</h3>
              </div>
              <ul className="chip-list">
                {category.skills.map((skill) => (
                  <li key={skill} className="chip">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
