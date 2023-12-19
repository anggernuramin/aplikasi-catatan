import React, { useState, useEffect } from "react";
import { getArchivedNotes } from "../utils/local-data";
import LayoutNoted from "../Layout/LayoutNoted";
import BackHome from "../components/BackHome";
import HeaderBanner from "../components/HeaderBanner";
import Search from "../components/noted/Search";
import Card from "../components/noted/Card";

function ArchivePage() {
  const [noted, setNoted] = useState([]);
  const [dataNotedOriginal, setDataNotedOriginal] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await getArchivedNotes();
      setDataNotedOriginal(data);
      setNoted(data);
      console.log(data, "res");
    })();
  }, []);

  return (
    <>
      <HeaderBanner
        title="Archive Noted Apps"
        description="Simpan dan kelola catatan Anda dengan Archive Noted Apps. Lihat dan kelola catatan yang sudah diarsipkan di sini."
      />
      <Search setNoted={setNoted} dataNotedOriginal={dataNotedOriginal} />
      <LayoutNoted>
        <BackHome />
        <Card
          noted={noted}
          messageError="Arsip kosong"
          path="/archives/notes"
        />
      </LayoutNoted>
    </>
  );
}

export default ArchivePage;
