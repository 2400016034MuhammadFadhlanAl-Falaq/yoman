export default function FAQItem({ title }) {
  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow cursor-pointer hover:bg-gray-50">
      <span className="text-gray-700">{title}</span>
      <span className="text-gray-400">›</span>
    </div>
  );
}
