import React from 'react';
import { Brain, Code, Database, Server, Globe, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Brain size={32} />,
      title: "Generative AI & LLMs",
      skills: [
        "LLM Fine-Tuning & Alignment",
        "RAG Pipelines & Optimization",
        "LangChain & LangGraph",
        "Vector DBs (Qdrant, Pinecone)",
        "Prompt Engineering & Evaluation",
        "RLHF & SFT Datasets",
        "OpenAI & Gemini API Integration",
        "Natural Language Processing"
      ]
    },
    {
      icon: <Server size={32} />,
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
      icon: <Database size={32} />,
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
      icon: <Settings size={32} />,
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
      icon: <Globe size={32} />,
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
    <section id="skills" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">
          A comprehensive overview of my technical skills and areas of expertise
        </p>
        
        <div className="skills-grid">
          <div className="grid grid-3">
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-category card">
                <div className="skill-icon">
                  {category.icon}
                </div>
                <h3 className="skill-title">{category.title}</h3>
                <div className="skill-list">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
