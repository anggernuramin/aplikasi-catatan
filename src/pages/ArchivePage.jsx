import React from "react";
import Header from "../components/Header";
import CardNoted from "../components/CardNoted";
import { getArchivedNotes } from "../utils/local-data";
import LayoutNoted from "../components/Layout/LayoutNoted";
import BackHome from "../components/BackHome";
import SearchNoted from "../components/SearchNoted";

const ArchivePage = () => {
  return (
    <>
      <Header title="Archive Noted Apps" description="Archive catatan pribadi Anda dengan lebih Mudah.Siap Membantu Anda Mengelola catatan-catatan pribadi Anda dengan Lebih Efisien dan Menyenangkan." />
      <SearchNoted />
      <LayoutNoted>
        <BackHome />
        <CardNoted noted={getArchivedNotes()} messageError="Arsip kosong" path="/archives/notes" />
      </LayoutNoted>
    </>
  );
};

export default ArchivePage;
