import axiosCLient from "./axiosClient";

class BookingApi {
  bookingVehicle = (payload, config) => {
    const url = "/booking/bookvehicle";
    return axiosCLient.post(url, payload, config);
  };
}

const bookingApi = new BookingApi();
export default bookingApi;
