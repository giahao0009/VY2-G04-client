import React from "react";
import Header from "../../components/HomeComponents/Header";
import Slider from "../../components/HomeComponents/Slider";
import Coop from "../../components/HomeComponents/Coop";
import Tutorial from "../../components/HomeComponents/Tutorial";
import Footer from "../../components/HomeComponents/Footer";
import Advertisement from "../../components/HomeComponents/Advertisement";

function Homepage() {
  return (
    <div>
      <Header />
      <Slider />
      <Coop />
      <Tutorial />
      <Advertisement />
      <Footer />
    </div>
  );
}

export default Homepage;
