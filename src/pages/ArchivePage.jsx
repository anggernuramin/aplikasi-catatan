import React, { useState } from "react";
import Header from "../components/Header";
import CardNoted from "../components/CardNoted";
import { getArchivedNotes } from "../utils/local-data";
import LayoutNoted from "../components/Layout/LayoutNoted";
import BackHome from "../components/BackHome";
import SearchNoted from "../components/SearchNoted";

const ArchivePage = () => {
  const [noted, setNoted] = useState(getArchivedNotes());
  return (
    <>
      <Header
        title="Archive Noted Apps"
        description="Simpan dan kelola catatan Anda dengan Archive Noted Apps. Lihat dan kelola catatan yang sudah diarsipkan di sini."
      />
      <SearchNoted setNoted={setNoted} dataNoted={getArchivedNotes()} />
      <LayoutNoted>
        <BackHome />
        <CardNoted
          noted={noted}
          messageError="Arsip kosong"
          path="/archives/notes"
        />
      </LayoutNoted>
    </>
  );
};

export default ArchivePage;
