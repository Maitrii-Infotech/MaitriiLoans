'use client';

import React from 'react';
import ProductPageTemplate from '@/components/ProductPageTemplate';
import BusinessLoanHeroGraphic from './BusinessLoanHeroGraphic';
import WhyChooseUs from './whyChooseus';
import { UserCheck, MapPin, Banknote, Briefcase, Car } from 'lucide-react';

const BusinessLoan = () => {
    // --- Hero Data ---
    const heroData = {
        title: "Business Loan",
        description: "Expand your horizons with our Business Loans. Whether for equipment, inventory, or expansion, we fuel your growth journey.",
        Graphic: BusinessLoanHeroGraphic
    };

    // --- Info Data ---
    const infoData = {
        imageSrc: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        subtitle: "Growth & Support",
        title: "BUSINESS LOAN",
        intro: "If you don't have a perfect credit score or the time to wait for a mortgage loan to process, a bank might not be your best option but we are.",
        description: "We provide Business Loans to a wide variety of MSME/SMEs ranging from sole proprietors to institutions. You can avail loans ranging from Rs. 1 Lakh to Rs. 50 Lakh with flexible tenures designed to match your business cycle.",
        faqs: [
            {
                question: "What is a Business Loan?",
                answer: "A Business Loan, also known as a commercial loan, is useful for expanding your business. We extend this loan to existing firms and companies to help them through various phases of expansion, providing funds for inventory, equipment, or working capital."
            },
            {
                question: "Need for Business Loan?",
                answer: "Business loans are essential for maintaining cash flow, purchasing new machinery, expanding operations to new locations, stocking up inventory, or even marketing and advertising to grow your customer base."
            },
            {
                question: "Who can apply for a Business Loan?",
                answer: "Self-employed individuals, proprietors, private limited companies, and partnership firms involved in manufacturing, trading, or services with a vintage of at least 2 years can apply."
            },
            {
                question: "I have a question not listed here?",
                answer: "You can reach out to our customer support team directly via our contact page or call our helpline number for personalized assistance regarding your loan queries."
            }
        ]
    };

    // --- Documents Data ---
    const documentsData = [
        {
            title: "Photo Identity Proof",
            desc: "Passport, PAN Card, Voter’s Identity Card, Driving License, Aadhaar Card.",
            icon: <UserCheck className="w-6 h-6" />
        },
        {
            title: "Address Proof",
            desc: "Ration Card, Passport, Driving License, Bank A/C Statement, Electricity/Telephone Bill, Aadhaar Card, Sale Deed/ Property Purchase Agreement (For Owned Properties).",
            icon: <MapPin className="w-6 h-6" />
        },
        {
            title: "Income Proof",
            desc: "For Salaried: Last 3-6 months’ bank statement showing salary credits, Latest Salary Slip. For Self-Employed: 2 years’ ITR, P&L and Balance Sheet, Last 6 Months’ Bank Statement.",
            icon: <Banknote className="w-6 h-6" />
        },
        {
            title: "Business Proof",
            desc: "Qualification Certificate/Certificate Of Practice (COP), Shop Act License/ MOA, AOA/ Sales Tax/ Vat Registration/ Partnership Deed.",
            icon: <Briefcase className="w-6 h-6" />
        },
        {
            title: "Vehicle Proof",
            desc: "Registration Certificate (RC), Vehicle Insurance Certificate, Pollution Under Control (PUC) Certificate, Road Tax Receipt, Chassis Number Imprint.",
            icon: <Car className="w-6 h-6" />
        }
    ];

    return (
        <ProductPageTemplate
            hero={heroData}
            info={infoData}
            documents={documentsData}
            whyChooseUs={<WhyChooseUs />}
        />
    );
};

export default BusinessLoan;