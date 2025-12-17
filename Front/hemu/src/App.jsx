import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import AdminContactDashboard from "./Component/Admin/admin";
import TrackVisitor from "./Component/TrackVisitor";
import Blocked from "./Component/Blocked";

function App() {
  return (
    <>
      {/* Track visitor on every page */}
      <TrackVisitor />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminContactDashboard />} />
        <Route path="/blocked" element={<Blocked />} />
      </Routes>
    </>
  );
}

export default App;
