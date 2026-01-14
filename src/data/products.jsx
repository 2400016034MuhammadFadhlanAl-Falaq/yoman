const products = [
  // ===== LAPTOP =====
  {
    id: 1,
    name: "Laptop ASUS VivoBook 14",
    price: 7499000,
    category: "Laptop",
    stock: 12,
    rating: 4.6,
    image: "src/assets/products/vivo book14.jpg",
    description:
      "Laptop ASUS VivoBook 14 dirancang tipis dan ringan untuk menunjang produktivitas kerja dan kuliah dengan performa stabil dan hemat daya.",
    specifications: {
      processor: "Intel Core i5 Gen-11",
      ram: "8 GB DDR4",
      storage: "512 GB SSD",
      display: "14 inch Full HD (1920x1080)",
      gpu: "Intel Iris Xe Graphics",
      battery: "3-Cell 42Wh",
      os: "Windows 11 Home"
    }
  },
  {
    id: 2,
    name: "Laptop Acer Aspire 5",
    price: 8299000,
    category: "Laptop",
    stock: 10,
    rating: 4.7,
    image: "src/assets/products/aspire 5.jpg",
    description:
      "Laptop Acer Aspire 5 cocok untuk multitasking dengan layar Full HD dan performa andal untuk kebutuhan kerja dan hiburan.",
    specifications: {
      processor: "AMD Ryzen 5 5500U",
      ram: "8 GB DDR4",
      storage: "512 GB SSD",
      display: "15.6 inch Full HD",
      gpu: "AMD Radeon Graphics",
      battery: "48Wh",
      os: "Windows 11 Home"
    }
  },
  {
    id: 3,
    name: "Laptop Lenovo Gaming",
    price: 12999000,
    category: "Laptop",
    stock: 6,
    rating: 4.8,
    image: "src/assets/products/images (3).jpg",
    description:
      "Laptop Lenovo Gaming dengan performa tinggi untuk gaming dan pekerjaan berat seperti editing dan rendering.",
    specifications: {
      processor: "Intel Core i7 Gen-12",
      ram: "16 GB DDR4",
      storage: "1 TB SSD",
      display: "15.6 inch Full HD 144Hz",
      gpu: "NVIDIA GTX 1650",
      battery: "60Wh",
      os: "Windows 11 Home"
    }
  },

  // ===== AKSESORIS =====
  {
    id: 4,
    name: "Wireless Mouse Logitech",
    price: 199000,
    category: "Aksesoris",
    stock: 30,
    rating: 4.7,
    image: "src/assets/products/download (1).jpg",
    description:
      "Mouse wireless Logitech dengan desain ergonomis dan presisi tinggi untuk penggunaan harian.",
    specifications: {
      connectivity: "Wireless 2.4GHz",
      dpi: "1000 DPI",
      battery: "AA Battery",
      compatibility: "Windows, macOS"
    }
  },
  {
    id: 5,
    name: "Keyboard Mechanical RGB",
    price: 459000,
    category: "Aksesoris",
    stock: 18,
    rating: 4.8,
    image: "src/assets/products/download (2).jpg",
    description:
      "Keyboard mechanical dengan lampu RGB dan switch responsif untuk gaming dan mengetik.",
    specifications: {
      switchType: "Outemu Blue",
      layout: "Full Size",
      backlight: "RGB",
      connectivity: "USB Wired"
    }
  },
  {
    id: 6,
    name: "Headset Bluetooth",
    price: 349000,
    category: "Audio",
    stock: 22,
    rating: 4.5,
    image: "src/assets/products/download (3).jpg",
    description:
      "Headset bluetooth dengan suara jernih dan mikrofon yang jelas untuk komunikasi.",
    specifications: {
      connectivity: "Bluetooth 5.0",
      batteryLife: "Up to 10 Hours",
      microphone: "Built-in Mic",
      noiseCancellation: "Passive"
    }
  },

  // ===== ELEKTRONIK =====
  {
    id: 7,
    name: "Smart TV 43 Inch",
    price: 4599000,
    category: "Elektronik",
    stock: 8,
    rating: 4.6,
    image: "src/assets/products/download (4).jpg",
    description:
      "Smart TV 43 inci dengan kualitas gambar tajam dan dukungan aplikasi streaming.",
    specifications: {
      resolution: "Full HD (1920x1080)",
      screenSize: "43 Inch",
      os: "Android TV",
      connectivity: "HDMI, USB, WiFi"
    }
  },
  {
    id: 8,
    name: "Speaker Bluetooth",
    price: 299000,
    category: "Elektronik",
    stock: 25,
    rating: 4.4,
    image: "src/assets/products/231874613o.jpg",
    description:
      "Speaker portable dengan bass kuat dan desain ringkas.",
    specifications: {
      outputPower: "10W",
      batteryLife: "Up to 8 Hours",
      connectivity: "Bluetooth",
      waterproof: "IPX5"
    }
  },
  {
    id: 9,
    name: "Power Bank 20.000mAh",
    price: 279000,
    category: "Elektronik",
    stock: 35,
    rating: 4.7,
    image: "src/assets/products/download (5).jpg",
    description:
      "Power bank berkapasitas besar dengan dukungan fast charging.",
    specifications: {
      capacity: "20.000 mAh",
      output: "22.5W",
      fastCharging: "Yes",
      ports: "USB-A, USB-C"
    }
  },

  // ===== GAMING =====
  {
    id: 10,
    name: "Gaming Mouse RGB",
    price: 259000,
    category: "Gaming",
    stock: 20,
    rating: 4.8,
    image: "src/assets/products/images (4).jpg",
    description:
      "Mouse gaming dengan DPI tinggi dan efek RGB.",
    specifications: {
      dpi: "7200 DPI",
      sensor: "Optical Sensor",
      lighting: "RGB",
      connectivity: "USB Wired"
    }
  },
  {
    id: 11,
    name: "Gaming Chair Pro",
    price: 3199000,
    category: "Gaming",
    stock: 5,
    rating: 4.9,
    image: "src/assets/products/download (6).jpg",
    description:
      "Kursi gaming ergonomis dengan desain premium untuk kenyamanan maksimal.",
    specifications: {
      material: "PU Leather",
      adjustable: "Yes",
      maxLoad: "150 kg",
      armrest: "Adjustable"
    }
  },
  {
    id: 12,
    name: "Game Controller",
    price: 399000,
    category: "Gaming",
    stock: 14,
    rating: 4.6,
    image: "src/assets/products/id-11134207-7r98t-lxw2dng5nrkr88.jpg",
    description:
      "Controller wireless kompatibel PC dan Android.",
    specifications: {
      connectivity: "Bluetooth",
      battery: "600 mAh",
      compatibility: "PC, Android",
      vibration: "Dual Vibration"
    }
  },
  {
    id: 13,
    name: "ROG Phone 6 Pro",
    price: 4599000,
    category: "Smartphone",
    stock: 20,
    rating: 4.7,
    image: "src/assets/products/download (7).jpg",
    description:
      "Smartphone gaming dengan performa tinggi dan layar refresh rate tinggi.",
    specifications: {
      processor: "Snapdragon 8+ Gen 1",
      ram: "12 GB",
      storage: "256 GB",
      display: "6.78 inch AMOLED 165Hz",
      battery: "6000 mAh",
      camera: "50 MP"
    }
  },
  {
    id: 14,
    name: "ROG Audio",
    price: 899000,
    category: "Audio",
    stock: 30,
    rating: 4.8,
    image: "src/assets/products/download (8).jpg",
    description:
      "Headphone wireless dengan bass kuat dan fitur noise cancelling.",
    specifications: {
      driver: "40mm",
      connectivity: "Bluetooth 5.2",
      batteryLife: "Up to 30 Hours",
      noiseCancellation: "Active"
    }
  }
];

export default products;
