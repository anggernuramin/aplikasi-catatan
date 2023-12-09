import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import SearchNoted from "../components/SearchNoted";
import CardNoted from "../components/CardNoted";
import { FaPlus } from "react-icons/fa";

const HomePage = () => {
  return (
    <>
      <Header title="Noted Apps" description="Mengelola catatan pribadi Anda dengan lebih Mudah.Siap Membantu Anda Mengelola catatan-catatan pribadi Anda dengan Lebih Efisien dan Menyenangkan." />
      <SearchNoted />
      <main className="container">
        <div className="wrapper-main-content">
          <div className="wrapper-Catatan-shelf">
            <CardNoted />
            {/* <CatatanAktif datas={datas} searchResult={searchResult} arsipCatatan={arsipCatatan} deleteCatatan={deleteCatatan} />

            <CatatanArsip datas={datas} searchResult={searchResult} kembalikanCatatan={kembalikanCatatan} deleteCatatan={deleteCatatan} /> */}
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
