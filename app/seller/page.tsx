"use client";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { applySeller } from "../apis/seller.api";
import Navbar from "../navbar/page";

export default function BecomeSellerPage() {
  const { user, accessToken } = useSelector((state: any) => state.auth);
  const router = useRouter();

  const [form, setForm] = useState({
    shopName: "",
    licenseNumber: "",
    address: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    shopName: "",
    licenseNumber: "",
    address: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!accessToken) {
      router.push("/login");
    }
  }, [accessToken, router]);

  if (!accessToken) {
    return null; 
  }

  const validate = () => {
    let valid = true;
    const newErrors = {
      shopName: "",
      licenseNumber: "",
      address: "",
      phone: "",
    };

    if (!form.shopName || form.shopName.length < 3) {
      newErrors.shopName = "Shop name must be at least 3 characters";
      valid = false;
    }

    const licenseRegex = /^[a-zA-Z0-9]{5,20}$/;
    if (!licenseRegex.test(form.licenseNumber)) {
      newErrors.licenseNumber = "License number must be 5-20 alphanumeric characters";
      valid = false;
    }

    if (!form.address || form.address.length < 10) {
      newErrors.address = "Address must be at least 10 characters";
      valid = false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(form.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async () => {
  if (!validate()) {
    toast.error("Please fix the errors in the form");
    return;
  }

  try {
    setLoading(true);

    const res = await applySeller(form);

    toast.success(
      res.data?.message || "Seller application submitted successfully 🎉"
    );

    setSuccess(true);
  } catch (err: any) {
    const msg =
      err.response?.data?.message || "Error submitting application";

    toast.error(msg);
  } finally {
    setLoading(false);
  }
};

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 font-sans">
        <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm text-center max-w-md w-full">
          <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Application Sent</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            Thank you for applying. Our administration team will review your request and get back to you shortly.
          </p>
          <button
            onClick={() => router.push("/")}
            className="w-full py-2.5 px-4 bg-black hover:bg-gray-800 text-white rounded-lg font-medium transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 font-sans">
      <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm w-full max-w-lg">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-1">
            Join the Seller Network
          </h2>
          <p className="text-sm text-gray-500">
            Provide your business details to start selling.
          </p>
        </div>

        <div className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-gray-700">Shop Name</label>
              <input
                className={`w-full px-4 py-2.5 bg-white border rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none transition-all placeholder:text-gray-400 text-gray-900 ${
                  errors.shopName ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-blue-500"
                }`}
                placeholder="e.g. Acme Corp"
                value={form.shopName}
                onChange={(e) => setForm({ ...form, shopName: e.target.value })}
              />
              {errors.shopName && <p className="text-red-500 text-xs mt-1">{errors.shopName}</p>}
            </div>

            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-gray-700">Business License</label>
              <input
                className={`w-full px-4 py-2.5 bg-white border rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none transition-all placeholder:text-gray-400 text-gray-900 ${
                  errors.licenseNumber ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-blue-500"
                }`}
                placeholder="License ID"
                value={form.licenseNumber}
                onChange={(e) => setForm({ ...form, licenseNumber: e.target.value })}
              />
              {errors.licenseNumber && <p className="text-red-500 text-xs mt-1">{errors.licenseNumber}</p>}
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-gray-700">Headquarters Address</label>
            <textarea
              className={`w-full px-4 py-2.5 bg-white border rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none transition-all placeholder:text-gray-400 text-gray-900 min-h-[100px] resize-none ${
                errors.address ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-blue-500"
              }`}
              placeholder="Full physical address of your business"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
            />
            {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
          </div>

          <div className="space-y-1.5">
            <label className="block text-sm font-medium text-gray-700">Contact Number</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
                +91
              </span>
              <div className="absolute left-12 top-1/2 -translate-y-1/2 w-px h-5 bg-gray-300"></div>
              <input
                className={`w-full py-2.5 pr-4 pl-16 bg-white border rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none transition-all placeholder:text-gray-400 text-gray-900 ${
                  errors.phone ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-blue-500"
                }`}
                placeholder="10-digit mobile number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full mt-6 flex items-center justify-center gap-2 bg-green-900 text-white font-medium py-2.5 px-4 rounded-lg transition-colors hover:bg-green-800 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                Processing...
              </>
            ) : (
              "Submit Application"
            )}
          </button>
        </div>
      </div>
    </div>
    </div>
    
  );
}