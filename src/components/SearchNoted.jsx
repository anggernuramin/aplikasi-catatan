import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowAltCircleDown } from "react-icons/fa";

const SearchNoted = () => {
  return (
    <div className="container">
      <div className="wrapper-search">
        <section className="search-section">
          <label htmlFor="searchCatatanTitle">Judul</label>
          <input
            id="searchCatatanTitle"
            placeholder="Structure and Interpretation of Computer Programs .... "
            type="search"
          />
          <button id="searchSubmit" type="submit">
            Cari
          </button>
        </section>
        <Link to="/archives" className="btn btn-archives">
          Note Arsip
          <FaArrowAltCircleDown className="icon-home" />
        </Link>
      </div>
    </div>
  );
};

export default SearchNoted;
