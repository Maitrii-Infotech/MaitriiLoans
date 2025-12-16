'use client';

import React from 'react';

const PersonalLoanHeroGraphic = () => {
    return (
        <svg
            viewBox="0 0 600 500"
            className="w-full h-full drop-shadow-md"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* --- Central Phone/App Device --- */}
            <g transform="translate(200, 60)">
                {/* Device Body */}
                <rect x="0" y="0" width="200" height="380" rx="25" fill="white" stroke="#64748B" strokeWidth="2" />
                <rect x="10" y="10" width="180" height="360" rx="18" fill="#F8FAFC" />

                {/* App Header */}
                <path d="M 10 28 A 18 18 0 0 1 28 10 L 172 10 A 18 18 0 0 1 190 28 L 190 80 L 10 80 Z" fill="#6D3078" />
                <circle cx="100" cy="50" r="25" fill="white" opacity="0.2" />
                <text x="100" y="58" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">₹</text>

                {/* App Content: Approval Card */}
                <rect x="25" y="100" width="150" height="100" rx="10" fill="white" stroke="#E2E8F0" />
                <text x="100" y="130" textAnchor="middle" fill="#64748B" fontSize="12">Eligible Amount</text>
                <text x="100" y="155" textAnchor="middle" fill="#F47E4D" fontSize="22" fontWeight="bold">₹ 5,00,000</text>
                <rect x="40" y="170" width="120" height="6" rx="3" fill="#E2E8F0" />
                <rect x="40" y="170" width="80" height="6" rx="3" fill="#F47E4D" />

                {/* App Content: Button */}
                <rect x="40" y="310" width="120" height="30" rx="15" fill="#F47E4D" />
                <text x="100" y="330" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Get Money</text>
            </g>

            {/* --- Floating Icons representing Needs (Personal Loan Usage) --- */}

            {/* Icon 1: Vacation/Travel (Plane) - Top Left */}
            <g transform="translate(80, 100)">
                <circle cx="40" cy="40" r="40" fill="white" filter="url(#shadow)" />
                <circle cx="40" cy="40" r="38" fill="white" stroke="#F47E4D" strokeWidth="2" strokeDasharray="4 4" />
                {/* Simple Plane Icon */}
                <path d="M25 45 L 35 35 L 30 20 L 50 30 L 60 25 L 45 45 L 45 55 L 35 45 Z" fill="#F47E4D" />
            </g>

            {/* Icon 2: Education (Book/Cap) - Right Middle */}
            <g transform="translate(450, 200)">
                <circle cx="35" cy="35" r="35" fill="white" filter="url(#shadow)" />
                {/* Book Icon */}
                <path d="M20 20 C 20 20, 35 25, 35 45 C 35 25, 50 20, 50 20 V 45 C 50 45, 35 50, 35 60 C 35 50, 20 45, 20 45 Z" fill="none" stroke="#6D3078" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </g>

            {/* Icon 3: Medical (Cross/Heart) - Bottom Left */}
            <g transform="translate(100, 320)">
                <circle cx="30" cy="30" r="30" fill="white" filter="url(#shadow)" />
                {/* Medical Cross */}
                <rect x="25" y="15" width="10" height="30" rx="2" fill="#F47E4D" />
                <rect x="15" y="25" width="30" height="10" rx="2" fill="#F47E4D" />
            </g>

            {/* --- Decorative Elements --- */}
            {/* Connecting Dotted Lines */}
            <path d="M 120 140 Q 180 140 200 120" stroke="#F47E4D" strokeWidth="2" strokeDasharray="5 5" opacity="0.4" />
            <path d="M 450 235 Q 400 235 380 200" stroke="#6D3078" strokeWidth="2" strokeDasharray="5 5" opacity="0.4" />
            <path d="M 160 350 Q 200 350 220 380" stroke="#F47E4D" strokeWidth="2" strokeDasharray="5 5" opacity="0.4" />

            {/* Hand Holding the Phone (Abstract) */}
            <path d="M 280 440 C 280 440, 300 380, 400 380" stroke="#6D3078" strokeWidth="20" strokeLinecap="round" opacity="0.1" />

            {/* Definitions for Shadow */}
            <defs>
                <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#64748b" floodOpacity="0.15" />
                </filter>
            </defs>
        </svg>
    );
};

export default PersonalLoanHeroGraphic;
