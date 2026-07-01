"use client";
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import { Mail, Briefcase, Calendar, User } from 'lucide-react';

const HireMeForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        description: '',
        budgetTimeline: ''
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
        setLoading(true);
        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: `Role/Project Description:\n${formData.description}\n\nBudget & Timeline:\n${formData.budgetTimeline}`,
                    reply_to: formData.email
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );
            toast.success('Discovery call request sent. I will respond within 12 hours.');
            setFormData({
                name: '',
                email: '',
                description: '',
                budgetTimeline: ''
            });
        } catch (error) {
            console.error(error);
            toast.error('Something went wrong. Please email directly at hammadcto786@gmail.com');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="hm-form-card">
            {/* Subtle background glow */}
            <div className="hm-form-glow-1" />
            <div className="hm-form-glow-2" />

            <div className="hm-form-inner">
                <h3 className="hm-form-title">Initiate A Technical Discovery</h3>
                <p className="hm-form-subtitle">
                    Fill out the brief scope below. If there is a fit, we'll schedule a direct technical alignment call.
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="hm-form-row">
                        <div className="hm-form-group">
                            <label htmlFor="name" className="hm-form-label">
                                <User size={13} className="text-emerald-400" /> Full Name *
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="e.g. Sarah Jenkins"
                                required
                                className="hm-form-input"
                            />
                        </div>

                        <div className="hm-form-group">
                            <label htmlFor="email" className="hm-form-label">
                                <Mail size={13} className="text-emerald-400" /> Company Email *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="e.g. sarah@company.com"
                                required
                                className="hm-form-input"
                            />
                        </div>
                    </div>

                    <div className="hm-form-group">
                        <label htmlFor="description" className="hm-form-label">
                            <Briefcase size={13} className="text-emerald-400" /> Project / Role Context *
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Describe the technical challenges, stack, and scope of engagement..."
                            required
                            rows={4}
                            className="hm-form-input"
                            style={{ resize: 'none' }}
                        />
                    </div>

                    <div className="hm-form-group">
                        <label htmlFor="budgetTimeline" className="hm-form-label">
                            <Calendar size={13} className="text-emerald-400" /> Budget &amp; Timeline Expectations *
                        </label>
                        <input
                            type="text"
                            id="budgetTimeline"
                            name="budgetTimeline"
                            value={formData.budgetTimeline}
                            onChange={handleChange}
                            placeholder="e.g. $10k-$15k/mo contract, starting next month, 6+ mos duration"
                            required
                            className="hm-form-input"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="hm-form-submit"
                    >
                        {loading ? 'Submitting Scope...' : 'Submit Scope & Book Call'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default HireMeForm;
