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

  return (
    <div>
      <form onSubmit={(e) => handleUpdateCar(e)}>
        <div className="mb-3">
          <label className="form-label">Id tài xế</label>
          <input
            name="driverId"
            type="text"
            className="form-control"
            value={driver.driverId}
            disabled={true}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Họ</label>
          <input
            name="driverFirstName"
            type="text"
            className="form-control"
            value={driver.driverFirstName}
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Tên</label>
          <input
            name="driverLastName"
            type="text"
            className="form-control"
            value={driver.driverLastName}
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Ngày sinh</label>
          <input
            name="driverBirthDay"
            type="text"
            className="form-control"
            value={driver.driverBirthDay}
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Địa chỉ </label>
          <input
            name="driverAddress"
            type="text"
            className="form-control"
            value={driver.driverAddress}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Số điện thoại</label>
          <input
            name="vehicleSeatNumber"
            type="text"
            className="form-control"
            value={driver.driverPhone}
            onChange={(e) => handleOnChange(e)}
          />
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
