import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-5">
      <h2 className="text-2xl font-bold mb-8">CardioShield AI</h2>

      <nav className="flex flex-col gap-4">
        <Link to="/" className="hover:text-gray-300">Dashboard</Link>
        <Link to="/prediction" className="hover:text-gray-300">New Prediction</Link>
        <Link to="/history" className="hover:text-gray-300">History</Link>
      </nav>
    </div>
  );
}

export default Sidebar;