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
        if (item.vehicleStatusId === "7f709dde-3090-4665-8010-b4de0da3ac23") {
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
      companyId: "7f709dde-3090-4665-8010-b4de0da3ac13",
    });
  };
  const createDriver = async (e) => {
    e.preventDefault();
    try {
      if (window.confirm("Bạn có muốn tạo thông tin tài xế")) {
        const response = await driverApi.createDriver(driver);
        console.log(response);
        const vehicle = await vehicleApi.getVehicleById(
          response.data.vehicleId
        );
        console.log(vehicle);
        const updateVehicle = await vehicleApi.updateVehicle(
          response.data.vehicleId,
          {
            ...vehicle.data,
            vehicleStatusId: "7f709dde-3090-4665-8010-b4de0da3ac22",
          }
        );
        console.log(updateVehicle);
        window.alert("Đã thêm dữ liệu thành công");
        window.location.reload();
      } else {
        return;
      }
    } catch (e) {
      console.log(e);
    }
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
              aria-describedby="emailHelp"
            />
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
              aria-describedby="emailHelp"
            />
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
