import { useNavigate } from "react-router-dom";
import FormNoted from "../components/FormNoted";
import Header from "../components/Header";
import { useState } from "react";
import { addNote } from "../utils/local-data";
import LayoutNoted from "../components/Layout/LayoutNoted";
import BackHome from "../components/BackHome";

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
      <Header
        title="Add Noted Apps"
        description="Buat catatan pribadi Anda dengan mudah. Isilah form di bawah untuk menambahkan catatan baru."
      />
      <LayoutNoted>
        <BackHome />
        <FormNoted
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
