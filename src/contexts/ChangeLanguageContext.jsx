import { createContext, useMemo, useState } from "react";

export const ChangeLanguageContext = createContext();

export const ChangeLanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "id"
  );

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

  return (
    <ChangeLanguageContext.Provider value={initialState}>
      {children}
    </ChangeLanguageContext.Provider>
  );
};
