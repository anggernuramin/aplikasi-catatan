import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import SearchNoted from "../components/SearchNoted";
import CardNoted from "../components/CardNoted";
import { FaPlus } from "react-icons/fa";
import { getAllNotes } from "../utils/local-data";

const HomePage = () => {
  const [noted, setNoted] = useState([]);
  useEffect(() => {
    setNoted(getAllNotes());
  }, []);

  return (
    <>
      <Header
        title="Noted Apps"
        description="Mengelola catatan pribadi Anda dengan lebih Mudah.Siap Membantu Anda Mengelola catatan-catatan pribadi Anda dengan Lebih Efisien dan Menyenangkan."
      />
      <SearchNoted />
      <main className="container">
        <div className="wrapper-main-content">
          <div className="wrapper-Catatan-shelf">
            <CardNoted noted={noted} messageError="Belum ada data" />
          </div>
        </div>
        <Link to="/notes/new" className="wrapper-icon-plus">
          <FaPlus className="icon-plus" />
        </Link>
      </main>
    </>
  );
};

export default HomePage;
