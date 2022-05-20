import React, { useState, useEffect } from "react";
import stationApi from "../../../../apis/stationApi";

function CreateDetailScheduler() {
  const [stationList, setStationList] = useState([]);
  const [stations, setStations] = useState([]);
  useEffect(() => {
    const featchStations = async () => {
      const response = await stationApi.getAll();
      setStations(response.data);
    };
    featchStations();
  }, []);
  const addStation = () => {
    setStationList([...stationList, {}]);
  };
  const handleRemove = (index) => {
    const list = [...stationList];
    list.splice(index, 1);
    setStationList(list);
  };
  const handleOnChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <h2 className="fs-3 mb-3 text-center">Tạo chi tiết lịch chạy xe</h2>
      <div className="input-group mb-3 station-item">
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
      </div>
      {stationList.map((item, index) => (
        <div key={index} className="input-group mb-3">
          <select
            name="schedulerStart"
            id="schedulerStart"
            className="form-select"
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
          {stationList.length > 0 && (
            <button
              className="btn btn-danger"
              onClick={() => handleRemove(index)}
            >
              Remove
            </button>
          )}
        </div>
      ))}
      <div className="form-group mb-3 btn-add-station">
        <button className="btn btn-warning w-100" onClick={() => addStation()}>
          Thêm địa điểm
        </button>
      </div>
      <div className="form-group mb-3 btn-add-station">
        <button className="btn btn-primary w-100" onClick={() => addStation()}>
          Tạo lịch chạy xe
        </button>
      </div>
    </div>
  );
}

export default CreateDetailScheduler;
