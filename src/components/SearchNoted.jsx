import React, { useState } from "react";

const SearchNoted = () => {
  return (
    <div className="container">
      <section className="search-section">
        <label htmlFor="searchCatatanTitle">Judul</label>
        <input id="searchCatatanTitle" placeholder="Structure and Interpretation of Computer Programs .... " type="search" />
        <button id="searchSubmit" type="submit">
          Cari
        </button>
      </section>
    </div>
  );
};

export default SearchNoted;
