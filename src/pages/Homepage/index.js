import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/HomeComponents/Header";
import Footer from "../../components/HomeComponents/Footer";

function Homepage() {
  return (
    <div className="homepage">
      <Header />
      <div className="body">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
