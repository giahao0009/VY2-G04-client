import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import driverApi from "../../../../apis/driverApi";
import moment from "moment";

function DetailCar() {
  let param = useParams();

  const [driver, setDriver] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const response = await driverApi.getDriverById(param.id);
      console.log(response);
      setDriver(response.data);
    };
    fetchData();
  }, []);

  const handleUpdateCar = async (e) => {
    e.preventDefault();
    if (handleValidation() == false) {
      return;
    }
    if (window.confirm("Bạn có muốn thay đổi thông tin của phương tiện")) {
      const response = await driverApi.updateDriver(driver.driverId, driver);
      window.location.reload();
    } else {
      return;
    }
  };

  const handleOnChange = (e) => {
    setDriver({ ...driver, [e.target.name]: e.target.value });
  };

  const handleValidation = () => {
    const driverFirstName = document.querySelector("#driverFirstName");
    const driverLastName = document.querySelector("#driverLastName");
    const driverBirthDay = document.querySelector("#driverBirthDay");
    const driverPhone = document.querySelector("#driverPhone");
    const driverAddress = document.querySelector("#driverAddress");
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

    return true;
  };

  return (
    <div>
      <form onSubmit={(e) => handleUpdateCar(e)}>
        <div className="mb-3">
          <label className="form-label">Họ</label>
          <input
            name="driverFirstName"
            type="text"
            className="form-control"
            id="driverFirstName"
            value={driver.driverFirstName}
            onChange={(e) => handleOnChange(e)}
          />
          <span
            className="error-message-driverFirstName"
            style={{ display: "none" }}
          ></span>
        </div>
        <div className="mb-3">
          <label className="form-label">Tên</label>
          <input
            name="driverLastName"
            type="text"
            className="form-control"
            id="driverLastName"
            value={driver.driverLastName}
            onChange={(e) => handleOnChange(e)}
          />
          <span
            className="error-message-driverLastName"
            style={{ display: "none" }}
          ></span>
        </div>
        <div className="mb-3">
          <label className="form-label">Ngày sinh</label>
          <input
            name="driverBirthDay"
            type="text"
            className="form-control"
            id="driverBirthDay"
            value={driver.driverBirthDay}
            onChange={(e) => handleOnChange(e)}
          />
          <span
            className="error-message-driverBirthDay"
            style={{ display: "none" }}
          ></span>
        </div>
        <div className="mb-3">
          <label className="form-label">Địa chỉ </label>
          <input
            name="driverAddress"
            type="text"
            className="form-control"
            id="driverAddress"
            value={driver.driverAddress}
          />
          <span
            className="error-message-driverAddress"
            style={{ display: "none" }}
          ></span>
        </div>
        <div className="mb-3">
          <label className="form-label">Số điện thoại</label>
          <input
            name="driverPhone"
            type="text"
            className="form-control"
            id="driverPhone"
            value={driver.driverPhone}
            onChange={(e) => handleOnChange(e)}
          />
          <span
            className="error-message-driverPhone"
            style={{ display: "none" }}
          ></span>
        </div>

        <div className="mb-3">
          <label className="form-label">Ngày tạo</label>
          <input
            name="createdAt "
            type="text"
            className="form-control"
            value={moment(driver.createdAt).format("YYYY-MM-DD")}
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
            value={moment(driver.updatedAt).format("YYYY-MM-DD")}
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
