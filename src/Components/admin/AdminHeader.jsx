import { useState } from "react";
import { Search, Bell } from "lucide-react";

function AdminHeader({ onSearch }) {
  const [keyword, setKeyword] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setKeyword(value);

    // kirim ke parent (AdminDashboard)
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <header className="bg-blue-600 text-white px-6 py-4 flex items-center justify-between">
      {/* LEFT */}
      <div>
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <p className="text-sm text-blue-100">
          Admin YOMAN STORE
        </p>
      </div>

      {/* CENTER SEARCH */}
      <div className="hidden md:flex items-center bg-white rounded-lg px-3 py-2 text-gray-700 w-72">
        <Search size={18} className="mr-2 text-gray-400" />
        <input
          type="text"
          value={keyword}
          onChange={handleSearch}
          placeholder="Search..."
          className="outline-none w-full text-sm"
        />
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <button className="relative hover:opacity-80">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-xs w-4 h-4 flex items-center justify-center rounded-full">
            3
          </span>
        </button>

        <img
          src="src/assets/products/fadhlan.jpg"
          alt="admin"
          className="w-10 h-12 rounded-full border-2 border-white"
        />
      </div>
    </header>
    
  );
}
localStorage.setItem("isAdmin", "true");
localStorage.removeItem("isAdmin");

export default AdminHeader;
