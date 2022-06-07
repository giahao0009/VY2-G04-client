import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import driverApi from "../../../apis/driverApi";
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

  const fetchData = async () => {
    const localstore = JSON.parse(localStorage.getItem("user"));
    const params = {
      page: filters.page,
      size: filters.size,
      companyId: localstore.userId,
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
      if (window.confirm("Bạn có muốn xoá thông tin tài xế ???")) {
        driverApi.deleteDriver(id);
        window.location.reload();
      } else {
        return;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearchDriver = async () => {
    try {
      if (searchValue.length == 0 || searchValue == null) {
        fetchData();
        return;
      } else {
        const params = { name: searchValue };
        const response = await driverApi.searchDriver(params);
        setDriverList(response);
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
        <button onClick={handleSearchDriver} className="btn btn-success">
          Tìm kiếm
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Họ</th>
            <th scope="col">Tên</th>
            <th scope="col">Số điện thoại</th>
          </tr>
        </thead>
        <tbody>
          {!driverList.data
            ? null
            : driverList.data.map((item, index) => {
                return (
                  <tr key={index}>
                    <th>{item.driverFirstName}</th>
                    <th>{item.driverLastName}</th>
                    <th>{item.driverPhone}</th>
                    <th style={{ padding: "0px", width: "110px" }}>
                      <Link to={"/admin/driver/detail/" + item.driverId}>
                        <button className="btn btn-warning">Chi tiết</button>
                      </Link>
                    </th>
                    <th style={{ padding: "0px", width: "110px" }}>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDeleteDriver(item.driverId)}
                      >
                        Xoá
                      </button>
                    </th>
                  </tr>
                );
              })}
        </tbody>
      </table>

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
