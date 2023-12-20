import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const NotFoundPage = () => {
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
          Halaman yang Anda cari tidak ditemukan.
          <br />
        </h3>
        <br />
        <a className="buton" onClick={goBack}>
          Kembali
        </a>
      </section>
    </div>
  );
};

export default NotFoundPage;
