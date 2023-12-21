import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export const useChangeLanguage = () => {
  return useContext(LanguageContext);
};
