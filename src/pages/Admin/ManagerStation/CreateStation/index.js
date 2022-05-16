import React, { useState, useEffect } from "react";
import stationApi from "../../../../apis/stationApi";

function CreateDriver() {
  const [station, setStation] = useState({});

  const handleOnChange = (e) => {
    setStation({
      ...station,
      [e.target.name]: e.target.value,
      companyId: "c85665e5-0b00-4adc-8597-db5d6ad3a85e",
    });
  };

  const createStation = async (e) => {
    e.preventDefault();
    try {
      if (window.confirm("Bạn có muốn tạo thông tin địa điểm")) {
        const response = await stationApi.createStation(station);
        window.alert("Đã thêm dữ liệu thành công");
        window.location.reload();
      } else {
        return;
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <h2 className="text-center fs-3">Thêm thông tin địa điểm</h2>
      <div style={{ padding: "0px 100px" }}>
        <form onSubmit={(e) => createStation(e)}>
          <div className="mb-3">
            <label htmlFor="stationName" className="form-label">
              Tên địa điểm
            </label>
            <input
              name="stationName"
              type="text"
              className="form-control"
              id="stationName"
              onChange={(e) => handleOnChange(e)}
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="stationLocation" className="form-label">
              Địa chỉ
            </label>
            <input
              name="stationLocation"
              type="text"
              className="form-control"
              id="stationLocation"
              onChange={(e) => handleOnChange(e)}
              aria-describedby="emailHelp"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateDriver;
