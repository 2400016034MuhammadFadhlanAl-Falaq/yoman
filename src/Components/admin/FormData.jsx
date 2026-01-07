import { useState } from "react";

function FormData({ setProducts }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price) return;

    setProducts((prev) => [
      ...prev,
      {
        id: Date.now(),
        name,
        price: Number(price),
      },
    ]);

    setName("");
    setPrice("");
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="font-bold mb-4">Tambah Produk</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Nama Produk"
          className="border px-3 py-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Harga"
          className="border px-3 py-2 rounded"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700">
          Simpan
        </button>
      </form>
    </div>
  );
}

export default FormData;
