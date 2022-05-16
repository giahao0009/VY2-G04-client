import React, { useEffect, useContext } from "react";
import { BookingContext } from "../../context/booking/BookingContext";

function HandlePayment() {
  const [state, dispatch] = useContext(BookingContext);
  useEffect(() => {}, []);
  console.log(state);
  return <React.Fragment></React.Fragment>;
}
export default HandlePayment;
