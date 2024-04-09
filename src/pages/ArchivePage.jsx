import React, { useState, useEffect } from "react";
import { getArchivedNotes } from "../utils/local-data";
import { archive } from "../utils/content-bahasa";
import LayoutNoted from "../layouts/LayoutNoted";
import BackHome from "../components/BackHome";
import HeaderBanner from "../components/HeaderBanner";
import Search from "../components/noted/Search";
import Card from "../components/noted/Card";
import { useChangeLanguage } from "../hooks/useChangeLanguage";
import AuthprivateRoute from "../hoc/AuthPrivateRoute";
import Loading from "../components/Loading";

function ArchivePage() {
  const [loading, setLoading] = useState(false);
  const { language } = useChangeLanguage();
  const [noted, setNoted] = useState([]);
  const [dataNotedOriginal, setDataNotedOriginal] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await getArchivedNotes();
      setLoading(true);
      setDataNotedOriginal(data);
      setNoted(data);
    })();
    return () => {
      setNoted(null);
    };
  }, []);

  return (
    <>
      <HeaderBanner
        title={archive[language].title}
        description={archive[language].description}
      />
      <Search setNoted={setNoted} dataNotedOriginal={dataNotedOriginal} />
      <LayoutNoted>
        <BackHome />
        {!loading ? (
          <Loading />
        ) : (
          <Card
            noted={noted}
            messageError={language === "id" ? "Arsip kosong" : "Empty Archive"}
            path="/archives/notes"
          />
        )}
      </LayoutNoted>
    </>
  );
}

export default AuthprivateRoute(ArchivePage);
