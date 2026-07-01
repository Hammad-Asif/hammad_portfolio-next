"use client"
import React, { useState } from 'react';
import { FaChevronDown, FaQuestion } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do you work with clients across different timezones?",
      answer: "I work PKT (UTC+5), which gives me natural overlap with US East Coast mornings (my afternoon) and full coverage of EU business hours. I use async-first workflows — daily written updates, Loom videos for demos, and a shared project board so you always know where things stand without needing a call. For time-sensitive projects, I'm flexible on hours."
    },
    // {
    //   question: "Are you open to full-time remote employment?",
    //   answer: "Yes, I'm actively looking for full-time remote roles. I can be hired directly or through Deel. I'm available immediately."
    // },
    // {
    //   question: "How I Work?",
    //   answer: "Open to full-time remote roles with US, UK, and EU teams."
    // },
    {
      question: "Are you open to full-time remote roles?",
      answer: "Both. I'm open to full-time remote positions and long-term contracts. I'm set up to work as a remote contractor through Deel, or direct contracts. If you're hiring for a senior AI/backend role and want someone fully embedded in your team, let's talk."
    },
    // {
    //   question: 'Do you provide ongoing support and maintenance?',
    //   answer: 'Yes! All projects include a free support period after launch (1-3 months depending on the package). After the free period, I offer affordable monthly maintenance plans that include bug fixes, security updates, performance monitoring, and minor feature additions.'
    // },
    {
      question: 'What technologies do you specialize in?',
      answer: 'I specialize in building production-ready Python backend architectures and AI systems. My day-to-day stack includes FastAPI, Flask, AWS, Docker, LangChain, and OpenAI/Gemini integrations. I also build robust frontends using ReactJS when a full-stack solution is required.'
    },
    {
      question: 'Can you work with my existing team?',
      answer: 'Absolutely! I offer flexible engagement models including full project ownership, team augmentation, and technical consulting. I can integrate with your existing workflows using tools like Jira, Slack, and GitHub. I\'m comfortable working in both independent and collaborative environments.'
    },
    {
      question: 'Do you sign NDAs and confidentiality agreements?',
      answer: 'Yes, I understand the importance of protecting your intellectual property. I\'m happy to sign NDAs before discussing project details. All project code and data are kept strictly confidential and are never shared with third parties.'
    },
    {
      question: 'What if I need changes after the project is complete?',
      answer: 'Post-launch changes are handled through our support agreement. Bug fixes are covered during the free support period. For feature additions, I provide a separate quote. I also offer monthly retainer packages for ongoing development needs.'
    },
    {
      question: 'Can you help with AI/ML integration in my existing application?',
      answer: 'Yes! I specialize in integrating AI capabilities into existing applications. This includes adding chatbots, recommendation systems, predictive analytics, image recognition, natural language processing, and more. I can assess your current system and recommend the best AI solutions for your needs.'
    },
    // {
    //   question: 'How do we communicate during the project?',
    //   answer: 'I believe in transparent communication. We\'ll have regular check-ins via video calls (weekly or bi-weekly), daily progress updates via your preferred channel (Slack, email), and access to a project management board. I\'m available during business hours (PKT) and flexible for timezone differences.'
    // }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section faq">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">Questions?</p>
          <h2 className="section-title">Frequently Asked <span className="gradient-text">Questions</span></h2>
          <p className="section-description">
            Find answers to common questions about my expertise and process.
          </p>
        </div>

        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <div className="faq-question-icon">
                  <FaQuestion />
                </div>
                <h3>{faq.question}</h3>
                <div className="faq-toggle-icon">
                  <FaChevronDown />
                </div>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-cta">
          <p>Still have questions?</p>
          <a href="/contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>

    </section>
  );
};

export default FAQ;