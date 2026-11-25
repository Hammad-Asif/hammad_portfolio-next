"use client"
import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { FiMail, FiArrowRight } from 'react-icons/fi';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

const emptyForm = {
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
};

const Contact = () => {
    const [formData, setFormData] = useState(emptyForm);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                e.target,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );
            toast.success('Thanks for contacting. You\'ll get a response within 24 hours.');
            setFormData(emptyForm);
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const contactInfo = [
        { icon: <FaEnvelope />, title: 'Email', detail: 'hammadcto786@gmail.com', link: 'mailto:hammadcto786@gmail.com' },
        { icon: <FaPhone />, title: 'Phone', detail: '+92 308 7724490', link: 'tel:+923087724490' },
        { icon: <FaMapMarkerAlt />, title: 'Location', detail: 'Pakistan (Available Worldwide - Remote)', link: null },
        { icon: <FaClock />, title: 'Response Time', detail: 'Within 24 hours', link: null }
    ];

    return (
        <main id="contact" className="page-root">
            <div className="page-glow page-glow-1" aria-hidden="true" />
            <div className="page-glow page-glow-2" aria-hidden="true" />

            <div className="container contact-grid">
                <div className="contact-info">
                    <p className="section-subtitle">Get In Touch</p>
                    <h1 className="page-title">
                        Open to full-time remote roles. <span className="gradient-text">Reach out directly.</span>
                    </h1>
                    <p className="section-description contact-lead">
                        Share the role or project and I&apos;ll get back to you within a day. Prefer email? Use the button below.
                    </p>

                    <ul className="contact-details">
                        {contactInfo.map((item) => (
                            <li key={item.title} className="contact-item">
                                <div className="icon-box" aria-hidden="true">{item.icon}</div>
                                <div>
                                    <p className="card-kicker">{item.title}</p>
                                    {item.link ? (
                                        <a href={item.link} className="contact-value">{item.detail}</a>
                                    ) : (
                                        <p className="contact-value">{item.detail}</p>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="hero-buttons">
                        <a suppressHydrationWarning={true} href="mailto:hammadcto786@gmail.com" className="btn btn-primary">
                            <FiMail size={18} aria-hidden="true" /> Chat Directly
                        </a>
                        <a href="/hire-me" className="btn btn-secondary">
                            Hiring? See how I work <FiArrowRight aria-hidden="true" />
                        </a>
                    </div>
                </div>

                <div className="hm-form-card">
                    <div className="hm-form-glow-1" />
                    <div className="hm-form-glow-2" />
                    <form className="hm-form-inner" onSubmit={handleSubmit}>
                        <h2 className="hm-form-title">Send a message</h2>
                        <p className="hm-form-subtitle">Fields marked * are required.</p>

                        <div className="hm-form-row">
                            <div className="hm-form-group">
                                <label htmlFor="name" className="hm-form-label">Full Name *</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" autoComplete="name" required className="hm-form-input" />
                            </div>
                            <div className="hm-form-group">
                                <label htmlFor="email" className="hm-form-label">Email Address *</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" autoComplete="email" required className="hm-form-input" />
                            </div>
                        </div>

                        <div className="hm-form-row">
                            <div className="hm-form-group">
                                <label htmlFor="phone" className="hm-form-label">Phone Number</label>
                                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 555 123 4567" autoComplete="tel" className="hm-form-input" />
                            </div>
                            <div className="hm-form-group">
                                <label htmlFor="company" className="hm-form-label">Company Name</label>
                                <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Your Company" autoComplete="organization" className="hm-form-input" />
                            </div>
                        </div>

                        <div className="hm-form-group">
                            <label htmlFor="service" className="hm-form-label">Service Required *</label>
                            <select id="service" name="service" value={formData.service} onChange={handleChange} required className="hm-form-input">
                                <option value="">Select a service</option>
                                <option value="High-Performance APIs">High-Performance APIs</option>
                                <option value="LLM & RAG Pipelines">LLM &amp; RAG Pipelines</option>
                                <option value="Data Automation & Mining">Data Automation &amp; Mining</option>
                                <option value="Distributed Computing">Distributed Computing</option>
                                <option value="DevOps & Containerization">DevOps &amp; Containerization</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="hm-form-group">
                            <label htmlFor="message" className="hm-form-label">Project Details *</label>
                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project, goals, and timeline..." required rows={5} className="hm-form-input" />
                        </div>

                        <button type="submit" className="hm-form-submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Contact;
