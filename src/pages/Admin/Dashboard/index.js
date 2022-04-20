import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import Calenda from "../../../components/AdminComponents/Calendar";

function Dashboard() {
  const data = [
    {
      name: "1",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "2",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "3",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "4",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "5",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "6",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "7",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "8",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "9",
      uv: 4090,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "10",
      uv: 2000,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "11",
      uv: 8000,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "12",
      uv: 5000,
      pv: 4300,
      amt: 2100,
    },
  ];
  const myData = [
    { name: "Đang chạy", value: 400 },
    { name: "Chưa chạy", value: 300 },
    { name: "Bảo trì", value: 300 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <div style={{ width: "100%", height: "600px" }}>
      <div className="d-flex justify-content-around mb-5">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title fs-3">Tổng số xe</h5>
            <p className="card-text">100</p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title fs-3">Số đơn hàng</h5>
            <p className="card-text">5000</p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title fs-3">Tài xế</h5>
            <p className="card-text">80</p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title fs-3">Tổng tiền</h5>
            <p className="card-text">3.000.000.000.000</p>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="container-fluid">
        <div className="row">
          <div className="col-8 p-2">
            <div className="p-2" style={{ backgroundColor: "#f5f5f5" }}>
              <h3 className="fs-3 text-center">Tổng doanh thu qua các tháng</h3>
              <ResponsiveContainer height={600}>
                <AreaChart
                  data={data}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="uv"
                    stroke="#8884d8"
                    fill="#8884d8"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="col-4 p-2">
            <Calenda />
            <div className="p-2" style={{ backgroundColor: "#f5f5f5" }}>
              <h3 className="fs-3 text-center">Tình trạng xe</h3>
              <div className="wrapper-chart" style={{ width: "100%" }}>
                <PieChart width={400} height={400}>
                  <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={myData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                  >
                    {myData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div></div>
    </div>
  );
}

export default Dashboard;
