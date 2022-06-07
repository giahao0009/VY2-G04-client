import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import schedulerApi from "../../../apis/schedulerApi";
import stationApi from "../../../apis/stationApi";
import ReactPaginate from "react-paginate";

function ManagerSchedule() {
  const [schedulers, setSchedulers] = useState({});
  const [stations, setStations] = useState([]);
  const [searchValue, setSearchValue] = useState(null);
  const [pagination, setPagination] = useState({
    page: 1,
    size: 10,
  });
  const [filters, setFilters] = useState({
    page: 1,
    size: 10,
  });

  const featchData = async () => {
    const localstore = JSON.parse(localStorage.getItem("user"));
    const response = await schedulerApi.schedulerPagination(
      filters.page,
      filters.size,
      localstore.userId
    );
    setSchedulers(response);
    setPagination({
      ...pagination,
      totalRows: response.Total,
      page: filters.page,
    });
  };
  useEffect(() => {
    const feacthStations = async () => {
      const response = await stationApi.getAll();
      setStations(response.data);
    };
  }, []);

  useEffect(() => {
    featchData();
  }, [filters]);

  const handlePageChange = (newPage) => {
    setFilters({
      ...filters,
      page: newPage.selected + 1,
    });
  };

  const handleSearchScheduler = async () => {
    try {
      if (searchValue.length == 0 || searchValue == null) {
        featchData();
        return;
      } else {
        const response = await schedulerApi.searchScheduler(
          searchValue,
          "c85665e5-0b00-4adc-8597-db5d6ad3a85e"
        );
        setSchedulers(response.data);
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
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button onClick={handleSearchScheduler} className="btn btn-success">
          Tìm kiếm
        </button>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Biển số xe</th>
              <th>Địa điểm bắt đầu</th>
              <th>Địa điểm kết thúc</th>
            </tr>
          </thead>
          <tbody>
            {!schedulers.data
              ? null
              : schedulers.data.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.carNumber}</td>
                      <td>{item.startAddress}</td>
                      <td>{item.endAddress}</td>
                      <td>
                        <Link to={"/admin/schedule/detail/" + item.schedulerId}>
                          <button className="btn btn-warning">Chi tiết</button>
                        </Link>
                        <button className="btn btn-danger ms-2">Xoá</button>
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
          pageCount={schedulers.Total / filters.size}
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
    </div>
  );
}

export default ManagerSchedule;
