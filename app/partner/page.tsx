"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "../navbar/page";
import { Footer } from "../footer/page";
import { 
  Storefront, 
  ChartLineUp, 
  ShieldCheck,
} from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
export const PartnerSection = () => {
  const router = useRouter();

  return (
    <section className="w-full bg-[#0a4d33] py-20 px-6 text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
          Become a MediFind Partner
        </h2>
        <p className="text-emerald-100/80 text-xl md:text-2xl mb-12 font-medium">
          Are you a pharmacist or pharmacy owner? Join our network and reach more customers
        </p>
        <button 
         onClick={() => router.push("/seller")}
        className="px-10 py-5 bg-white text-[#0a4d33] rounded-2xl font-black text-lg shadow-xl hover:bg-emerald-50 transition-all active:scale-95">
          Get Started as Seller
        </button>
      </motion.div>
    </section>
  );
};

const PartnerPage = () => {
  return (
    <main className="min-h-screen bg-slate-50 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />

      <div className="pt-20">
        {/* 1. Become a Partner Section (The Green Banner) */}
        <PartnerSection />
      </div>

      {/* 2. Extra Info Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h3 className="text-sm font-black uppercase tracking-[0.3em] text-[#0a4d33] mb-4">Core Capabilities</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Everything you need to grow your pharmacy</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Inventory Control",
                desc: "Full medicine inventory table with add, edit, and delete functionality for seamless management.",
                icon: Storefront
              },
              {
                title: "Admin Dashboard",
                desc: "Pharmacy approval workflow with detailed revenue and demand analytics at your fingertips.",
                icon: ChartLineUp
              },
              {
                title: "Verified Network",
                desc: "Performance metrics and trend analysis for all partners within our trusted healthcare network.",
                icon: ShieldCheck
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-10 rounded-[32px] bg-slate-50/50 border border-slate-100 hover:bg-white hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.05)] hover:border-emerald-100 transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 border border-slate-50">
                  <feature.icon size={28} weight="duotone" className="text-[#0a4d33]" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-[#0a4d33] transition-colors">
                  {feature.title}
                </h4>
                <p className="text-slate-500 font-medium leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PartnerPage;
