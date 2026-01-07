import { useState, useEffect } from "react";
import Header from "../Components/public/Header";
import Navbar from "../Components/public/Navbar";
import Sidebar from "../Components/public/Sidebar";
import ProductCard from "../Components/public/ProductCard";
import ProductSkeleton from "../Components/ProductSkeleton";
import HeroSection from "../Components/public/HeroSection";
import initialProducts from "../data/products";
import Footer from "../components/public/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [products] = useState(initialProducts);

  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  // 🛒 CART STATE
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // ➕ TAMBAH KE KERANJANG
  const handleBuy = (product) => {
    setCartItems((prev) => {
      const exist = prev.find((item) => item.id === product.id);

      if (exist) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  // ➖ KURANGI JUMLAH
  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };
   // 📲 CHECKOUT VIA WHATSAPP
const checkoutWhatsApp = () => {
  if (cartItems.length === 0) return;

  let message = "Halo Admin 👋%0A%0ASaya ingin checkout:%0A";

  cartItems.forEach((item, index) => {
    message += `%0A${index + 1}. ${item.name}`;
    message += `%0A   Qty: ${item.qty}`;
    message += `%0A   Harga: Rp ${item.price.toLocaleString("id-ID")}`;
  });

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  message += `%0A%0ATotal: Rp ${total.toLocaleString("id-ID")}`;
  message += `%0A%0ATerima kasih 🙏`;

  const phoneNumber = "6282255742470"; 
  window.open(
    `https://wa.me/${phoneNumber}?text=${message}`,
    "_blank"
  );
};


  const filteredProducts = products.filter((product) => {
    const matchCategory =
      activeCategory === "All" ||
      product.category?.toLowerCase() === activeCategory.toLowerCase();

    const matchSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchCategory && matchSearch;
  });

  const cartCount = cartItems.reduce((a, b) => a + b.qty, 0);

  return (
    <>
      <Navbar />
      <HeroSection />

      <Header
        cartCount={cartCount}
        onSearch={setSearchTerm}
        onCartClick={() => setShowCart(true)}
      />

      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-12 gap-6">
        <aside className="col-span-12 md:col-span-3">
          <Sidebar
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        </aside>

        <section className="col-span-12 md:col-span-9">
          {loading ? (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <ProductSkeleton key={i} />
              ))}
            </div>
          ) : filteredProducts.length === 0 ? (
            <p className="text-center text-gray-500">
              Produk tidak ditemukan
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((p) => (
              <ProductCard
               key={p.id}
               product={p}
               onBuy={() => handleBuy(p)}
               onClick={() => setSelectedProduct(p)}
             />
          ))}

            </div>
          )}
        </section>
      </div>

      {/* 🛒 MODAL KERANJANG */}
      {showCart && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-md rounded-xl p-6">
            <h2 className="text-lg font-bold mb-4">Keranjang</h2>

            {cartItems.length === 0 ? (
              <p className="text-gray-500 text-center">
                Keranjang kosong
              </p>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center mb-3"
                >
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      Rp {item.price.toLocaleString("id-ID")}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded"
                    >
                      −
                    </button>
                    <span>{item.qty}</span>
                    <button
                      onClick={() => handleBuy(item)}
                      className="px-3 py-1 bg-black text-white rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))
            )}

            <button
             onClick={checkoutWhatsApp}
              className="mt-4 w-full bg-green-600 text-white py-2 rounded"
            >
              Checkout via WhatsApp
            </button>
<button
  onClick={() => setShowCart(false)}
  className="mt-2 w-full border py-2 rounded"
>
  Tutup
</button>

          </div>
        </div>
      )}
      {/* 🔍 MODAL DETAIL PRODUK */}
{selectedProduct && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
      <button
        onClick={() => setSelectedProduct(null)}
        className="absolute top-3 right-3 text-xl"
      >
        ✕
      </button>

      <img
        src={selectedProduct.image}
        alt={selectedProduct.name}
        className="w-full h-48 object-contain"
      />

      <h2 className="font-bold mt-4">
        {selectedProduct.name}
      </h2>

      <p className="text-sm text-gray-500">
        {selectedProduct.category}
      </p>

      <p className="mt-2">
        {selectedProduct.description}
      </p>

      <p className="font-bold mt-3">
        Rp {selectedProduct.price.toLocaleString("id-ID")}
      </p>
    </div>
  </div>
)}
<Footer />

    </>
  );
}
