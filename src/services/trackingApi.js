// src/services/trackingApi.js
const API_KEY = import.meta.env.VITE_TRACKING_API_KEY;

export async function trackParcelAPI({ courier, waybill }) {
  if (!waybill) throw new Error("Nomor resi kosong");

  // 🔥 DEV MODE (tanpa API KEY)
  if (!API_KEY) return mockTracking();

  try {
    const res = await fetch(
      `https://api.binderbyte.com/v1/track?api_key=${API_KEY}&courier=${courier}&awb=${waybill}`
    );

    const json = await res.json();

    if (!json?.data?.history) throw new Error("Resi tidak ditemukan");

    return {
      courier: json.data.courier,
      status: json.data.status,
      history: json.data.history,
    };
  } catch (err) {
    console.warn("Tracking fallback:", err.message);
    return mockTracking();
  }
}

function mockTracking() {
  return {
    courier: "JNE",
    status: "DELIVERY",
    history: [
      { date: "2024-01-15 09:00", desc: "Paket diterima oleh kurir" },
      { date: "2024-01-16 13:40", desc: "Paket dalam perjalanan" },
      { date: "2024-01-17 08:20", desc: "Paket tiba di kota tujuan" },
      { date: "2024-01-17 14:10", desc: "Paket diterima oleh penerima" },
    ],
  };
}
