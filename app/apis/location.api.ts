import api from "./api";

export const updateLocation = (lat: number, lng: number) => {
  return api.post("/locations/me", { lat, lng });
};