import React, { useEffect, useState } from "react";
import transactionApi from "../../apis/transactionApi";
import { useNavigate } from "react-router-dom";
import voucherApi from "../../apis/voucherApi";
import { findGetParameter } from "../../untils";

function HandlePayment() {
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState({});
  const [checkTransaction, setCheckTransaction] = useState(false);

  const applyVoucher = async () => {
    let localstore = JSON.parse(localStorage.getItem("transaction"));
    let data = {
      code: localstore.voucherCode,
      typeVoucher: "AIRPORT",
      transactionId: parseInt(Date.now() * Math.random()).toString(),
      amount: 100000 * parseInt(localstore.numberPeoples),
    };
    console.log(data);
    try {
      const response = await voucherApi.applyVoucher(
        data,
        "5678910",
        "22d9a52f-ab67-4b63-b5ac-b55a357b0057"
      );
      console.log(response);
      const statusVoucher = await voucherApi.statusVoucher(
        {
          typeVoucher: "AIRPORT",
          orderId: response.data.data.orderId,
        },
        "5678910",
        "22d9a52f-ab67-4b63-b5ac-b55a357b0057"
      );
      console.log(statusVoucher);
      setCheckTransaction(true);
    } catch (err) {
      alert(
        "Thanh toán không thành công do có giao dịch khác đã áp dụng mã, hãy thử lại nhé"
      );
      navigate("/");
    }
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("transaction"));
    setTransaction({
      customerId: data.user.userId,
      customerName: data.user.name,
      fromAddress: data.fromAddress,
      toAddress: data.toAddress,
      pickupDate: data.pickupDate,
      pickupTime: data.time,
      vehicleId: data.vehicleId,
      transactionStatus: "Đã thanh toán",
      numberPeoples: data.numberPeoples,
      discount: data.discount,
      voucherCode: data.voucherCode,
      payment_intent: findGetParameter("payment_intent"),
    });
  }, []);

  console.log(findGetParameter("payment_intent"));
  console.log(transaction);

  useEffect(() => {
    const createTransaction = async () => {
      if (
        transaction.voucherCode &&
        transaction.voucherCode !== undefined &&
        transaction.voucherCode.length > 0
      ) {
        applyVoucher();
        const response = await transactionApi.createTransaction(transaction);
        navigate("/");
      } else {
        const response = await transactionApi.createTransaction(transaction);
        alert("Thanh toán thành công");
        setTimeout(navigate("/"), 2000);
        return;
      }
    };
    createTransaction();
  }, [transaction]);

  return <React.Fragment></React.Fragment>;
}
export default HandlePayment;
