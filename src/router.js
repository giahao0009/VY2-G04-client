import React from "react";
import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Home from "./pages/Homepage/Home";
import Booking from "./pages/Homepage/Booking";
import Payment from "./pages/Homepage/Payment";
import Vehicle from "./pages/Homepage/Vehicle";

import Admin from "./pages/Admin";
import Dashboard from "./pages/Admin/Dashboard";
import ManagerDriver from "./pages/Admin/ManagerDriver";
import ManagerSchedule from "./pages/Admin/ManagerSchedule";
import ManagerTypecar from "./pages/Admin/ManagerTypecar";
import ManagerCar from "./pages/Admin/ManagerCar";
import CreateCar from "./pages/Admin/ManagerCar/CreateCar";
import DetailCar from "./pages/Admin/ManagerCar/DetailtCar";
import DetailDriver from "./pages/Admin/ManagerDriver/DetailDriver";
import CreateDriver from "./pages/Admin/ManagerDriver/CreateDriver";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}>
        <Route index element={<Home />} />
        <Route path="booking" element={<Booking />} />
        <Route path="booking/vehicle" element={<Vehicle />} />
        <Route path="booking/payment" element={<Payment />} />
      </Route>
      <Route path="/admin" element={<Admin />}>
        <Route index element={<Dashboard />} />
        <Route path="driver" element={<ManagerDriver />} />
        <Route path="driver/detail/:id" element={<DetailDriver />} />
        <Route path="driver/createdriver" element={<CreateDriver />} />
        <Route path="schedule" element={<ManagerSchedule />} />
        <Route path="typecar" element={<ManagerTypecar />} />
        <Route path="car" element={<ManagerCar />}></Route>
        <Route path="car/createcar" element={<CreateCar />} />
        <Route path="car/detail/:id" element={<DetailCar />} />
      </Route>
    </Routes>
  );
}

export default Router;
