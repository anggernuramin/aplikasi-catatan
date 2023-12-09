import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/style.css";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/notes/new" element={<AddPage />} />
    </Routes>
  </BrowserRouter>
);
