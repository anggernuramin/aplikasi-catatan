import React, { useEffect, useState } from "react";
import BackHome from "../components/BackHome";
import { useNavigate, useParams } from "react-router-dom";
import { getNote } from "../utils/local-data";
import { edit } from "../utils/content-bahasa";
import LayoutNoted from "../Layout/LayoutNoted";
import HeaderBanner from "../components/HeaderBanner";
import Form from "../components/noted/Form";
import { useChangeLanguage } from "../hooks/useChangeLanguage";

const EditPage = () => {
  const { language } = useChangeLanguage();
  const navigate = useNavigate();
  const { id } = useParams();
  const [detailNote, setDetailNote] = useState({});
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    (async () => {
      const { data } = await getNote(id);
      setDetailNote(data);
      console.log(data, "res");
    })();
  }, [id]);

  useEffect(() => {
    if (detailNote.title) {
      setTitle(detailNote?.title);
    }
  }, [detailNote]);

  const submitEditNoted = (e) => {
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
    // editNote({
    //   id,
    //   title,
    //   body,
    // });
    navigate("/");
  };
  return (
    <>
      <HeaderBanner
        title={edit[language].title}
        description={edit[language].description}
      />
      <LayoutNoted>
        <BackHome />
        <Form
          page="Edit"
          title={title}
          setTitle={setTitle}
          setBody={setBody}
          submitNoted={submitEditNoted}
        />
      </LayoutNoted>
    </>
  );
};

export default EditPage;
