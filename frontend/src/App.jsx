import {Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Prediction from "./pages/Prediction";
import History from "./pages/History";

function App() {
  return (
    
    <Routes>
       {/* Layout Route */}
        <Route path="/" element={<MainLayout />}>

          {/* Nested Pages */}
          <Route index element={<Dashboard />} />
          <Route path="prediction" element={<Prediction />} />
          <Route path="history" element={<History />} />

        </Route>
    </Routes>
    
  );
}

export default App;