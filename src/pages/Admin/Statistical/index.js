import React, { useEffect, useState } from "react";
import transactionApi from "../../../apis/transactionApi";
import vehicleApi from "../../../apis/vehicleApi";
import moment from "moment";
import ReactPaginate from "react-paginate";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Statistical() {
  const [transactions, setTransactions] = useState([]);
  const [report, setReport] = useState([]);
  const [vehicleList, setVehicleList] = useState({});
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

  const data = [
    {
      name: "1",
      uv: report[0] ? report[0].total : 0,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "2",
      uv: report[1] ? report[1].total : 0,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "3",
      uv: report[2] ? report[2].total : 0,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "4",
      uv: report[3] ? report[3].total : 0,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "5",
      uv: report[4] ? report[4].total : 0,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "6",
      uv: report[5] ? report[5].total : 0,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "7",
      uv: report[6] ? report[6].total : 0,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "8",
      uv: report[7] ? report[7].total : 0,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "9",
      uv: report[8] ? report[8].total : 0,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "10",
      uv: report[9] ? report[9].total : 0,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "11",
      uv: report[10] ? report[10].total : 0,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "12",
      uv: report[11] ? report[11].total : 0,
      pv: 4300,
      amt: 2100,
    },
  ];

  useEffect(() => {
    const featchData = async () => {
      const response = await transactionApi.getTransaction(
        "c85665e5-0b00-4adc-8597-db5d6ad3a85e"
      );
      let list = response.data;
      list.sort((a, b) => {
        return b.pickupDate.localeCompare(a.pickupDate);
      });
      setTransactions(list);
    };
    featchData();
  }, []);

  useEffect(() => {
    const featchData = async () => {
      const response = await transactionApi.reportTransaction(
        "c85665e5-0b00-4adc-8597-db5d6ad3a85e"
      );
      setReport(response.data);
    };
    featchData();
  }, []);

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="p-2" style={{ backgroundColor: "#f5f5f5" }}>
              <h3 className="fs-3 text-center">
                Đơn hàng của các tháng trong năm 2022
              </h3>
              <ResponsiveContainer height={600}>
                <AreaChart
                  data={data}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="uv"
                    stroke="#8884d8"
                    fill="#8884d8"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <h3 className="text-center fs-3">
              Danh sách các giao dịch gần đây
            </h3>
            <table className="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Tên khách hàng</th>
                  <th scope="col">Thời gian đặt</th>
                  <th scope="col">Phương tiện</th>
                  <th scope="col">Tổng tiền</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((item, index) => {
                  console.log(item);
                  if (index < 10) {
                    return (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{item.customerName}</td>
                        <td>
                          {moment(item.pickupDate).format("DD-MM-YYYY") +
                            " - " +
                            moment(item.pickupTime).format("HH:mm")}
                        </td>
                        <td>{item.vehicle}</td>
                        <td>{item.totalCost}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>
          <div className="col-4">
            <h3 className="text-center fs-3">Lịch sử giao dịch</h3>
            <div
              className="p-2"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.05)",
                height: "300px",
                overflowY: "auto",
              }}
            >
              {transactions.map((item, index) => {
                return (
                  <div className="mb-2 mt-1" key={index}>
                    {moment(item.pickupDate).format("DD-MM-YYYY") +
                      " - " +
                      moment(item.pickupTime).format("HH:mm")}{" "}
                    : Đã thực hiện 1 giao dịch
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="row mt-3 mb-3">
          <div className="col-12">
            <h3 className="fs-3 mb-2 text-center">
              Danh sách tình trạng các phương tiện
            </h3>
            <table className="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Biển số xe</th>
                  <th scope="col">Tình trạng xe</th>
                </tr>
              </thead>
              <tbody>
                {!vehicleList.data
                  ? null
                  : vehicleList.data.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <th scope="row">{item.vehicleNumber}</th>

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
        </div>
      </div>
    </div>
  );
}

export default Statistical;
