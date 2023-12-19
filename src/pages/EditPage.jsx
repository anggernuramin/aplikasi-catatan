import React, { useEffect, useState } from "react";
import BackHome from "../components/BackHome";
import { useNavigate, useParams } from "react-router-dom";
// import { editNote, getNote } from "../utils/local-data";
import LayoutNoted from "../Layout/LayoutNoted";
import HeaderBanner from "../components/HeaderBanner";
import Form from "../components/noted/Form";

const EditPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [detailNote, setDetailNote] = useState({});
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    setDetailNote(getNote(id));
  }, [id]);
  useEffect(() => {
    if (detailNote.title) {
      setTitle(detailNote?.title);
    }
  }, [detailNote]);

  const submitEditNoted = (e) => {
    if (!title || !body) {
      alert("Input tidak boleh kosong. Pastikan telah mengisi Judul dan Catatan.");
      return;
    }
    e.preventDefault();
    editNote({
      id,
      title,
      body,
    });
    navigate("/");
  };
  return (
    <>
      <HeaderBanner title="Edit Noted Apps" description="Ubah dan perbarui catatan pribadi Anda dengan mudah di halaman Edit Noted Apps. Edit judul dan body dengan cepat." />
      <LayoutNoted>
        <BackHome />
        <Form page="Edit" title={title} setTitle={setTitle} setBody={setBody} submitNoted={submitEditNoted} />
      </LayoutNoted>
    </>
  );
};

export default EditPage;
