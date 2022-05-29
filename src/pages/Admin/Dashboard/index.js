import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Calenda from "../../../components/AdminComponents/Calendar";
import driverApi from "../../../apis/driverApi";
import transactionApi from "../../../apis/transactionApi";
import vehicleApi from "../../../apis/vehicleApi";

function Dashboard() {
  const [countDriver, setCountDriver] = useState(0);
  const [countTransaction, setCountTransaction] = useState(0);
  const [countVehicle, setCountVehicle] = useState(0);
  const [sumTransaction, setSumTransaction] = useState(0);
  const [report, setReport] = useState([]);

  useEffect(() => {
    const featchData = async () => {
      const response = await driverApi.countDriver(
        "c85665e5-0b00-4adc-8597-db5d6ad3a85e"
      );
      setCountDriver(response.data);
    };
    featchData();
  }, []);

  useEffect(() => {
    const featchData = async () => {
      const response = await transactionApi.countTransaction(
        "c85665e5-0b00-4adc-8597-db5d6ad3a85e"
      );
      setCountTransaction(response.data);
    };
    featchData();
  }, []);

  useEffect(() => {
    const featchData = async () => {
      const response = await vehicleApi.countVehicle(
        "c85665e5-0b00-4adc-8597-db5d6ad3a85e"
      );
      setCountVehicle(response.data);
    };
    featchData();
  }, []);

  useEffect(() => {
    const featchData = async () => {
      const response = await transactionApi.sumTransaction(
        "c85665e5-0b00-4adc-8597-db5d6ad3a85e"
      );
      setSumTransaction(response.data);
    };
    featchData();
  }, []);

  useEffect(() => {
    const featchData = async () => {
      const response = await transactionApi.reportTransaction(
        "c85665e5-0b00-4adc-8597-db5d6ad3a85e"
      );
      setReport(response.data);
    };
    featchData();
  }, []);

  const data = [
    {
      name: "1",
      uv: report[0] ? report[0].total : 0,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "2",
      uv: report[1] ? report[1].total : 0,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "3",
      uv: report[2] ? report[2].total : 0,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "4",
      uv: report[3] ? report[3].total : 0,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "5",
      uv: report[4] ? report[4].total : 0,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "6",
      uv: report[5] ? report[5].total : 0,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "7",
      uv: report[6] ? report[6].total : 0,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "8",
      uv: report[7] ? report[7].total : 0,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "9",
      uv: report[8] ? report[8].total : 0,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "10",
      uv: report[9] ? report[9].total : 0,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "11",
      uv: report[10] ? report[10].total : 0,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "12",
      uv: report[11] ? report[11].total : 0,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div style={{ width: "100%", height: "600px" }}>
      <div className="d-flex justify-content-around mb-5">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title fs-3">Tổng số xe</h5>
            <p className="card-text">{countVehicle}</p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title fs-3">Số đơn hàng</h5>
            <p className="card-text">{countTransaction}</p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title fs-3">Tài xế</h5>
            <p className="card-text">{countDriver}</p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title fs-3">Tổng tiền</h5>
            <p className="card-text">{sumTransaction}</p>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="container-fluid">
        <div className="row">
          <div className="col-8 p-2">
            <div className="p-2" style={{ backgroundColor: "#f5f5f5" }}>
              <h3 className="fs-3 text-center">Các đơn hàng trong năm</h3>
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
          </div>
        </div>
      </div>
      <hr></hr>
      <div></div>
    </div>
  );
}

export default Dashboard;
