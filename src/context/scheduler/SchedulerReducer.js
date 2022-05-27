const SchedulerReducer = (state, action) => {
  switch (action.type) {
    case "SET_SCHEDULER": {
      let data = action.payload;
      return {
        ...state,
        schedulerStart: data.schedulerStart,
        schedulerEnd: data.schedulerEnd,
        vehicleId: data.vehicleId,
        startAddress: data.startAddress,
        endAddress: data.endAddress,
        carNumber: data.carNumber,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default SchedulerReducer;
