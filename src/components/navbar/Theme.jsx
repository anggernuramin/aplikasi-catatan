import React, { useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useThemeContext } from "../../hooks/useThemeContext";

const Theme = () => {
  const { theme, toggleTheme } = useThemeContext();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <button onClick={toggleTheme} title="ubah tema">
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </button>
    </>
  );
};

export default Theme;
