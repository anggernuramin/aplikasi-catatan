import React from "react";
import PropTypes from "prop-types";
import Navbar from "./navbar/Navbar";
import { useChangeLanguage } from "../hooks/useChangeLanguage";

const HeaderBanner = ({ title, description }) => {
  const { language } = useChangeLanguage();
  return (
    <>
      <Navbar />
      <header>
        <div className="container wrapper-head-bar">
          <div className="head-bar-image">
            <img src="/head-bar-image.png" alt="header image" />
          </div>
          <div className="head-bar-content">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
          <span className="watermark">
            {language === "id" ? "Oleh Angger Nur Amin" : "By Angger Nur Amin"}
          </span>
        </div>
      </header>
    </>
  );
};

HeaderBanner.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default HeaderBanner;
