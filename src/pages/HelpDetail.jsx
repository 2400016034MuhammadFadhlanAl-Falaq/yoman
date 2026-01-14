import { useState } from "react";
import { useParams } from "react-router-dom";
import { trackParcelAPI } from "../services/trackingApi";
import TrackingStepper from "../components/TrackingStepper";

export default function HelpDetail() {
  const { slug } = useParams();
  const isTracking = slug === "track-parcel";

  const [resi, setResi] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const handleTrack = async () => {
    setLoading(true);
    setError("");
    setData(null);

    try {
      const result = await trackParcelAPI({
        courier: "jne",
        waybill: resi,
      });
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isTracking) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold capitalize mb-4">
          {slug.replace("-", " ")}
        </h1>
        <p className="text-gray-600">
          Halaman bantuan <b>{slug}</b> siap dikembangkan.
        </p>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Track Parcel</h1>

      <input
        value={resi}
        onChange={(e) => setResi(e.target.value)}
        placeholder="Masukkan nomor resi"
        className="w-full border rounded px-4 py-2 mb-3"
      />

      <button
        onClick={handleTrack}
        className="w-full bg-black text-white py-2 rounded"
      >
        {loading ? "Melacak..." : "Lacak Paket"}
      </button>

      {error && <p className="text-red-500 mt-3">{error}</p>}

      {data && (
        <div className="mt-6">
          <p className="font-semibold mb-2">
            Kurir: {data.courier} | Status: {data.status}
          </p>
          <TrackingStepper history={data.history} />
        </div>
      )}
    </div>
  );
}
