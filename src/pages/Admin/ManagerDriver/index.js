import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import driverApi from "../../../apis/driverApi";
import DataTable from "../../../components/AdminComponents/DataTable";
import ReactPaginate from "react-paginate";

function ManagerDriver() {
  const [driverList, setDriverList] = useState({});
  const [searchValue, setSearchValue] = useState(null);
  const [pagination, setPagination] = useState({
    page: 1,
    size: 10,
  });
  const [filters, setFilters] = useState({
    page: 1,
    size: 10,
  });

  const headingTable = [
    "Họ",
    "Tên",
    "Ngày sinh",
    "Điện thoại",
    "Địa chỉ",
    "Ngày tạo",
    "Ngày cập nhật",
    "Mã xe",
  ];

  const fetchData = async () => {
    const params = {
      page: filters.page,
      size: filters.size,
    };
    const response = await driverApi.getAllDriverWithPagination(params);
    console.log(response);
    setDriverList(response);
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

  const handleDeleteDriver = (id) => {
    try {
      driverApi.deleteDriver(id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "nowrap",
        }}
      >
        <Link to="/admin/driver/createdriver" className="btn btn-primary me-2">
          Thêm
        </Link>
        <input
          name="searchValue"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          type="text"
          className="form-control me-2"
          style={{ width: "500px" }}
        />
        <button type="submit" className="btn btn-success">
          Tìm kiếm
        </button>
      </div>
      <DataTable
        dataTable={driverList.data}
        headingTable={headingTable}
        linkDetail={"/admin/driver/detail/"}
        itemId={"driverId"}
        handleDelete={handleDeleteDriver}
      />
      <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={driverList.Total / filters.size}
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

export default ManagerDriver;
