import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { FaClosedCaptioning } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { getNote } from "../../utils/local-data";

const Form = ({ page, title, setTitle, setBody, submitNoted }) => {
  const { id } = useParams();
  const [detailNote, setDetailNote] = useState({});

  const bodyRef = useRef();
  useEffect(() => {
    setDetailNote(getNote(id));
  }, [id]);

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
              <label htmlFor="inputCatatanTitle">Judul</label>
            </div>
            <input
              id="inputCatatanTitle"
              type="text"
              required
              placeholder="Tulis judul catatan"
              value={title ? title : title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="inputCatatanCatatan">Catatan</label>
            {page == "Edit" ? (
              <div
                id="inputCatatanCatatan"
                ref={bodyRef}
                className="catatan"
                data-placeholder="Tulis catatan Anda disini...."
                contentEditable
                onInput={(e) => setBody(e.target.innerHTML)}
              ></div>
            ) : (
              <div
                id="inputCatatanCatatan"
                className="catatan"
                data-placeholder="Tulis catatan Anda disini...."
                contentEditable
                onInput={(e) => setBody(e.target.innerHTML)}
              ></div>
            )}
          </div>

          <button id="CatatanSubmit" type="submit">
            {page == "Add" ? "Buat" : null}
            {page == "Edit" ? "Simpan Edit" : null}
          </button>

          {page == "Edit" ? (
            <Link title="Batal" to="/" className="wrapper-icon-plus">
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
