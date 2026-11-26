import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiDownload, FiMail } from 'react-icons/fi';

// Hero portrait: a transparent cut-out trimmed to the figure. width and
// height must match the real file in /public; the box is sized by height
// (--portrait-h in globals.css) and takes its width from this ratio.
// Untrimmed originals are kept in /assets (not deployed).
const PORTRAIT = {
    src: '/hammad-portrait.png',
    width: 420,
    height: 1382,
};

const stats = [
    { value: "5+", label: "Years building AI systems" },
    { value: "95%", label: "TenderML end-to-end accuracy" },
    { value: "14", label: "International freelance clients" },
    { value: "5.0", label: "Clutch client rating" },
];

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-grid">
                <div className="hero-content">
                    <div className="status-badge">
                        <span className="status-ping" aria-hidden="true">
                            <span className="status-ping-ring" />
                            <span className="status-ping-dot" />
                        </span>
                        Available for US, UK and EU remote roles and contracts
                    </div>

                    <h1 className="hero-title">
                        <span className="hero-name">Muhammad Hammad Asif</span>
                        AI Engineer &amp;{' '}
                        <span className="nowrap">Full-Stack</span> Developer
                    </h1>

                    <p className="hero-description">
                        I build production AI systems and the web products around them: LLM and generative-AI pipelines, document extraction and classification, computer vision, and FastAPI backends with React frontends. About five years of hands-on work for clients in the US, UK, Europe and the UAE.
                    </p>

                    <ul className="hero-meta">
                        <li>Passed Toptal&apos;s coding assessment</li>
                        <li>Remote from Pakistan (UTC+5)</li>
                        <li>4–5 h overlap with US, UK &amp; EU</li>
                        <li>Contract-ready via Deel</li>
                    </ul>

                    <div className="hero-buttons">
                        <a suppressHydrationWarning={true} href="mailto:hammadcto786@gmail.com" className="btn btn-primary">
                            <FiMail size={18} aria-hidden="true" /> Email me
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
                    </div>

                    <p className="hero-links">
                        <a href="https://github.com/Hammad-Asif" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={16} aria-hidden="true" /> GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/hammad-asif/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={16} aria-hidden="true" /> LinkedIn
                        </a>
                    </p>
                </div>

                <figure className="portrait">
                    <div
                        className="portrait-frame"
                        style={{ '--portrait-r': PORTRAIT.width / PORTRAIT.height }}
                    >
                        <Image
                            src={PORTRAIT.src}
                            alt="Muhammad Hammad Asif, freelance AI engineer and full-stack developer"
                            className="portrait-img"
                            fill
                            sizes="(max-width: 1024px) 180px, 240px"
                            priority
                        />
                    </div>
                </figure>
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
