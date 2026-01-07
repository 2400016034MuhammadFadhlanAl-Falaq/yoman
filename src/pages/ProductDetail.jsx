import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";
import Navbar from "../Components/public/Navbar";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="p-10 text-center">
          <p>Produk tidak ditemukan ❌</p>
          <button
            onClick={() => navigate("/")}
            className="mt-4 px-4 py-2 bg-black text-white rounded"
          >
            Kembali ke Home
          </button>
        </div>
      </>
    );
  }

  const handleBuy = () => {
    const message = encodeURIComponent(
      `Halo Admin YomanShop 👋\nSaya ingin membeli:\n\n📦 ${product.name}\n💰 Rp ${product.price.toLocaleString()}\n\nTerima kasih 🙏`
    );

    window.open(`https://wa.me/628123456789?text=${message}`, "_blank");
  };

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-lg"
        />

        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>

          <p className="text-gray-500 mt-1">
            {product.category} • ⭐ {product.rating}
          </p>

          <p className="text-2xl font-bold mt-4">
            Rp {product.price.toLocaleString()}
          </p>

          <p className="mt-4 text-gray-600">
            {product.description}
          </p>

          <p
            className={`mt-3 ${
              product.stock > 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            Stok: {product.stock}
          </p>

          <button
            onClick={handleBuy}
            disabled={product.stock === 0}
            className={`mt-6 px-6 py-3 rounded-lg text-white ${
              product.stock > 0
                ? "bg-black hover:bg-gray-800"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            {product.stock > 0 ? "Beli via WhatsApp" : "Stok Habis"}
          </button>

          <button
            onClick={() => navigate(-1)}
            className="ml-4 mt-6 px-6 py-3 border rounded-lg"
          >
            Kembali
          </button>
        </div>
      </div>
    </>
  );
}
