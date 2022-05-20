import React from "react";
import { AuthContextProvider } from "./auth/AuthContext";
import { BookingContextProvider } from "./booking/BookingContext";
import { SchedulerContextProvider } from "./scheduler/SchedulerContext";

function StoreProvider({ children }) {
  return (
    <React.Fragment>
      <AuthContextProvider>
        <BookingContextProvider>
          <SchedulerContextProvider>{children}</SchedulerContextProvider>
        </BookingContextProvider>
      </AuthContextProvider>
    </React.Fragment>
  );
}

export default StoreProvider;
