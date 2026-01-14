import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getHelpActions, getFAQs } from "../services/helpApi";
import { trackParcelAPI } from "../services/trackingApi";
import HelpCard from "../Components/HelpCard";
import FAQItem from "../Components/FAQItem";
import { ArrowLeft, MessageCircle, Search } from "lucide-react";

export default function HelpCenter() {
  const { id } = useParams(); // dynamic route untuk FAQ detail
  const [actions, setActions] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [orderId, setOrderId] = useState("");
  const [trackingResult, setTrackingResult] = useState(null);
  const [loadingTracking, setLoadingTracking] = useState(false);
  const [trackingError, setTrackingError] = useState("");

  useEffect(() => {
    getHelpActions().then(setActions);
    getFAQs().then(setFaqs);
  }, []);

  const openWhatsApp = (text) => {
    window.open(
      `https://wa.me/6282255742470?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  const handleTrackParcel = async () => {
    if (!orderId) return;
    setLoadingTracking(true);
    setTrackingError("");
    setTrackingResult(null);

    try {
      const data = await trackParcelAPI({ courier: "jne", waybill: orderId });
      setTrackingResult(data);
    } catch (err) {
      setTrackingError(err.message || "Gagal mengambil data tracking");
    } finally {
      setLoadingTracking(false);
    }
  };

  /* =========================
     🏠 HALAMAN DETAIL FAQ
     ========================= */
  if (id) {
    const faq = faqs.find((f) => f.id === parseInt(id));
    if (!faq)
      return (
        <div className="p-8">
          <Link to="/help" className="text-blue-500 hover:underline">
            ← Kembali ke Help Center
          </Link>
          <p className="mt-4">FAQ tidak ditemukan</p>
        </div>
      );

    return (
      <div className="bg-gray-50 min-h-screen p-8 max-w-3xl mx-auto">
        <Link
          to="/help"
          className="flex items-center gap-2 mb-6 text-gray-600 hover:text-black"
        >
          <ArrowLeft size={18} />
          Kembali ke Help Center
        </Link>
        <h1 className="text-2xl font-bold mb-4">{faq.title}</h1>
        <p className="mb-6">{faq.answer}</p>

        {/* 🔎 FORM TRACKING */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <label className="block text-sm font-medium mb-2">
            Nomor Pesanan
          </label>
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="Contoh: ORD-123456"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring"
            />
            <button
              onClick={handleTrackParcel}
              className="bg-black text-white px-4 rounded-lg flex items-center gap-1"
            >
              <Search size={16} />
              {loadingTracking ? "Melacak..." : "Lacak"}
            </button>
          </div>

          {/* 📦 HASIL TRACKING */}
          {trackingResult && (
            <div className="mt-4 border-t pt-4">
              <p className="font-medium mb-1">
                Status:{" "}
                <span className="text-green-600">{trackingResult.status}</span>
              </p>
              <p className="text-sm text-gray-600">
                Kurir: {trackingResult.courier}
              </p>
              {trackingResult.history?.length > 0 && (
                <ul className="mt-2 list-disc ml-6 text-gray-600">
                  {trackingResult.history.map((h, i) => (
                    <li key={i}>
                      {h.date} — {h.desc}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {trackingError && (
            <p className="text-red-500 mt-2">{trackingError}</p>
          )}

          {/* 💬 CHAT CS */}
          <button
            onClick={() =>
              openWhatsApp(
                `Halo Admin, saya ingin melacak pesanan dengan nomor ${orderId}`
              )
            }
            className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg flex items-center justify-center gap-2"
          >
            <MessageCircle size={18} />
            Chat Customer Service
          </button>
        </div>
      </div>
    );
  }

  /* =========================
     🏠 HALAMAN UTAMA HELP CENTER
     ========================= */
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <h1 className="text-2xl font-semibold mb-6">Help Center</h1>

      {/* ACTIONS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        {actions.map((item) => (
          <div key={item.id} onClick={() => setActiveHelp(item)}>
            <HelpCard {...item} />
          </div>
        ))}
      </div>

      {/* FAQ */}
      <h2 className="text-xl font-semibold mb-4">FAQs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqs.map((faq) => (
          <Link key={faq.id} to={`/help/${faq.id}`}>
            <FAQItem title={faq.title} />
          </Link>
        ))}
      </div>
    </div>
  );
}
