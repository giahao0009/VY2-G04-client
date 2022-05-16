import React from "react";

function CreateScheduler() {
  return (
    <div>
      <div>
        <form>
          <div className="mb-3">
            <label htmlFor="driverFirstName" className="form-label">
              Địa điểm bắt đầu chạy
            </label>
            <input
              name="schedulerStart"
              type="text"
              className="form-control"
              id="schedulerStart"
            />
            <span
              className="error-message-schedulerStart"
              style={{ display: "none" }}
            ></span>
          </div>
          <div className="mb-3">
            <label htmlFor="driverFirstName" className="form-label">
              Địa điểm kết thúc
            </label>
            <input
              name="schedulerEnd"
              type="text"
              className="form-control"
              id="schedulerEnd"
            />
            <span
              className="error-message-schedulerEnd"
              style={{ display: "none" }}
            ></span>
          </div>
          <div className="mb-3">
            <label htmlFor="vehicleId" className="form-label">
              Chọn xe chưa có lịch trình chạy
            </label>
            <select
              name="vehicleId"
              id="vehicleId"
              className="form-select"
              defaultValue={"Bình thường"}
            >
              <option selected disabled>
                Chọn xe chưa có lịch trình chạy
              </option>
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

export default CreateScheduler;
