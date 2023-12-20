import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useChangeLanguage } from "../hooks/useChangeLanguage";

const BackHome = () => {
  const { language } = useChangeLanguage();

  return (
    <div className="wrapper-icon-home">
      <Link to="/">
        <FaHome className="icon-home" />
        <p>{language === "id" ? "Beranda" : "Home"}</p>
      </Link>
    </div>
  );
};

export default BackHome;
