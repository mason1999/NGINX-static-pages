import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageA from "./pages/PageA";
import PageB from "./pages/PageB";
import PageC from "./pages/PageC";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageA />} />
        <Route path="/pageb" element={<PageB />} />
        <Route path="/pagec" element={<PageC />} />
      </Routes>
    </Router>
  );
};

export default App;
