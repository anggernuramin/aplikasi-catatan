import { useNavigate } from "react-router-dom";
import Form from "../components/noted/Form";
import { useState } from "react";
import { addNote } from "../utils/local-data";
import { add } from "../utils/content-bahasa";
import { useChangeLanguage } from "../hooks/useChangeLanguage";
import BackHome from "../components/BackHome";
import LayoutNoted from "../layouts/LayoutNoted";
import HeaderBanner from "../components/HeaderBanner";
import AuthprivateRoute from "../hoc/AuthPrivateRoute";

const AddPage = () => {
  const { language } = useChangeLanguage();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const submitAddNoted = (e) => {
    e.preventDefault();
    if (!title || !body) {
      const messageWarning =
        language === "id"
          ? "Input tidak boleh kosong. Pastikan telah mengisi Judul dan Catatan."
          : "Input cannot be empty. Please make sure to fill in the Title and Notes.";
      alert(messageWarning);
      e.preventDefault();
      return;
    }
    addNote({
      title,
      body,
    });
    navigate("/");
  };

  return (
    <>
      <HeaderBanner
        title={add[language].title}
        description={add[language].description}
      />
      <LayoutNoted>
        <BackHome />
        <Form
          page="Add"
          title={title}
          setTitle={setTitle}
          body={body}
          setBody={setBody}
          submitNoted={submitAddNoted}
        />
      </LayoutNoted>
    </>
  );
};

export default AuthprivateRoute(AddPage);
