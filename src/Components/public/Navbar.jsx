export default function Navbar({ cartCount }) {
  return (
    <nav className="bg-indigo-600 text-white py-3 shadow">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <h1 className="font-bold text-xl">Product Store</h1>

        <div className="flex gap-4 items-center">
          <button className="bg-white text-indigo-600 px-4 py-1 rounded">
            Home
          </button>

          <button className="bg-white text-indigo-600 px-4 py-1 rounded">
            Admin
          </button>

          {/* Badge keranjang */}
          <div className="bg-white text-indigo-600 px-3 py-1 rounded font-bold">
            🛒 {cartCount}
          </div>
        </div>
      </div>
    </nav>
  );
}
