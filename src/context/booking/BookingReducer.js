const BookingReducer = (state, action) => {
  switch (action.type) {
    case "SET_BOOKING": {
      let data = action.payload;
      console.log(data);
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};

export default BookingReducer;
