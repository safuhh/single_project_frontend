import api from "../apis/api";

export const applySeller = (data: {
  shopName: string;
  licenseNumber: string;
  address: string;
  phone: string;
}) => {
  return api.post("/seller/apply", data);
};