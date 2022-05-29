import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Home from "./pages/Homepage/Home";
import Booking from "./pages/Homepage/Booking";
import Payment from "./pages/Homepage/Payment";
import Vehicle from "./pages/Homepage/Vehicle";
import PaymentStripe from "./pages/Homepage/PaymentStripe";
import HandlePayment from "./pages/HandlePayment";

import Admin from "./pages/Admin";
import Dashboard from "./pages/Admin/Dashboard";
import ManagerDriver from "./pages/Admin/ManagerDriver";
import ManagerCar from "./pages/Admin/ManagerCar";
import CreateCar from "./pages/Admin/ManagerCar/CreateCar";
import DetailCar from "./pages/Admin/ManagerCar/DetailtCar";
import DetailDriver from "./pages/Admin/ManagerDriver/DetailDriver";
import CreateDriver from "./pages/Admin/ManagerDriver/CreateDriver";
import ManagerStation from "./pages/Admin/ManagerStation";
import DetailStation from "./pages/Admin/ManagerStation/DetailStation";
import CreateStation from "./pages/Admin/ManagerStation/CreateStation";
import ManagerSchedule from "./pages/Admin/ManagerSchedule";
import CreateScheduler from "./pages/Admin/ManagerSchedule/Create";
import DetailScheduler from "./pages/Admin/ManagerSchedule/Detail";
import CreateDetailScheduler from "./pages/Admin/ManagerSchedule/Create/detail";
import ManagerTransaction from "./pages/Admin/ManagerTransaction";
import DetailTransaction from "./pages/Admin/ManagerTransaction/Detail";
import ManagerVoucher from "./pages/Admin/ManagerVoucher";
import Statistical from "./pages/Admin/Statistical";

import NotFound from "./pages/NotFound";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}>
        <Route index element={<Home />} />

        <Route
          path="booking"
          element={
            <RequireAuth>
              <Booking />
            </RequireAuth>
          }
        />
        <Route path="booking/vehicle" element={<Vehicle />} />
        <Route
          path="booking/vehicle/payment"
          element={
            <RequireAuth>
              <Payment />
            </RequireAuth>
          }
        />
      </Route>

      <Route
        path="booking/payment-stripe"
        element={
          <RequireAuth>
            <PaymentStripe />
          </RequireAuth>
        }
      />

      <Route
        path="booking/handle-payment"
        element={
          <RequireAuth>
            <HandlePayment />
          </RequireAuth>
        }
      />

      <Route
        path="/admin"
        element={
          <RequireAuthAdmin>
            <Admin />
          </RequireAuthAdmin>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="driver" element={<ManagerDriver />} />
        <Route path="driver/detail/:id" element={<DetailDriver />} />
        <Route path="driver/createdriver" element={<CreateDriver />} />
        <Route path="car" element={<ManagerCar />}></Route>
        <Route path="car/createcar" element={<CreateCar />} />
        <Route path="car/detail/:id" element={<DetailCar />} />
        <Route path="station" element={<ManagerStation />} />
        <Route path="station/createstation" element={<CreateStation />} />
        <Route path="station/detail/:id" element={<DetailStation />} />
        <Route path="schedule" element={<ManagerSchedule />} />
        <Route path="schedule/createscheduler" element={<CreateScheduler />} />
        <Route path="schedule/detail/:id" element={<DetailScheduler />} />
        <Route
          path="schedule/createscheduler/detail"
          element={<CreateDetailScheduler />}
        />
        <Route path="transaction" element={<ManagerTransaction />} />
        <Route path="transaction/detail/:id" element={<DetailTransaction />} />
        <Route path="voucher" element={<ManagerVoucher />} />
        <Route path="statistical" element={<Statistical />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function RequireAuth({ children }) {
  if (!JSON.parse(localStorage.getItem("user"))) {
    window.alert("Hãy đăng nhập tài khoản của bạn để đặt xe !!!");
    return <Navigate to="/" replace />;
  }
  return children;
}

function RequireAuthAdmin({ children }) {
  if (!JSON.parse(localStorage.getItem("user"))) {
    window.alert("Hãy đăng nhập tài khoản của patner để vào trang quản lý !!!");
    return <Navigate to="/" replace />;
  }
  return children;
}

export default Router;
