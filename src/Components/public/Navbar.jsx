import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          YOMAN<span className="text-neutral-500">SHOP</span>
        </Link>

        <div className="flex gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-neutral-500">
            Home
          </Link>
          <Link to="/admin" className="hover:text-neutral-500">
            
          </Link>
        </div>
      </div>
    </nav>
  );
}
