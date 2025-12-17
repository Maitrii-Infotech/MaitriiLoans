'use client';

import React from 'react';
import { motion } from 'framer-motion';

const GrievanceHero = () => {
    return (
        <div className="relative w-full h-[500px] overflow-hidden bg-white mb-20 shadow-sm">
            {/* Background SVGs */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <svg viewBox="0 0 1440 500" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    {/* 1. Base Gradient Background */}
                    <rect width="1440" height="500" fill="url(#bgGradient)" />
                    <defs>
                        <linearGradient id="bgGradient" x1="0" y1="0" x2="1440" y2="500" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#FFFFFF" />
                            <stop offset="100%" stopColor="#F3E8FF" />
                        </linearGradient>
                    </defs>

                
                    <g>
                   
                        <circle cx="1440" cy="250" r="400" fill="url(#orbGradient)" opacity="0.3" />
                        <defs>
                            <radialGradient id="orbGradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1440 250) rotate(90) scale(400)">
                                <stop stopColor="#F47E4D" />
                                <stop offset="1" stopColor="#F47E4D" stopOpacity="0" />
                            </radialGradient>
                        </defs>

                        {/* Geometric Composition extending from right */}
                        <path d="M1100 0 L 1440 0 V 500 H 1000 L 1100 0 Z" fill="#6D3078" fillOpacity="0.05" />
                        <rect x="1250" y="50" width="300" height="400" rx="20" stroke="#6D3078" strokeWidth="2" strokeOpacity="0.1" fill="none" transform="rotate(10 1400 250)" />
                        
                        {/* Dynamic Shape hitting the edge */}
                        <path d="M1200 500 C 1300 400 1440 450 1440 300 V 500 H 1200 Z" fill="#F47E4D" fillOpacity="0.1" />

                        {/* Connected Drops/Nodes */}
                        <circle cx="1150" cy="150" r="8" fill="#6D3078" />
                        <circle cx="1250" cy="350" r="12" fill="#F47E4D" />
                        <line x1="1150" y1="150" x2="1250" y2="350" stroke="#6D3078" strokeWidth="2" strokeOpacity="0.2" strokeDasharray="5 5" />
                    </g>
                    
                    {/* 3. Left Side Subtle Accents */}
                    <circle cx="0" cy="500" r="300" stroke="#6D3078" strokeWidth="40" strokeOpacity="0.02" fill="none" />

                </svg>
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-6 md:px-12 h-full flex flex-col justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Text Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-purple-100 shadow-sm mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#F47E4D] animate-pulse"></span>
                            <span className="text-xs font-bold tracking-wider text-[#6D3078] uppercase">Customer First Policy</span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D3748] leading-tight mb-6">
                            We're Here to <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D3078] to-[#F47E4D]">
                                Listen & Resolve
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg border-l-4 border-[#F47E4D] pl-6">
                            Your satisfaction is our priority. Explore our transparent grievance redressal mechanism designed to address your concerns promptly.
                        </p>

                        {/* CTA / Info */}
                        <div className="flex flex-wrap items-center gap-8">
                            <div>
                                <p className="text-sm text-slate-400 font-semibold uppercase tracking-wider mb-1">Response Time</p>
                                <p className="text-2xl font-bold text-[#6D3078]">24 - 48 Hrs</p>
                            </div>
                            <div className="w-px h-12 bg-slate-200 hidden sm:block"></div>
                            
                        </div>

                    </motion.div>

                    {/* Dynamic Illustration / Abstract Column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                         animate={{ opacity: 1, scale: 1 }}
                         transition={{ duration: 0.8, delay: 0.2 }}
                         className="hidden lg:flex justify-center items-center relative"
                    >
                     
                    </motion.div>

                </div>
            </div>
            
             {/* Bottom Fade to White/Page BG */}
             <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none"></div>
        </div>
    );
};

export default GrievanceHero;
