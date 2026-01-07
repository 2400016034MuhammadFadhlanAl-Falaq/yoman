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

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nama</TableHead>
          <TableHead>Harga</TableHead>
          <TableHead>Stock</TableHead>
          <TableHead>Aksi</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {products.map((p) => (
          <TableRow key={p.id}>
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
                    setForm({ ...form, price: +e.target.value })
                  }
                />
              ) : (
                `Rp ${p.price.toLocaleString()}`
              )}
            </TableCell>

            <TableCell>
              {editId === p.id ? (
                <Input
                  type="number"
                  value={form.stock}
                  onChange={(e) =>
                    setForm({ ...form, stock: +e.target.value })
                  }
                />
              ) : (
                p.stock
              )}
            </TableCell>

            <TableCell className="flex gap-2">
              {editId === p.id ? (
                <Button
                  onClick={() => {
                    onUpdate(form);
                    setEditId(null);
                  }}
                >
                  Simpan
                </Button>
              ) : (
                <Button onClick={() => startEdit(p)}>Edit</Button>
              )}

              <Button
                variant="destructive"
                onClick={() => onDelete(p.id)}
              >
                Hapus
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
