import React from "react";
import { FaLanguage, FaMoon, FaSun, FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="container">
      <div className="wrapper-navbar">
        <button title="ubah bahasa">
          <FaLanguage className="icon" />
        </button>
        <button title="ubah tema">
          <FaMoon />
        </button>
        <div className="user-info">
          <button title="logout">
            <FaArrowRight />
          </button>
          <span>Angger Nur Amin</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
