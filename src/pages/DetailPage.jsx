import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { getNote } from "../utils/local-data";
import { Link, useParams } from "react-router-dom";
import { showFormattedDate } from "../utils";
import { FaTrash, FaArrowCircleDown, FaHome } from "react-icons/fa";
import { deleteNote } from "../utils/local-data";
import { useNavigate } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [detailNote, setDetailNote] = useState({});

  const deleteNoted = (id) => {
    deleteNote(id);
    navigate("/");
  };

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
          <div className="delete" onClick={() => deleteNoted(id)}>
            <FaTrash />
          </div>
          <div className="archive">
            <FaArrowCircleDown />
          </div>
        </div>
      </main>
    </>
  );
};

export default DetailPage;
