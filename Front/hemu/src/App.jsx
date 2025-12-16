import { Routes, Route } from "react-router-dom";
import Home from "./Home"; // move your current UI here
import AdminContactDashboard from "./Component/Admin/admin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<AdminContactDashboard />} />
    </Routes>
  );
}

export default App;
