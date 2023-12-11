import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const BackHome = () => {
  return (
    <div className="wrapper-icon-home">
      <Link to="/">
        <FaHome className="icon-home" />
        <p>Beranda</p>
      </Link>
    </div>
  );
};

export default BackHome;
