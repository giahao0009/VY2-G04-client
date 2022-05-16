import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import stationApi from "../../../apis/stationApi";
import ReactPaginate from "react-paginate";
import moment from "moment";

function ManagerStation() {
  const [stationList, setStationList] = useState([]);
  console.log(stationList);
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
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Tên trạm</th>
            <th scope="col">Địa chỉ</th>
            <th scope="col">Ngày tạo</th>
            <th scopr="col">Ngày cập nhật</th>
          </tr>
        </thead>
        <tbody>
          {!stationList.data
            ? null
            : stationList.data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.stationName}</td>
                    <td>{item.stationLocation}</td>
                    <td>{moment(item.createdAt).format("YYYY-MM-DD")}</td>
                    <td>{moment(item.updatedAt).format("YYYY-MM-DD")}</td>
                    <td>
                      <Link to={"/admin/station/detail/" + item.stationId}>
                        <button className="btn btn-warning">Chi tiết</button>
                      </Link>
                    </td>
                    <td>
                      <button className="btn btn-danger">Xoá</button>
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
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
