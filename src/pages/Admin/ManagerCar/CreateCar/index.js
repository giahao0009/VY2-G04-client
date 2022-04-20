import React, { useState } from "react";
import vehicleApi from "../../../../apis/vehicleApi";

function CreateCar() {
  const [vehicle, setVehicle] = useState({});
  const createCar = async (e) => {
    e.preventDefault();
    try {
      const response = await vehicleApi.createVehicle(vehicle);
      window.alert("Đã thêm dữ liệu xe thành công");
      window.location.reload();
    } catch (err) {
      window.alert("đã thêm dữ liệu xe thất bại");
      console.log(err);
    }
  };
  const handleOnChange = (e) => {
    setVehicle({ ...vehicle, [e.target.name]: e.target.value });
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
            <label htmlFor="carBrand" className="form-label">
              Tình trạng xe
            </label>
            <select
              name="vehicleStatus"
              id="vehicleStatus"
              className="form-select"
              onChange={(e) => handleOnChange(e)}
              defaultValue={"Bình thường"}
            >
              <option selected value="Bình thường" disabled>
                Tình trạng xe
              </option>
              <option value="Bình thường">Bình thường</option>
              <option value="Bảo hành">Bảo hành</option>
              <option value="Chưa có người lái">Chưa có người lái</option>
              <option value="Không hoạt động được">Không hoạt động được</option>
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
              id="vehicleTypeId"
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => handleOnChange(e)}
              defaultValue={"1"}
            >
              <option selected value="1" disabled>
                Lựa chọn loại xe
              </option>
              <option value="1">Bus</option>
              <option value="2">Tàu hoả</option>
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
