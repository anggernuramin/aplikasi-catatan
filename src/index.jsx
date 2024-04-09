import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/style.css";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import DetailPage from "./pages/DetailPage";
import ArchivePage from "./pages/ArchivePage";
import NotFoundPage from "./pages/NotFoundPage";
import EditPage from "./pages/EditPage";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { LanguageContextProvider } from "./contexts/LanguageContext";
import { AuthUserContextProvider } from "./contexts/AuthUserContext";
import LayoutPage from "../src/Layout/LayoutPage";

const root = createRoot(document.getElementById("root"));
root.render(
  <LanguageContextProvider>
    <AuthUserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutPage />}>
            <Route index element={<HomePage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/notes/:id" element={<DetailPage />} />
            <Route path="/edit/:id" element={<EditPage />} />
            <Route path="/archives" element={<ArchivePage />} />
            <Route path="/archives/notes/:id" element={<DetailPage />} />
            <Route path="/notes/new" element={<AddPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthUserContextProvider>
  </LanguageContextProvider>
);
