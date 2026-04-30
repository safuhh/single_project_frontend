"use client";

import { useEffect, useState } from "react";
import { useSeller } from "../hooks/useSeller";
import { getSellerDashboard } from "../apis/seller.api";
import SellerNavbar from "../seller/SellerBar/page"; // use new navbar

export default function SellerDashboard() {
  useSeller();

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getSellerDashboard();
        setData(res.data.sellerinfo);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans flex">
      
      {/* NAVBAR */}
      <SellerNavbar />

      {/* MAIN CONTENT */}
      <div className="flex-1 w-full md:ml-72">
        
        {/* Mobile spacing for top navbar */}
        <div className="h-16 md:hidden" />

        <div className="p-4 sm:p-6 md:p-10">
          <div className="max-w-6xl mx-auto">

            {/* HEADER */}
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 mb-6 border-b border-slate-100">
              
              <div>
                {/* status */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-100">
                    <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-bold uppercase text-emerald-700">
                      Live
                    </span>
                  </div>
                  <span className="text-xs text-slate-400">
                    System running
                  </span>
                </div>

                {/* title */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
                  Seller <span className="text-[#115E3D] font-sans">Dashboard</span>
                </h1>
              </div>

              {/* date */}
            <div className="hidden sm:flex items-center gap-2 px-4 py-2.5 bg-white/70 backdrop-blur-md rounded-2xl border border-slate-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.04)] text-sm font-medium text-slate-600">
  
  {/* Icon */}
  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2"/>
      <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2"/>
      <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2"/>
      <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2"/>
    </svg>
  </div>

  {/* Date */}
  <span className="tracking-tight">
    {new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })}
  </span>
</div>
            </header>

            {/* CONTENT GRID */}
            <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          

            </main>

          </div>
        </div>
      </div>
    </div>
  );
}