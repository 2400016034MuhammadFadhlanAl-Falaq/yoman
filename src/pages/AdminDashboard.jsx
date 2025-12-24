import { useState } from "react";
import AdminHeader from "../Components/admin/AdminHeader";
import FormData from "../Components/admin/FormData";
import DataTable from "../Components/admin/DataTable";

export default function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", price: "" });

  const handleAdd = () => {
    if (!form.name || !form.price) return;

    setProducts([
      ...products,
      { id: Date.now(), name: form.name, price: Number(form.price) }
    ]);

    setForm({ name: "", price: "" });
  };

  const handleDelete = (id) =>
    setProducts(products.filter((p) => p.id !== id));

  return (
    <>
      <AdminHeader />

      <FormData form={form} setForm={setForm} onAdd={handleAdd} />

      <DataTable products={products} onDelete={handleDelete} />
    </>
  );
}
