import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { useChangeLanguage } from "../hooks/useChangeLanguage";

const NotFoundPage = () => {
  const { language } = useChangeLanguage();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="container">
      <Navbar />
      <section className="container-error">
        <img className="ops" src="/404.svg" />
        <br />
        <h3>
          {language === "id"
            ? "Halaman yang Anda cari tidak ditemukan."
            : "The page you are looking for could not be found."}
          <br />
        </h3>
        <br />
        <a className="buton" onClick={goBack}>
          {language === "id" ? "Kembali" : "Back"}
        </a>
      </section>
    </div>
  );
};

export default NotFoundPage;
