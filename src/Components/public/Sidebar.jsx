const Sidebar = ({ onSelectCategory }) => {
  const categories = [
    "All",
    "Laptop",
    "Gaming",
    "Elektronik",
    "Aksesoris",
    "Smartphone",
    "Audio",
  ];

  return (
    <aside className="bg-white border rounded-lg">
      <h3 className="bg-red-600 text-white px-4 py-3 font-semibold rounded-t-lg">
        CATEGORIES
      </h3>

      <ul className="divide-y">
        {categories.map((cat) => (
          <li key={cat}>
            <button
              onClick={() => onSelectCategory(cat)}
              className="w-full text-left px-4 py-3 hover:bg-gray-100 text-sm"
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
