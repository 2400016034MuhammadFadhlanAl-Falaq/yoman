export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      {/* TOP FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">YOMANSHOP</h2>
          <p className="text-sm leading-relaxed">
            YOMANSHOP adalah toko online terpercaya yang menyediakan produk
            elektronik, laptop, aksesoris, dan gaming dengan harga terbaik.
          </p>
        </div>

        {/* INFORMATION */}
        <div>
          <h3 className="text-white font-semibold mb-4">Information</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* CUSTOMER SERVICE */}
        <div>
          <h3 className="text-white font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">My Account</li>
            <li className="hover:text-white cursor-pointer">Order Tracking</li>
            <li className="hover:text-white cursor-pointer">Wishlist</li>
            <li className="hover:text-white cursor-pointer">FAQ</li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="text-white font-semibold mb-4">Newsletter</h3>
          <p className="text-sm mb-4">
            Dapatkan promo dan produk terbaru langsung ke email kamu.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-3 py-2 rounded-l bg-gray-800 border border-gray-700 text-sm focus:outline-none"
            />
            <button className="bg-red-600 px-4 py-2 rounded-r text-white text-sm hover:bg-red-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {new Date().getFullYear()} YOMANSHOP. All Rights Reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
           <a
            href="https://www.facebook.com/usernamekamu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white cursor-pointer"
          >
            Facebook
          </a>
            <a
            href="https://www.instagram.com/mhmmdfadhln_"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white cursor-pointer"
          >
            Instagram
          </a>  
            <a
            href="https://wa.me/6282255742470"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white cursor-pointer"
>
                 WhatsApp
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}
