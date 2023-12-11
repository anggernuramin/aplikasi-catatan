import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import SearchNoted from "../components/SearchNoted";
import CardNoted from "../components/CardNoted";
import { FaPlus } from "react-icons/fa";
import { getActiveNotes } from "../utils/local-data";
import LayoutNoted from "../components/Layout/LayoutNoted";

const HomePage = () => {
  const [noted, setNoted] = useState(getActiveNotes());
  return (
    <>
      <Header
        title="Noted Apps"
        description="Mengelola catatan pribadi Anda dengan lebih Mudah.Siap Membantu Anda Mengelola catatan-catatan pribadi Anda dengan Lebih Efisien dan Menyenangkan."
      />
      <SearchNoted
        setNoted={setNoted}
        dataNoted={getActiveNotes()}
        titleArsip="Lihat Note Arsip"
      />
      <LayoutNoted>
        <CardNoted
          noted={noted}
          messageError="Tidak ada catatan"
          path="/notes"
        />
        <Link title="Tambah" to="/notes/new" className="wrapper-icon-plus">
          <FaPlus className="icon-plus" />
        </Link>
      </LayoutNoted>
    </>
  );
};

export default HomePage;
