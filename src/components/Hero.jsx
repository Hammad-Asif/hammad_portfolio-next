import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaJs, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiDownload, FiMail } from 'react-icons/fi';
import {
    SiMongodb,
    SiFlask,
    SiFastapi,
    SiOpenai,
    SiRedis,
    SiPostgresql,
    SiGit,
    SiLinux,
    SiNginx,
    SiPostman,
    SiPandas,
    SiNumpy,
    SiMysql,
    SiSpacy,
} from 'react-icons/si';
const Hero = () => {
    const techStack = [
        { icon: <FaReact />, name: "React" },
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <FaPython />, name: "Python" },
        { icon: <SiFlask />, name: "Flask" },
        { icon: <SiFastapi />, name: "FastAPI" },
        { icon: <FaAws />, name: "AWS" },
        { icon: <FaDocker />, name: "Docker" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <SiOpenai />, name: "OpenAI" },
        { icon: <SiRedis />, name: "Redis" },
        { icon: <SiPostgresql />, name: "PostgreSQL" },
        { icon: <SiGit />, name: "Git" },
        { icon: <SiLinux />, name: "Linux" },
        { icon: <SiNginx />, name: "Nginx" },
        { icon: <SiPostman />, name: "Postman" },
        { icon: <SiPandas />, name: "Pandas" },
        { icon: <SiNumpy />, name: "NumPy" },
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <SiSpacy />, name: "NLP" },
    ];

    // Inner ring skills
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

    // Outer ring skills
    const outerSkills = [

        { icon: <SiNginx />, name: "Nginx" },
        { icon: <SiPostman />, name: "Postman" },
        { icon: <SiPandas />, name: "Pandas" },
        { icon: <SiNumpy />, name: "NumPy" },
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <SiSpacy />, name: "NLP" },
    ];
    // Position icons evenly around the ring
    const getPosition = (index, total, radius) => {
        const angle = (index / total) * (2 * Math.PI) - Math.PI / 2;
        const x = Math.cos(angle) * radius + 50; // % from center
        const y = Math.sin(angle) * radius + 50;
        return { left: `${x}%`, top: `${y}%` };
    };

    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="hero-content">
                    {/* Remote Availability Badge */}
                    <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-3.5 py-1.5 rounded-full text-xs font-medium mb-6 w-fit">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        Available for US/UK/EU remote roles & contract work (via Deel)
                    </div>

                    <h1 className="hero-title">
                        <span className="gradient-text">AI Engineer & Python Backend Architect | Remote Specialist</span>
                    </h1>

                    <p className="hero-description">
                        I bridge the gap between AI prototypes and production-grade systems. Specializing in high-performance FastAPI backends, scalable RAG pipelines, and fine-tuned LLMs engineered for global scale.
                    </p>
                    <p className="hero-description2 text-sm text-gray-400 mt-2">
                        Top 3% Vetted Toptal Engineer | Available for Full-Time Remote Roles (US / UK / EU Timezones) | Contract-Ready via Deel
                    </p>
                    <div className="hero-buttons flex flex-wrap gap-3 mt-6">
                        <a suppressHydrationWarning={true} href="mailto:hammadcto786@gmail.com" className="btn btn-primary flex items-center gap-2">
                            <FiMail size={20} /> Chat Directly
                        </a>
                        <a
                            href="/HammadCV_inter.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            suppressHydrationWarning={true}
                            className="btn btn-secondary flex items-center gap-2"
                        >
                            <FiDownload size={16} /> Download CV
                        </a>
                        <a
                            href="https://github.com/Hammad-Asif"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary flex items-center gap-2"
                        >
                            <FaGithub size={18} /> GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/hammad-asif/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary flex items-center gap-2"
                        >
                            <FaLinkedin size={18} /> LinkedIn
                        </a>
                    </div>
                </div>
                <div className="avatar-container">

                    {/* Inner rotating ring */}
                    <div className="orbit-ring">
                        {innerSkills.map((skill, i) => (
                            <div
                                key={i}
                                className="orbit-icon"
                                style={getPosition(i, innerSkills.length, 47)}
                            >
                                {skill.icon}
                                <span className="tooltip">{skill.name}</span>
                            </div>
                        ))}
                    </div>

                    {/* Outer reverse rotating ring */}
                    <div className="orbit-ring-reverse">
                        {outerSkills.map((skill, i) => (
                            <div
                                key={i}
                                className="orbit-icon"
                                style={getPosition(i, outerSkills.length, 47)}
                            >
                                {skill.icon}
                                <span className="tooltip">{skill.name}</span>
                            </div>
                        ))}
                    </div>


                    <div className="hero-image">
                        <div className="hero-image-wrapper">
                            <img src="/profile_pic.jpg" alt="Muhammad Hammad Asif - Senior AI Backend Engineer" className="avatar-image" />

                        </div>
                    </div>
                </div>


            </div>
            {/* <div className="hero-tech-stack">
                <div className="marquee-wrapper">
                    <div className="marquee-track">
                        {[...techStack, ...techStack].map((skill, index) => (
                            <div className="marquee-item" key={index}>
                                <span className="marquee-icon">{skill.icon}</span>
                                <span className="marquee-name">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}

        </section >
    );
};

export default Hero;