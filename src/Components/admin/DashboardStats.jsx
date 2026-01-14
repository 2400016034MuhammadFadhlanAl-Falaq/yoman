import StatCard from "./StatCard";

export default function DashboardStats() {
  return (
    <section>
      <h2 className="text-lg font-semibold mb-4 text-gray-700">
        Ringkasan Dashboard
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Total Produk"
          value="128"
          color="border-red-500"
        />
        <StatCard
          title="Total Order"
          value="1,283"
          color="border-green-500"
        />
        <StatCard
          title="Pendapatan"
          value="Rp 9.000.000"
          color="border-blue-500"
        />
        <StatCard
          title="Pengguna"
          value="563"
          color="border-yellow-500"
        />
      </div>
    </section>
  );
}
