'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';

const PersonalLoanInfo = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Function to toggle accordion
    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // Data for the Accordion (Questions & Answers - Personal Loan Specific)
    const faqData = [
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
    ];

    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* --- Left Side: Image (Updated for Personal Loan Theme) --- */}
                    <motion.div
                        className="relative w-full h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Image representing Lifestyle / Family / Personal Goals */}
                        <img
                            src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Happy Family Personal Loan"
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
                                Dreams & Aspirations
                            </h4>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#F47E4D] mb-6">
                                PERSONAL LOAN
                            </h2>
                            <p className="text-[#6D3078]/90 text-lg leading-relaxed mb-4 font-medium italic">
                                "If you don't have a perfect credit score or the time to wait for a long process, a traditional bank might not be your best option, but we are."
                            </p>

                            {/* Decorative Line */}
                            <div className="w-20 h-1 bg-[#F47E4D] rounded-full mb-6"></div>

                            <p className="text-slate-600 leading-relaxed mb-8">
                                Whether it's a medical emergency, a wedding, or a dream vacation, Maitrii Loans is here to support you. We offer quick, hassle-free Personal Loans tailored to meet your financial needs without the stress of collateral.
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



                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PersonalLoanInfo;