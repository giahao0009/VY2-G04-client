import React, { useState, useEffect, useContext } from "react";
import schedulerApi from "../../../../apis/schedulerApi";
import stationApi from "../../../../apis/stationApi";
import { SchedulerContext } from "../../../../context/scheduler/SchedulerContext";
import { useNavigate } from "react-router-dom";

function CreateDetailScheduler() {
  let navigate = useNavigate();
  const [schedulerId, setSchedulerId] = useState("");
  const [stationList, setStationList] = useState([]);
  const [stations, setStations] = useState([]);
  const [state, dispatch] = useContext(SchedulerContext);
  console.log(stationList);
  useEffect(() => {
    if (!state.schedulerStart || !state.schedulerEnd) {
      navigate("/admin/schedule/createscheduler");
    }
  }, []);
  useEffect(() => {
    const featchStations = async () => {
      const response = await stationApi.getAll();
      setStations(response.data);
    };
    featchStations();
  }, []);

  const createScheduler = async () => {
    let data = {
      schedulerStart: state.schedulerStart,
      schedulerEnd: state.schedulerEnd,
      vehicleId: state.vehicleId,
      companyId: "c85665e5-0b00-4adc-8597-db5d6ad3a85e",
    };
    const response = await schedulerApi.createScheduler(data);
    setSchedulerId(response.data.schedulerId);
  };

  const createDetailScheduler = async (stationId, schedulerId, indexDetail) => {
    let data = {
      stationId: stationId,
      schedulerId: schedulerId,
      indexDetail: indexDetail,
    };
    const response = await schedulerApi.createDetailScheduler(data);
    console.log(response);
  };

  const addStation = () => {
    setStationList([...stationList, {}]);
  };

  const handleRemove = (index) => {
    const list = [...stationList];
    list.splice(index, 1);
    setStationList(list);
  };

  const handleSubmit = () => {
    const list = document.querySelectorAll(".station-item");
    createScheduler();
    list.forEach((item, index) => {
      createDetailScheduler(item.value, schedulerId, index + 1);
    });
    window.alert("Tạo lịch chạy xe thành công nhé");
    navigate("/admin/schedule");
  };
  return (
    <div>
      <h2 className="fs-3 mb-3 text-center">Tạo chi tiết lịch chạy xe</h2>
      <div className="input-group mb-3">
        <select
          disabled
          name="schedulerStart"
          id="schedulerStart"
          className="form-select station-item"
          value={state.schedulerStart}
        >
          <option selected disabled>
            Chọn địa điểm
          </option>
          {stations.map((item, index) => {
            return (
              <option key={index} value={item.stationId}>
                {item.stationName}
              </option>
            );
          })}
        </select>
      </div>
      {stationList.map((item, index) => (
        <div key={index} className="input-group mb-3">
          <select className="form-select station-item">
            <option selected disabled>
              Chọn địa điểm
            </option>
            {stations.map((item, index) => {
              return (
                <option key={index} value={item.stationId}>
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
      <div className="input-group mb-3">
        <select
          disabled
          name="schedulerEnd"
          id="schedulerEnd"
          className="form-select station-item"
          value={state.schedulerEnd}
        >
          <option selected disabled>
            Chọn địa điểm
          </option>
          {stations.map((item, index) => {
            return (
              <option key={index} value={item.stationId}>
                {item.stationName}
              </option>
            );
          })}
        </select>
      </div>
      <div className="form-group mb-3 btn-add-station">
        <button className="btn btn-warning w-100" onClick={() => addStation()}>
          Thêm địa điểm
        </button>
      </div>
      <div className="form-group mb-3 btn-add-station">
        <button
          className="btn btn-primary w-100"
          onClick={() => handleSubmit()}
        >
          Tạo lịch chạy xe
        </button>
      </div>
    </div>
  );
}

export default CreateDetailScheduler;
