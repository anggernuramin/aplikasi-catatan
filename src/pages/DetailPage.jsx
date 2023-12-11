import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { getNote } from "../utils/local-data";
import { Link, useParams } from "react-router-dom";
import {
  FaTrash,
  FaArrowCircleDown,
  FaArrowAltCircleUp,
  FaHome,
  FaPencilAlt,
} from "react-icons/fa";
import { deleteNote, archiveNote, unarchiveNote } from "../utils/local-data";
import { useNavigate } from "react-router-dom";
import LayoutNoted from "../components/Layout/LayoutNoted";
import CardDetailNoted from "../components/CardDetailNoted";
import BackHome from "../components/BackHome";

const DetailPage = () => {
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
        description="Lihat dan kelola detail catatan Anda di halaman Detail Noted Apps. Temukan informasi lengkap mengenai catatan yang Anda pilih."
      />
      <LayoutNoted>
        <section className="Catatan-shelf">
          <BackHome />
          <CardDetailNoted detailNoted={detailNote} />
        </section>
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
      </LayoutNoted>
    </>
  );
};

export default DetailPage;
