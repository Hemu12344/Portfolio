import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AdminContactDashboard from "./Component/Admin/admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Website */}
        <Route path="/" element={<Home />} />
        {/* Admin Page (Hidden unless URL is used) */}
        <Route path="/admin" element={<AdminContactDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
