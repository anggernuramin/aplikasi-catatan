import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import FormNoted from "../components/FormNoted";
import Header from "../components/Header";
import { useState } from "react";
import { addNote } from "../utils/local-data";
import parse from "html-react-parser";

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
      body: parse(body),
    });
    navigate("/");
  };

  return (
    <>
      <Header
        title="Add Noted Apps"
        description="Tambah catatan pribadi Anda dengan lebih Mudah."
      />
      <main className="container">
        <div className="wrapper-main-content">
          <div className="wrapper-Catatan-shelf">
            <Link to="/" className="wrapper-icon-home">
              <FaHome className="icon-home" />
              <p>Back To Home </p>
            </Link>
            <FormNoted
              page="Add"
              title={title}
              setTitle={setTitle}
              body={body}
              setBody={setBody}
              submitNoted={submitAddNoted}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default AddPage;
