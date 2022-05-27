import React, { useContext, useState, useEffect } from "react";
import vehicleApi from "../../../../apis/vehicleApi";
import stationApi from "../../../../apis/stationApi";
import { useNavigate } from "react-router-dom";
import { SchedulerContext } from "../../../../context/scheduler/SchedulerContext";
import { setSchedulerState } from "../../../../context/scheduler/SchedulerAction";

function CreateScheduler() {
  let navigate = useNavigate();
  const [vehicles, setVehicles] = useState([]);
  const [stations, setStations] = useState([]);
  const [scheduler, setScheduler] = useState({});
  const [state, dispatch] = useContext(SchedulerContext);
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
    setScheduler({
      ...scheduler,
      [e.target.name]: e.target.value,
      [e.target.className.split(" ")[1]]:
        e.target.options[e.target.selectedIndex].text,
    });
    console.log(scheduler);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation() == false) {
      return;
    }
    dispatch(
      setSchedulerState({
        schedulerStart: scheduler.schedulerStart,
        schedulerEnd: scheduler.schedulerEnd,
        vehicleId: scheduler.vehicleId,
        startAddress: scheduler.startAddress,
        endAddress: scheduler.endAddress,
        carNumber: scheduler.carNumber,
      })
    );
    navigate("/admin/schedule/createscheduler/detail");
    console.log(state);
  };

  const handleValidation = () => {
    const schedulerStart = document.querySelector("#schedulerStart").value;
    const schedulerEnd = document.querySelector("#schedulerEnd").value;
    const vehicleId = document.querySelector("#vehicleId").value;

    if (
      !schedulerStart ||
      schedulerStart == null ||
      schedulerStart == "" ||
      schedulerStart.length == 0 ||
      schedulerStart == "Chọn địa điểm"
    ) {
      const errorBox = document.querySelector(".error-message-schedulerStart");
      errorBox.innerText = "Hãy chọn địa điểm bắt đầu nhé";
      errorBox.style.display = "inline-block";
      errorBox.style.color = "red";
      return false;
    } else {
      const errorBox = document.querySelector(".error-message-schedulerStart");
      errorBox.style.display = "none";
    }

    if (
      !schedulerEnd ||
      schedulerEnd == null ||
      schedulerEnd == "" ||
      schedulerEnd.length == 0 ||
      schedulerEnd == "Chọn địa điểm"
    ) {
      const errorBox = document.querySelector(".error-message-schedulerEnd");
      errorBox.innerText = "Hãy chọn địa điểm bắt đầu nhé";
      errorBox.style.display = "inline-block";
      errorBox.style.color = "red";
      return false;
    } else {
      const errorBox = document.querySelector(".error-message-schedulerEnd");
      errorBox.style.display = "none";
    }

    if (
      !vehicleId ||
      vehicleId == null ||
      vehicleId == "" ||
      vehicleId.length == 0 ||
      vehicleId == "Chọn xe để tạo lịch trình"
    ) {
      const errorBox = document.querySelector(".error-message-vehicleId");
      errorBox.innerText = "Hãy chọn xe nhé";
      errorBox.style.display = "inline-block";
      errorBox.style.color = "red";
      return false;
    } else {
      const errorBox = document.querySelector(".error-message-vehicleId");
      errorBox.style.display = "none";
    }

    if (schedulerStart == schedulerEnd || schedulerEnd == schedulerStart) {
      const errorBox = document.querySelector(".error-message-schedulerEnd");
      errorBox.innerText =
        "Không thể chọn địa điểm bắt đầu giống địa điểm kết thúc";
      errorBox.style.display = "inline-block";
      errorBox.style.color = "red";
      return false;
    } else {
      const errorBox = document.querySelector(".error-message-schedulerEnd");
      errorBox.style.display = "none";
    }

    return true;
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
              className="form-select startAddress"
              onChange={(e) => handleOnChange(e)}
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
              className="form-select endAddress"
              onChange={(e) => handleOnChange(e)}
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
              className="form-select carNumber"
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
