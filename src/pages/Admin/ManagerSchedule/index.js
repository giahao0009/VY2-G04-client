import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import schedulerApi from "../../../apis/schedulerApi";
import stationApi from "../../../apis/stationApi";

function ManagerSchedule() {
  const [schedulers, setSchedulers] = useState([]);
  const [stations, setStations] = useState([]);
  useEffect(() => {
    const feacthStations = async () => {
      const response = await stationApi.getAll();
      setStations(response.data);
    };
  }, []);
  useEffect(() => {
    const featchData = async () => {
      let params = {
        companyId: "c85665e5-0b00-4adc-8597-db5d6ad3a85e",
      };
      const response = await schedulerApi.getAllSchedulerByCompanyId(params);
      console.log(response);
      setSchedulers(response.data);
    };
    featchData();
  }, []);
  console.log(schedulers);
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "nowrap",
        }}
      >
        <Link
          to="/admin/schedule/createscheduler"
          className="btn btn-primary me-2"
        >
          Tạo lịch chạy xe
        </Link>
        <input
          name="searchValue"
          type="text"
          className="form-control me-2"
          style={{ width: "500px" }}
        />
        <button type="submit" className="btn btn-success">
          Tìm kiếm
        </button>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Biển số xe</th>
              <th>Địa điểm bắt đầu</th>
              <th>Địa điểm kết thúc</th>
            </tr>
          </thead>
          <tbody>
            {schedulers.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.vehicleId}</td>
                  <td>{item.schedulerStart}</td>
                  <td>{item.schedulerEnd}</td>
                  <td>
                    <Link to={"/admin/schedule/detail/" + item.schedulerId}>
                      <button className="btn btn-warning">Chi tiết</button>
                    </Link>
                    <button className="btn btn-danger ms-2">Xoá</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManagerSchedule;
