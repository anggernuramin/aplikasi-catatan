import React, { useEffect, useState } from "react";
import { getNote } from "../utils/local-data";
import { detail } from "../utils/content-bahasa";
import { Link, useParams } from "react-router-dom";
import { FaTrash, FaArrowCircleDown, FaArrowAltCircleUp, FaHome, FaPencilAlt } from "react-icons/fa";
import { deleteNote, archiveNote, unarchiveNote } from "../utils/local-data";
import { useNavigate } from "react-router-dom";
import LayoutNoted from "../layout/LayoutNoted";
import BackHome from "../components/BackHome";
import HeaderBanner from "../components/HeaderBanner";
import CardDetail from "../components/noted/CardDetail";
import { useChangeLanguage } from "../hooks/useChangeLanguage";
import AuthprivateRoute from "../hoc/AuthPrivateRoute";

const DetailPage = () => {
  const { language } = useChangeLanguage();
  const { id } = useParams();
  const navigate = useNavigate();
  const [detailNote, setDetailNote] = useState({});

  useEffect(() => {
    (async () => {
      const { data } = await getNote(id);
      if (data) {
        setDetailNote(data);
      }
    })();
  }, [id]);

  return (
    <>
      <HeaderBanner title={detail[language].title} description={detail[language].description} />
      <LayoutNoted>
        <section className="Catatan-shelf">
          <BackHome />
          <CardDetail detailNoted={detailNote} />
        </section>
        <div className="wrapper-icon-delete-archive">
          <div
            title={language === "id" ? "Hapus" : "Delete"}
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
              title={language === "id" ? "Aktifkan" : "Activate"}
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
              title={language === "id" ? "Arsipkan" : "Archive"}
              className="archive"
              onClick={() => {
                archiveNote(id);
                navigate("/");
              }}
            >
              <FaArrowCircleDown />
            </div>
          )}

          <Link to={`/edit/${id}`} title={language === "id" ? "Sunting" : "Edit"} className="delete">
            <FaPencilAlt />
          </Link>
        </div>
      </LayoutNoted>
    </>
  );
};

export default AuthprivateRoute(DetailPage);
