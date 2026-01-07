import { Truck, ShieldCheck, Headphones, Gift } from "lucide-react";

const items = [
  {
    icon: <Truck size={28} />,
    title: "FREE SHIPPING",
    desc: "Gratis ongkir seluruh Indonesia",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "100% SATISFACTION",
    desc: "Produk original & terpercaya",
  },
  {
    icon: <Headphones size={28} />,
    title: "24/7 SUPPORT",
    desc: "Customer service siap membantu",
  },
  {
    icon: <Gift size={28} />,
    title: "GREAT DAILY DEALS",
    desc: "Promo menarik setiap hari",
  },
];

export default function Benefits() {
  return (
    <section className="bg-white border-t py-10 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 border p-4 rounded-lg hover:shadow transition"
          >
            <div className="text-red-500">{item.icon}</div>
            <div>
              <h4 className="font-semibold text-sm">{item.title}</h4>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
