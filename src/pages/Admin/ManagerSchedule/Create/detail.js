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
    return () => {
      setStations([]);
    };
  }, []);

  const createScheduler = () => {
    const featch = async () => {
      let data = {
        schedulerStart: state.schedulerStart,
        schedulerEnd: state.schedulerEnd,
        startAddress: state.startAddress,
        endAddress: state.endAddress,
        carNumber: state.carNumber,
        vehicleId: state.vehicleId,
        companyId: "c85665e5-0b00-4adc-8597-db5d6ad3a85e",
      };
      const response = await schedulerApi.createScheduler(data);
      console.log(response);
      const list = document.querySelectorAll(".station-item");
      list.forEach((item, index) => {
        console.log(item.value.split(" ")[1]);
        let stationId = item.value.split(" ")[0];
        let keyword = item.value.split(" ")[1];
        createDetailScheduler(
          stationId,
          response.data.schedulerId,
          index + 1,
          keyword
        );
      });
    };
    featch();
  };

  const createDetailScheduler = (
    stationId,
    schedulerId,
    indexDetail,
    keyWord
  ) => {
    const featch = async () => {
      let data = {
        stationId: stationId,
        schedulerId: schedulerId,
        indexDetail: indexDetail,
        keyWord: keyWord,
      };
      const response = await schedulerApi.createDetailScheduler(data);
    };
    featch();
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
    createScheduler();

    // window.alert("Tạo lịch chạy xe thành công nhé");
    // navigate("/admin/schedule");
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
              <option key={index} value={item.stationId + " " + item.keyWord}>
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
                <option
                  key={item.keyWord}
                  value={item.stationId + " " + item.keyWord}
                >
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
              <option key={index} value={item.stationId + " " + item.keyWord}>
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
