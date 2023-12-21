import React from "react";
import HeaderBanner from "../components/HeaderBanner";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

const LayoutPage = ({ title, description }) => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default LayoutPage;
