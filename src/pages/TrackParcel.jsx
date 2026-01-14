import { useEffect, useState } from "react";
import { Truck, MessageCircle } from "lucide-react";
import { trackParcelAPI } from "../services/trackingApi";
import { validateUserOrder } from "../services/orderApi";
import TrackingStepper from "../components/TrackingStepper";

export default function TrackParcel() {
  const [orderId, setOrderId] = useState("");
  const [courier, setCourier] = useState("jne");
  const [trackingResult, setTrackingResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  const handleTrackParcel = async () => {
    if (!orderId) return alert("Masukkan nomor resi");

    const valid = await validateUserOrder(orderId);
    if (!valid) return alert("Resi tidak ditemukan di akun kamu");

    setLoading(true);
    try {
      const result = await trackParcelAPI({
        courier,
        waybill: orderId,
      });
      setTrackingResult(result);
    } finally {
      setLoading(false);
    }
  };

  /* 🔄 AUTO REFRESH (AMAN) */
  useEffect(() => {
    if (!orderId || !trackingResult) return;

    const interval = setInterval(async () => {
      const updated = await trackParcelAPI({
        courier,
        waybill: orderId,
      });
      setTrackingResult(updated);
    }, 60000);

    return () => clearInterval(interval);
  }, [orderId, courier]);

  const lastHistory = trackingResult?.history?.[0];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Track Parcel</h1>

      {/* FORM */}
      <div className="flex gap-2 mb-6">
        <select
          value={courier}
          onChange={(e) => setCourier(e.target.value)}
          className="border rounded-lg px-3"
        >
          <option value="jne">JNE</option>
          <option value="jnt">J&T</option>
          <option value="sicepat">SiCepat</option>
          <option value="pos">POS</option>
        </select>

        <input
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          placeholder="Nomor Resi"
          className="flex-1 border rounded-lg px-4 py-2"
        />

        <button
          onClick={handleTrackParcel}
          className="bg-black text-white px-4 rounded-lg flex items-center gap-1"
        >
          <Truck size={16} />
          {loading ? "Melacak..." : "Lacak"}
        </button>
      </div>

      {/* HASIL TRACKING */}
      {trackingResult && (
        <div className="bg-white rounded-xl p-6 shadow">
          <h3 className="font-semibold mb-4">Status Pengiriman</h3>

          <TrackingStepper history={trackingResult.history} />

          <button
            onClick={() => setChatOpen(true)}
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <MessageCircle size={16} />
            Hubungi Customer Service
          </button>
        </div>
      )}

      {/* CHAT CS → WA */}
      {chatOpen && (
        <div className="fixed bottom-4 right-4 w-80 bg-white border rounded-xl shadow-lg z-50">
          <div className="p-3 border-b font-semibold">
            CS Tracking ({orderId})
          </div>

          <div className="p-3 text-sm text-gray-600 space-y-2">
            <p>Status pengiriman terakhir:</p>

            {lastHistory ? (
              <div className="bg-gray-50 p-2 rounded text-xs">
                <p><b>{lastHistory.desc}</b></p>
                <p>{lastHistory.date}</p>
              </div>
            ) : (
              <p className="text-xs">Data belum tersedia</p>
            )}
          </div>

          <div className="flex">
            <button
              onClick={() => {
                const message = `Halo Admin 👋%0A%0ASaya ingin menanyakan status pengiriman:%0A
Resi: ${orderId}%0A
Kurir: ${courier}%0A
Status Terakhir: ${lastHistory?.desc || "-"}%0A
Update: ${lastHistory?.date || "-"}%0A%0ATerima kasih 🙏`;

                window.open(
                  `https://wa.me/6282255742470?text=${message}`,
                  "_blank"
                );
              }}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 text-sm rounded-bl-xl"
            >
              💬 Chat WhatsApp
            </button>

            <button
              onClick={() => setChatOpen(false)}
              className="flex-1 bg-gray-100 py-2 text-sm rounded-br-xl"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
