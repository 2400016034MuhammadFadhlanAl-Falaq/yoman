import { useState } from "react";
import Navbar from "../Components/public/Navbar";
import Footer from "../Components/public/Footer";
import ProductCard from "../Components/public/ProductCard";

export default function Home() {
  const products = [
    { name: "Laptop Asus", category: "Elektronik", price: 8500000 },
    { name: "Headset Gaming", category: "Aksesoris", price: 450000 },
    { name: "Keyboard Mechanical", category: "Aksesoris", price: 650000 },
  ];

  const [cart, setCart] = useState([]);

  const filtered = (q) =>
    products.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()));

  const [list, setList] = useState(products);

  function addToCart(p) {
    setCart([...cart, p]);
  }

  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto mt-6 px-4">
        {/* Search + Cart */}
        <div className="flex justify-between items-center mb-4">
          <input
            placeholder="Cari produk..."
            onChange={(e) => setList(filtered(e.target.value))}
            className="border rounded-lg px-3 py-2 w-64"
          />

          <div className="bg-white rounded-xl shadow px-4 py-2 text-sm">
            <strong>Keranjang:</strong> {cart.length} item —{" "}
            <span className="font-semibold">
              Rp{" "}
              {cart
                .reduce((a, b) => a + b.price, 0)
                .toLocaleString("id-ID")}
            </span>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {list.map((p, i) => (
            <ProductCard key={i} product={p} onAdd={() => addToCart(p)} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
