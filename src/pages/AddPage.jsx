import { useNavigate } from "react-router-dom";
import Form from "../components/noted/Form";
import { useState } from "react";
import { addNote } from "../utils/local-data";
import BackHome from "../components/BackHome";
import LayoutNoted from "../Layout/LayoutNoted";
import HeaderBanner from "../components/HeaderBanner";

const AddPage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const submitAddNoted = (e) => {
    if (!title || !body) {
      alert(
        "Input tidak boleh kosong. Pastikan telah mengisi Judul dan Catatan."
      );
      return;
    }
    e.preventDefault();
    addNote({
      title,
      body,
    });
    navigate("/");
  };

  return (
    <>
      <HeaderBanner
        title="Add Noted Apps"
        description="Buat catatan pribadi Anda dengan mudah. Isilah form di bawah untuk menambahkan catatan baru."
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

export default AddPage;
