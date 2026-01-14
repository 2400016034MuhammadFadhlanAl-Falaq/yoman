import { useState, useEffect } from "react";
import {
  getProducts,
  addProduct,
  deleteProduct,
  updateProduct,
} from "../services/api";
import {
  collection,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../lib/firebase";
import { updateOrderStatus } from "../services/orderService";
import AdminStats from "../Components/admin/AdminStats";
import AdminHeader from "../Components/admin/AdminHeader";
import AdminSidebar from "../Components/admin/AdminSidebar";
import ProductForm from "../Components/admin/ProductForm";
import DataTable from "../Components/admin/DataTable";
import RevenueChart from "../Components/admin/charts/RevenueChart";
import { useOrders } from "../context/OrderContext";

/* 🦴 SKELETON TABLE */
function TableSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow p-6 space-y-4">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="h-10 bg-gray-200 rounded animate-pulse"
        />
      ))}
    </div>
  );
}

/* ❌ ERROR BOX */
function ErrorBox({ message }) {
  return (
    <div className="bg-red-100 text-red-700 p-4 rounded">
      {message}
    </div>
  );
}

export default function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [revenue, setRevenue] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [orders, setOrders] = useState([]);
  const handleUpdate = async (id, data) => {
    await updateProduct(id, data);
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...data } : p))
    );
  };
  useEffect(() => {
  const unsub = onSnapshot(
    collection(db, "orders"),
    (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setOrders(data);

      const total = data.reduce(
        (sum, order) => sum + (order.price || 0),
        0
      );
      setRevenue(total);
    }
  );

  return () => unsub();
}, []);

  /* 🔹 READ PRODUCT */
  useEffect(() => {
    setLoading(true);
    setError(null);

    getProducts()
      .then((data) => setProducts(data))
      .catch(() => setError("Gagal mengambil data produk"))
      .finally(() => setLoading(false));
  }, []);

  /* 🔹 HITUNG REVENUE DARI ORDER CHECKOUT */
  useEffect(() => {
    const total = orders.reduce(
      (sum, order) => sum + (order.price || 0),
      0
    );
    setRevenue(total);
  }, [orders]);

  /* ➕ POST PRODUCT */
  const handleAdd = async (product) => {
    const newProduct = await addProduct(product);
    setProducts((prev) => [...prev, newProduct]);
  };

  /* ❌ DELETE PRODUCT */
  const handleDelete = async (id) => {
    await deleteProduct(id);
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />

      <div className="flex-1">
        <AdminHeader
          onSearch={(keyword) => {
            console.log("Search:", keyword);
          }}
        />

        <div className="p-6 space-y-6">
          {/* 📊 ADMIN STATS */}
          {products.length === 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg shadow p-4 animate-pulse h-24"
                />
              ))}
            </div>
          ) : (
            <AdminStats
              totalProducts={products.length}
              totalCategory={3}
              revenue={revenue}
              totalOrders={orders.length}
            />
          )}

          {/* 📈 CHART */}
          <RevenueChart orders={orders} />

          {/* 📦 ORDER LIST */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Daftar Pesanan</h2>

            {orders.length === 0 ? (
              <p className="text-gray-500">Belum ada pesanan.</p>
            ) : (
              <table className="w-full border">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border p-2">Produk</th>
                    <th className="border p-2">Harga</th>
                    <th className="border p-2">Status</th>
                    <th className="border p-2">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td className="border p-2">
                        {order.productName}
                      </td>
                      <td className="border p-2">
                        Rp {order.price.toLocaleString()}
                      </td>
                      <td className="border p-2">
                        {order.status}
                      </td>
                      <td className="border p-2">
                        <select
                          value={order.status}
                          onChange={(e) =>
                            updateOrderStatus(
                              order.id,
                              e.target.value
                            )
                          }
                          className="border rounded px-2 py-1"
                        >
                          <option value="Pending">
                            Pending
                          </option>
                          <option value="Shipped">
                            Shipped
                          </option>
                          <option value="Completed">
                            Completed
                          </option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* ➕ FORM */}
          <ProductForm onAdd={handleAdd} />

          {/* 📋 TABLE */}
          {loading && <TableSkeleton />}
          {error && <ErrorBox message={error} />}
          {!loading && !error && (
            <DataTable
              products={products}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
            />
          )}
        </div>
      </div>
    </div>
  );
}
