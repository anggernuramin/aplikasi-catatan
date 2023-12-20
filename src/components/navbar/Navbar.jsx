import React from "react";
import Theme from "./Theme";
import { FaLanguage, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ThemeContextProvider } from "../../contexts/ThemeContext";
import Language from "./Language";

const Navbar = () => {
  const navigate = useNavigate("");
  const onHandlerLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };
  return (
    <nav className="container">
      <div className="wrapper-navbar">
        <Language />
        <ThemeContextProvider>
          <Theme />
        </ThemeContextProvider>
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
