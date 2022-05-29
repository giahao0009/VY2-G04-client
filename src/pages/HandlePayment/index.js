import React, { useEffect, useState } from "react";
import transactionApi from "../../apis/transactionApi";
import { useNavigate } from "react-router-dom";

function HandlePayment() {
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState({});
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
    });
  }, []);

  useEffect(() => {
    const createTransaction = async () => {
      const response = await transactionApi.createTransaction(transaction);
      navigate("/");
      alert("Đã thanh toán thành công nhé");
    };
    createTransaction();
  }, [transaction]);

  return <React.Fragment></React.Fragment>;
}
export default HandlePayment;
