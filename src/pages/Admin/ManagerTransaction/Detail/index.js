import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import transactionApi from "../../../../apis/transactionApi";
import moment from "moment";

function DetailTransaction() {
  const param = useParams();
  const [transaction, setTransaction] = useState({});
  useEffect(() => {
    const featchData = async () => {
      const response = await transactionApi.getTransactionById(param.id);
      setTransaction(response.data);
    };
    featchData();
  }, []);

  const refund = () => {
    const refundTran = async () => {
      const response = await transactionApi.refundTransaction({
        payment_intent: transaction.paymentIntent,
        transactionId: transaction.transactionId,
      });
    };
    if (window.confirm("Bạn có thực sự muốn hoàn tiền cho giao dịch này ???")) {
      refundTran();
    } else {
      return;
    }
  };
  return (
    <div>
      <div className="mb-3">
        <label className="form-label">Tên khách hàng</label>
        <input
          className="form-control"
          disabled
          value={transaction.customerName}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Đi từ</label>
        <input
          className="form-control"
          disabled
          value={transaction.fromAddress}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Đi đến</label>
        <input
          className="form-control"
          disabled
          value={transaction.toAddress}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Ngày đón</label>
        <input
          className="form-control"
          disabled
          value={moment(transaction.pickupDate).format("DD-MM-YYYY")}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Giờ đón</label>
        <input
          className="form-control"
          disabled
          value={moment(transaction.pickupTime).format("HH:mm")}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Số người</label>
        <input
          className="form-control"
          disabled
          value={transaction.totalCost / transaction.unitCost}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Tổng tiền</label>
        <input
          className="form-control"
          disabled
          value={transaction.totalCost}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Trạng thái</label>
        <input
          className="form-control"
          disabled
          value={transaction.transactionStatus}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Mã giao dịch stripe</label>
        <input
          className="form-control"
          disabled
          value={transaction.paymentIntent}
        />
      </div>
      <div className="mb-3 text-end">
        <button className="btn btn-danger" onClick={refund}>
          Hoàn tiền
        </button>
      </div>
    </div>
  );
}

export default DetailTransaction;
