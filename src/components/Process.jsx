import React from 'react';
import { FaLightbulb, FaCode, FaCheckCircle, FaRocket } from 'react-icons/fa';

const Process = () => {
  const steps = [
    {
      icon: <FaLightbulb />,
      title: 'Async-First Execution',
      description: 'I utilize Slack, Loom video handovers, and clear Jira documentation so work moves forward without needing constant live synchronization.'
    },
    {
      icon: <FaCode />,
      title: 'Timezone Overlap',
      description: 'I offer 4 to 5 hours of structured, synchronous daily overlap with EST, GMT, and CET business hours.'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Legal & Payroll Compliance',
      description: 'Fully set up to onboard immediately as an international contractor via Deel, Remote.com, or direct corporate B2B contracts.'
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