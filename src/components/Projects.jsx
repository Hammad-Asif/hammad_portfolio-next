import React from 'react';
import Link from "next/link";
import { FileText, Cloud, Phone, Monitor, Shield, Brain, ScanEye, ChevronRight } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      id: 'lightdesign',
      title: "LightDesign - AI Roof Measurement & Lighting Design Platform",
      company: "KeystoneSTS",
      caseLink: "/case-studies/lightdesign-ai-roof-measurement",
      githubUrl: "https://github.com/Hammad-Asif/lightDesign-AI-App",
      shortDescription: "Sole developer of a platform that turns one phone photo of a house into typed roof lines, real lengths in feet and a measured, editable holiday-lighting design drawn from the client's own product catalogue.",
      fullDescription: "Combined SAM 3 instance segmentation (fal.ai) with a vision LLM (OpenRouter, strict JSON schema) that draws typed roof lines on a crop of the target house, refined by conservative classical computer vision and backed by an eight-stage geometric fallback so detection never fails. Implemented single-photo metrology from first principles: focal length from vanishing points, facade planes, wall-distance propagation from one known length, and independent consistency checks. Built a natural-language instruction reader (LLM plus deterministic rules) that can only name real catalogue products, a React + TypeScript canvas editor with 10+ tools, and a Dockerised nginx + FastAPI + PostgreSQL stack.",
      icon: <ScanEye size={32} />,
      technologies: ["Python", "FastAPI", "SAM 3", "Vision LLM", "OpenCV", "NumPy", "React", "TypeScript", "PostgreSQL", "Docker"],
      achievements: [
        "Roof-line F1 of 0.88 on held-out photos, measured with a purpose-built benchmark app",
        "Real lengths from one photo: focal length within 3% and measured wall within 1% on synthetic ground truth",
        "98% median overlap between the auto-picked house and a human's choice",
        "Graceful fallback so detection never hard-fails when the LLM is unavailable",
        "Content-addressed caching keeps hosted-AI spend predictable",
        "About 37k lines of Python and TypeScript, 74 unit tests, shipped in 4 milestones"
      ],
      category: "AI/Machine Learning",
      type: "Work Project"
    },
    {
      id: 'turing-llm',
      title: "Gemini AI Trainer — Google x Turing Project",
      company: "Turing.com",
      caseLink: "/case-studies/gemini-ai-trainer",
      shortDescription: "Contributed to a Google-commissioned project through Turing to improve Gemini's data analysis reasoning — creating training datasets, evaluation frameworks, and RLHF annotations.",
      fullDescription: "As part of a Google x Turing collaboration, worked on improving Gemini's ability to handle real-world data analysis tasks. Responsibilities included designing prompt evaluation frameworks to assess model responses across different analytical scenarios, creating high-quality supervised fine-tuning (SFT) datasets tailored to data analytics workflows, and performing RLHF (Reinforcement Learning from Human Feedback) annotation to align model outputs with business logic and analytical accuracy. Applied human-in-the-loop feedback methodology to iteratively improve model performance across multimodal AI workflows.",
      icon: <Brain size={32} />,
      technologies: ["Python", "Gemini", "Prompt Engineering", "RLHF", "SFT", "Data Annotation", "Human-in-the-loop", "Data Analytics"],
      achievements: [
        "Contributed to Google-commissioned Gemini AI improvement project",
        "Created SFT datasets for data analytics task training",
        "Performed RLHF annotation to align model outputs with business logic",
        "Designed prompt evaluation frameworks across analytical scenarios",
        "Applied human-in-the-loop methodology for iterative improvement"
      ],
      category: "AI/Machine Learning",
      type: "Work Project"
    },
    {
      id: 'tenderml',
      title: "TenderML - AI Document Classification System",
      company: "Zaytrics (Pvt.) Limited",
      githubUrl: "https://github.com/Hammad-Asif/tenderML",
      caseLink: "/case-studies/tenderml-ai-document-classification",
      shortDescription: "An AI system for real-time text classification and information extraction from German construction tender PDFs with 95% accuracy.",
      fullDescription: "Built a comprehensive AI system utilizing Support Vector Machines (SVM) to classify text within PDF documents containing German construction tender information. Processed over 1000 documents with varying formats but consistent contextual content. Employed tree data structures post-classification with DFS traversal for specific information identification. Implemented filtering mechanisms to refine extracted data and deployed the solution using FASTAPI on Ray cluster hosted on AWS EC2 with autoscaling capabilities.",
      icon: <FileText size={32} />,
      technologies: ["Python", "SVM", "FASTAPI", "AWS EC2", "Ray Cluster", "PDF Processing", "Machine Learning"],
      achievements: [
        "Built entirely solo — from ML model training to production API deployment",
        "Achieved 95% accuracy in document classification",
        "Processed 1000+ German construction tender documents",
        "Implemented tree data structure with DFS for data extraction",
        "Deployed scalable solution on AWS with autoscaling",
        "Real-time processing capabilities"
      ],
      category: "AI/Machine Learning",
      type: "Work Project"
    },
    {
      id: 'gcp-insightdocs',
      title: "GCP InsightDocs - Document Extraction Platform",
      company: "Zaytrics (Pvt.) Limited",
      caseLink: "/case-studies/gcp-insightdocs",
      githubUrl: "https://github.com/Hammad-Asif/GCP-InsightDocs",
      shortDescription: "Independently built from scratch — a comprehensive document analysis solution using Google Cloud Document AI and OCR. Sole developer, delivered as a client-facing API integrated into the client's existing system.",
      fullDescription: "Developed a full-stack solution utilizing Google Cloud Document AI and OCR for automated key-value extraction from PDF files and images. Built ReactJS frontend with document viewer and sidebar displaying extracted information. Implemented Flask Python backend for server-side logic and GCP service communication. The system provides users with an intuitive interface to view original documents while accessing comprehensive extracted data summaries.",
      icon: <Cloud size={32} />,
      technologies: ["ReactJS", "Flask", "Python", "Google Cloud Document AI", "OCR", "GCP"],
      achievements: [
        "Built entirely solo — complete end-to-end ownership from development to deployment",
        "Automated key-value extraction from documents",
        "Built intuitive document viewer interface",
        "Integrated Google Cloud Document AI services",
        "Developed comprehensive data extraction pipeline",
        "Created user-friendly sidebar for extracted information"
      ],
      category: "Full-Stack Development",
      type: "Work Project"
    },
    {
      id: 'chappie',
      title: "CHappie - VOIP SAAS Call Center Platform",
      company: "Zaytrics (Pvt.) Limited",
      shortDescription: "Dutch-origin subscription-based VOIP SAAS platform unifying call center operations. Contributed Python backend and API components as part of a cross-functional development team.",
      fullDescription: "Built a comprehensive call center solution providing web-based calling, VOIP integration, real-time sales monitoring, agent performance tracking, callback handling, and administrative control with role-based access rights. The system centralizes all communication and management functions, enabling organizations to streamline call center workflows and sales operations on a single platform. Features intuitive dashboards for both agents and administrators to enhance productivity and communication efficiency.",
      icon: <Phone size={32} />,
      technologies: ["ReactJS", "Flask", "Node.js", "Python", "MySQL", "MongoDB", "Firebase", "VOIP"],
      achievements: [
        "Contributed Python backend and API components to team project",
        "Implemented real-time sales monitoring",
        "Built role-based access control system",
        "Created agent performance tracking",
        "Developed callback handling mechanisms"
      ],
      category: "Full-Stack Development",
      type: "Work Project"
    },
    {
      id: 'voip-voice-comparison',
      title: "VOIP Voice Comparison System",
      company: "Zaytrics (Pvt.) Limited",
      githubUrl: "https://github.com/Hammad-Asif/VOIP-SAAS-Voice-Comparison",
      shortDescription: "Real-time voice comparison system for VOIP communications. Collaborated as part of the Zaytrics development team on this audio processing feature.",
      fullDescription: "Embedded within CHappie, this system performs real-time voice comparison between agents and customers during VOIP communication. Utilizes advanced audio processing techniques to separate voices and compares agent speech with predefined contracts to ensure rule compliance. Implements sophisticated speech recognition and rule verification mechanisms for immediate feedback and security enhancement.",
      icon: <Monitor size={32} />,
      technologies: ["Python", "FASTAPI", "AWS EC2", "Ray Cluster", "Audio Processing", "Speech Recognition"],
      achievements: [
        "Collaborated on real-time voice separation and analysis system",
        "Contract compliance verification",
        "Advanced audio processing implementation",
        "Immediate feedback system",
        "Enhanced communication security"
      ],
      category: "AI/Audio Processing",
      type: "Work Project"
    },
    {
      id: 'securetrack',
      title: "SecureTrack - Admin Monitoring System",
      company: "Zaytrics (Pvt.) Limited",
      shortDescription: "Real-time admin monitoring system for logging user actions, detecting suspicious behavior, and maintaining audit trails.",
      fullDescription: "Built using Node.js and MongoDB, SecureTrack enhances application security by logging user actions in real-time. Records detailed logs of each operation performed by users within the platform, allowing administrators to trace activities, detect suspicious behavior, and maintain comprehensive audit trails. Provides accountability and foundational security layer for applications requiring user access oversight.",
      icon: <Shield size={32} />,
      technologies: ["Node.js", "JavaScript", "MongoDB", "Real-time Logging", "Security Monitoring"],
      achievements: [
        "Real-time user action logging",
        "Suspicious behavior detection",
        "Comprehensive audit trail maintenance",
        "Enhanced platform security",
        "Improved administrative visibility"
      ],
      category: "Security/Monitoring",
      type: "Work Project"
    },
    {
      id: 'scanify-shopify',
      title: "AI Shopify Theme Generator — OpenAI Integration",
      company: "Scanify Dev (Freelance)",
      shortDescription: "Contributed to an AI-powered platform that generates Shopify store themes using OpenAI APIs — automating content and image creation for ecommerce stores. Worked on the Python FastAPI backend in a live production environment.",
      fullDescription: "Worked as a freelance backend developer on a production application that uses OpenAI APIs to automatically generate Shopify store themes, including AI-generated content and images tailored to each store's niche. The platform was built on a Python FastAPI backend. Responsibilities included resolving backend bugs that affected AI feature stability, improving OpenAI API integration reliability, and ensuring consistent delivery of AI-powered content and image generation features for active ecommerce clients.",
      icon: <Monitor size={32} />,
      technologies: ["Python", "FastAPI", "OpenAI API", "REST APIs", "Backend Development", "AI Integration"],
      achievements: [
        "Maintained and improved OpenAI API integrations in live production app",
        "Resolved Python FastAPI backend bugs affecting AI feature delivery",
        "Worked on real ecommerce product actively used by clients",
        "Gained production experience with OpenAI image and text generation APIs"
      ],
      category: "AI/Machine Learning",
      type: "Freelance Project"
    }
  ];

  return (
    <section id="projects" className="section page-top">
      <div className="page-glow page-glow-1" aria-hidden="true" />
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">Case Studies</p>
          <h1 className="section-title page-title">Professional <span className="gradient-text">Case Studies</span></h1>
          <p className="section-description">
            Key projects from my professional experience, from ML pipelines to production SaaS platforms.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article key={project.id} id={project.id} className="card project-card">
              <div className="project-header">
                <div className="icon-box" aria-hidden="true">{project.icon}</div>
                <div className="project-title-section">
                  <h2 className="project-title">{project.title}</h2>
                  <div className="project-meta">
                    <span className="card-kicker">{project.company}</span>
                    <span className="pill pill-accent">{project.category}</span>
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

              <ul className="chip-list chip-list-sm">
                {project.technologies.map((tech) => (
                  <li key={tech} className="chip">{tech}</li>
                ))}
              </ul>

              {project.caseLink && (
                <Link href={project.caseLink} className="text-link">
                  Read full case study <ChevronRight size={16} aria-hidden="true" />
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
