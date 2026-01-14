// src/Components/public/ProductCard.jsx
export default function ProductCard({ product, onBuy, onClick }) {
  return (
    <div
      onClick={onClick}
      className="border rounded-lg p-4 cursor-pointer hover:shadow-lg transition"
    >
      {/* GAMBAR PRODUK */}
      <img
        src={product.image}
        alt={product.name}
        className="h-40 mx-auto object-contain"
      />

      {/* NAMA PRODUK */}
      <h3 className="mt-3 font-semibold">{product.name}</h3>

      {/* HARGA */}
      <p className="text-gray-500 text-sm">
        Rp {product.price.toLocaleString("id-ID")}
      </p>

      {/* TOMBOL BELI */}
      <button
        onClick={(e) => {
          e.stopPropagation(); 
          onBuy(); // 
        }}
        className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800"
      >
        Beli
      </button>
    </div>
  );
}
