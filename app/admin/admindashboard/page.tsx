"use client";

import AdminSidebar from "../adminnavbar/page";
import { useAdmin } from "../../hooks/useAdmin";

export default function AdminDashboard() {
  useAdmin();

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans flex">
      
      <AdminSidebar />
      
      <div className="flex-1 ml-64 p-6 md:p-12">
        <div className="max-w-6xl mx-auto">
          
          <header className="border-b border-gray-200/60 pb-6 mb-8">
            <h1 className="text-2xl font-semibold text-gray-900">
              Admin Dashboard
            </h1>
            <p className="text-sm text-gray-500 mt-1.5">
              Overview and management of your application.
            </p>
          </header>

        </div>
      </div>

    </div>
  );
}