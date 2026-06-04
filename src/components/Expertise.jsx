import React from 'react';
import { FaGlobe , FaDocker  , FaBuffer , FaServer, FaRegChartBar  } from 'react-icons/fa';

const Expertise = () => {
  const services = [
    {
      icon: <FaRegChartBar  />,
      title: 'LLM & RAG Pipelines',
      description: 'Building context-aware applications using LangChain, OpenAI/Gemini APIs, and advanced semantic chunking.'
    },
    {
      icon: <FaBuffer  />,
      title: 'High-Performance APIs',
      description: 'Designing robust, asynchronous RESTful APIs using FastAPI and Flask, optimized for low latency.',
      // features: ['Machine Learning Models', 'NLP & Chatbots', 'AI Integration & APIs']
    },
    {
      icon: <FaGlobe  />,
      title: 'Vector Architectures & Data Mining',
      description: 'Structuring web scrapers and automation pipelines using Playwright and Selenium to feed production AI data streams.',
      // features: ['Web Scraping & Data Mining', 'Task Automation', 'Data Analysis & Visualization', 'API Development']
    },
    {
      icon: <FaServer />,
      title: 'Distributed Computing',
      description: 'Scaling machine learning workloads using Ray clusters and AWS EC2 autoscaling groups.'
    },
    {
      icon: <FaDocker   />,
      title: 'DevOps & Containerization',
      description: 'Ensuring identical development and production environments with Docker, Nginx, and automated CI/CD workflows.',
      // features: ['CI/CD Setup', 'Cloud Deployment', 'Docker Containerization', 'Monitoring & Logging']
    }
  ];

  return (
    <section id="expertise" className="section services">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">What I Offer</p>
          <h2 className="section-title">My Expertise </h2>
          <p className="section-description">
            From concept to deployment, I provide end-to-end development solutions tailored to your business needs.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="card service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              {/* <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;