import { useNavigate } from "react-router-dom";

export default function HelpCard({ title, description, icon, route }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => route && navigate(route)}
      className="cursor-pointer bg-white rounded-xl p-5 shadow hover:shadow-lg transition"
    >
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="font-semibold">{title}</h3>
      {description && (
        <p className="text-sm text-gray-500 mt-1">
          {description}
        </p>
      )}
    </div>
  );
}
