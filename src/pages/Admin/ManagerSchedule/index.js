import React from "react";
import { Link } from "react-router-dom";

function ManagerSchedule() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "nowrap",
        }}
      >
        <Link
          to="/admin/schedule/createscheduler"
          className="btn btn-primary me-2"
        >
          Tạo lịch chạy xe
        </Link>
        <input
          name="searchValue"
          type="text"
          className="form-control me-2"
          style={{ width: "500px" }}
        />
        <button type="submit" className="btn btn-success">
          Tìm kiếm
        </button>
      </div>
      <div></div>
    </div>
  );
}

export default ManagerSchedule;
