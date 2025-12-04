'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, MapPin, Banknote, Briefcase, Calculator, FileCheck, Car } from 'lucide-react';

const DocumentsRequired = () => {

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    // Document Data (Updated as per your request)
    const documents = [
        {
            title: "Photo Identity Proof",
            desc: "Passport, PAN Card, Voter’s Identity Card, Driving License, Aadhaar Card.",
            icon: <UserCheck className="w-8 h-8 text-[#F47E4D]" />
        },
        {
            title: "Address Proof",
            desc: "Ration Card, Passport, Driving License, Bank A/C Statement, Electricity/Telephone Bill, Aadhaar Card, Sale Deed/ Property Purchase Agreement (For Owned Properties).",
            icon: <MapPin className="w-8 h-8 text-[#F47E4D]" />
        },
        {
            title: "Income Proof",
            desc: "For Salaried: Last 3-6 months’ bank statement, Latest Salary Slip. For Self-Employed: 2 years’ ITR, P&L and Balance Sheet, Last 6 Months’ Bank Statement.",
            icon: <Banknote className="w-8 h-8 text-[#F47E4D]" />
        },
        {
            title: "Business Proof",
            desc: "Qualification Certificate/Certificate Of Practice (COP), Shop Act License/ MOA, AOA/ Sales Tax/ Vat Registration/ Partnership Deed.",
            icon: <Briefcase className="w-8 h-8 text-[#F47E4D]" />
        },
        {
            title: "Vehicle Proof",
            desc: "Registration Certificate (RC), Vehicle Insurance Certificate, Pollution Under Control (PUC) Certificate, Road Tax Receipt, Chassis Number Imprint.",
            icon: <Car className="w-8 h-8 text-[#F47E4D]" />
        }
    ];

    return (
        <section className="w-full py-10 md:py-20 bg-[#F8FAFC]">
            {/* Padding kam kiya mobile ke liye (px-4) */}
            <div className="container mx-auto px-4 md:px-12">

                {/* --- Header Section --- */}
                <motion.div
                    className="mb-8 md:mb-12 text-center md:text-left" // Mobile pe center, Desktop pe left
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                        <FileCheck className="w-8 h-8 text-[#6D3078]" />
                        <h2 className="text-2xl md:text-4xl font-bold text-[#F47E4D] uppercase tracking-wide">
                            Documents Required
                        </h2>
                    </div>
                    {/* Decorative Underline (Centered on mobile) */}
                    <div className="w-24 h-1.5 bg-[#6D3078] rounded-full mb-6 mx-auto md:mx-0"></div>

                    <p className="text-base md:text-lg text-[#6D3078]/80 max-w-3xl leading-relaxed mx-auto md:mx-0">
                        Maitrii Loan Pvt Ltd. has simplified the process of securing a Business Loan. Please provide a self-attested copy of relevant documents from each category listed below.
                    </p>
                </motion.div>

                {/* --- Documents Grid --- */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {documents.map((doc, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            // Flex col on mobile (Stack), Row on desktop
                            className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 group hover:-translate-y-1"
                        >
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left">
                                {/* Icon Box */}
                                <div className="p-4 bg-[#F47E4D]/10 rounded-xl group-hover:bg-[#F47E4D] transition-colors duration-300 shrink-0">
                                    {React.cloneElement(doc.icon, { className: "w-8 h-8 text-[#F47E4D] group-hover:text-white transition-colors" })}
                                </div>

                                {/* Text Content */}
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold text-[#6D3078] mb-2 md:mb-3 group-hover:text-[#F47E4D] transition-colors">
                                        {doc.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                                        {doc.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* --- Footer Note & Button --- */}
                <motion.div
                    className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-slate-200 text-center md:text-left"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <p className="text-xs md:text-sm text-slate-500 italic">
                        * Requirement of documents might vary from case to case.
                    </p>

                    <button className="w-full md:w-auto flex justify-center items-center gap-2 px-8 py-3 bg-[#6D3078] text-white font-bold rounded-lg hover:bg-[#5a2565] transition-all shadow-lg shadow-purple-900/20 transform active:scale-95">
                        <Calculator size={20} />
                        EMI CALCULATOR
                    </button>
                </motion.div>

            </div>
        </section>
    );
};

export default DocumentsRequired;