import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { getActiveNotes } from "../utils/local-data";
import LayoutNoted from "../Layout/LayoutNoted";
import Navbar from "../components/navbar/Navbar";
import HeaderBanner from "../components/HeaderBanner";
import Search from "../components/noted/Search";
import Card from "../components/noted/Card";

const HomePage = () => {
  const [noted, setNoted] = useState([]);
  const [dataNotedOriginal, setDataNotedOriginal] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await getActiveNotes();
      setDataNotedOriginal(data);
      setNoted(data);
      console.log(data, "res");
    })();

    return () => {
      setNoted(null);
    };
  }, []);

  return (
    <>
      <HeaderBanner
        title="Noted Apps"
        description="Mengelola catatan pribadi Anda dengan lebih Mudah.Siap Membantu Anda Mengelola catatan-catatan pribadi Anda dengan Lebih Efisien dan Menyenangkan."
      />
      <Navbar />
      <Search
        setNoted={setNoted}
        dataNotedOriginal={dataNotedOriginal}
        titleArsip="Lihat Note Arsip"
      />
      <LayoutNoted>
        <Card noted={noted} messageError="Tidak ada catatan" path="/notes" />
        <Link title="Tambah" to="/notes/new" className="wrapper-icon-plus">
          <FaPlus className="icon-plus" />
        </Link>
      </LayoutNoted>
    </>
  );
};

export default HomePage;
