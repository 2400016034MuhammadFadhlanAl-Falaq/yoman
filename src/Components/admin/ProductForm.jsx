import { useState } from "react";

export default function ProductForm({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    stock: 0, // ✅ DI SINI
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);

    setForm({
      name: "",
      price: "",
      category: "",
      stock: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow space-y-3">
      <input
        placeholder="Nama Produk"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="border p-2 rounded w-full"
      />

      <input
        type="number"
        placeholder="Harga"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
        className="border p-2 rounded w-full"
      />

      <input
        placeholder="Kategori"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
        className="border p-2 rounded w-full"
      />

      <input
        type="number"
        placeholder="Stok"
        value={form.stock}
        onChange={(e) =>
          setForm({ ...form, stock: Number(e.target.value) })
        }
        className="border p-2 rounded w-full"
      />

      <button className="bg-black text-white px-4 py-2 rounded">
        Tambah Produk
      </button>
    </form>
  );
}
