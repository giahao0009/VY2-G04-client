import React from "react";
import FormPayment from "../../../components/FormPayment";

function PaymentStripe() {
  return (
    <div
      className="text-center"
      style={{
        backgroundColor: "#f5f5f5",
        paddingTop: "50px",
        paddingBottom: "50px",
      }}
    >
      <FormPayment />
    </div>
  );
}

export default PaymentStripe;
