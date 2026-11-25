import React from 'react';
import { FaGlobe, FaDocker, FaBuffer, FaServer, FaRegChartBar } from 'react-icons/fa';

const Expertise = () => {
  const services = [
    {
      icon: <FaRegChartBar />,
      title: 'LLM & RAG Pipelines',
      description: 'Building context-aware applications using LangChain, OpenAI/Gemini APIs, and advanced semantic chunking.'
    },
    {
      icon: <FaBuffer />,
      title: 'High-Performance APIs',
      description: 'Designing robust, asynchronous RESTful APIs using FastAPI and Flask, optimized for low latency.'
    },
    {
      icon: <FaGlobe />,
      title: 'Vector Architectures & Data Mining',
      description: 'Structuring web scrapers and automation pipelines using Playwright and Selenium to feed production AI data streams.'
    },
    {
      icon: <FaServer />,
      title: 'Distributed Computing',
      description: 'Scaling machine learning workloads using Ray clusters and AWS EC2 autoscaling groups.'
    },
    {
      icon: <FaDocker />,
      title: 'DevOps & Containerization',
      description: 'Ensuring identical development and production environments with Docker, Nginx, and automated CI/CD workflows.'
    }
  ];

  return (
    <section id="expertise" className="section">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">What I Offer</p>
          <h2 className="section-title">My <span className="gradient-text">Expertise</span></h2>
          <p className="section-description">
            From concept to deployment, I provide end-to-end development solutions tailored to your business needs.
          </p>
        </div>

        <div className="card-grid">
          {services.map((service) => (
            <div key={service.title} className="card">
              <div className="icon-box" aria-hidden="true">{service.icon}</div>
              <h3 className="card-title">{service.title}</h3>
              <p className="card-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
