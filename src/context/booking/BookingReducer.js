const BookingReducer = (state, action) => {
  switch (action.type) {
    case "SET_BOOKING": {
      let data = action.payload;
      console.log(data);
      return {
        ...state,
        bookingStatus: data.bookingStatus,
        customerId: data.customerId,
        fromAddress: data.fromAddress,
        numberPeoples: data.numberPeoples,
        pickupDate: data.pickupDate,
        toAddress: data.toAddress,
        vehicleId: data.vehicleId,
        time: data.time,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default BookingReducer;
