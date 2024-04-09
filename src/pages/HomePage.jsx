import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { useChangeLanguage } from "../hooks/useChangeLanguage";
import { home } from "../utils/content-bahasa";
import AuthprivateRoute from "../hoc/AuthPrivateRoute";
import LayoutNoted from "../layouts/LayoutNoted";
import HeaderBanner from "../components/HeaderBanner";
import Search from "../components/noted/Search";
import Card from "../components/noted/Card";
import Loading from "../components/Loading";
import { getActiveNotes } from "../utils/local-data";

const HomePage = () => {
  const { language } = useChangeLanguage();
  const [noted, setNoted] = useState([]);
  const [dataNotedOriginal, setDataNotedOriginal] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await getActiveNotes();
      setLoading(true);
      setDataNotedOriginal(data);
      setNoted(data);
    })();
  }, [loading]);

  return (
    <>
      <HeaderBanner
        title={home[language].title} //gunakan property accessor [] agar data bisa dinamis sesuai bahasa / home.language.title
        description={home[language].description}
      />
      <Search
        setNoted={setNoted}
        dataNotedOriginal={dataNotedOriginal}
        titleArsip={
          language === "id" ? "Lihat Note Arsip" : "View Archived Notes"
        }
      />
      <LayoutNoted>
        {!loading ? (
          <Loading />
        ) : (
          <Card
            noted={noted}
            messageError={
              language === "id" ? "Tidak ada catatan" : "No notes available."
            }
            path="/notes"
          />
        )}
        <Link title="Tambah" to="/notes/new" className="wrapper-icon-plus">
          <FaPlus className="icon-plus" />
        </Link>
      </LayoutNoted>
    </>
  );
};

export default AuthprivateRoute(HomePage);
