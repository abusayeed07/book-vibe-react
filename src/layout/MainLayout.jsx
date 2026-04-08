import React from "react";
import Navbar from "../components/shared/navbar/Navbar";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <ToastContainer />
      <Outlet />
    </div>
  );
};

export default MainLayout;
