'use client';

import React from 'react';
import ProductPageTemplate from '@/components/ProductPageTemplate';
import VehicleLoanHeroGraphic from './VehicleLoanHeroGraphic';
import { UserCheck, MapPin, Banknote, Briefcase, Car, FileText, Camera } from 'lucide-react';

const VehicleLoan = () => {
    // --- Hero Data ---
    const heroData = {
        title: "Vehicle Loan",
        description: "Drive home your dream car today. Whether it's a new family car or a commercial vehicle for your business, we speed up your journey.",
        Graphic: VehicleLoanHeroGraphic
    };

    // --- Info Data ---
    const infoData = {
        imageSrc: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        subtitle: "Drive Your Dreams",
        title: "VEHICLE LOAN",
        intro: "\"Stop dreaming and start driving. Whether it's for your family's comfort or your business's logistics, we fuel your journey forward.\"",
        description: "Maitrii Loans offers comprehensive vehicle financing solutions. From hatchbacks to SUVs and commercial trucks, get on the road faster with our quick processing and minimal documentation.",
        faqs: [
            {
                question: "What is a Vehicle Loan?",
                answer: "A Vehicle Loan from Maitrii Loans brings you one step closer to your dream car or the commercial vehicle needed for your business. We provide financing for both new and used vehicles with attractive interest rates and up to 100% funding on the on-road price for select models."
            },
            {
                question: "What is the repayment tenure?",
                answer: "We offer highly flexible repayment tenures ranging from 12 months to 84 months (7 years). You can choose a tenure that suits your monthly budget and repayment capacity."
            },
            {
                question: "Do I need to provide collateral?",
                answer: "Generally, the vehicle you purchase acts as the security (hypothecation) for the loan. In most cases, no additional collateral or guarantor is required, making the process smooth and hassle-free."
            },
            {
                question: "Who can apply for a Vehicle Loan?",
                answer: "Salaried individuals, self-employed professionals, proprietors, and partnership firms with a stable income source can apply. Detailed eligibility depends on factors like income, age, and employment stability."
            }
        ]
    };

    // --- Documents Data ---
    const documentsData = [
        {
            title: "Identity Proof",
            desc: "PAN Card, Aadhaar Card, Passport, Voter ID, or Driving License.",
            icon: <UserCheck className="w-6 h-6" />
        },
        {
            title: "Address Proof",
            desc: "Electricity Bill, Ration Card, Passport, or Bank Statement.",
            icon: <MapPin className="w-6 h-6" />
        },
        {
            title: "Income Proof (Salaried)",
            desc: "Latest 3 months salary slips and Form 16.",
            icon: <Banknote className="w-6 h-6" />
        },
        {
            title: "Income Proof (Self-Employed)",
            desc: "Latest 2 years ITR with computation of income, P&L, and Balance Sheet.",
            icon: <Briefcase className="w-6 h-6" />
        },
        {
            title: "Bank Statements",
            desc: "Last 6 months bank statements showing salary credit or business transactions.",
            icon: <FileText className="w-6 h-6" />
        },
        {
            title: "Vehicle Documents (New Car)",
            desc: "Proforma Invoice (Quotation) from the dealer.",
            icon: <Car className="w-6 h-6" />
        },
        {
            title: "Vehicle Documents (Used/Refinance)",
            desc: "RC Copy, Insurance Copy, and Pollution Certificate.",
            icon: <Car className="w-6 h-6" />
        },
        {
            title: "Photographs",
            desc: "Recent passport-size photographs of the applicant and co-applicant.",
            icon: <Camera className="w-6 h-6" />
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

export default VehicleLoan;