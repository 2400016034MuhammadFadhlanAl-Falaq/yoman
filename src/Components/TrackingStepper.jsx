export default function TrackingStepper({ history }) {
  return (
    <div className="space-y-4">
      {history.map((item, i) => (
        <div key={i} className="flex items-start gap-4">
          <div className="w-3 h-3 mt-1 rounded-full bg-green-500" />
          <div>
            <p className="font-medium">{item.desc}</p>
            <p className="text-xs text-gray-500">{item.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
