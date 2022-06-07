import React, { useState, useEffect } from "react";
import vehicleApi from "../../../../apis/vehicleApi";

function CreateCar() {
  const [vehicle, setVehicle] = useState({});
  const [status, setStatus] = useState([]);
  const [types, setTypes] = useState([]);
  useEffect(() => {
    const fetchStatus = async () => {
      const response = await vehicleApi.getVehicleStatus();
      setStatus(response.data);
    };
    const fetchType = async () => {
      const response = await vehicleApi.getTypeVehicle();
      setTypes(response.data);
    };
    fetchStatus();
    fetchType();
  }, []);

  const createCar = async (e) => {
    e.preventDefault();
    console.log(handleValidation());
    if (handleValidation() == true) {
      try {
        const response = await vehicleApi.createVehicle(vehicle);
        console.log(response);
        window.alert("Đã thêm dữ liệu xe thành công");
        window.location.reload();
      } catch (err) {
        window.alert("đã thêm dữ liệu xe thất bại");
        console.log(err);
      }
    } else {
      return;
    }
  };
  const handleOnChange = (e) => {
    console.log(vehicle);
    setVehicle({
      ...vehicle,
      [e.target.name]: e.target.value,
      companyId: JSON.parse(localStorage.getItem("user")).userId,
    });
  };
  const handleValidation = () => {
    const vehicleNumberInput = document.querySelector("#vehicleNumber");
    const vehicleBrand = document.querySelector("#vehicleBrand");
    const vehicleStatusId = document.querySelector("#vehicleStatusId");
    const vehicleSeatNumber = document.querySelector("#vehicleSeatNumber");
    const vehicleTypeId = document.querySelector("#vehicleTypeId");
    const reg = new RegExp("^[0-9]*$");
    if (
      vehicleNumberInput.value == null ||
      vehicleNumberInput.value == "" ||
      vehicleNumberInput.value.length == 0
    ) {
      const errorBox = document.querySelector(".error-message-vehicleNumber");
      errorBox.style.display = "inline-block";
      errorBox.style.color = "red";
      errorBox.innerText = "Hãy nhập biển số xe nhé";
      return false;
    } else {
      const errorBox = document.querySelector(".error-message-vehicleNumber");
      errorBox.style.display = "none";
    }

    if (reg.test(vehicleNumberInput.value) == false) {
      const errorBox = document.querySelector(".error-message-vehicleNumber");
      errorBox.style.display = "inline-block";
      errorBox.style.color = "red";
      errorBox.innerText = "Hãy nhập đúng định dạng biển số xe";
      return false;
    } else {
      const errorBox = document.querySelector(".error-message-vehicleNumber");
      errorBox.style.display = "none";
    }

    if (
      vehicleBrand.value == null ||
      vehicleBrand.value == "" ||
      vehicleBrand.value.length == 0
    ) {
      const errorBox = document.querySelector(".error-message-vehicleBrand");
      errorBox.style.display = "inline-block";
      errorBox.style.color = "red";
      errorBox.innerText = "Hãy nhập hiệu xe nhé";
      return false;
    } else {
      const errorBox = document.querySelector(".error-message-vehicleBrand");
      errorBox.style.display = "none";
    }

    if (
      vehicleStatusId.value == null ||
      vehicleStatusId.value == "" ||
      vehicleStatusId.value.length == 0 ||
      vehicleStatusId.value == "Tình trạng xe"
    ) {
      const errorBox = document.querySelector(".error-message-vehicleStatusId");
      errorBox.style.display = "inline-block";
      errorBox.style.color = "red";
      errorBox.innerText = "Hãy chọn tình trạng xe nhé";
      return false;
    } else {
      const errorBox = document.querySelector(".error-message-vehicleStatusId");
      errorBox.style.display = "none";
    }

    if (
      vehicleSeatNumber.value == null ||
      vehicleSeatNumber.value == "" ||
      vehicleSeatNumber.value.length == 0
    ) {
      const errorBox = document.querySelector(
        ".error-message-vehicleSeatNumber"
      );
      errorBox.style.display = "inline-block";
      errorBox.style.color = "red";
      errorBox.innerText = "Hãy nhập số lượng ghế ngồi nhé";
      return false;
    } else {
      const errorBox = document.querySelector(
        ".error-message-vehicleSeatNumber"
      );
      errorBox.style.display = "none";
    }

    if (
      vehicleTypeId.value == null ||
      vehicleTypeId.value == "" ||
      vehicleTypeId.value.length == 0 ||
      vehicleStatusId.value == "Lựa chọn loại xe"
    ) {
      const errorBox = document.querySelector(".error-message-vehicleTypeId");
      errorBox.style.display = "inline-block";
      errorBox.style.color = "red";
      errorBox.innerText = "Hãy lựa chọn loại xe nhé";
      return false;
    } else {
      const errorBox = document.querySelector(".error-message-vehicleTypeId");
      errorBox.style.display = "none";
    }

    return true;
  };
  return (
    <div>
      <h2 className="text-center fs-3">Thêm thông tin xe</h2>
      <div style={{ padding: "0px 100px" }}>
        <form onSubmit={(e) => createCar(e)}>
          <div className="mb-3">
            <label htmlFor="vehicleNumber" className="form-label">
              Biển số xe
            </label>
            <input
              name="vehicleNumber"
              type="text"
              className="form-control"
              id="vehicleNumber"
              onChange={(e) => handleOnChange(e)}
              aria-describedby="emailHelp"
            />
          </div>
          <span
            className="error-message-vehicleNumber"
            style={{ display: "none" }}
          ></span>
          <div className="mb-3">
            <label htmlFor="vehicleBrand" className="form-label">
              Thương hiệu xe
            </label>
            <input
              name="vehicleBrand"
              type="text"
              className="form-control"
              id="vehicleBrand"
              onChange={(e) => handleOnChange(e)}
              aria-describedby="emailHelp"
            />
            <span
              className="error-message-vehicleBrand"
              style={{ display: "none" }}
            ></span>
          </div>
          <div className="mb-3">
            <label htmlFor="vehicleStatusId" className="form-label">
              Tình trạng xe
            </label>
            <select
              name="vehicleStatusId"
              id="vehicleStatusId"
              className="form-select"
              onChange={(e) => handleOnChange(e)}
            >
              <option selected disabled>
                Tình trạng xe
              </option>
              {status.map((item, index) => (
                <option key={index} value={item.vehicleStatusId}>
                  {item.vehicleStatusName}
                </option>
              ))}
            </select>
            <span
              className="error-message-vehicleStatusId"
              style={{ display: "none" }}
            ></span>
          </div>
          <div className="mb-3">
            <label htmlFor="vehicleSeatNumber" className="form-label">
              Số chổ ngồi
            </label>
            <input
              name="vehicleSeatNumber"
              type="number"
              className="form-control"
              min="1"
              max="100"
              id="vehicleSeatNumber"
              onChange={(e) => handleOnChange(e)}
            />
            <span
              className="error-message-vehicleSeatNumber"
              style={{ display: "none" }}
            ></span>
          </div>
          <div className="mb-3">
            <label htmlFor="vehicleTypeId" className="form-label">
              Loại xe
            </label>
            <select
              name="vehicleTypeId"
              id="vehicleTypeId"
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => handleOnChange(e)}
              defaultValue={"1"}
            >
              <option selected value="1" disabled>
                Lựa chọn loại xe
              </option>
              {types.map((item, index) => (
                <option key={index} value={item.vehicleTypeId}>
                  {item.vehicleTypeName}
                </option>
              ))}
            </select>
            <span
              className="error-message-vehicleTypeId"
              style={{ display: "none" }}
            ></span>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateCar;
