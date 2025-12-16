'use client';

import React from 'react';

const BusinessLoanHeroGraphic = () => {
    return (
        <svg
            viewBox="0 0 600 500"
            className="w-full h-full drop-shadow-md"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* --- Central Element: Laptop with Growth Chart --- */}
            <g transform="translate(100, 80)">
                {/* Laptop Base (Keyboard area) */}
                <path d="M 0 280 L 400 280 L 440 310 L -40 310 Z" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1" />
                <rect x="0" y="280" width="400" height="10" fill="#CBD5E1" />

                {/* Laptop Screen Frame */}
                <rect x="20" y="20" width="360" height="260" rx="15" fill="#1E293B" />

                {/* Laptop Screen Content (White area) */}
                <rect x="35" y="35" width="330" height="230" fill="white" />

                {/* Screen Chart: Bar Graph representing Growth */}
                <g transform="translate(60, 230) scale(1, -1)">
                    <rect x="0" y="0" width="40" height="60" rx="4" fill="#F47E4D" opacity="0.4" />
                    <rect x="60" y="0" width="40" height="90" rx="4" fill="#F47E4D" opacity="0.6" />
                    <rect x="120" y="0" width="40" height="140" rx="4" fill="#F47E4D" opacity="0.8" />
                    <rect x="180" y="0" width="40" height="110" rx="4" fill="#6D3078" opacity="0.5" />
                    {/* The Big Growth Bar */}
                    <rect x="240" y="0" width="40" height="180" rx="4" fill="#6D3078" />
                </g>

                {/* Trend Line */}
                <path d="M 70 160 L 130 130 L 190 80 L 250 100 L 310 40" stroke="#F47E4D" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <circle cx="310" cy="40" r="5" fill="#F47E4D" />
            </g>

            {/* --- Floating Icons representing Business Needs --- */}

            {/* Icon 1: Rocket (Startup/Launch) - Top Left */}
            <g transform="translate(50, 60)">
                <circle cx="40" cy="40" r="45" fill="white" filter="url(#shadow)" />
                {/* Rocket Body */}
                <path d="M40 15 C 40 15, 25 40, 25 55 A 15 15 0 0 0 55 55 C 55 40, 40 15, 40 15 Z" fill="#6D3078" />
                <path d="M40 15 C 40 15, 30 40, 40 40 C 50 40, 40 15, 40 15" fill="#A855F7" opacity="0.5" />
                {/* Window */}
                <circle cx="40" cy="40" r="6" fill="white" />
                {/* Flames */}
                <path d="M 32 60 L 40 75 L 48 60" fill="#F47E4D" />
            </g>

            {/* Icon 2: Briefcase (Professional) - Top Right */}
            <g transform="translate(460, 100)">
                <circle cx="40" cy="40" r="40" fill="white" filter="url(#shadow)" />
                {/* Handle */}
                <path d="M 30 25 L 30 20 C 30 18, 32 16, 35 16 L 45 16 C 48 16, 50 18, 50 20 L 50 25" stroke="#F47E4D" strokeWidth="3" fill="none" />
                {/* Case Body */}
                <rect x="20" y="25" width="40" height="30" rx="4" fill="#F47E4D" />
                <rect x="20" y="25" width="40" height="8" fill="#FDBA74" opacity="0.5" />
            </g>

            {/* Icon 3: Gear (Operations/Equipment) - Bottom Right */}
            <g transform="translate(420, 320)">
                <circle cx="40" cy="40" r="45" fill="white" filter="url(#shadow)" />
                {/* Gear Shape */}
                <path d="M40 20 L 44 20 L 46 26 C 48 27, 50 28, 51 29 L 57 27 L 60 30 L 58 36 C 59 38, 59 40, 59 42 L 65 44 L 65 48 L 59 50 C 59 52, 58 54, 57 56 L 60 62 L 56 65 L 50 63 C 48 64, 46 65, 44 66 L 42 72 L 38 72 L 36 66 C 34 65, 32 64, 30 63 L 24 65 L 20 62 L 23 56 C 22 54, 21 52, 21 50 L 15 48 L 15 44 L 21 42 C 21 40, 22 38, 23 36 L 20 30 L 23 27 L 29 29 C 30 28, 32 27, 34 26 L 36 20 Z" fill="#6D3078" stroke="#6D3078" strokeWidth="2" strokeLinejoin="round" />
                <circle cx="40" cy="46" r="10" fill="white" />
            </g>

            {/* --- Decorative Elements --- */}
            {/* Connecting Lines */}
            <path d="M 95 90 Q 150 120 180 150" stroke="#6D3078" strokeWidth="2" strokeDasharray="6 6" opacity="0.3" />
            <path d="M 460 140 Q 420 180 380 160" stroke="#F47E4D" strokeWidth="2" strokeDasharray="6 6" opacity="0.3" />
            <path d="M 420 340 Q 350 340 300 300" stroke="#F47E4D" strokeWidth="2" strokeDasharray="6 6" opacity="0.3" />

            {/* Definitions for Shadow */}
            <defs>
                <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#64748b" floodOpacity="0.15" />
                </filter>
            </defs>
        </svg>
    );
};

export default BusinessLoanHeroGraphic;
