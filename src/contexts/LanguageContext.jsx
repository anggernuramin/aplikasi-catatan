import { createContext, useMemo, useState } from "react";

export const LanguageContext = createContext();

export const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem("language") || "id");

  const toggleLanguage = () =>
    setLanguage((prevState) => {
      const newLanguage = prevState === "id" ? "en" : "id";
      localStorage.setItem("language", newLanguage);
      return newLanguage;
    });

  const initialState = useMemo(() => {
    return {
      language,
      toggleLanguage,
    };
  }, [language]);

  return <LanguageContext.Provider value={initialState}>{children}</LanguageContext.Provider>;
};
