import React, { useEffect, useState, useContext } from "react";
import { BookingContext } from "../../context/booking/BookingContext";
import Chip from "../../images/chip.png";
import Visa from "../../images/visa.png";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

function FormPayment(props) {
  const stripe = useStripe();
  const elements = useElements();
  const [state, dispatch] = useContext(BookingContext);

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  console.log(state);

  useEffect(() => {
    if (!stripe) return;
    const clientSecret = props.clientSecret;
    if (!clientSecret) {
      return;
    }
    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000",
        receipt_email: email,
      },
    });

    if (!error) {
    }

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("c");
    }

    setIsLoading(false);
  };

  return (
    <div className="container">
      <div className="card-container">
        <div className="front">
          <div className="image">
            <img src={Chip} alt="chip" />
            <img src={Visa} alt="chip" />
          </div>
          <div className="card-number-box">################</div>
          <div className="flexbox">
            <div className="box">
              <span>Card holder</span>
              <div className="card-holder-name">Full name</div>
            </div>
            <div className="box">
              <span>expiration</span>
              <div className="expiration">
                <span className="exp-month">mm</span>
                {"/"}
                <span className="exp-year">yy</span>
              </div>
            </div>
          </div>
        </div>
        <div className="back">
          <div className="stripe"></div>
          <div className="box">
            <span>cvv</span>
            <div className="cvv-box"></div>
            <img src={Visa} alt="Visa"></img>
          </div>
        </div>
      </div>
      <form
        id="payment-form"
        className="form-payment mt-3"
        onSubmit={(e) => handleSubmit(e)}
      >
        <label
          style={{
            marginBottom: "0.25rem",
            fontSize: "0.93rem",
            fontWeight: "400",
            transition:
              " transform 0.5s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1)",
            color: "#8d8d8d",
            width: "100%",
            textAlign: "start",
          }}
        >
          Email
        </label>
        <input
          id="email"
          type="text"
          value={state.cusEmail}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email address"
          className="form-control mb-2"
        />
        <PaymentElement id="payment-element" />
        <button
          disabled={isLoading || !stripe || !elements}
          id="submit"
          className="submit-btn"
          type="submit"
        >
          <span id="button-text">
            {isLoading ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              "Pay now"
            )}
          </span>
        </button>
      </form>
    </div>
  );
}

export default FormPayment;
