import React from 'react';
import { DollarSign, ShieldCheck, Zap, Video, Clock, MessageSquare } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: <DollarSign size={20} />,
      title: 'No Visa/Tax Overhead',
      description: 'Contract-ready immediately via Deel or B2B corporate billing. You don\'t deal with international payroll complexities.'
    },
    {
      icon: <ShieldCheck size={20} />,
      title: '100% IP & NDA Protection',
      description: 'Fully compliant with US/EU intellectual property laws under standard international contractor agreements.'
    },
    {
      icon: <Zap size={20} />,
      title: 'Fully Equipped Setup',
      description: 'Operating from a dedicated home office with secondary backup power (UPS/Solar) and high-speed fiber internet to ensure 100% uptime.'
    },
    {
      icon: <Video size={20} />,
      title: 'Async-First Execution',
      description: 'I utilize Slack, Loom video handovers, and clear Jira documentation so work moves forward without needing constant live synchronization.'
    },
    {
      icon: <Clock size={20} />,
      title: 'Timezone Overlap',
      description: 'I offer 4 to 5 hours of structured, synchronous daily overlap with EST, GMT, and CET business hours.'
    },
    {
      icon: <MessageSquare size={20} />,
      title: 'Professional English Communication',
      description: 'Seamless async-first engineering updates, Slack/Loom check-ins, and direct alignment with technical stakeholders.'
    }
  ];

  return (
    <section id="process" className="section">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">How I Work</p>
          <h2 className="section-title">Frictionless Remote <span className="gradient-text">Collaboration</span></h2>
          <p className="section-description">
            Hiring globally shouldn&apos;t mean managing dependencies across time zones. I&apos;ve designed my workflow to blend seamlessly into Western product teams.
          </p>
        </div>

        <ol className="card-grid process-grid">
          {steps.map((step, index) => (
            <li key={step.title} className="card">
              <div className="card-head">
                <div className="icon-box" aria-hidden="true">{step.icon}</div>
                <span className="card-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="card-title">{step.title}</h3>
              <p className="card-desc">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;
