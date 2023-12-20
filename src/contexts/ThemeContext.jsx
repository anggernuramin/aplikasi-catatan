import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () =>
    setTheme((prevState) => {
      const newTheme = prevState == "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme; // mengembakikan dengan nilai state terbaru
    });

  const initialState = {
    theme,
    toggleTheme,
  };

  return <ThemeContext.Provider value={initialState}>{children}</ThemeContext.Provider>;
};
