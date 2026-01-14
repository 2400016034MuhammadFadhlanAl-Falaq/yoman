import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import ProductDetail from "./pages/ProductDetail";
import HelpCenter from "./pages/HelpCenter";
import HelpDetail from "./pages/HelpDetail";
import AdminRoute from "./Components/admin/AdminRoute";
import TrackParcel from "./pages/TrackParcel";






export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* route lama (AMAN) */}
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route 
        
          path="/admin"
            element={
        <AdminRoute>
        <AdminDashboard />
        </AdminRoute>
        }
        />
        {/* route baru Help Center */}
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/help/:id" element={<HelpCenter />} />
        <Route path="/help/:slug" element={<HelpDetail />} />
        <Route path="/help/track-parcel" element={<TrackParcel />} />

      </Routes>
    </BrowserRouter>
  );
}
