import React, { useEffect, useState } from "react";
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
import LayoutNoted from "../Layout/LayoutNoted";
import BackHome from "../components/BackHome";
import HeaderBanner from "../components/HeaderBanner";
import CardDetail from "../components/noted/CardDetail";

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [detailNote, setDetailNote] = useState({});

  useEffect(() => {
    setDetailNote(getNote(id));
  }, [id]);

  return (
    <>
      <HeaderBanner
        title="Detail Noted Apps"
        description="Lihat dan kelola detail catatan Anda di halaman Detail Noted Apps. Temukan informasi lengkap mengenai catatan yang Anda pilih."
      />
      <LayoutNoted>
        <section className="Catatan-shelf">
          <BackHome />
          <CardDetail detailNoted={detailNote} />
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
