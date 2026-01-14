import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
} from "lucide-react";

const menuClass =
  "flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition";

export default function AdminSidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-4">
      {/* LOGO */}
      <h1 className="text-xl font-bold mb-8 px-4">
        YOMAN<span className="text-blue-500">Admin</span>
      </h1>

      {/* MAIN */}
      <p className="text-xs text-gray-400 uppercase px-4 mb-2">
        Main
      </p>
      <nav className="space-y-1 mb-6">
        <NavLink
          to="/admin"
          end
          className={({ isActive }) =>
            `${menuClass} ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:bg-slate-800"
            }`
          }
        >
          <LayoutDashboard size={18} />
          Dashboard
        </NavLink>
      </nav>

      {/* MANAGEMENT */}
      <p className="text-xs text-gray-400 uppercase px-4 mb-2">
        Management
      </p>
      <nav className="space-y-1">
        <NavLink
          to="/admin/products"
          className={({ isActive }) =>
            `${menuClass} ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:bg-slate-800"
            }`
          }
        >
          <Package size={18} />
          Produk
        </NavLink>

        <NavLink
          to="/admin/orders"
          className={({ isActive }) =>
            `${menuClass} ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:bg-slate-800"
            }`
          }
        >
          <ShoppingCart size={18} />
          Orders
        </NavLink>

        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            `${menuClass} ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:bg-slate-800"
            }`
          }
        >
          <Users size={18} />
          Users
        </NavLink>
      </nav>
    </aside>
  );
}
