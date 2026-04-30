
// "use client";
// import { motion, Variants } from "framer-motion";

// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

// const itemVariants: Variants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

// export const Hero = () => {
//   return (
//     <main className="pt-24 pb-40 px-6 relative">
//       {/* Animated background highlights */}
//       <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[140px] opacity-60 -z-10 animate-pulse" />
//       <div className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] bg-blue-50 rounded-full blur-[120px] opacity-40 -z-10" />

//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="max-w-7xl mx-auto text-center relative z-10"
//       >
//         <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#f0f9f4] border border-[#dcede5] text-[#0a4d33] text-[11px] font-black uppercase tracking-[0.2em] mb-12 shadow-sm">
//           <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
//           Verified Medical Marketplace
//         </motion.div>

//         <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl md:text-[100px] font-black text-slate-900 leading-[0.9] tracking-tighter mb-10">
//           The Digital Core of <br />
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0a4d33] to-[#10b981]">Medicine Search.</span>
//         </motion.h1>

//         <motion.p variants={itemVariants} className="text-slate-500 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-8 md:mb-16 font-medium">
//           Find verified pharmacies, compare medicine availability, 
//           and manage your health network in one unified, professional platform.
//         </motion.p>

//         <motion.div variants={itemVariants} className="max-w-3xl mx-auto relative group">
//           <div className="absolute -inset-2 bg-gradient-to-r from-[#0a4d33] to-[#10b981] rounded-[32px] blur-xl opacity-0 group-hover:opacity-10 transition duration-1000"></div>
//           <div className="relative flex flex-col md:flex-row items-center bg-white border border-slate-100 rounded-[28px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-3 group-hover:border-emerald-200 transition-all duration-500">
            
//             {/* Medicine Input */}
//             <div className="flex-1 flex items-center w-full px-4 py-2 border-b md:border-b-0 md:border-r border-slate-50">
//               <svg className="w-6 h-6 text-slate-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//               </svg>
//               <input 
//                 type="text" 
//                 placeholder="Medicine name or pharmacy..." 
//                 className="w-full h-12 text-lg font-bold text-slate-900 placeholder:text-slate-300 focus:outline-none"
//               />
//             </div>

//             {/* Location Input */}
//             <div className="flex-1 flex items-center w-full px-4 py-2">
//               <svg className="w-6 h-6 text-slate-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//               </svg>
//               <input 
//                 type="text" 
//                 placeholder="Location / Pincode" 
//                 className="w-full h-12 text-lg font-bold text-slate-900 placeholder:text-slate-300 focus:outline-none"
//               />
//             </div>

//             <button className="w-full md:w-auto px-10 py-4 bg-[#0a4d33] hover:bg-[#083d28] text-white rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-lg active:scale-95">
//               Search Now
//             </button>
//           </div>
//         </motion.div>
//       </motion.div>
//     </main>
//   );
// };







"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const Hero = () => {
  const [medicine, setMedicine] = useState("");
  const [location, setLocation] = useState("Detecting location...");
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [loadingLoc, setLoadingLoc] = useState(true);

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation("Location not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;

        setCoords({ lat, lng });

        try {
        const res = await fetch(
  `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`,
  {
    headers: {
      "Accept-Language": "en",
    },
  }
);
          const data = await res.json();

          // clean single output (no messy fallback chain)
          setLocation(
            data.address?.city ||
              data.address?.town ||
              data.address?.village ||
              data.display_name ||
              "Current Location"
          );
        } catch {
          setLocation("Current Location");
        }

        setLoadingLoc(false);
      },
      () => {
        setLocation("Location permission denied");
        setLoadingLoc(false);
      },
      { enableHighAccuracy: true }
    );
  }, []);

  return (
    <main className="pt-24 pb-40 px-6 relative">
      {/* Background */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[140px] opacity-60 -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] bg-blue-50 rounded-full blur-[120px] opacity-40 -z-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto text-center relative z-10"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#f0f9f4] border border-[#dcede5] text-[#0a4d33] text-[11px] font-black uppercase tracking-[0.2em] mb-12 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          Verified Medical Marketplace
        </motion.div>

        {/* Title */}
        <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl md:text-[100px] font-black text-slate-900 leading-[0.9] tracking-tighter mb-10">
          The Digital Core of <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0a4d33] to-[#10b981]">
            Medicine Search.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p variants={itemVariants} className="text-slate-500 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-16 font-medium">
          Find verified pharmacies, compare medicine availability, and manage your health network in one platform.
        </motion.p>

        {/* Search Box */}
        <motion.div variants={itemVariants} className="max-w-3xl mx-auto relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-[#0a4d33] to-[#10b981] rounded-[32px] blur-xl opacity-0 group-hover:opacity-10 transition duration-1000" />

          <div className="relative flex flex-col md:flex-row items-center bg-white border border-slate-100 rounded-[28px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-3">

            {/* Medicine Input */}
            <div className="flex-1 flex items-center w-full px-4 py-2 border-b md:border-b-0 md:border-r border-slate-50">
              <svg className="w-6 h-6 text-slate-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>

              <input
                value={medicine}
                onChange={(e) => setMedicine(e.target.value)}
                type="text"
                placeholder="Medicine name or pharmacy..."
                className="w-full h-12 text-lg font-bold text-slate-900 placeholder:text-slate-300 focus:outline-none"
              />
            </div>

            {/* Location (AUTO FILLED) */}
            <div className="flex-1 flex items-center w-full px-4 py-2">
              <svg className="w-6 h-6 text-slate-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>

              <div className="flex flex-col">
                <span className="text-lg font-bold text-slate-900">
                  {location}
                </span>

                {coords && (
                  <span className="text-xs text-slate-400">
                    {coords.lat.toFixed(3)}, {coords.lng.toFixed(3)}
                  </span>
                )}
              </div>
            </div>

            {/* Button */}
            <button className="w-full md:w-auto px-10 py-4 bg-[#0a4d33] hover:bg-[#083d28] text-white rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-lg active:scale-95">
              Search Now
            </button>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
};
