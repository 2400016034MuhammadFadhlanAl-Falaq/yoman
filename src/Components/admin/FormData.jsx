export default function FormData({ form, setForm, onAdd }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow mb-6">
      <input
        className="border p-2 mr-2 rounded"
        placeholder="Nama Produk"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        className="border p-2 mr-2 rounded"
        placeholder="Harga"
        type="number"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      />

      <button onClick={onAdd} className="bg-green-600 text-white px-4 py-2 rounded">
        Tambah
      </button>
    </div>
  );
}
