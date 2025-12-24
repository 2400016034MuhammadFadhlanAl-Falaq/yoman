import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-red-600">
        
      </h1>

      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Product Store</h1>

        <Home />
        <AdminDashboard />
      </div>
    </div>
  );
}

export default App;
