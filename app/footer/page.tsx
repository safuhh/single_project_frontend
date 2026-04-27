"use client";

import React from "react";
import Link from "next/link";

// We export the Footer as a component so other pages can use it
export const Footer = () => {
  return (
    <footer className="w-full bg-[#0a4d33] text-white pt-20 pb-10 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* 1. Brand Section */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="w-8 h-8 bg-emerald-400/20 rounded-lg flex items-center justify-center border border-emerald-400/30">
                <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tight">MediFind</span>
            </Link>
            <p className="text-emerald-100/70 text-sm leading-relaxed max-w-[280px]">
              Your trusted healthcare partner for finding medicines quickly and easily across nearby pharmacies.
            </p>
            <div className="flex items-center gap-3">
              {[
                { name: "fb", path: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8.01 9.8V15H8v-3h2.01V9.43c0-1.99 1.18-3.09 3-3.09.87 0 1.79.16 1.79.16V8.5h-1.01c-.99 0-1.3.62-1.3 1.25V12h2.25l-.36 3h-1.89v6.8c4.57-.93 8.01-4.96 8.01-9.8z" },
                { name: "tw", path: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" },
                { name: "ig", path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01 M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" },
                { name: "li", path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" }
              ].map((icon, idx) => (
                <Link key={idx} href="#" className="w-9 h-9 bg-white/5 hover:bg-emerald-400/20 rounded-full flex items-center justify-center transition-all border border-white/5 hover:border-emerald-400/30 text-white/50 hover:text-emerald-400">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={icon.path} />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="/" className="text-emerald-100/60 hover:text-emerald-400 transition-colors text-sm font-medium">Home</Link></li>
              <li><Link href="#" className="text-emerald-100/60 hover:text-emerald-400 transition-colors text-sm font-medium">Search Medicines</Link></li>
              <li><Link href="#" className="text-emerald-100/60 hover:text-emerald-400 transition-colors text-sm font-medium">Upload Prescription</Link></li>
              <li><Link href="#" className="text-emerald-100/60 hover:text-emerald-400 transition-colors text-sm font-medium">Notifications</Link></li>
              <li><Link href="#" className="text-emerald-100/60 hover:text-emerald-400 transition-colors text-sm font-medium">My Profile</Link></li>
            </ul>
          </div>

          {/* 3. For Pharmacies */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-bold">For Pharmacies</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="#" className="text-emerald-100/60 hover:text-emerald-400 transition-colors text-sm font-medium">Seller Dashboard</Link></li>
              <li><Link href="#" className="text-emerald-100/60 hover:text-emerald-400 transition-colors text-sm font-medium">Manage Inventory</Link></li>
              <li><Link href="/partner" className="text-emerald-100/60 hover:text-emerald-400 transition-colors text-sm font-medium">Register Your Pharmacy</Link></li>
              <li><Link href="#" className="text-emerald-100/60 hover:text-emerald-400 transition-colors text-sm font-medium">Help & Support</Link></li>
            </ul>
          </div>

          {/* 4. Contact Us */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-400/10 transition-colors">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-black tracking-widest text-emerald-500/50 mb-0.5">Email</span>
                  <a href="mailto:support@medifind.com" className="text-sm font-medium text-emerald-100/80 hover:text-white transition-colors tracking-tight">support@medifind.com</a>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-400/10 transition-colors">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-black tracking-widest text-emerald-500/50 mb-0.5">Call Support</span>
                  <p className="text-sm font-medium text-emerald-100/80 tracking-tight">+1 234-567-8900</p>
                  <p className="text-[10px] font-bold text-emerald-100/40">Mon-Sat, 9AM-6PM</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-400/10 transition-colors">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-black tracking-widest text-emerald-500/50 mb-0.5">Location</span>
                  <p className="text-sm font-medium text-emerald-100/80 leading-snug max-w-[180px] tracking-tight">123 Healthcare St, Medical District, City - 400001</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-emerald-100/30 text-center md:text-left">
            © 2026 MediFind. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link href="#" className="text-[11px] font-black uppercase tracking-[0.2em] text-emerald-100/30 hover:text-emerald-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-[11px] font-black uppercase tracking-[0.2em] text-emerald-100/30 hover:text-emerald-400 transition-colors">Terms of Service</Link>
            <Link href="#" className="text-[11px] font-black uppercase tracking-[0.2em] text-emerald-100/30 hover:text-emerald-400 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="py-40 text-center">
        <h1 className="text-4xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Footer Preview</h1>
        <p className="text-slate-500 font-medium">This is the global footer component being used across the platform.</p>
      </div>
      <Footer />
    </div>
  );
};

export default FooterPage;
