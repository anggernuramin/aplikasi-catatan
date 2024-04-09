import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

const LayoutPage = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default LayoutPage;
