import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowAltCircleDown } from "react-icons/fa";
import PropTypes from "prop-types";

const SearchNoted = ({ keyword, handleKeywordChange }) => {
  return (
    <div className="container">
      <div className="wrapper-search">
        <section className="search-section">
          <label htmlFor="searchCatatanTitle">Judul</label>
          <input
            id="searchCatatanTitle"
            placeholder="Structure and Interpretation of Computer Programs .... "
            type="search"
            value={keyword}
            onChange={handleKeywordChange}
          />
          <button id="searchSubmit" type="submit">
            Cari
          </button>
        </section>
        <Link to="/archives" className="btn btn-archives">
          Lihat Note Arsip
          <FaArrowAltCircleDown className="icon-home" />
        </Link>
      </div>
    </div>
  );
};

SearchNoted.propTypes = {
  keyword: PropTypes.string.isRequired,
  handleKeywordChange: PropTypes.func.isRequired,
};

export default SearchNoted;
