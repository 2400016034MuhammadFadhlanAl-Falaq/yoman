import { NavLink } from "react-router-dom";
import { LayoutDashboard, Package } from "lucide-react";

export default function AdminSidebar() {
  return (
    <aside className="w-64 min-h-screen bg-neutral-900 text-white p-6">
      <h1 className="text-xl font-bold mb-8">YOMAN Admin</h1>

      <nav className="space-y-4">
        <NavLink
          to="/admin"
          className="flex items-center gap-3 hover:text-neutral-300"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </NavLink>

        <NavLink
          to="/admin"
          className="flex items-center gap-3 hover:text-neutral-300"
        >
          <Package size={20} />
          Produk
        </NavLink>
      </nav>
    </aside>
  );
}
