import api from "../apis/api";

// approve seller
export const getSellerRequests = () => {
  return api.get("/admin/seller-requests");
};

export const approveSeller = (id: string) => {
  return api.put(`/admin/approve/${id}`);
};