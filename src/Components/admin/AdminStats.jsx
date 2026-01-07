import { Card, CardContent } from "@/components/ui/card";

export default function AdminStats({ products }) {
  const totalProducts = products.length;

  const totalStock = products.reduce(
    (sum, p) => sum + (p.stock || 0),
    0
  );

  const totalValue = products.reduce(
    (sum, p) => sum + p.price * (p.stock || 0),
    0
  );

  const lowStock = products.filter((p) => p.stock <= 5);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card>
        <CardContent className="p-4">
          <p className="text-sm text-gray-500">Total Produk</p>
          <h2 className="text-2xl font-bold">{totalProducts}</h2>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <p className="text-sm text-gray-500">Total Stok</p>
          <h2 className="text-2xl font-bold">{totalStock}</h2>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <p className="text-sm text-gray-500">Nilai Inventori</p>
          <h2 className="text-2xl font-bold">
            Rp {totalValue.toLocaleString("id-ID")}
          </h2>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <p className="text-sm text-gray-500">Stok Menipis</p>
          <h2 className="text-2xl font-bold text-red-500">
            {lowStock.length}
          </h2>
        </CardContent>
      </Card>
    </div>
  );
}
