import React, { useState, useEffect } from "react";
import vehicleApi from "../../../../apis/vehicleApi";
import stationApi from "../../../../apis/stationApi";
import { useNavigate } from "react-router-dom";

function CreateScheduler() {
  let navigate = useNavigate();
  const [vehicles, setVehicles] = useState([]);
  const [stations, setStations] = useState([]);
  const [scheduler, setScheduler] = useState({});
  useEffect(() => {
    const featchVehicles = async () => {
      const response = await vehicleApi.getAll();
      setVehicles(response.data);
    };
    featchVehicles();
  }, []);

  useEffect(() => {
    const featchStations = async () => {
      const response = await stationApi.getAll();
      setStations(response.data);
    };
    featchStations();
  }, []);

  const handleOnChange = (e) => {
    setScheduler({ ...scheduler, [e.target.name]: e.target.value });
    console.log(scheduler);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/admin/schedule/createscheduler/detail");
  };

  return (
    <div>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="driverFirstName" className="form-label">
              Địa điểm bắt đầu chạy
            </label>
            <select
              name="schedulerStart"
              id="schedulerStart"
              className="form-select"
              onChange={(e) => handleOnChange(e)}
            >
              <option selected disabled>
                Chọn địa điểm
              </option>
              {stations.map((item, index) => {
                return (
                  <option key={index} value={item.stationName}>
                    {item.stationName}
                  </option>
                );
              })}
            </select>
            <span
              className="error-message-schedulerStart"
              style={{ display: "none" }}
            ></span>
          </div>
          <div className="mb-3">
            <label htmlFor="driverFirstName" className="form-label">
              Địa điểm kết thúc
            </label>
            <select
              name="schedulerEnd"
              id="schedulerEnd"
              className="form-select"
              onChange={(e) => handleOnChange(e)}
            >
              <option selected disabled>
                Chọn địa điểm
              </option>
              {stations.map((item, index) => {
                return (
                  <option key={index} value={item.stationName}>
                    {item.stationName}
                  </option>
                );
              })}
            </select>
            <span
              className="error-message-schedulerEnd"
              style={{ display: "none" }}
            ></span>
          </div>
          <div className="mb-3">
            <label htmlFor="vehicleId" className="form-label">
              Chọn xe để tạo lịch trình
            </label>
            <select
              name="vehicleId"
              id="vehicleId"
              className="form-select"
              onChange={(e) => handleOnChange(e)}
            >
              <option selected disabled>
                Chọn xe để tạo lịch trình
              </option>
              {vehicles.map((item, index) => {
                return (
                  <option key={index} value={item.vehicleId}>
                    {item.vehicleNumber}
                  </option>
                );
              })}
            </select>
            <span
              className="error-message-vehicleId"
              style={{ display: "none" }}
            ></span>
          </div>
          <button type="submit" className="btn btn-primary">
            Tiếp tục
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateScheduler;
