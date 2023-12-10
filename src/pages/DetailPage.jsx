import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { getNote } from "../utils/local-data";
import { Link, useLocation, useParams } from "react-router-dom";
import { showFormattedDate } from "../utils";
import {
  FaTrash,
  FaArrowCircleDown,
  FaArrowAltCircleUp,
  FaHome,
  FaPencilAlt,
} from "react-icons/fa";
import { deleteNote, archiveNote, unarchiveNote } from "../utils/local-data";
import { useNavigate } from "react-router-dom";

const DetailPage = () => {
  const location = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [detailNote, setDetailNote] = useState({});

  useEffect(() => {
    setDetailNote(getNote(id));
  }, [id]);

  return (
    <>
      <Header
        title="Detail Noted Apps"
        description="Detail catatan pribadi Anda dengan lebih Mudah."
      />
      <main className="container">
        <div className="wrapper-main-content">
          <div className="wrapper-Catatan-shelf">
            <section className="Catatan-shelf">
              <Link to="/" className="wrapper-icon-home">
                <FaHome className="icon-home" />
                <p>Back To Home </p>
              </Link>

              <div className="card-detail-catatan">
                <h3>{detailNote.title}</h3>
                <span>{showFormattedDate(detailNote.createdAt)}</span>
                <p>{detailNote.body}</p>
              </div>
            </section>
          </div>
        </div>
        <div className="wrapper-icon-delete-archive">
          <div
            title="Hapus"
            className="delete"
            onClick={() => {
              deleteNote(id);
              navigate("/");
            }}
          >
            <FaTrash />
          </div>

          {detailNote.archived == true ? (
            <div
              title="Aktifkan"
              className="archive"
              onClick={() => {
                unarchiveNote(id);
                navigate("/");
              }}
            >
              <FaArrowAltCircleUp />
            </div>
          ) : (
            <div
              title="Arsipkan"
              className="archive"
              onClick={() => {
                archiveNote(id);
                navigate("/");
              }}
            >
              <FaArrowCircleDown />
            </div>
          )}

          <Link to={`/edit/${id}`} title="Edit" className="delete">
            <FaPencilAlt />
          </Link>
        </div>
      </main>
    </>
  );
};

export default DetailPage;
