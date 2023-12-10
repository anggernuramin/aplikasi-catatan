import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const BackHome = () => {
  return (
    <Link to="/" className="wrapper-icon-home">
      <FaHome className="icon-home" />
      <p>Beranda</p>
    </Link>
  );
};

export default BackHome;
