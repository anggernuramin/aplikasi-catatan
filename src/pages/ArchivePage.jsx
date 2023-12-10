import React from "react";
import Header from "../components/Header";
import CardNoted from "../components/CardNoted";
import { getArchivedNotes } from "../utils/local-data";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const ArchivePage = () => {
  return (
    <>
      <Header
        title="Archive Noted Apps"
        description="Archive catatan pribadi Anda dengan lebih Mudah.Siap Membantu Anda Mengelola catatan-catatan pribadi Anda dengan Lebih Efisien dan Menyenangkan."
      />
      <main className="container">
        <div className="wrapper-main-content">
          <div className="wrapper-Catatan-shelf">
            <Link to="/" className="wrapper-icon-home">
              <FaHome className="icon-home" />
              <p>Back To Home </p>
            </Link>
            <CardNoted
              noted={getArchivedNotes()}
              messageError="Arsip kosong"
              path="/archives/notes"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default ArchivePage;
