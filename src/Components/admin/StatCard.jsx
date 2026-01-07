export default function StatCard({ title, value, color }) {
  return (
    <div className={`bg-white border-l-4 ${color} p-4 rounded shadow`}>
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="text-2xl font-bold">{value}</h2>
    </div>
  );
}
