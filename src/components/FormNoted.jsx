import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";
import { FaClosedCaptioning } from "react-icons/fa";
import { Link } from "react-router-dom";

const FormNoted = ({ page, title, setTitle, body, setBody, submitNoted }) => {
  console.log("body", body);
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="inputCatatanCatatan">Catatan</label>
            <div
              className="catatan"
              data-placeholder="Tulis catatan Anda disini...."
              contentEditable
              onInput={(e) => setBody(e.target.innerHTML)}
            >
              {typeof body === "string" ? parse(body) : body}
            </div>
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

FormNoted.propTypes = {
  page: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  setBody: PropTypes.func.isRequired,
  submitNoted: PropTypes.func.isRequired,
};

export default FormNoted;
