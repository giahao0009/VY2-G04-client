import React, { useState, useEffect } from "react";
import driverApi from "../../../../apis/driverApi";
import vehicleApi from "../../../../apis/vehicleApi";

function CreateDriver() {
  const [driver, setDriver] = useState({});
  const [vehicleList, setVehicleList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await vehicleApi.getAll();
      console.log(response);
      let list = [];
      response.data.forEach((item) => {
        if (item.vehicleStatusId.trim() === "2") {
          list.push(item);
        } else {
          return;
        }
      });

      setVehicleList(list);
    };
    fetchData();
  }, []);

  const handleOnChange = (e) => {
    setDriver({
      ...driver,
      [e.target.name]: e.target.value,
    });
  };
  const createDriver = async (e) => {
    e.preventDefault();
    try {
      if (handleValidation() == false) {
        return;
      }
      if (window.confirm("Bạn có muốn tạo thông tin tài xế")) {
        const response = await driverApi.createDriver(driver);
        console.log(response);
        const vehicle = await vehicleApi.getVehicleById(
          response.data.vehicleId
        );
        console.log(vehicle);
        const vehicleStatus = await vehicleApi.getVehicleStatus();
        console.log(vehicleStatus);
        const updateVehicle = await vehicleApi.updateVehicle(
          response.data.vehicleId,
          {
            ...vehicle.data,
            vehicleStatusId: vehicleStatus.data[1].statusId,
          }
        );
        console.log(updateVehicle);
        window.alert("Đã thêm dữ liệu thành công");
        // window.location.reload();
      } else {
        return;
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleValidation = () => {
    const driverFirstName = document.querySelector("#driverFirstName");
    const driverLastName = document.querySelector("#driverLastName");
    const driverBirthDay = document.querySelector("#driverBirthDay");
    const driverPhone = document.querySelector("#driverPhone");
    const driverAddress = document.querySelector("#driverAddress");
    const vehicleId = document.querySelector("#vehicleId");
    const reg = new RegExp("^[0-9]*$");

    if (
      driverFirstName.value == "" ||
      driverFirstName.value == null ||
      driverFirstName.value.length == 0
    ) {
      const errorBox = document.querySelector(".error-message-driverFirstName");
      errorBox.style.display = "inline-block";
      errorBox.style.color = "red";
      errorBox.innerText = "Hãy nhập vào họ của driver nhé !!!";
      return false;
    } else {
      const errorBox = document.querySelector(".error-message-driverFirstName");
      errorBox.style.display = "none";
    }

    if (
      driverLastName.value == "" ||
      driverLastName.value == null ||
      driverLastName.value.length == 0
    ) {
      const errorBox = document.querySelector(".error-message-driverLastName");
      errorBox.style.display = "inline-block";
      errorBox.style.color = "red";
      errorBox.innerText = "Hãy nhập vào tên của driver nhé !!!";
      return false;
    } else {
      const errorBox = document.querySelector(".error-message-driverLastName");
      errorBox.style.display = "none";
    }

    if (
      driverBirthDay.value == "" ||
      driverBirthDay.value == null ||
      driverBirthDay.value.length == 0
    ) {
      const errorBox = document.querySelector(".error-message-driverBirthDay");
      errorBox.style.display = "inline-block";
      errorBox.style.color = "red";
      errorBox.innerText = "Hãy nhập vào ngày sinh của driver nhé !!!";
      return false;
    } else {
      const errorBox = document.querySelector(".error-message-driverBirthDay");
      errorBox.style.display = "none";
    }

    if (
      driverPhone.value == "" ||
      driverPhone.value == null ||
      driverPhone.value.length == 0
    ) {
      const errorBox = document.querySelector(".error-message-driverPhone");
      errorBox.style.display = "inline-block";
      errorBox.style.color = "red";
      errorBox.innerText = "Hãy nhập vào số điện thoại của driver nhé !!!";
      return false;
    } else {
      const errorBox = document.querySelector(".error-message-driverPhone");
      errorBox.style.display = "none";
    }

    if (reg.test(driverPhone.value) == false) {
      const errorBox = document.querySelector(".error-message-driverPhone");
      errorBox.style.display = "inline-block";
      errorBox.style.color = "red";
      errorBox.innerText =
        "Không nhập ký tự trong số điện thoại của driver nhé !!!";
      return false;
    } else {
      const errorBox = document.querySelector(".error-message-driverPhone");
      errorBox.style.display = "none";
    }

    if (
      driverAddress.value == null ||
      driverAddress.value == "" ||
      driverAddress.value.length == 0
    ) {
      const errorBox = document.querySelector(".error-message-driverAddress");
      errorBox.style.display = "inline-block";
      errorBox.style.color = "red";
      errorBox.innerText = "Hãy nhập địa chỉ của driver nhé !!!";
      return false;
    } else {
      const errorBox = document.querySelector(".error-message-driverAddress");
      errorBox.style.display = "none";
    }

    if (
      vehicleId.value == null ||
      vehicleId.value == "" ||
      vehicleId.value.length == 0 ||
      vehicleId.value == "Chọn xe cho tài xế"
    ) {
      const errorBox = document.querySelector(".error-message-vehicleId");
      errorBox.style.display = "inline-block";
      errorBox.style.color = "red";
      errorBox.innerText = "Hãy lựa xe cho driver nhé !!!";
      return false;
    } else {
      const errorBox = document.querySelector(".error-message-vehicleId");
      errorBox.style.display = "none";
    }

    return true;
  };
  return (
    <div>
      <h2 className="text-center fs-3">Thêm thông tin tài xế</h2>
      <div style={{ padding: "0px 100px" }}>
        <form onSubmit={(e) => createDriver(e)}>
          <div className="mb-3">
            <label htmlFor="driverFirstName" className="form-label">
              Họ
            </label>
            <input
              name="driverFirstName"
              type="text"
              className="form-control"
              id="driverFirstName"
              onChange={(e) => handleOnChange(e)}
            />
            <span
              className="error-message-driverFirstName"
              style={{ display: "none" }}
            ></span>
          </div>
          <div className="mb-3">
            <label htmlFor="driverLastName" className="form-label">
              Tên
            </label>
            <input
              name="driverLastName"
              type="text"
              className="form-control"
              id="driverLastName"
              onChange={(e) => handleOnChange(e)}
            />
            <span
              className="error-message-driverLastName"
              style={{ display: "none" }}
            ></span>
          </div>
          <div className="mb-3">
            <label htmlFor="driverBirthDay" className="form-label">
              Ngày sinh
            </label>
            <input
              name="driverBirthDay"
              type="date"
              className="form-control"
              id="driverBirthDay"
              onChange={(e) => handleOnChange(e)}
            />
            <span
              className="error-message-driverBirthDay"
              style={{ display: "none" }}
            ></span>
          </div>
          <div className="mb-3">
            <label htmlFor="driverPhone" className="form-label">
              Số điện thoại
            </label>
            <input
              name="driverPhone"
              type="text"
              className="form-control"
              id="driverPhone"
              onChange={(e) => handleOnChange(e)}
            />
            <span
              className="error-message-driverPhone"
              style={{ display: "none" }}
            ></span>
          </div>
          <div className="mb-3">
            <label htmlFor="driverAddress" className="form-label">
              Địa chỉ
            </label>
            <input
              name="driverAddress"
              type="text"
              className="form-control"
              id="driverAddress"
              onChange={(e) => handleOnChange(e)}
            />
            <span
              className="error-message-driverAddress"
              style={{ display: "none" }}
            ></span>
          </div>
          <div className="mb-3">
            <label htmlFor="vehicleId" className="form-label">
              Chọn xe chưa có người lái
            </label>
            <select
              name="vehicleId"
              id="vehicleId"
              className="form-select"
              onChange={(e) => handleOnChange(e)}
              defaultValue={"Bình thường"}
            >
              <option selected disabled>
                Chọn xe cho tài xế
              </option>
              {vehicleList.map((item, index) => {
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
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateDriver;
