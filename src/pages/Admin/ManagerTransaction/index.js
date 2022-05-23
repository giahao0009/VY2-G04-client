import React, { useEffect, useState } from "react";
import transactionApi from "../../../apis/transactionApi";
import { Link } from "react-router-dom";
import moment from "moment";

function ManagerTransaction() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    const featchData = async () => {
      const response = await transactionApi.getTransaction(
        "c85665e5-0b00-4adc-8597-db5d6ad3a85e"
      );
      setTransactions(response.data);
    };
    featchData();
  }, []);
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
          {transactions.map((item, index) => {
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
                  <Link to={`/admin/transaction/detail/${item.transactionId}`}>
                    <button className="btn btn-warning">Chi tiết</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ManagerTransaction;
