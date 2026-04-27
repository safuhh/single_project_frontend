"use client";

import { useEffect, useState } from "react";
import api from "../apis/api";
import { toast } from "react-toastify";

export default function AdminPage() {
  const [requests, setRequests] = useState<any[]>([]);

  const loadRequests = async () => {
    try {
      const res = await api.get("/admin/seller-requests");
      setRequests(res.data);
    } catch (err: any) {
      console.log(err);
      toast.error(err.response?.data?.message || "Failed to load requests");
    }
  };

  useEffect(() => {
    loadRequests();
  }, []);

  const handleApprove = async (id: string) => {
    try {
      await api.put(`/admin/approve/${id}`);
      toast.success("Seller approved 🎉");
      loadRequests();
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Approval failed");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Seller Requests</h1>

      {requests.length === 0 ? (
        <p>No requests found</p>
      ) : (
        requests.map((req) => (
          <div key={req._id} className="border p-4 mb-3 rounded flex justify-between">
            <div>
              <p><b>Shop:</b> {req.shopName}</p>
              <p><b>Status:</b> {req.status}</p>
            </div>

            {req.status === "pending" && (
              <button
                onClick={() => handleApprove(req._id)}
                className="bg-green-600 text-white px-3 py-1 rounded"
              >
                Approve
              </button>
            )}
          </div>
        ))
      )}
    </div>
  );
}