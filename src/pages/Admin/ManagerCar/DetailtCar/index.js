import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import vehicleApi from "../../../../apis/vehicleApi";
import moment from "moment";

function DetailCar() {
  let param = useParams();

  const [vehicle, setVehicle] = useState({});
  const [vehicleStatus, setVehicleStatus] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await vehicleApi.getVehicleById(param.id);
      console.log(response);
      setVehicle(response.data);
    };
    fetchData();
  }, []);

  useEffect(async () => {
    const response = await vehicleApi.getVehicleStatus();
    setVehicleStatus(response.data);
  }, []);
  console.log(vehicle);

  const handleUpdateCar = async (e) => {
    e.preventDefault();
    if (handleValidation() == false) {
      return;
    }

    if (window.confirm("Bạn có muốn thay đổi thông tin của phương tiện")) {
      const response = await vehicleApi.updateVehicle(
        vehicle.vehicleId,
        vehicle
      );
      console.log(response);
      window.location.reload();
    } else {
      return;
    }
  };

  const handleOnChange = (e) => {
    setVehicle({ ...vehicle, [e.target.name]: e.target.value });
  };

  const handleValidation = () => {
    const vehicleNumberInput = document.querySelector("#vehicleNumber");
    const vehicleBrand = document.querySelector("#vehicleBrand");
    const vehicleSeatNumber = document.querySelector("#vehicleSeatNumber");
    const vehicleStatusId = document.querySelector("#vehicleStatusId");
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

    return true;
  };

  return (
    <div>
      <form onSubmit={(e) => handleUpdateCar(e)}>
        <div className="mb-3">
          <label className="form-label">Biển số xe</label>
          <input
            name="vehicleNumber"
            type="text"
            id="vehicleNumber"
            className="form-control"
            value={vehicle.vehicleNumber}
            onChange={(e) => handleOnChange(e)}
          />
          <span
            className="error-message-vehicleNumber"
            style={{ display: "none" }}
          ></span>
        </div>
        <div className="mb-3">
          <label className="form-label">Loại xe</label>
          <input
            disabled
            name="vehicleTypeId"
            type="text"
            className="form-control"
            value={vehicle.vehicleTypeId == 1 ? "Bus" : "Tàu hoả"}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nhãn hiệu</label>
          <input
            disabled
            name="vehicleBrand"
            type="text"
            className="form-control"
            value={vehicle.vehicleBrand}
            onChange={(e) => handleOnChange(e)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Số chỗ ngồi</label>
          <input
            name="vehicleSeatNumber"
            id="vehicleSeatNumber"
            type="number"
            className="form-control"
            value={vehicle.vehicleSeatNumber}
            onChange={(e) => handleOnChange(e)}
          />
          <span
            className="error-message-vehicleSeatNumber"
            style={{ display: "none" }}
          ></span>
        </div>
        <div className="mb-3">
          <label htmlFor="carBrand" className="form-label">
            Tình trạng xe
          </label>
          <select
            name="vehicleStatusId"
            id="vehicleStatusId"
            value={vehicle.vehicleStatusId}
            className="form-select"
            onChange={(e) => handleOnChange(e)}
          >
            <option value="Bình thường" disabled>
              Tình trạng xe
            </option>
            {vehicleStatus.map((item) => {
              return (
                <option value={item.vehicleStatusId}>
                  {item.vehicleStatusName}
                </option>
              );
            })}
          </select>
          <span
            className="error-message-vehicleStatusId"
            style={{ display: "none" }}
          ></span>
        </div>
        <div className="mb-3">
          <label className="form-label">Ngày tạo</label>
          <input
            name="createdAt "
            type="text"
            className="form-control"
            value={moment(vehicle.createdAt).format("YYYY-MM-DD")}
            disabled={true}
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Ngày cập nhật</label>
          <input
            name="updatedAt "
            type="text"
            className="form-control"
            value={moment(vehicle.updatedAt).format("YYYY-MM-DD")}
            disabled={true}
            onChange={(e) => handleOnChange(e)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default DetailCar;
