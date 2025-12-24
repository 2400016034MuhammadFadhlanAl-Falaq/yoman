export default function ProductCard({ product, onAdd }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow hover:-translate-y-1 hover:shadow-xl transition">
      <span className="text-sm text-indigo-600 font-semibold">
        {product.category}
      </span>

      <div className="text-lg font-semibold mt-1">{product.name}</div>

      <div className="font-bold mt-2">
        Rp {product.price.toLocaleString("id-ID")}
      </div>

      <button
        onClick={onAdd}
        className="w-full mt-3 bg-indigo-600 text-white py-2 rounded-xl font-semibold"
      >
        Tambah ke Keranjang
      </button>
    </div>
  );
}
