"use client"
import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        // budget: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                e.target,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY        // from EmailJS dashboard
            );
            toast.success('Thanks for contacting. You\'ll get response in 24 hours.');
            e.target.reset()
        } catch (error) {
            console.log(error)
            toast.error( 'Something went wrong. Please try again.');
        } finally {
        
        }
    };

    const contactInfo = [
        {
            icon: <FaEnvelope />,
            title: 'Email',
            detail: 'hammad@recursivedata.com',
            link: 'mailto:hammad@recursivedata.com'
        },
        {
            icon: <FaPhone />,
            title: 'Phone',
            detail: '+92 308 7724490',
            link: null
        },
        {
            icon: <FaMapMarkerAlt />,
            title: 'Location',
            detail: 'Pakistan (Available Worldwide - Remote)',
            link: null
        },
        {
            icon: <FaClock />,
            title: 'Response Time',
            detail: 'Within 24 hours',
            link: null
        }
    ];

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <div className="contact-info">
                    <p className="section-subtitle">Get In Touch</p>
                    <h2><span className="gradient-text">I'm currently open to full-time remote positions. Feel free to reach out directly.</span></h2>
                    

                    <div className="contact-details">
                        {contactInfo.map((item, index) => (
                            <div key={index} className="contact-item">
                                <div className="contact-item-icon">{item.icon}</div>
                                <div className="contact-item-content">
                                    <h4>{item.title}</h4>
                                    {item.link ? (
                                        <a href={item.link}>{item.detail}</a>
                                    ) : (
                                        <p>{item.detail}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">Full Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john@example.com"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+92 300 1234567"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="company">Company Name</label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                placeholder="Your Company"
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="service">Service Required *</label>
                            <select
                                id="service"
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select a service</option>
                                <option value="High-Performance APIs">High-Performance APIs</option>
                                <option value="LLM & RAG Pipelines">LLM & RAG Pipelines</option>
                                <option value="Data Automation & Mining">Data Automation & Mining</option>
                                <option value="Distributed Computing">Distributed Computing</option>
                                <option value="DevOps & Containerization">DevOps & Containerization</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        {/* <div className="form-group">
                            <label htmlFor="budget">Budget Range</label>
                            <select
                                id="budget"
                                name="budget"
                                value={formData.budget}
                                onChange={handleChange}
                            >
                                <option value="">Select budget range</option>
                                <option value="Less than $1,000">Less than $1,000</option>
                                <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                                <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                                <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                                <option value="$25,000+">$25,000+</option>
                            </select>
                        </div> */}
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Project Details *</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell me about your project, goals, and timeline..."
                            required
                        />
                    </div>

                    <button type="submit" className="form-submit" disabled={loading}>
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;