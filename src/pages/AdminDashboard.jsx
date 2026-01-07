import AdminStats from "../Components/admin/AdminStats";
import { useState } from "react";
import AdminHeader from "../Components/admin/AdminHeader";
import AdminSidebar from "../Components/admin/AdminSidebar";
import ProductForm from "../Components/admin/ProductForm";
import DataTable from "../Components/admin/DataTable";

/* 🔢 STAT CARD COMPONENT (INLINE, AMAN) */
function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="text-2xl font-bold mt-1">{value}</h2>
    </div>
  );
}

export default function AdminDashboard() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Laptop Gaming",
      price: 15000000,
      category: "Laptop",
    },
    {
      id: 2,
      name: "Headset Gaming",
      price: 750000,
      category: "Aksesoris",
    },
  ]);

  const handleAdd = (product) => {
    setProducts([...products, { ...product, id: Date.now() }]);
  };

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* 🔴 SIDEBAR */}
      <AdminSidebar />

      {/* 📦 CONTENT */}
      <div className="flex-1">
        <AdminHeader />

        <div className="p-6 space-y-6">
          {/* 📊 DASHBOARD STATS */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <StatCard title="Total Produk" value={products.length} />
            <StatCard title="Total Kategori" value="3" />
            <StatCard title="Pendapatan" value="Rp 9.000.000" />
            <StatCard title="Order Masuk" value="128" />
          </div>

          {/* ➕ FORM */}
          <ProductForm onAdd={handleAdd} />

          {/* 📋 TABLE */}
          <DataTable
            products={products}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}
