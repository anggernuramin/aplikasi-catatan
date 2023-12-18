import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FaArrowAltCircleDown } from "react-icons/fa";
import PropTypes from "prop-types";

const SearchNoted = ({ setNoted, dataNoted, titleArsip }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  let keyword = searchParams.get("keyword");
  const changeSearchParams = (keyword) => {
    setSearchParams({ keyword: keyword });
  };

  const handleKeywordChange = (e) => {
    keyword = e.target.value;
    changeSearchParams(keyword);
  };

  useEffect(() => {
    if (keyword) {
      setNoted(dataNoted);
    }
  }, [keyword]);

  return (
    <div className="container">
      <div className="wrapper-search">
        <section className="search-section">
          <label htmlFor="searchCatatanTitle">Judul</label>
          <input id="searchCatatanTitle" placeholder="Cari berdasarkan Judul .... " type="search" value={keyword} onChange={handleKeywordChange} />
          <button id="searchSubmit" type="submit">
            Cari
          </button>
          {titleArsip ? (
            <Link to="/archives" className="btn btn-archives">
              {titleArsip}
              <FaArrowAltCircleDown className="icon-home" />
            </Link>
          ) : null}
        </section>
      </div>
    </div>
  );
};

SearchNoted.propTypes = {
  keyword: PropTypes.string.isRequired,
  titleArsip: PropTypes.string.isRequired,
  handleKeywordChange: PropTypes.func.isRequired,
};

export default SearchNoted;
