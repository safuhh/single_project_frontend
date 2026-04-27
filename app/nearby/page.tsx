"use client";

import api from "../apis/api";

export default function UseLocation() {
  const handleLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(async (pos) => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;

      try {
        await api.post("/locations/me", { lat, lng });

        alert("Location updated");
      } catch (err: any) {
        alert(err.response?.data?.message || "Error");
      }
    });
  };

  return <button onClick={handleLocation}>📍 Use My Location</button>;
}