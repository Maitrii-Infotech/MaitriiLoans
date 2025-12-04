'use client';

import React from 'react';
import { motion } from 'framer-motion';

const MortgageLoanHero = () => {
    return (
        <section className="w-full min-h-[500px] bg-[#F8FAFC] flex items-center justify-center overflow-hidden relative">
            {/* Subtle background shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-5%] w-[300px] h-[300px] rounded-full bg-[#6D3078] opacity-[0.03] blur-3xl"></div>
                <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-[#F47E4D] opacity-[0.04] blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* --- Left Side: Text --- */}
                <motion.div
                    className="flex flex-col gap-4 max-w-lg"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#F47E4D]">
                        MORTGAGE LOAN
                    </h2>
                    <p className="text-lg text-[#6D3078] leading-relaxed font-medium">
                        Unlock the hidden value of your property. Get high-value loans at attractive interest rates for business expansion, weddings, or medical emergencies.
                    </p>
                    <div className="mt-6">
                        <button className="px-8 py-3 bg-[#F47E4D] text-white rounded-full font-semibold hover:bg-[#e06d3d] transition-all shadow-lg shadow-orange-200">
                            Apply Against Property
                        </button>
                    </div>
                </motion.div>

                {/* --- Right Side: Custom SVG for Mortgage Loan --- */}
                <motion.div
                    className="relative w-full h-[350px] md:h-[450px] flex items-center justify-center"
                    initial={{ opacity: 0, x: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <svg
                        viewBox="0 0 600 500"
                        className="w-full h-full drop-shadow-md"
                        preserveAspectRatio="xMidYMid meet"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {/* --- Central Element: House (Property) --- */}
                        <g transform="translate(150, 80)">
                            {/* House Body */}
                            <path d="M 50 120 L 50 250 L 250 250 L 250 120" fill="white" stroke="#6D3078" strokeWidth="3" />
                            {/* Roof */}
                            <path d="M 20 120 L 150 20 L 280 120" fill="#F47E4D" stroke="#F47E4D" strokeWidth="3" strokeLinejoin="round" />
                            {/* Door */}
                            <rect x="120" y="160" width="60" height="90" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="2" />
                            <circle cx="170" cy="205" r="3" fill="#64748B" />

                            {/* Windows */}
                            <rect x="70" y="150" width="40" height="40" fill="#E2E8F0" stroke="#6D3078" strokeWidth="2" />
                            <line x1="90" y1="150" x2="90" y2="190" stroke="#6D3078" strokeWidth="2" />
                            <line x1="70" y1="170" x2="110" y2="170" stroke="#6D3078" strokeWidth="2" />

                            <rect x="190" y="150" width="40" height="40" fill="#E2E8F0" stroke="#6D3078" strokeWidth="2" />
                            <line x1="210" y1="150" x2="210" y2="190" stroke="#6D3078" strokeWidth="2" />
                            <line x1="190" y1="170" x2="230" y2="170" stroke="#6D3078" strokeWidth="2" />

                            {/* Rupee Symbol inside Roof area or floating above */}
                            <circle cx="150" cy="70" r="25" fill="white" stroke="#F47E4D" strokeWidth="2" />
                            <text x="150" y="80" textAnchor="middle" fill="#F47E4D" fontSize="24" fontWeight="bold">₹</text>
                        </g>

                        {/* --- Floating Icons representing Mortgage Features --- */}

                        {/* Icon 1: Keys (Ownership/Possession) - Left Side */}
                        <g transform="translate(60, 200)">
                            <circle cx="40" cy="40" r="45" fill="white" filter="url(#shadow)" />
                            {/* Key Shape */}
                            <path d="M 55 25 C 65 25, 70 35, 65 45 C 60 55, 45 50, 45 50 L 25 70 L 20 65 L 25 60 L 20 55 L 40 35 C 40 35, 45 25, 55 25 Z" fill="#6D3078" />
                            <circle cx="60" cy="35" r="3" fill="white" />
                        </g>

                        {/* Icon 2: Percentage (Low Interest) - Top Right */}
                        <g transform="translate(420, 100)">
                            <circle cx="40" cy="40" r="40" fill="white" filter="url(#shadow)" />
                            {/* % Symbol */}
                            <text x="40" y="55" textAnchor="middle" fill="#F47E4D" fontSize="40" fontWeight="bold">%</text>
                        </g>

                        {/* Icon 3: Document (Deed/Agreement) - Bottom Right */}
                        <g transform="translate(400, 300)">
                            <circle cx="40" cy="40" r="45" fill="white" filter="url(#shadow)" />
                            {/* Document Icon */}
                            <rect x="25" y="20" width="30" height="40" fill="white" stroke="#6D3078" strokeWidth="2" />
                            <line x1="30" y1="30" x2="50" y2="30" stroke="#6D3078" strokeWidth="2" />
                            <line x1="30" y1="38" x2="50" y2="38" stroke="#6D3078" strokeWidth="2" />
                            <line x1="30" y1="46" x2="45" y2="46" stroke="#6D3078" strokeWidth="2" />
                            {/* Checkmark seal */}
                            <circle cx="50" cy="55" r="10" fill="#F47E4D" />
                            <path d="M 46 55 L 49 58 L 54 52" stroke="white" strokeWidth="2" fill="none" />
                        </g>

                        {/* --- Decorative Elements --- */}
                        {/* Connecting Lines */}
                        <path d="M 100 240 Q 130 200 160 200" stroke="#6D3078" strokeWidth="2" strokeDasharray="5 5" opacity="0.3" />
                        <path d="M 420 140 Q 380 140 350 160" stroke="#F47E4D" strokeWidth="2" strokeDasharray="5 5" opacity="0.3" />
                        <path d="M 380 320 Q 350 320 300 250" stroke="#6D3078" strokeWidth="2" strokeDasharray="5 5" opacity="0.3" />

                        {/* Ground/Base */}
                        <ellipse cx="300" cy="420" rx="150" ry="15" fill="#6D3078" opacity="0.1" />

                        {/* Definitions for Shadow */}
                        <defs>
                            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                                <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#64748b" floodOpacity="0.15" />
                            </filter>
                        </defs>
                    </svg>
                </motion.div>
            </div>
        </section>
    );
};

export default MortgageLoanHero;