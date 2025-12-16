'use client';

import React from 'react';

const HomeLoanHeroGraphic = () => {
    return (
        <svg
            viewBox="0 0 600 500"
            className="w-full h-full drop-shadow-md"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
             <defs>
                <filter id="shadowHL" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#6D3078" floodOpacity="0.2" />
                </filter>
                 <linearGradient id="gradHome" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#F47E4D" />
                    <stop offset="100%" stopColor="#F8FAFC" />
                </linearGradient>
            </defs>

            {/* --- Background Blob --- */}
            <circle cx="300" cy="250" r="180" fill="#F3E8FF" />

            {/* --- House Illustration --- */}
            <g transform="translate(150, 150)" filter="url(#shadowHL)">
                {/* Main Body */}
                <rect x="50" y="100" width="200" height="150" fill="white" stroke="#6D3078" strokeWidth="2" rx="4" />
                {/* Roof */}
                <path d="M 40 100 L 150 20 L 260 100" fill="#6D3078" stroke="#6D3078" strokeWidth="2" strokeLinejoin="round" />
                
                {/* Door */}
                <rect x="130" y="170" width="40" height="80" fill="#F47E4D" />
                {/* Window */}
                <rect x="80" y="130" width="30" height="30" fill="#CBD5E1" stroke="#6D3078" />
                <rect x="190" y="130" width="30" height="30" fill="#CBD5E1" stroke="#6D3078" />

                {/* Chimney */}
                <rect x="210" y="50" width="20" height="40" fill="#F47E4D" stroke="#6D3078" />
            </g>

            {/* --- Elements: Keys, Percentage --- */}
            <g transform="translate(400, 100)">
                 <circle cx="0" cy="0" r="30" fill="white" filter="url(#shadowHL)" />
                 <text x="0" y="5" textAnchor="middle" fill="#6D3078" fontSize="20" fontWeight="bold">%</text>
            </g>

             <g transform="translate(100, 350)">
                 <circle cx="0" cy="0" r="40" fill="white" filter="url(#shadowHL)" />
                 {/* Key Icon */}
                 <path d="M -10 10 L 10 -10 M 5 -15 A 10 10 0 1 1 -5 -5 L -15 5" stroke="#F47E4D" strokeWidth="3" strokeLinecap="round" />
            </g>

        </svg>
    );
};

export default HomeLoanHeroGraphic;
