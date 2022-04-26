import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/HomeComponents/Header";
import Footer from "../../components/HomeComponents/Footer";
import ModalLogin from "../../components/ModalLogin";
import ModalRegister from "../../components/ModalRegister";

function Homepage() {
  return (
    <div className="homepage">
      <Header />
      <div className="body">
        <Outlet />
      </div>
      <Footer />
      <ModalLogin />
      <ModalRegister />
    </div>
  );
}

export default Homepage;
