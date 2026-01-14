import {
  Package,
  Layers,
  DollarSign,
  ShoppingCart,
} from "lucide-react";

function StatItem({ title, value, icon: Icon, color }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 flex items-center gap-4">
      <div
        className={`w-12 h-12 rounded-lg flex items-center justify-center ${color}`}
      >
        <Icon className="text-white" size={22} />
      </div>

      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h2 className="text-2xl font-bold">{value}</h2>
      </div>
    </div>
  );
}

export default function AdminStats({
  totalProducts,
  totalCategory,
  revenue,
  totalOrders,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
      <StatItem
        title="Total Produk"
        value={totalProducts}
        icon={Package}
        color="bg-red-500"
      />

      <StatItem
        title="Kategori"
        value={totalCategory}
        icon={Layers}
        color="bg-green-500"
      />

      <StatItem
        title="Pendapatan"
        value={`Rp ${revenue.toLocaleString("id-ID")}`}
        icon={DollarSign}
        color="bg-blue-500"
      />

      <StatItem
        title="Order"
        value={totalOrders}
        icon={ShoppingCart}
        color="bg-yellow-500"
      />
    </div>
  );
}
