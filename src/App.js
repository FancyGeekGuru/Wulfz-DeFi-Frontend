import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Wulfz from "./screen/wulfz";
import DashBoard from "./screen/dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Wulfz />} />
      <Route path="dashboard" element={<DashBoard />} />
    </Routes>
  );
}

export default App;
