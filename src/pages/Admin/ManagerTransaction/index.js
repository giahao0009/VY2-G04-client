import React, { useEffect, useState } from "react";
import transactionApi from "../../../apis/transactionApi";
import { Link } from "react-router-dom";
import moment from "moment";
import ReactPaginate from "react-paginate";

function ManagerTransaction() {
  const [transactions, setTransactions] = useState({});
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
    const response = await transactionApi.transactionPagination(
      filters.page,
      filters.size,
      localstore.userId
    );
    setTransactions(response);
    setPagination({
      ...pagination,
      totalRows: response.Total,
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
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Tên khách hàng</th>
            <th scope="col">Xe đặt</th>
            <th scope="col">Số người</th>
            <th scope="col">Ngày đặt</th>
            <th scope="col">Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {!transactions.data
            ? null
            : transactions.data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.customerName}</td>
                    <td>{item.vehicle}</td>
                    <td>{item.totalCost / item.unitCost}</td>
                    <td>{moment(item.pickupDate).format("DD-MM-YYYY")}</td>
                    <td>
                      {item.transactionStatus == "Đã thanh toán" ? (
                        <span
                          style={{
                            backgroundColor: "green",
                            color: "#fff",
                            padding: "5px",
                            borderRadius: "5px",
                          }}
                        >
                          {item.transactionStatus}
                        </span>
                      ) : (
                        <span
                          style={{
                            backgroundColor: "red",
                            color: "#fff",
                            padding: "5px",
                            borderRadius: "5px",
                          }}
                        >
                          {item.transactionStatus}
                        </span>
                      )}
                    </td>

                    <td>
                      <Link
                        to={`/admin/transaction/detail/${item.transactionId}`}
                      >
                        <button className="btn btn-warning">Chi tiết</button>
                      </Link>
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
        pageCount={transactions.Total / filters.size}
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

export default ManagerTransaction;
