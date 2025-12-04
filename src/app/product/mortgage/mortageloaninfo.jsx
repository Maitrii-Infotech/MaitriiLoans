'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';

const MortgageLoanInfo = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Function to toggle accordion
    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // Data for the Accordion (Questions & Answers - Mortgage Loan Specific)
    const faqData = [
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
    ];

    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* --- Left Side: Image (Updated for Mortgage Loan Theme) --- */}
                    <motion.div
                        className="relative w-full h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Image representing Property / House / Real Estate */}
                        <img
                            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Mortgage Loan Property"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                        {/* Overlay effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#6D3078]/40 to-transparent"></div>
                    </motion.div>

                    {/* --- Right Side: Content & Accordion --- */}
                    <motion.div
                        className="flex flex-col gap-6"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Header Section */}
                        <div>
                            <h4 className="text-sm font-bold uppercase tracking-widest text-[#6D3078] mb-2">
                                Unlock Your Value
                            </h4>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#F47E4D] mb-6">
                                MORTGAGE LOAN
                            </h2>
                            <p className="text-[#6D3078]/90 text-lg leading-relaxed mb-4 font-medium italic">
                                "Your property is more than just a home or office; it's a financial asset waiting to fuel your next big dream."
                            </p>

                            {/* Decorative Line */}
                            <div className="w-20 h-1 bg-[#F47E4D] rounded-full mb-6"></div>

                            <p className="text-slate-600 leading-relaxed mb-8">
                                Maitrii Loans offers Mortgage Loans (Loan Against Property) to help you leverage the value of your real estate. Whether for business growth or personal needs, get high-value loans with attractive interest rates and flexible tenures.
                            </p>
                        </div>

                        {/* Accordion Section */}
                        <div className="w-full border-t border-slate-200">
                            {faqData.map((item, index) => (
                                <div key={index} className="border-b border-slate-200">
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className="w-full py-5 flex items-center justify-between group text-left focus:outline-none"
                                    >
                                        <span className={`text-lg font-bold transition-colors duration-300 pr-4 ${activeIndex === index ? 'text-[#F47E4D]' : 'text-[#6D3078] group-hover:text-[#F47E4D]'}`}>
                                            {item.question}
                                        </span>
                                        <span className={`p-1 rounded-full border shrink-0 transition-all duration-300 ${activeIndex === index ? 'border-[#F47E4D] bg-[#F47E4D] text-white' : 'border-slate-300 text-slate-400 group-hover:border-[#F47E4D] group-hover:text-[#F47E4D]'}`}>
                                            {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                                        </span>
                                    </button>

                                    <AnimatePresence>
                                        {activeIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pb-6 text-slate-600 leading-relaxed text-sm md:text-base">
                                                    {item.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>

                        {/* Optional CTA */}


                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MortgageLoanInfo;