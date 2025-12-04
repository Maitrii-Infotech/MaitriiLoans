'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';

const BusinessLoanInfo = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Function to toggle accordion
    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // Data for the Accordion (Questions & Answers)
    const faqData = [
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
    ];

    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* --- Left Side: Image --- */}
                    <motion.div
                        className="relative w-full h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Image placeholder representing a small business owner */}
                        <img
                            src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Small Business Owner"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                        {/* Overlay effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#6D3078]/30 to-transparent"></div>
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
                                Growth & Support
                            </h4>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#F47E4D] mb-6">
                                BUSINESS LOAN
                            </h2>
                            <p className="text-[#6D3078]/80 text-lg leading-relaxed mb-4">
                                If you don't have a perfect credit score or the time to wait for a mortgage loan to process, a bank might not be your best option but we are.
                            </p>

                            {/* Decorative Line */}
                            <div className="w-20 h-1 bg-[#F47E4D] rounded-full mb-6"></div>

                            <p className="text-slate-600 leading-relaxed mb-8">
                                We provide Business Loans to a wide variety of MSME/SMEs ranging from sole proprietors to institutions. You can avail loans ranging from Rs. 1 Lakh to Rs. 50 Lakh with flexible tenures designed to match your business cycle.
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
                                        <span className={`text-lg font-bold transition-colors duration-300 ${activeIndex === index ? 'text-[#F47E4D]' : 'text-[#6D3078] group-hover:text-[#F47E4D]'}`}>
                                            {item.question}
                                        </span>
                                        <span className={`p-1 rounded-full border transition-all duration-300 ${activeIndex === index ? 'border-[#F47E4D] bg-[#F47E4D] text-white' : 'border-slate-300 text-slate-400 group-hover:border-[#F47E4D] group-hover:text-[#F47E4D]'}`}>
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
                                                <div className="pb-6 text-slate-600 leading-relaxed">
                                                    {item.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>



                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BusinessLoanInfo;