import React, { useState, useEffect } from "react";
import DataTable from "../../../components/AdminComponents/DataTable";
import vehicleApi from "../../../apis/vehicleApi";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

function ManagerCar() {
  const [vehicleList, setVehicleList] = useState({});
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
    "Biển số xe",
    "Hiệu xe",
    "Tình trạng",
    "Số chổ ngồi",
    "Ngày tạo",
    "Ngày cập nhật",
    "Mã loại xe",
  ];

  const fetchData = async () => {
    const params = {
      page: filters.page,
      size: filters.size,
    };
    const response = await vehicleApi.getVehicleWithPagination(params);
    setVehicleList(response);
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

  const handleDeleteCar = (id) => {
    try {
      console.log(id);
      vehicleApi.deleteVehicle(id);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearchVehicle = async () => {
    try {
      console.log(searchValue.length);
      if (searchValue == null || searchValue.length == 0) {
        fetchData();
        return;
      } else {
        const params = { vehiclenumber: searchValue };
        const response = await vehicleApi.searchVehicle(params);
        setVehicleList(response);
      }
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
        <Link to="/admin/car/createcar" className="btn btn-primary me-2">
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
        <button
          onClick={handleSearchVehicle}
          type="submit"
          className="btn btn-success"
        >
          Tìm kiếm
        </button>
      </div>
      <DataTable
        dataTable={vehicleList.data}
        headingTable={headingTable}
        linkDetail={"/admin/car/detail/"}
        itemId={"vehicleId"}
        handleDelete={handleDeleteCar}
      />
      <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={vehicleList.Total / filters.size}
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

export default ManagerCar;
