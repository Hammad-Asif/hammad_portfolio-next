import React from 'react';
import { FaReact, FaPython, FaAws, FaDocker, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiDownload, FiMail } from 'react-icons/fi';
import {
    SiMongodb,
    SiFlask,
    SiFastapi,
    SiOpenai,
    SiGit,
    SiNginx,
    SiPostman,
    SiPandas,
    SiNumpy,
    SiMysql,
    SiSpacy,
} from 'react-icons/si';

const innerSkills = [
    { icon: <FaReact />, name: "React" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <FaPython />, name: "Python" },
    { icon: <SiFlask />, name: "Flask" },
    { icon: <SiFastapi />, name: "FastAPI" },
    { icon: <FaAws />, name: "AWS" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <SiOpenai />, name: "OpenAI" },
    { icon: <SiGit />, name: "Git" },
];

const outerSkills = [
    { icon: <SiNginx />, name: "Nginx" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiPandas />, name: "Pandas" },
    { icon: <SiNumpy />, name: "NumPy" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiSpacy />, name: "NLP" },
];

const stats = [
    { value: "5+", label: "Years building AI systems" },
    { value: "95%", label: "TenderML end-to-end accuracy" },
    { value: "14", label: "International freelance clients" },
    { value: "5.0", label: "Clutch client rating" },
];

// Position icons evenly around the ring
const getPosition = (index, total, radius) => {
    const angle = (index / total) * (2 * Math.PI) - Math.PI / 2;
    const x = Math.cos(angle) * radius + 50;
    const y = Math.sin(angle) * radius + 50;
    return { left: `${x}%`, top: `${y}%` };
};

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="page-glow page-glow-1" aria-hidden="true" />
            <div className="page-glow page-glow-2" aria-hidden="true" />

            <div className="container hero-grid">
                <div className="hero-content">
                    <div className="status-badge">
                        <span className="status-ping" aria-hidden="true">
                            <span className="status-ping-ring" />
                            <span className="status-ping-dot" />
                        </span>
                        Available for US/UK/EU remote roles &amp; contract work
                    </div>

                    <h1 className="hero-title">
                        AI Engineer &amp;{' '}
                        <span className="gradient-text">Python Backend Architect</span>
                    </h1>

                    <p className="hero-description">
                        I bridge the gap between AI prototypes and production-grade systems. Specializing in high-performance FastAPI backends, scalable RAG pipelines, and fine-tuned LLMs engineered for global scale.
                    </p>

                    <p className="hero-meta">
                        <span>Passed Toptal&apos;s coding assessment</span>
                        <span aria-hidden="true">/</span>
                        <span>US · UK · EU overlap</span>
                        <span aria-hidden="true">/</span>
                        <span>Contract-ready via Deel</span>
                    </p>

                    <div className="hero-buttons">
                        <a suppressHydrationWarning={true} href="mailto:hammadcto786@gmail.com" className="btn btn-primary">
                            <FiMail size={18} aria-hidden="true" /> Chat Directly
                        </a>
                        <a
                            href="/Hammad_Asif_CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            suppressHydrationWarning={true}
                            className="btn btn-secondary"
                        >
                            <FiDownload size={16} aria-hidden="true" /> Download CV
                        </a>
                        <a href="https://github.com/Hammad-Asif" target="_blank" rel="noopener noreferrer" className="icon-btn icon-btn-lg" aria-label="GitHub profile">
                            <FaGithub size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/hammad-asif/" target="_blank" rel="noopener noreferrer" className="icon-btn icon-btn-lg" aria-label="LinkedIn profile">
                            <FaLinkedin size={20} />
                        </a>
                    </div>
                </div>

                <div className="avatar-container" aria-hidden="true">
                    <div className="orbit-ring">
                        {innerSkills.map((skill, i) => (
                            <div key={skill.name} className="orbit-icon" style={getPosition(i, innerSkills.length, 50)}>
                                {skill.icon}
                                <span className="tooltip">{skill.name}</span>
                            </div>
                        ))}
                    </div>

                    <div className="orbit-ring-reverse">
                        {outerSkills.map((skill, i) => (
                            <div key={skill.name} className="orbit-icon" style={getPosition(i, outerSkills.length, 50)}>
                                {skill.icon}
                                <span className="tooltip">{skill.name}</span>
                            </div>
                        ))}
                    </div>

                    <div className="hero-image">
                        <img
                            src="/profile_pic.jpg"
                            alt="Muhammad Hammad Asif, AI Engineer"
                            className="avatar-image"
                            width={240}
                            height={240}
                        />
                    </div>
                </div>
            </div>

            <div className="container">
                <dl className="hero-stats">
                    {stats.map((stat) => (
                        <div key={stat.label} className="hero-stat">
                            <dt className="hero-stat-label">{stat.label}</dt>
                            <dd className="hero-stat-value">{stat.value}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
};

export default Hero;
