import React from "react";
import { AuthContextProvider } from "./auth/AuthContext";
import { BookingContextProvider } from "./booking/BookingContext";

function StoreProvider({ children }) {
  return (
    <React.Fragment>
      <AuthContextProvider>
        <BookingContextProvider>{children}</BookingContextProvider>
      </AuthContextProvider>
    </React.Fragment>
  );
}

export default StoreProvider;
