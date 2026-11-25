"use client";
import React, { useState } from 'react';
import { ShoppingCart, Smartphone, Code, Package, FileText, ChevronDown, ChevronUp, BrainCog } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
const SideProjects = () => {
  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleProject = (projectId) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const sideProjects = [
    {
      id: 'portfolio-scraper-job-score-matcher',
      title: "Portfolio Scraper Job Score Matcher",
      githubUrl: "https://github.com/Hammad-Asif/Portfolio_scrapper_Job_score_matcher",
      shortDescription: "FastAPI-based service that extracts developer portfolios and scores them against job descriptions using AI-driven analysis.",
      fullDescription: "This project is a production-ready backend service built with FastAPI that automates the extraction and evaluation of developer portfolios. It leverages web scraping tools like BeautifulSoup and Playwright to handle both static and JavaScript-heavy websites, ensuring comprehensive data retrieval. The system integrates Large Language Models (LLMs) via LangChain to analyze extracted content, including skills, experience, and projects, and compares it against job descriptions. It generates a compatibility score along with a detailed gap analysis, highlighting missing skills or mismatches. The architecture demonstrates strong capabilities in API design, asynchronous processing, AI integration, and database management using SQLite, all containerized with Docker for scalability and deployment.",
      icon: <BrainCog size={32} />,
      technologies: ["Python", "FastAPI", "BeautifulSoup", "Playwright", "Selenium", "SQLite", "LangChain", "Jinja2", "Docker", "AI Integration", "Web Scraping"],
      achievements: [
        "Automated portfolio data extraction from dynamic and static websites",
        "LLM-powered job compatibility scoring system",
        "Detailed gap analysis between candidate profile and job requirements",
        "Asynchronous scraping and processing for improved performance",
        "Robust API design with FastAPI for scalable backend services",
        "Containerized deployment using Docker"
      ],
      category: "AI Integration",
      status: "Completed"
    },
    {
      id: 'ecommerce-price-comparison',
      title: "Real-time Ecommerce Price Comparison Tool",
      githubUrl:"https://github.com/Hammad-Asif/Real-time_Ecommerce_Price_Comparison_Tool",
      shortDescription: "Comprehensive web scraping tool that compares prices across multiple ecommerce platforms including Amazon and eBay in real-time.",
      fullDescription: "The tool is designed to scrape data from various Ecommerce websites, including but not limited to Amazon, eBay, and other relevant platforms. The focus is on extracting information based on unique product identifiers and names, allowing users to compare prices effortlessly. The system employs web scraping techniques to fetch up-to-date information from diverse Ecommerce websites. Regular and automated data updates ensure that users have access to the latest pricing information. This project is a powerful and efficient Real-time Ecommerce Price Comparison Tool, empowering users and buyers to make well-informed online purchasing decisions by easily comparing prices across multiple platforms.",
      icon: <ShoppingCart size={32} />,
      technologies: ["Python", "Web Scraping", "BeautifulSoup", "Selenium", "Data Processing", "API Integration"],
      achievements: [
        "Real-time price comparison across multiple platforms",
        "Automated data updates for latest pricing information",
        "Product identification using unique identifiers",
        "User-friendly interface for price comparison",
        "Comprehensive features promoting transparency",
        "Simplified online shopping experience"
      ],
      category: "Web Scraping",
      status: "Completed"
    },
    {
      id: 'foodscan-saas',
      title: "FoodScanSAAS - Mobile Application",
      githubUrl:"https://github.com/Hammad-Asif/FoodScanSAAS---Mobile-Application",
      shortDescription: "SAAS mobile application that scans food barcodes to provide detailed ingredient information and definitions using ChatGPT integration.",
      fullDescription: "FoodScanSAAS is a Software as a Service (SAAS) mobile application designed to simplify the process of understanding food items by scanning their barcodes. The app provides users with detailed information about the ingredients present in the scanned food products, along with their definitions. One of the key features of the application is its integration with ChatGPT, enhancing the user experience by providing accurate and comprehensive ingredient definitions through natural language processing. The app empowers users to make informed and healthier food choices, enhances transparency in understanding packaged food content, and offers a convenient solution for individuals with dietary restrictions or allergies.",
      icon: <Smartphone size={32} />,
      technologies: ["Mobile Development", "Barcode Scanning", "ChatGPT API", "Natural Language Processing", "SAAS Architecture"],
      achievements: [
        "Barcode scanning for instant food identification",
        "ChatGPT integration for ingredient definitions",
        "Detailed nutritional information display",
        "Support for dietary restrictions and allergies",
        "Enhanced transparency in food content",
        "Convenient mobile-first user experience"
      ],
      category: "Mobile Development",
      status: "Completed"
    },
    {
      id: 'flowsketch-js',
      title: "FlowSketchJS – Lightweight Diagramming Library",
      shortDescription: "Pure JavaScript graphics library for rendering interactive flow diagrams directly in browsers without external dependencies.",
      fullDescription: "FlowSketchJS is a lightweight, pure JavaScript graphics library designed to empower websites with the ability to render simple flow diagrams directly in the browser. The library enables developers to create interactive diagrams using customizable shapes and text, without relying on external frameworks or plugins. This solution streamlines visual communication for web applications, particularly in educational tools, dashboards, and process visualization interfaces. The library provides a modern, efficient approach to diagram creation with zero dependencies.",
      icon: <Code size={32} />,
      technologies: ["JavaScript", "HTML5 Canvas", "SVG", "DOM Manipulation", "Graphics Programming"],
      achievements: [
        "Zero-dependency lightweight library",
        "Interactive diagram creation capabilities",
        "Customizable shapes and text elements",
        "Browser-native implementation",
        "Suitable for educational and dashboard applications",
        "Streamlined visual communication solution"
      ],
      category: "JavaScript Library",
      status: "Completed"
    },
    {
      id: 'order-tracking-system',
      title: "Order Tracking Web Scraping System",
      githubUrl:"https://github.com/Hammad-Asif/Order-Tracking-Web-Scraping-System",
      shortDescription: "Python-based centralized platform for real-time order tracking across multiple online platforms using web scraping and Airtable integration.",
      fullDescription: "The Order Tracking Web Scraping System is a Python-based web scraping project designed to provide users with a centralized platform for real-time tracking of their orders placed on various online platforms. The system utilizes web scraping techniques to extract order-related information from the client's personal website and aggregates the data seamlessly using Airtable. This web-based solution enables users to track their orders conveniently, even when delivered through different courier services, providing a unified tracking experience across multiple platforms.",
      icon: <Package size={32} />,
      technologies: ["Python", "Web Scraping", "Airtable API", "Data Aggregation", "Real-time Processing"],
      achievements: [
        "Centralized order tracking across platforms",
        "Real-time order status updates",
        "Seamless Airtable data aggregation",
        "Multi-courier service support",
        "Automated data extraction and processing",
        "Unified tracking experience for users"
      ],
      category: "Web Scraping",
      status: "Completed"
    },
    {
      id: 'text-summarization',
      title: "Abstractive and Extractive Summarization System",
      githubUrl:"https://github.com/Hammad-Asif/Abstractive-and-Extractive-Summarization",
      shortDescription: "Bachelor's degree final project combining deep learning and LSA techniques for comprehensive text summarization with C# frontend integration.",
      fullDescription: "This project represents the culmination of the Bachelor's degree and focuses on abstractive and extractive summarization. For abstractive summarization, a deep learning neural network was trained on the CNN/Dailymail dataset using bidirectional LSTM. The model was designed to perform text summarization tasks using a machine translation algorithm. For extractive summarization, Latent Semantic Analysis (LSA) was employed to generate summaries of generic text using Singular Value Decomposition (SVD). The entire system was developed using Python Flask and connected to a C# n-tier application for Windows, facilitating communication between the backend and frontend components.",
      icon: <FileText size={32} />,
      technologies: ["Python", "Flask", "TensorFlow", "LSTM", "LSA", "SVD", "C#", "CNN/DailyMail Dataset"],
      achievements: [
        "Bidirectional LSTM for abstractive summarization",
        "LSA implementation for extractive summarization",
        "CNN/DailyMail dataset training and optimization",
        "Machine translation approach for text summarization",
        "C# n-tier application integration",
        "Comprehensive NLP and ML demonstration"
      ],
      category: "Machine Learning",
      status: "Completed"
    }
  ];

  return (
    <section id="side-projects" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">Freelance &amp; Personal</p>
          <h2 className="section-title">Side <span className="gradient-text">Projects</span></h2>
          <p className="section-description">
            Personal projects and solutions developed during my freelance journey.
          </p>
        </div>

        <div className="card-grid card-grid-2">
          {sideProjects.map((project) => {
            const isOpen = !!expandedProjects[project.id];
            return (
              <article key={project.id} className="card project-card">
                <div className="project-header">
                  <div className="icon-box" aria-hidden="true">{project.icon}</div>
                  <div className="project-title-section">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-meta">
                      <span className="pill pill-accent">{project.category}</span>
                      <span className="pill">{project.status}</span>
                    </div>
                  </div>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} on GitHub`}
                      className="icon-btn"
                    >
                      <FiGithub size={16} />
                    </a>
                  )}
                </div>

                <p className="card-desc">{project.shortDescription}</p>

                {isOpen && (
                  <div className="project-expanded" id={`${project.id}-details`}>
                    <p className="card-desc">{project.fullDescription}</p>
                    <h4 className="block-title">Key Achievements</h4>
                    <ul className="check-list">
                      {project.achievements.map((achievement) => (
                        <li key={achievement}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <ul className="chip-list chip-list-sm card-grow-top">
                  {project.technologies.map((tech) => (
                    <li key={tech} className="chip">{tech}</li>
                  ))}
                </ul>

                <button
                  type="button"
                  className="text-link"
                  onClick={() => toggleProject(project.id)}
                  aria-expanded={isOpen}
                  aria-controls={`${project.id}-details`}
                >
                  {isOpen ? (
                    <>Show less <ChevronUp size={16} aria-hidden="true" /></>
                  ) : (
                    <>Read more <ChevronDown size={16} aria-hidden="true" /></>
                  )}
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SideProjects;
