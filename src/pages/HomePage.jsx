import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import SearchNoted from "../components/SearchNoted";
import CardNoted from "../components/CardNoted";
import { FaPlus } from "react-icons/fa";
import { getActiveNotes } from "../utils/local-data";
import LayoutNoted from "../components/Layout/LayoutNoted";

const HomePage = () => {
  const [noted, setNoted] = useState(getActiveNotes());
  const [searchParams, setSearchParams] = useSearchParams(); // implememtasi integrasi dengan search parameter yang ada di URL.
  let keyword = searchParams.get("keyword"); // mengambil name search params di URL,sesuai dengan yg ada di setSearchParams()

  const changeSearchParams = (keyword) => {
    setSearchParams({ keyword: keyword });
  };

  useEffect(() => {
    if (keyword) {
      setNoted(getActiveNotes().filter((item) => item.title.toLowerCase().includes(keyword.toLowerCase())));
    } else {
      setNoted(getActiveNotes());
    }
  }, [keyword]);

  // implemetasi controlled input url dan input
  const handleKeywordChange = (event) => {
    keyword = event.target.value;
    changeSearchParams(keyword);
  };

  return (
    <>
      <Header title="Noted Apps" description="Mengelola catatan pribadi Anda dengan lebih Mudah.Siap Membantu Anda Mengelola catatan-catatan pribadi Anda dengan Lebih Efisien dan Menyenangkan." />
      <SearchNoted setNoted={setNoted} dataNoted={getActiveNotes()} titleArsip="Lihat Note Arsip" />
      <LayoutNoted>
        <CardNoted noted={noted} messageError="Tidak ada catatan" path="/notes" />
        <Link title="Tambah" to="/notes/new" className="wrapper-icon-plus">
          <FaPlus className="icon-plus" />
        </Link>
      </LayoutNoted>
    </>
  );
};

export default HomePage;
