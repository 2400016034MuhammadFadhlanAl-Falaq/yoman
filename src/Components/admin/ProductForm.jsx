import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ProductForm({ onAdd }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onAdd({ name, price: Number(price) });
    setName("");
    setPrice("");
  };

  return (
    <form onSubmit={submit} className="flex gap-4">
      <Input
        placeholder="Nama Produk"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="number"
        placeholder="Harga"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <Button type="submit">Tambah</Button>
    </form>
  );
}
