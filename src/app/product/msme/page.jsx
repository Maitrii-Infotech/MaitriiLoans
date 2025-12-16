'use client';

import React from 'react';
import ProductPageTemplate from '@/components/ProductPageTemplate';
import WhyChooseUs from '../business-loan/whyChooseus'; 
import { Briefcase, BarChart, FileText, Settings } from 'lucide-react';

const MSMELoanHeroGraphic = () => {
    return (
        <svg viewBox="0 0 600 500" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="300" cy="250" r="180" fill="#F3E8FF" />
            <g transform="translate(180, 150)">
                 <rect x="0" y="40" width="80" height="120" fill="white" stroke="#6D3078" strokeWidth="2" />
                 <rect x="90" y="0" width="120" height="160" fill="white" stroke="#F47E4D" strokeWidth="2" />
                 <rect x="220" y="60" width="60" height="100" fill="white" stroke="#6D3078" strokeWidth="2" />
            </g>
        </svg>
    )
}

const MSMELoan = () => {
    const heroData = {
        title: "MSME Loan",
        description: "Empowering Micro, Small, and Medium Enterprises with financial solutions designed to boost growth and operational efficiency.",
        Graphic: MSMELoanHeroGraphic
    };

    const infoData = {
        imageSrc: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        subtitle: "Growth Engine",
        title: "MSME LOAN",
        intro: "Fueling the backbone of the economy.",
        description: "Our MSME loans provide the capital you need for equipment purchase, working capital, or business expansion. We offer competitive rates and flexible collateral options.",
        faqs: [
            { question: "What is the maximum loan amount?", answer: "Depends on your turnover and collateral." },
            { question: "Is collateral required?", answer: "We offer both secured and unsecured options." },
        ]
    };

    const documentsData = [
         { title: "Registration Proof", desc: "Udyam Registration", icon: <FileText className="w-6 h-6" /> },
         { title: "Financials", desc: "Balance Sheet, P&L", icon: <BarChart className="w-6 h-6" /> },
    ];

    return (
        <ProductPageTemplate hero={heroData} info={infoData} documents={documentsData} whyChooseUs={<WhyChooseUs />} />
    );
};

export default MSMELoan;
