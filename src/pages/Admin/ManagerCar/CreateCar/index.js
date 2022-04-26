import React, { useState } from "react";
import vehicleApi from "../../../../apis/vehicleApi";

function CreateCar() {
  const [vehicle, setVehicle] = useState({});
  const createCar = async (e) => {
    e.preventDefault();
    try {
      const response = await vehicleApi.createVehicle(vehicle);
      console.log(response);
      window.alert("Đã thêm dữ liệu xe thành công");
      window.location.reload();
    } catch (err) {
      window.alert("đã thêm dữ liệu xe thất bại");
      console.log(err);
    }
  };
  const handleOnChange = (e) => {
    console.log(vehicle);
    setVehicle({
      ...vehicle,
      [e.target.name]: e.target.value,
      companyId: "7f709dde-3090-4665-8010-b4de0da3ac13",
    });
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
              <option value="7f709dde-3090-4665-8010-b4de0da3ac22">
                Bình thường
              </option>
              <option value="7f709dde-3090-4665-8010-b4de0da3ac23">
                Chưa có người lái
              </option>
            </select>
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
              <option value="7f709dde-3090-4665-8010-b4de0da3ac20">Bus</option>
              <option value="7f709dde-3090-4665-8010-b4de0da3ac21">
                Tàu hoả
              </option>
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

export default CreateCar;
