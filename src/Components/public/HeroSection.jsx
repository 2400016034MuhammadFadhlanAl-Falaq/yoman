import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    title: "Vivi Book 14",
    subtitle: "Laptop Yang Sangat Powerfull",
    image: "src/assets/products/images (1).jpg",
    bg: "bg-gradient-to-r from-gray-800 to-yellow-600",
  },
  {
    id: 2,
    title: "Acer Aspire 5",
    subtitle: "Nyaman untuk gaming & coding",
    image: "/src/assets/products/images.jpg",
    bg: "bg-gradient-to-r from-gray-600 to-black-600",
  },
  {
    id: 3,
    title: "Mouse Wireless",
    subtitle: "Presisi tinggi tanpa kabel",
    image: "src/assets/products/download.jpg",
    bg: "bg-gradient-to-r from-purple-800 to-blue-800",
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  // 🔄 AUTO SLIDE
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-1000"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`min-w-full ${slide.bg} text-white`}
          >
            <div className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h1 className="text-4xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg mb-6">
                  {slide.subtitle}
                </p>
                <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition">
                  Buy Now
                </button>
              </div>

              <div className="flex justify-center">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="h-50 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 🔘 DOT INDICATOR */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
