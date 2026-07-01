import React from 'react';
import { FaLightbulb, FaCode, FaCheckCircle, FaRocket } from 'react-icons/fa';

const Process = () => {
  const steps = [
    {
      title: 'No Visa/Tax Overhead',
      description: 'Contract-ready immediately via Deel or B2B corporate billing. You don\'t deal with international payroll complexities.'
    },
    {
      title: '100% IP & NDA Protection',
      description: 'Fully compliant with US/EU intellectual property laws under standard international contractor agreements.'
    },
    {
      title: 'Fully Equipped Setup',
      description: 'Operating from a dedicated home office with secondary backup power (UPS/Solar) and high-speed fiber internet to ensure 100% uptime.'
    },
    {
      title: 'Async-First Execution',
      description: 'I utilize Slack, Loom video handovers, and clear Jira documentation so work moves forward without needing constant live synchronization.'
    },
    {
      title: 'Timezone Overlap',
      description: 'I offer 4 to 5 hours of structured, synchronous daily overlap with EST, GMT, and CET business hours.'
    },
    {
      title: 'Professional English Communication',
      description: 'Seamless async-first engineering updates, Slack/Loom check-ins, and direct alignment with technical stakeholders.'
    }
  ];

  return (
    <section id="process" className="section process">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">How I Work</p>
          <h2 className="section-title">Frictionless Remote Collaboration</h2>
          <p className="section-description">
            Hiring globally shouldn't mean managing dependencies across time zones. I've designed my workflow to blend seamlessly into Western product teams.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((step, index) => (
            <div key={index} className="card process-card">
              <div className="process-number">{index + 1}</div>
              <h3 className="process-title">{step.title}</h3>
              <p className="process-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;