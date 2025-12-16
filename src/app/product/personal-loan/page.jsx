'use client';

import React from 'react';
import ProductPageTemplate from '@/components/ProductPageTemplate';
import PersonalLoanHeroGraphic from './PersonalLoanHeroGraphic';
import { UserCheck, MapPin, Banknote, Briefcase, Car } from 'lucide-react';

const PersonalLoan = () => {
    // --- Hero Data ---
    const heroData = {
        title: "PERSONAL LOAN",
        description: "We provide Personal Loan for a variety of reasons: education, vacations, home renovation, or even medical needs.",
        Graphic: PersonalLoanHeroGraphic
    };

    // --- Info Data ---
    const infoData = {
        imageSrc: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        subtitle: "Dreams & Aspirations",
        title: "PERSONAL LOAN",
        intro: "\"If you don't have a perfect credit score or the time to wait for a long process, a traditional bank might not be your best option, but we are.\"",
        description: "Whether it's a medical emergency, a wedding, or a dream vacation, Maitrii Loans is here to support you. We offer quick, hassle-free Personal Loans tailored to meet your financial needs without the stress of collateral.",
        faqs: [
            {
                question: "What is a Personal Loan?",
                answer: "A Personal Loan from Maitrii Loans helps you borrow for expenditures of a personal nature - whether you want funds for a medical emergency, higher education, a dream vacation, home renovation, or a wedding in the family. You can avail loans ranging from Rs. 1 Lakh to Rs. 5 Lakh with flexible tenures ranging between 6 months and 3 years."
            },
            {
                question: "Do I need to provide any security or collateral?",
                answer: "No, Personal Loans are unsecured loans. They are not backed by any collateral or security. They are disbursed at the discretion of Maitrii Loans based on the creditworthiness and income stability of the borrower."
            },
            {
                question: "Who can apply for a Personal Loan?",
                answer: "Maitrii Loans provides Personal Loans for both self-employed and salaried individuals. To determine eligibility, we look at parameters such as your credit score, age, and existing liabilities to ascertain your repayment capacity."
            },
            {
                question: "I have a question regarding something not listed here?",
                answer: "We will be glad to help you with any questions regarding Personal Loans from Maitrii Loans. Please feel free to reach out to our customer support team via our website's contact page for personalized assistance."
            }
        ]
    };

    // --- Documents Data ---
    // Note: The original file had Business Loan documents listed. 
    // I am preserving that data as per the original file content.
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
            desc: "For Salaried Individuals: Last 3 months’/6 months’ bank statement (dependent on scheme) showing salary credits, Latest Salary Slip. For Self-Employed Individuals: 2 years’ ITR, P&L and Balance Sheet for the last 2 years, Last 6 Months’ Bank Statement.",
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
            // Personal Page didn't have WhyChooseUs in the provided files
        />
    );
};

export default PersonalLoan;