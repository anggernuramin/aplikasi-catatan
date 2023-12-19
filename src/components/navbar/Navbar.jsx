import React from "react";
import { FaLanguage, FaMoon, FaSun, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate("");
  const onHandlerLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };
  return (
    <nav className="container">
      <div className="wrapper-navbar">
        <button title="ubah bahasa">
          <FaLanguage />
        </button>
        <button title="ubah tema">
          <FaMoon />
        </button>
        <div className="user-info">
          <button title="logout" onClick={onHandlerLogout}>
            <FaArrowRight />
          </button>
          <span>Angger Nur Amin</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
