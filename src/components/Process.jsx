import React from 'react';
import { DollarSign, ShieldCheck, Zap, Video, Clock, MessageSquare } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: <DollarSign size={18} />,
      title: 'Contracts and payroll',
      description: 'Contract-ready through Deel or direct B2B billing, so you don\'t take on international payroll or tax admin.'
    },
    {
      icon: <Clock size={18} />,
      title: 'Time-zone overlap',
      description: '4 to 5 hours of live overlap every day with EST, GMT and CET business hours.'
    },
    {
      icon: <ShieldCheck size={18} />,
      title: 'IP and NDAs',
      description: 'Standard international contractor agreements and NDAs that cover US and EU intellectual-property terms.'
    },
    {
      icon: <Zap size={18} />,
      title: 'Backup power and internet',
      description: 'A dedicated home office with UPS and solar backup and fiber internet, so power cuts don\'t stop work.'
    },
    {
      icon: <Video size={18} />,
      title: 'Async by default',
      description: 'Slack updates, Jira tickets and Loom handovers, so work keeps moving with fewer meetings.'
    },
    {
      icon: <MessageSquare size={18} />,
      title: 'Clear technical English',
      description: 'Direct written and spoken updates for engineers, product managers and stakeholders.'
    }
  ];

  return (
    <section id="process" className="section">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">How I work</p>
          <h2 className="section-title">Remote work, set up before we start</h2>
          <p className="section-description">
            Contracts, time zones and power are already handled, so you can work with me like a teammate down the hall.
          </p>
        </div>

        <ul className="terms terms-3">
          {steps.map((step) => (
            <li key={step.title}>
              <span className="terms-icon" aria-hidden="true">{step.icon}</span>
              <h3 className="terms-title">{step.title}</h3>
              <p className="terms-desc">{step.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Process;
