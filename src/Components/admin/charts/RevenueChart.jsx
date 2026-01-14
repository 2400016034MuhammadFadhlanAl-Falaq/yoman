import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
} from "recharts";

export default function RevenueChart({ orders = [] }) {
  const hasOrders = orders.length > 0;

  //  Data chart (fallback jika belum ada order)
  const data = hasOrders
    ? orders.map((order, index) => ({
        name: `Order ${index + 1}`,
        revenue: Number(order.totalPrice) || 0,
      }))
    : [
        { name: "Start", revenue: 0 },
        { name: "No Order", revenue: 0 },
        { name: "End", revenue: 0 },
      ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* 📈 LINE CHART */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="font-semibold mb-4">Pendapatan</h3>

        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" hide />
            <YAxis domain={[0, "dataMax + 10000"]} />
            <Tooltip formatter={(v) => `Rp ${v.toLocaleString("id-ID")}`} />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>

        {!hasOrders && (
          <p className="text-center text-sm text-gray-400 mt-3">
            Belum ada transaksi
          </p>
        )}
      </div>

      {/* 📊 BAR CHART */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="font-semibold mb-4">Jumlah Order</h3>

        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" hide />
            <YAxis domain={[0, "dataMax + 10000"]} />
            <Tooltip formatter={(v) => `Rp ${v.toLocaleString("id-ID")}`} />
            <Bar
              dataKey="revenue"
              fill="#60a5fa"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>

        {!hasOrders && (
          <p className="text-center text-sm text-gray-400 mt-3">
            Data order belum tersedia
          </p>
        )}
      </div>
    </div>
  );
}
