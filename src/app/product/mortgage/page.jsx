'use client';

import React from 'react';
import ProductPageTemplate from '@/components/ProductPageTemplate';
import MortgageLoanHeroGraphic from './MortgageLoanHeroGraphic';
import { UserCheck, MapPin, Banknote, Briefcase, Calculator, FileCheck, GraduationCap, FileText, Calendar, Home, FileSpreadsheet } from 'lucide-react';

const MortgageLoan = () => {
    // --- Hero Data ---
    const heroData = {
        title: "MORTGAGE LOAN",
        description: "Unlock the hidden value of your property. Get high-value loans at attractive interest rates for business expansion, weddings, or medical emergencies.",
        Graphic: MortgageLoanHeroGraphic
    };

    // --- Info Data ---
    const infoData = {
        imageSrc: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        subtitle: "Unlock Your Value",
        title: "MORTGAGE LOAN",
        intro: "\"Your property is more than just a home or office; it's a financial asset waiting to fuel your next big dream.\"",
        description: "Maitrii Loans offers Mortgage Loans (Loan Against Property) to help you leverage the value of your real estate. Whether for business growth or personal needs, get high-value loans with attractive interest rates and flexible tenures.",
        faqs: [
            {
                question: "What is Mortgage Loan?",
                answer: "It is a loan offered to individuals, firms, or companies based on their existing property. Typically the purpose of the loan is – Business expansion, Debt consolidation, etc. Mortgage Loan helps you unlock the hidden equity in your property holdings. You can borrow money using property as collateral and repay in EMIs over time. This allows you to hold on to your property and at the same time, raise funds."
            },
            {
                question: "For what purpose can I take Mortgage Loan?",
                answer: "You can utilize a Mortgage Loan for various personal or business needs such as expanding your business, funding a child's higher education, managing wedding expenses, medical emergencies, or even for debt consolidation. The end-use of the funds is flexible."
            },
            {
                question: "Will I be required to provide collateral for Mortgage Loan?",
                answer: "Yes, since this is a secured loan, your property acts as the collateral. You can mortgage residential, commercial, or industrial properties to avail of this loan. However, you continue to retain ownership and can use the property while you repay the loan."
            },
            {
                question: "I have a question regarding something that is not listed here, what should I do?",
                answer: "We understand you might have specific queries. Please feel free to reach out to our customer support team directly via our website's 'Contact Us' page, or call our helpline number. Our executives will be happy to assist you with personalized guidance regarding your loan application."
            }
        ]
    };

    // --- Documents Data ---
    const documentsData = [
        {
            title: "Identity proof",
            desc: "", // Optional description if empty in source
            icon: <UserCheck className="w-6 h-6" />
        },
        {
            title: "Address proof",
            desc: "",
            icon: <MapPin className="w-6 h-6" />
        },
        {
            title: "Income proof",
            desc: "",
            icon: <Banknote className="w-6 h-6" />
        },
        {
            title: "Proof of educational qualifications (where applicable)",
            desc: "",
            icon: <GraduationCap className="w-6 h-6" />
        },
        {
            title: "Income tax returns, Balance Sheet and Profit and Loss Account Statement for past 2 years.",
            desc: "",
            icon: <FileSpreadsheet className="w-6 h-6" />
        },
        {
            title: "Age proof",
            desc: "",
            icon: <Calendar className="w-6 h-6" />
        },
        {
            title: "Employment details",
            desc: "",
            icon: <Briefcase className="w-6 h-6" />
        },
        {
            title: "Bank statements",
            desc: "",
            icon: <FileText className="w-6 h-6" />
        },
        {
            title: "Details about the property that is to be mortgaged",
            desc: "",
            icon: <Home className="w-6 h-6" />
        },
        {
            title: "Bank Statements for the past 6 months",
            desc: "",
            icon: <FileText className="w-6 h-6" />
        }
    ];

    return (
        <ProductPageTemplate
            hero={heroData}
            info={infoData}
            documents={documentsData}
        />
    );
};

export default MortgageLoan;