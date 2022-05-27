import SchedulerReducer from "./SchedulerReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  schedulerStart: null,
  schedulerEnd: null,
  vehicleId: null,
  startAddress: null,
  endAddress: null,
  carNumber: null,
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
