import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import FormPayment from "../../../components/FormPayment";
import axiosClient from "../../../apis/axiosClient";

// Xuất khoá API
const stripePromise = loadStripe(
  "pk_test_51KvLi0ChXV854eg86NvjdMopWKStlITvjAEN3BrUleYhKg4R2UgaEKrYC0jhq224f8EUgcO49PZsrHZcO3eywBhS00lItFzTXS"
);

function PaymentStripe() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const fetchClientSecret = async () => {
      const response = await axiosClient.post("/ultils/payment-stripe", {
        items: [{ id: "xl-tshirt" }],
        email: localStorage.getItem("user").email,
      });
      setClientSecret(response.clientSecret);
    };
    fetchClientSecret();

    // fetch("http://localhost:5000/api/ultils/payment-stripe", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => setClientSecret(data.clientSecret))
    //   .catch((err) => console.log(err));
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div
      className="text-center"
      style={{
        backgroundColor: "#f5f5f5",
        paddingTop: "50px",
        paddingBottom: "50px",
        height: "100vh",
      }}
    >
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <FormPayment clientSecret={clientSecret} />
        </Elements>
      )}
    </div>
  );
}

export default PaymentStripe;
