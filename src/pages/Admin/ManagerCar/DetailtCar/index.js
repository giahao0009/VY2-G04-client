import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import vehicleApi from "../../../../apis/vehicleApi";
import moment from "moment";

function DetailCar() {
  let param = useParams();

  const [vehicle, setVehicle] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const response = await vehicleApi.getVehicleById(param.id);
      console.log(response);
      setVehicle(response.data);
    };
    fetchData();
  }, []);

  const handleUpdateCar = async (e) => {
    e.preventDefault();
    if (window.confirm("Bạn có muốn thay đổi thông tin của phương tiện")) {
      const response = await vehicleApi.updateVehicle(
        vehicle.vehicleId,
        vehicle
      );
      window.location.reload();
    } else {
      return;
    }
  };

  const handleOnChange = (e) => {
    setVehicle({ ...vehicle, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={(e) => handleUpdateCar(e)}>
        <div className="mb-3">
          <label className="form-label">Id xe</label>
          <input
            name="vehicleId"
            type="text"
            className="form-control"
            value={vehicle.vehicleId}
            disabled={true}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Biển số xe</label>
          <input
            name="vehicleNumber"
            type="text"
            className="form-control"
            value={vehicle.vehicleNumber}
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Loại xe</label>
          <input
            name="vehicleTypeId"
            type="text"
            className="form-control"
            value={vehicle.vehicleTypeId}
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nhãn hiệu</label>
          <input
            name="vehicleBrand"
            type="text"
            className="form-control"
            value={vehicle.vehicleBrand}
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Mã hãng xe </label>
          <input
            name="companyId"
            type="text"
            className="form-control"
            value={vehicle.companyId}
            disabled={true}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Số chỗ ngồi</label>
          <input
            name="vehicleSeatNumber"
            type="text"
            className="form-control"
            value={vehicle.vehicleSeatNumber}
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="carBrand" className="form-label">
            Tình trạng xe
          </label>
          <select
            name="vehicleStatus"
            id="vehicleStatus"
            value={vehicle.vehicleStatus}
            className="form-select"
            onChange={(e) => handleOnChange(e)}
          >
            <option value="Bình thường" disabled>
              Tình trạng xe
            </option>
            <option value="Bình thường">Bình thường</option>
            <option value="Bảo hành">Bảo hành</option>
            <option value="Không hoạt động được">Không hoạt động được</option>
          </select>
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
