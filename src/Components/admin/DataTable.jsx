import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function DataTable({ products, onDelete, onUpdate }) {
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({});

  const startEdit = (p) => {
    setEditId(p.id);
    setForm(p);
  };

  const handleSave = () => {
    onUpdate(editId, form); // ✅ perbaikan kecil tapi penting
    setEditId(null);
  };

  return (
    <div className="bg-white rounded-xl shadow">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold text-gray-700">
          Daftar Produk
        </h2>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead>Nama</TableHead>
            <TableHead>Harga</TableHead>
            <TableHead>Stok</TableHead>
            <TableHead className="text-right">Aksi</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {products.map((p) => (
            <TableRow
              key={p.id}
              className="hover:bg-gray-50 transition"
            >
              <TableCell>
                {editId === p.id ? (
                  <Input
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                  />
                ) : (
                  p.name
                )}
              </TableCell>

              <TableCell>
                {editId === p.id ? (
                  <Input
                    type="number"
                    value={form.price}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        price: +e.target.value,
                      })
                    }
                  />
                ) : (
                  `Rp ${p.price.toLocaleString("id-ID")}`
                )}
              </TableCell>

              <TableCell>
                {editId === p.id ? (
                  <Input
                    type="number"
                    value={form.stock}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        stock: +e.target.value,
                      })
                    }
                  />
                ) : (
                  p.stock
                )}
              </TableCell>

              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  {editId === p.id ? (
                    <Button size="sm" onClick={handleSave}>
                      Simpan
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => startEdit(p)}
                    >
                      Edit
                    </Button>
                  )}

                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => onDelete(p.id)}
                  >
                    Hapus
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
