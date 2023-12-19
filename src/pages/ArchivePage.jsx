import React, { useState, useEffect } from "react";
import { getArchivedNotes } from "../utils/local-data";
import LayoutNoted from "../Layout/LayoutNoted";
import BackHome from "../components/BackHome";
import HeaderBanner from "../components/HeaderBanner";
import Search from "../components/noted/Search";
import Card from "../components/noted/Card";

function ArchivePage() {
  const [noted, setNoted] = useState(getArchivedNotes());
  return (
    <>
      <HeaderBanner title="Archive Noted Apps" description="Simpan dan kelola catatan Anda dengan Archive Noted Apps. Lihat dan kelola catatan yang sudah diarsipkan di sini." />
      <Search setNoted={setNoted} dataNoted={getArchivedNotes()} />
      <LayoutNoted>
        <BackHome />
        <Card noted={noted} messageError="Arsip kosong" path="/archives/notes" />
      </LayoutNoted>
    </>
  );
}

export default ArchivePage;
