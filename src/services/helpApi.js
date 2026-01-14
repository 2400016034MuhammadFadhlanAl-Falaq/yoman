// src/services/helpApi.js

export const getHelpActions = async () => {
  return [
    {
      id: 1,
      title: "Track Parcel",
      icon: "📦",
      route: "/help/track-parcel",
    },
    {
      id: 2,
      title: "Pembayaran",
      icon: "💳",
      route: "/help/payment",
    },
    {
      id: 3,
      title: "Akun & Keamanan",
      icon: "👤",
      route: "/help/account",
    },
  ];
};

export const getFAQs = async () => {
  return [
    { id: 1, title: "Bagaimana cara melacak pesanan?", answer: "Masuk ke halaman tracking, masukkan nomor resi, lalu cek status." },
    { id: 2, title: "Berapa lama pengiriman?", answer: "Pengiriman biasanya memakan waktu 2-5 hari kerja tergantung lokasi." },
    { id: 3, title: "Bagaimana cara hubungi CS?", answer: "Kamu bisa chat CS melalui tombol WhatsApp di Help Center." },
  ];
};

// src/data/helpData.js
export const faqs = [
  {
    id: 1,
    question: "Bagaimana cara memesan produk?",
    answer: "Untuk memesan, pilih produk → masukkan ke keranjang → checkout."
  },
  {
    id: 2,
    question: "Apakah ada ongkos kirim gratis?",
    answer: "Gratis ongkir untuk pembelian di atas Rp500.000."
  },
  {
    id: 3,
    question: "Bagaimana cara tracking pesanan?",
    answer: "Masuk ke halaman tracking, masukkan nomor resi, lalu cek status."
  },
];
