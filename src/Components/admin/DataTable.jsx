export default function DataTable({ products, onDelete }) {
  return (
    <table className="w-full bg-white rounded-xl shadow">
      <thead>
        <tr className="border-b">
          <th className="p-3 text-left">Nama</th>
          <th className="p-3 text-left">Harga</th>
          <th className="p-3 text-center">Aksi</th>
        </tr>
      </thead>

      <tbody>
        {products.map((p) => (
          <tr key={p.id} className="border-b">
            <td className="p-3">{p.name}</td>
            <td className="p-3">
              Rp {p.price.toLocaleString("id-ID")}
            </td>
            <td className="p-3 text-center">
              <button
                onClick={() => onDelete(p.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Hapus
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
