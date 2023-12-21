import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { FaClosedCaptioning } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { getNote } from "../../utils/local-data";
import { useChangeLanguage } from "../../hooks/useChangeLanguage";

const Form = ({ page, title, setTitle, setBody, submitNoted }) => {
  const { language } = useChangeLanguage();
  const { id } = useParams();
  const [detailNote, setDetailNote] = useState({});
  const labelJudul = language === "id" ? "Judul" : "Title";
  const labelCatatan = language === "id" ? "Catatan" : "Noted";
  const labelAdd = language === "id" ? "Buat" : "Create";
  const labelEdit = language === "id" ? "Simpan Perubahan" : "Save Changes";

  const bodyRef = useRef();
  if (page === "Edit") {
    useEffect(() => {
      (async () => {
        const { data } = await getNote(id);
        setDetailNote(data);
        console.log(data, "res");
      })();
    }, [id]);
  }

  useEffect(() => {
    if (detailNote && page == "Edit") {
      bodyRef.current.innerHTML = detailNote?.body;
    }
  }, [detailNote]);

  return (
    <section className="wrapper-input-section">
      <div className="input-section">
        <form id="inputCatatan" onSubmit={submitNoted}>
          <div className="input">
            <div className="label-judul">
              <label htmlFor="inputCatatanTitle">{labelJudul}</label>
            </div>
            <input id="inputCatatanTitle" type="text" required placeholder={language === "id" ? "Tulis judul catatan" : "Write title noted"} value={title ? title : title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="input">
            <label htmlFor="inputCatatanCatatan">{labelCatatan}</label>
            {page == "Edit" ? (
              <div
                id="inputCatatanCatatan"
                ref={bodyRef}
                className="catatan"
                data-placeholder={language === "id" ? "Tulis catatan Anda disini...." : "Write noted here...."}
                contentEditable
                onInput={(e) => setBody(e.target.innerHTML)}
              ></div>
            ) : (
              <div id="inputCatatanCatatan" className="catatan" data-placeholder="Tulis catatan Anda disini...." contentEditable onInput={(e) => setBody(e.target.innerHTML)}></div>
            )}
          </div>

          <button id="CatatanSubmit" type="submit">
            {page == "Add" ? labelAdd : null}
            {page == "Edit" ? labelEdit : null}
          </button>

          {page == "Edit" ? (
            <Link title={language == "id" ? "Batal" : "Cancel"} to="/" className="wrapper-icon-plus">
              <FaClosedCaptioning className="icon-plus" />
            </Link>
          ) : null}
        </form>
      </div>
    </section>
  );
};

Form.propTypes = {
  page: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  setBody: PropTypes.func.isRequired,
  submitNoted: PropTypes.func.isRequired,
};

export default Form;
