import React, { useEffect, useState } from "react";
import transactionApi from "../../apis/transactionApi";
import { useNavigate } from "react-router-dom";
import voucherApi from "../../apis/voucherApi";
import { findGetParameter } from "../../untils";
import authApi from "../../apis/authApi";
import giftApi from "../../apis/giftApi";

function HandlePayment() {
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState({});
  const [disc, setDisc] = useState(0);

  const applyGift = async () => {
    let localstore = JSON.parse(localStorage.getItem("transaction"));
    let data = {
      code: localstore.giftCode,
      typeVoucher: "AIRPORT",
      transactionId: parseInt(Date.now() * Math.random()).toString(),
      amount: 100000 * parseInt(localstore.numberPeoples),
    };
    try {
      const response = await giftApi.applyGift(
        data,
        localstore.customerId,
        localstore.companyId
      );
      console.log(response);
      setDisc(response.data.data.amountAfter);
    } catch (error) {
      alert(
        "Thanh toán không thành công do có giao dịch khác đã áp dụng mã, hãy thử lại nhé"
      );
      navigate("/");
    }
  };

  const applyVoucher = async () => {
    let localstore = JSON.parse(localStorage.getItem("transaction"));
    let data = {
      code: localstore.voucherCode,
      typeVoucher: "AIRPORT",
      transactionId: parseInt(Date.now() * Math.random()).toString(),
      amount: 100000 * parseInt(localstore.numberPeoples),
    };
    try {
      const response = await voucherApi.applyVoucher(
        data,
        localstore.customerId,
        localstore.companyId
      );
      console.log(response);
      const dis = disc - response.data.data.amount;
      setDisc(dis);
    } catch (err) {
      alert(
        "Thanh toán không thành công do có giao dịch khác đã áp dụng mã, hãy thử lại nhé"
      );
      navigate("/");
    }
  };

  const saveOrder = async () => {
    let order = {
      total: 1,
      reward: 100,
      details: [
        {
          productName: `Đặt xe đưa đón sân bay`,
          quantity: transaction.numberPeoples,
          price: disc,
          thumbnail: "string",
          link: "http://localhost:3000/",
        },
      ],
      voucherCode: "Free",
      partnerId: transaction.companyId,
      userId: transaction.customerId,
    };
    const saveOrders = await authApi.saveOrders(order);
    console.log(saveOrders);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("transaction"));
    const user = JSON.parse(localStorage.getItem("user"));
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
      companyId: data.companyId,
      giftCode: data.giftCode,
    });
  }, []);

  useEffect(() => {
    const createTransaction = async () => {
      let localstore = JSON.parse(localStorage.getItem("transaction"));

      console.log(localstore);
      if (
        localstore.voucherCode &&
        localstore.voucherCode !== undefined &&
        localstore.voucherCode.length > 0
      ) {
        applyVoucher();
      }

      if (
        localstore.giftCode &&
        localstore.giftCode !== undefined &&
        localstore.giftCode.length > 0
      ) {
        applyGift();
      }

      const response = await transactionApi.createTransaction(transaction);
      saveOrder();
      setTimeout(() => {
        alert("Thanh toán thành công");
        navigate("/");
      }, 1000);
      return;
    };
    createTransaction();
  }, [transaction]);

  return <React.Fragment></React.Fragment>;
}
export default HandlePayment;
