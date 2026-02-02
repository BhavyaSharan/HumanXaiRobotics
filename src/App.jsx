import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import Internship from "./pages/internship";
import RobotsPage from "./pages/RobotsPage"; // ✅ Add this

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/robots" element={<RobotsPage />} /> {/* ✅ Correct */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
