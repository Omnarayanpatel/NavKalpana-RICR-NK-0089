import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="p-6">
          <Outlet />
        </div>
      </div>

    </div>
  );
}

export default MainLayout;