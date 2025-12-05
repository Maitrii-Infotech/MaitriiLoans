'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, User, MessageSquare, Briefcase } from 'lucide-react';

const ContactUs = () => {
    // Form State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        loanType: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., API call)
        console.log("Form Submitted", formData);
        alert("Thank you! We will contact you soon.");
    };

    return (
        <div className="w-full bg-[#F8FAFC] min-h-screen font-sans text-slate-700">
            
            {/* --- Hero Section with Custom Theme SVG --- */}
            <section className="relative w-full h-[350px] md:h-[450px] bg-gradient-to-r from-[#6D3078] to-[#4a1f52] flex items-center justify-center overflow-hidden">
                
                {/* Custom SVG Background Pattern */}
                <div className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                    <svg viewBox="0 0 1440 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
                        <path d="M0 450V0H1440V450C1440 450 1100 200 720 200C340 200 0 450 0 450Z" fill="#F47E4D" fillOpacity="0.3"/>
                        <circle cx="100" cy="100" r="50" stroke="#F47E4D" strokeWidth="2" />
                        <circle cx="1300" cy="300" r="100" stroke="#F47E4D" strokeWidth="2" strokeDasharray="10 10" />
                        <path d="M 50 200 Q 200 100 350 200 T 650 200" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
                        <path d="M 800 300 Q 1000 400 1200 300" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
                    </svg>
                </div>

                <div className="relative z-10 text-center px-6">
                    <motion.span 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block py-1 px-3 rounded-full bg-[#F47E4D]/20 border border-[#F47E4D] text-[#F47E4D] text-sm font-semibold mb-4 backdrop-blur-md"
                    >
                        24/7 SUPPORT
                    </motion.span>
                    <motion.h1 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-4"
                    >
                        Get in Touch
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                    >
                        Have questions about a loan? We're here to help you achieve your financial goals. Reach out to us today.
                    </motion.p>
                </div>
            </section>

            {/* --- Main Content Area --- */}
            <div className="container mx-auto px-6 md:px-12 py-16 -mt-20 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* --- Left Column: Contact Info (4 Columns) --- */}
                    <motion.div 
                        className="lg:col-span-5 flex flex-col gap-6"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        {/* Info Card */}
                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 h-full">
                            <h2 className="text-2xl font-bold text-[#6D3078] mb-6 border-b border-slate-100 pb-4">
                                Contact Information
                            </h2>
                            
                            <div className="space-y-8">
                                {/* Registered Office */}
                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 bg-[#F3E8FF] rounded-xl text-[#6D3078] group-hover:bg-[#6D3078] group-hover:text-white transition-colors duration-300">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-800 text-lg">Registered Office</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed mt-1">
                                            A-156, Vidhyut Nagar-A, Ajmer Road,<br/> Jaipur - 302021
                                        </p>
                                    </div>
                                </div>

                                {/* Corporate Office */}
                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 bg-[#F3E8FF] rounded-xl text-[#6D3078] group-hover:bg-[#6D3078] group-hover:text-white transition-colors duration-300">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-800 text-lg">Corporate Office</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed mt-1">
                                            11/70 Madhyam Marg, Mansarovar,<br/> Jaipur - 302020
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 bg-[#F3E8FF] rounded-xl text-[#6D3078] group-hover:bg-[#6D3078] group-hover:text-white transition-colors duration-300">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-800 text-lg">Phone</h3>
                                        <p className="text-slate-500 text-sm mt-1">+91 8946 800600</p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 bg-[#F3E8FF] rounded-xl text-[#6D3078] group-hover:bg-[#6D3078] group-hover:text-white transition-colors duration-300">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-800 text-lg">Email</h3>
                                        <p className="text-slate-500 text-sm mt-1">info@maitrii.in</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* --- Right Column: Enquiry Form (8 Columns) --- */}
                    <motion.div 
                        className="lg:col-span-7"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl border border-slate-100">
                            <h2 className="text-3xl font-bold text-[#F47E4D] mb-2">Send us a Message</h2>
                            <p className="text-slate-500 mb-8">Fill in the form below and our team will get back to you shortly.</p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Name Input */}
                                    <div className="relative group">
                                        <User className="absolute left-4 top-3.5 text-slate-400 w-5 h-5 group-focus-within:text-[#F47E4D] transition-colors" />
                                        <input 
                                            type="text" 
                                            name="name"
                                            placeholder="Your Full Name" 
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full pl-12 pr-4 py-3 bg-[#F8FAFC] border border-slate-200 rounded-xl focus:outline-none focus:border-[#F47E4D] focus:ring-1 focus:ring-[#F47E4D] transition-all text-slate-700 placeholder-slate-400"
                                            required
                                        />
                                    </div>

                                    {/* Phone Input */}
                                    <div className="relative group">
                                        <Phone className="absolute left-4 top-3.5 text-slate-400 w-5 h-5 group-focus-within:text-[#F47E4D] transition-colors" />
                                        <input 
                                            type="tel" 
                                            name="phone"
                                            placeholder="Mobile Number" 
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full pl-12 pr-4 py-3 bg-[#F8FAFC] border border-slate-200 rounded-xl focus:outline-none focus:border-[#F47E4D] focus:ring-1 focus:ring-[#F47E4D] transition-all text-slate-700 placeholder-slate-400"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Email Input */}
                                    <div className="relative group">
                                        <Mail className="absolute left-4 top-3.5 text-slate-400 w-5 h-5 group-focus-within:text-[#F47E4D] transition-colors" />
                                        <input 
                                            type="email" 
                                            name="email"
                                            placeholder="Email Address" 
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full pl-12 pr-4 py-3 bg-[#F8FAFC] border border-slate-200 rounded-xl focus:outline-none focus:border-[#F47E4D] focus:ring-1 focus:ring-[#F47E4D] transition-all text-slate-700 placeholder-slate-400"
                                        />
                                    </div>

                                    {/* Loan Type Dropdown */}
                                    <div className="relative group">
                                        <Briefcase className="absolute left-4 top-3.5 text-slate-400 w-5 h-5 group-focus-within:text-[#F47E4D] transition-colors" />
                                        <select 
                                            name="loanType"
                                            value={formData.loanType}
                                            onChange={handleChange}
                                            className="w-full pl-12 pr-4 py-3 bg-[#F8FAFC] border border-slate-200 rounded-xl focus:outline-none focus:border-[#F47E4D] focus:ring-1 focus:ring-[#F47E4D] transition-all text-slate-700 appearance-none cursor-pointer"
                                        >
                                            <option value="" disabled>Select Loan Type</option>
                                            <option value="Personal Loan">Personal Loan</option>
                                            <option value="Business Loan">Business Loan</option>
                                            <option value="Vehicle Loan">Vehicle Loan</option>
                                            <option value="Mortgage Loan">Mortgage Loan (LAP)</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        {/* Custom Arrow */}
                                        <div className="absolute right-4 top-4 pointer-events-none">
                                            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Message Input */}
                                <div className="relative group">
                                    <MessageSquare className="absolute left-4 top-3.5 text-slate-400 w-5 h-5 group-focus-within:text-[#F47E4D] transition-colors" />
                                    <textarea 
                                        name="message"
                                        rows="4"
                                        placeholder="How can we help you?" 
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full pl-12 pr-4 py-3 bg-[#F8FAFC] border border-slate-200 rounded-xl focus:outline-none focus:border-[#F47E4D] focus:ring-1 focus:ring-[#F47E4D] transition-all text-slate-700 placeholder-slate-400 resize-none"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button 
                                    type="submit"
                                    className="w-full bg-[#6D3078] hover:bg-[#5a2565] text-white font-bold py-4 rounded-xl shadow-lg shadow-purple-900/20 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2"
                                >
                                    <span>Send Message</span>
                                    <Send size={18} />
                                </button>

                            </form>
                        </div>
                    </motion.div>

                </div>

                {/* --- Map Section (Full Width below) --- */}
                <motion.div 
                    className="mt-16 rounded-2xl overflow-hidden shadow-lg border border-slate-200 h-[300px] md:h-[400px] relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <iframe 
                        // Updated Map to point to 11/70 Madhyam Marg, Mansarovar, Jaipur
                        src="https://maps.google.com/maps?q=11%2F70%20Madhyam%20Marg%2C%20Mansarovar%2C%20Jaipur&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="grayscale hover:grayscale-0 transition-all duration-700"
                    ></iframe>
                    
                    {/* Overlay Label */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm text-xs font-bold text-[#6D3078] pointer-events-none">
                        11/70 Madhyam Marg, Mansarovar
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default ContactUs;