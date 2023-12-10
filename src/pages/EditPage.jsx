import React, { useEffect, useState } from "react";
import LayoutNoted from "../components/Layout/LayoutNoted";
import BackHome from "../components/BackHome";
import Header from "../components/Header";
import FormNoted from "../components/FormNoted";
import { useNavigate, useParams } from "react-router-dom";
import { editNote, getNote } from "../utils/local-data";

const EditPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [detailNote, setDetailNote] = useState({});
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  console.log(id);

  useEffect(() => {
    setDetailNote(getNote(id));
    console.log(detailNote);
  }, [id]);

  useEffect(() => {
    if (detailNote) {
      setTitle(detailNote?.title);
      setBody(detailNote?.body);
    }
  }, [detailNote]);

  const submitEditNoted = (e) => {
    if (!title || !body) {
      alert(
        "Input tidak boleh kosong. Pastikan telah mengisi Judul dan Catatan."
      );
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
      <Header
        title="Edit Noted Apps"
        description="Edit catatan pribadi Anda dengan lebih Mudah."
      />
      <LayoutNoted>
        <BackHome />
        <FormNoted
          page="Edit"
          title={title}
          body={body}
          setTitle={setTitle}
          setBody={setBody}
          submitNoted={submitEditNoted}
        />
      </LayoutNoted>
    </>
  );
};

export default EditPage;