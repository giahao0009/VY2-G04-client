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

  const fetchData = async () => {
    const params = {
      page: filters.page,
      size: filters.size,
      companyid: "c85665e5-0b00-4adc-8597-db5d6ad3a85e",
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
      if (window.confirm("Bạn có muốn xoá ?")) {
        vehicleApi.deleteVehicle(id);
        window.location.reload();
      } else {
        return;
      }
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
    <div className="container-fluid">
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
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Biển số</th>
            <th scope="col">Số chổ ngồi</th>
            <th scope="col">Keyword</th>
            <th scope="col">Loại xe</th>
            <th scope="col">Tình trạng</th>
          </tr>
        </thead>
        <tbody>
          {!vehicleList.data
            ? null
            : vehicleList.data.map((item) => {
                return (
                  <tr>
                    <th scope="row">{item.vehicleNumber}</th>
                    <td> {item.vehicleSeatNumber}</td>
                    <td>{item.keyRelation}</td>
                    <td>
                      {item.vehicleTypeId.trim() == "1" ? (
                        <span>Bus</span>
                      ) : (
                        <span>Tàu</span>
                      )}
                    </td>
                    <td style={{ padding: "0px", width: "150  px" }}>
                      {item.vehicleStatusId.trim() == "1" ? (
                        <span
                          style={{
                            color: "#fff",
                            backgroundColor: "green",
                            padding: "5px",
                            borderRadius: "5px",
                          }}
                        >
                          Bình thường
                        </span>
                      ) : (
                        <span
                          style={{
                            color: "#fff",
                            backgroundColor: "red",
                            padding: "5px",
                            borderRadius: "5px",
                          }}
                        >
                          Chưa có người lái
                        </span>
                      )}
                    </td>
                    <td style={{ padding: "0px", width: "110px" }}>
                      <Link to={"/admin/car/detail/" + item.vehicleId}>
                        <button className="btn btn-warning">Chi tiết</button>
                      </Link>
                    </td>
                    <td style={{ padding: "0px", width: "110px" }}>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDeleteCar(item.vehicleId)}
                      >
                        Xoá
                      </button>
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
