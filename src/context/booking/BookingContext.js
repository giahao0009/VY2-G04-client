import BookingReducer from "./BookingReducer";
import { createContext, useReducer, useEffect } from "react";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  toAddress: null,
  fromAddress: null,
  pickupDate: null,
  customerId: null,
  vehicleId: null,
  bookingStatus: null,
  numberPeoples: null,
  discount: null,
  voucherCode: null,
  companyId: null,
  giftCode: null,
};

export const BookingContext = createContext(INITIAL_STATE);

export const BookingContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(BookingReducer, INITIAL_STATE);

  return (
    <BookingContext.Provider value={[state, dispatch]}>
      {children}
    </BookingContext.Provider>
  );
};
