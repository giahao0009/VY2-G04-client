import React from "react";
import Slider from "../../../components/HomeComponents/Slider";
import Coop from "../../../components/HomeComponents/Coop";
import Tutorial from "../../../components/HomeComponents/Tutorial";
import Advertisement from "../../../components/HomeComponents/Advertisement";

function Home() {
  return (
    <div>
      <Slider />
      <Coop />
      <Tutorial />
      <Advertisement />
    </div>
  );
}
export default Home;
