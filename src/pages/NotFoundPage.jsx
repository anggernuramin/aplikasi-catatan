import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="container">
      <div className="container-error">
        <img className="ops" src="/public/404.svg" />
        <br />
        <h3>
          Halaman yang Anda cari tidak ditemukan.
          <br />
        </h3>
        <br />
        <a className="buton" onClick={goBack}>
          Kembali
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
