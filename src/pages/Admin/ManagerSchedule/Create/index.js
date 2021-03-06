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
      const response = await vehicleApi.getVehicleByCompanyId(
        JSON.parse(localStorage.getItem("user")).userId
      );
      setVehicles(response.data);
    };
    featchVehicles();
  }, []);

  useEffect(() => {
    const featchStations = async () => {
      const response = await stationApi.getStationByCompanyId(
        JSON.parse(localStorage.getItem("user")).userId
      );
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
      schedulerStart == "Ch???n ?????a ??i???m"
    ) {
      const errorBox = document.querySelector(".error-message-schedulerStart");
      errorBox.innerText = "H??y ch???n ?????a ??i???m b???t ?????u nh??";
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
      schedulerEnd == "Ch???n ?????a ??i???m"
    ) {
      const errorBox = document.querySelector(".error-message-schedulerEnd");
      errorBox.innerText = "H??y ch???n ?????a ??i???m b???t ?????u nh??";
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
      vehicleId == "Ch???n xe ????? t???o l???ch tr??nh"
    ) {
      const errorBox = document.querySelector(".error-message-vehicleId");
      errorBox.innerText = "H??y ch???n xe nh??";
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
        "Kh??ng th??? ch???n ?????a ??i???m b???t ?????u gi???ng ?????a ??i???m k???t th??c";
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
              ?????a ??i???m b???t ?????u ch???y
            </label>
            <select
              name="schedulerStart"
              id="schedulerStart"
              className="form-select startAddress"
              onChange={(e) => handleOnChange(e)}
            >
              <option selected disabled>
                Ch???n ?????a ??i???m
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
              ?????a ??i???m k???t th??c
            </label>
            <select
              name="schedulerEnd"
              id="schedulerEnd"
              className="form-select endAddress"
              onChange={(e) => handleOnChange(e)}
            >
              <option selected disabled>
                Ch???n ?????a ??i???m
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
              Ch???n xe ????? t???o l???ch tr??nh
            </label>
            <select
              name="vehicleId"
              id="vehicleId"
              className="form-select carNumber"
              onChange={(e) => handleOnChange(e)}
            >
              <option selected disabled>
                Ch???n xe ????? t???o l???ch tr??nh
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
            Ti???p t???c
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateScheduler;
