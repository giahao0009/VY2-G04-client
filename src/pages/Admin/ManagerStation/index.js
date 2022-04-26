import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DataTable from "../../../components/AdminComponents/DataTable";
import stationApi from "../../../apis/stationApi";
import ReactPaginate from "react-paginate";

function ManagerStation() {
  const headingTable = ["Tên trạm", "Địa chỉ", "Ngày tạo", "Ngày cập nhật"];
  const [stationList, setStationList] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    size: 10,
  });
  const [filters, setFilters] = useState({
    page: 1,
    size: 10,
  });
  const fetchData = async () => {
    const params = {
      page: filters.page,
      size: filters.size,
    };
    const response = await stationApi.getAllStationWithPagination(params);
    console.log(response);
    setStationList(response);
    setPagination({
      ...pagination,
      totalRows: response.total,
      page: filters.page,
    });
  };

  useEffect(() => {
    fetchData();
  }, [filters]);

  const handlePageChange = (newPage) => {
    setFilters({
      ...filters,
      page: newPage.selected + 1,
    });
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "nowrap",
        }}
      >
        <Link
          to="/admin/station/createstation"
          className="btn btn-primary me-2"
        >
          Thêm
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
      <DataTable
        dataTable={stationList.data}
        headingTable={headingTable}
        itemId={"vehicleId"}
      />
      <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={stationList.Total / filters.size}
        marginPagesDisplayed={3}
        pageRangeDisplayed={3}
        containerClassName={"pagination justify-content-center mt-2"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default ManagerStation;
