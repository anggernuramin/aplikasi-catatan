import React from "react";
import { FaLanguage } from "react-icons/fa";
import { useChangeLanguage } from "../../hooks/useChangeLanguage";

const Language = () => {
  const { language, toggleLanguage } = useChangeLanguage();
  console.log("bahasa", language);
  return (
    <>
      <button onClick={toggleLanguage} title="ubah bahasa">
        <FaLanguage />
      </button>
    </>
  );
};

export default Language;
