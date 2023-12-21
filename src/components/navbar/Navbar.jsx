import React from "react";
import Theme from "./Theme";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ThemeContextProvider } from "../../contexts/ThemeContext";
import Language from "./Language";
import { useUser } from "../../hooks/useUser";

const Navbar = () => {
  const navigate = useNavigate("");
  const { user, setUser } = useUser();
  const onHandlerLogout = () => {
    localStorage.removeItem("accessToken");
    setUser(null);
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
          {user ? (
            <>
              <button title="logout" onClick={onHandlerLogout}>
                <FaArrowRight />
              </button>
              <span>{user?.name}</span>
            </>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
