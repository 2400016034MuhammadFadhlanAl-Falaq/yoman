import { ShoppingBag } from "lucide-react";
export default function Header({ cartCount, onSearch, onCartClick }) {
  return (
    <header className="bg-white shadow py-4">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        
        {/* LOGO / TITLE */}
        <h1 className="text-xl font-bold cursor-pointer">
          
        </h1>

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Cari produk..."
          onChange={(e) => onSearch(e.target.value)}
          className="border px-4 py-2 rounded w-64 focus:outline-none focus:ring focus:ring-black/20"
        />

        {/* CART */}
        <button
          onClick={onCartClick}
          className="relative flex items-center gap-2"
        >
          <div className="flex items-center gap-2">
            <ShoppingBag size={22} className="text-gray-700" />
            <span className="font-medium">Keranjang</span>
        </div>

          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-black text-white px-2 py-1 rounded-full text-xs">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
