import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../Components/public/Header";
import Navbar from "../Components/public/Navbar";
import Sidebar from "../Components/public/Sidebar";
import ProductCard from "../Components/public/ProductCard";
import ProductSkeleton from "../Components/ProductSkeleton";
import HeroSection from "../Components/public/HeroSection";
import initialProducts from "../data/products";
import Footer from "../Components/public/Footer";
import Background3D from "../components/Background3D";
import { ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [products] = useState(initialProducts);
  const [buyOptionProduct, setBuyOptionProduct] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  /* 🎨 THEME WARNA */
  const categoryTheme = {
    All: {
      header: "bg-red-50 text-red-600",
      primaryBtn: "bg-red-500 hover:bg-red-600",
      ring: "ring-red-200",
    },
    Laptop: {
      header: "bg-rose-50 text-rose-600",
      primaryBtn: "bg-rose-500 hover:bg-rose-600",
      ring: "ring-rose-200",
    },
    Gaming: {
      header: "bg-purple-50 text-purple-600",
      primaryBtn: "bg-purple-500 hover:bg-purple-600",
      ring: "ring-purple-200",
    },
    Aksesoris: {
      header: "bg-orange-50 text-orange-600",
      primaryBtn: "bg-orange-500 hover:bg-orange-600",
      ring: "ring-orange-200",
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

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

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const checkoutSingleWhatsApp = (product) => {
    let message = `Halo Admin 👋%0A%0ASaya ingin membeli:%0A`;
    message += `%0A• ${product.name}`;
    message += `%0A  Harga: Rp ${product.price.toLocaleString("id-ID")}`;
    message += `%0A%0ATerima kasih 🙏`;

    window.open(
      `https://wa.me/6282255742470?text=${message}`,
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
      <Background3D category={activeCategory} />

      <div className="relative z-10">
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
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts.map((p) => (
                <ProductCard
                 key={p.id}
                 product={p}
                 onClick={() => navigate(`/product/${p.id}`)} // pakai p.id bukan product.id
                 onBuy={() => setBuyOptionProduct(p)}
                  />
                ))}

              </div>
            )}
          </section>
        </div>

        {/* 🛍️ MODAL KERANJANG – ICON BARU */}
        <AnimatePresence>
          {showCart && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
            >
              <motion.div
                initial={{ scale: 0.9, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 30 }}
                className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6"
              >
                <h2 className="flex items-center gap-2 text-xl font-bold">
                 <ShoppingBag className="text-red-500" />
                  Keranjang Belanja
                </h2>

                {cartItems.length === 0 ? (
                  <p className="text-gray-500 text-center">
                    Keranjang masih kosong
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
                  onClick={() => setShowCart(false)}
                  className="mt-4 w-full border py-2 rounded-lg"
                >
                  Tutup
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 🚀 MODAL BELI */}
        <AnimatePresence>
          {buyOptionProduct && (() => {
            const theme =
              categoryTheme[buyOptionProduct.category] ||
              categoryTheme.All;

            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
              >
                <motion.div
                  initial={{ scale: 0.92, y: 40 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.92, y: 40 }}
                  className={`bg-white w-full max-w-sm rounded-2xl ring-2 ${theme.ring} shadow-2xl`}
                >
                  <div className={`px-6 py-4 rounded-t-2xl ${theme.header}`}>
                    <h2 className="font-bold text-lg">
                      {buyOptionProduct.name}
                    </h2>
                    <p className="text-sm opacity-80">
                      {buyOptionProduct.category}
                    </p>
                  </div>

                  <div className="p-6 space-y-4">
                    <p className="text-lg font-semibold">
                      Rp {buyOptionProduct.price.toLocaleString("id-ID")}
                    </p>

                    <button
                      onClick={() => {
                        handleBuy(buyOptionProduct);
                        setBuyOptionProduct(null);
                      }}
                      className={`w-full py-3 flex items-center justify-center gap-2 rounded-xl text-white ${theme.primaryBtn}`}
                        
                    >
                      <ShoppingBag size={18} className="stroke-[2.2]" />
                      <span>Masukkan ke Keranjang</span>
                    </button>



                    <button
                      onClick={() => {
                        checkoutSingleWhatsApp(buyOptionProduct);
                        setBuyOptionProduct(null);
                      }}
                      className="w-full py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white"
                    >
                      💬 Checkout via WhatsApp
                    </button>

                    <button
                      onClick={() => setBuyOptionProduct(null)}
                      className="w-full text-sm text-gray-500"
                    >
                      Batal
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            );
          })()}
        </AnimatePresence>

        <Footer />
      </div>
    </>
  );
}
