import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import stationApi from "../../../../apis/stationApi";
import moment from "moment";

function DetailStation() {
  let param = useParams();
  const [station, setStation] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const response = await stationApi.getStationById(param.id);
      console.log(response);
      setStation(response.data);
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setStation({ ...station, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (window.confirm("Bạn có muốn thay đổi thông tin ??")) {
      const response = await stationApi.updateStationById(
        station.stationId,
        station
      );
      console.log(response);
      window.location.reload();
    } else {
      return;
    }
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <label className="form-label">Tên trạm</label>
          <input
            name="stationName"
            type="text"
            className="form-control"
            id="stationName"
            value={station.stationName}
            onChange={(e) => handleChange(e)}
          />
          <span
            className="error-message-driverFirstName"
            style={{ display: "none" }}
          ></span>
        </div>
        <div className="mb-3">
          <label className="form-label">Địa chỉ</label>
          <input
            name="stationLocation"
            type="text"
            className="form-control"
            id="stationLocation"
            value={station.stationLocation}
            onChange={(e) => handleChange(e)}
          />
          <span
            className="error-message-driverFirstName"
            style={{ display: "none" }}
          ></span>
        </div>
        <div className="mb-3">
          <label className="form-label">Ngày tạo</label>
          <input
            disabled
            type="text"
            className="form-control"
            value={moment(station.createdAt).format("YYYY-MM-DD")}
          />
          <span
            className="error-message-driverFirstName"
            style={{ display: "none" }}
          ></span>
        </div>
        <div className="mb-3">
          <label className="form-label">Ngày cập nhật gần nhất</label>
          <input
            disabled
            type="text"
            className="form-control"
            value={moment(station.updatedAt).format("YYYY-MM-DD")}
            onChange={(e) => handleChange(e)}
          />
          <span
            className="error-message-driverFirstName"
            style={{ display: "none" }}
          ></span>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default DetailStation;
