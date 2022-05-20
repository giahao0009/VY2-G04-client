import SchedulerReducer from "./SchedulerReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  stationStart: null,
  stationEnd: null,
  vehicleId: null,
};

export const SchedulerContext = createContext(INITIAL_STATE);

export const SchedulerContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SchedulerReducer, INITIAL_STATE);
  return (
    <SchedulerContext.Provider value={[state, dispatch]}>
      {children}
    </SchedulerContext.Provider>
  );
};
