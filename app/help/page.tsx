"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../navbar/page";
import { Footer } from "../footer/page";

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="bg-white rounded-[24px] border border-slate-100 overflow-hidden mb-4 transition-all hover:border-emerald-200">
      <button 
        onClick={onClick}
        className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50/50 transition-colors"
      >
        <span className="text-lg font-bold text-slate-800">{question}</span>
        <div className={`w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center transition-transform ${isOpen ? "rotate-180" : ""}`}>
          <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-8 pb-8"
          >
            <p className="text-slate-500 leading-relaxed font-medium pt-2">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const HelpSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How accurate is the real-time availability?",
      answer: "Our pharmacy partners update their inventory systems in real-time. We guarantee a 95% accuracy rate for all medicine stocks shown on our platform."
    },
    {
      question: "Can I reserve medicines before visiting the pharmacy?",
      answer: "Yes, you can reserve medications for up to 2 hours at participating pharmacies. This ensures the medicine stays in stock while you are in transit."
    },
    {
      question: "Is my prescription data secure?",
      answer: "Absolutely. We use hospital-grade encryption to protect all your medical data and prescriptions. Only authorized pharmacy staff can view your shared documents."
    }
  ];

  return (
    <div id="help" className="w-full py-32 bg-white min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-white shadow-lg shadow-emerald-900/10"
          >
            <svg className="w-8 h-8 text-[#0a4d33]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01" />
            </svg>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-900 mb-4 tracking-tight"
          >
            Help & FAQ
          </motion.h2>
          <p className="text-slate-500 text-lg font-medium">Find answers to common questions about using MediFind.</p>
        </div>
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, idx) => (
            <FAQItem 
              key={idx}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === idx}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const HelpPage = () => {
  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      <div className="pt-20">
        <HelpSection />
      </div>
      <Footer />
    </main>
  );
};

export default HelpPage;
