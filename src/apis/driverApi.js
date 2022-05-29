import axiosClient from "./axiosClient";

class DriverApi {
  getAll = () => {
    const url = "/driver/getalldriver";
    return axiosClient.get(url);
  };
  getAllDriverWithPagination = (params) => {
    const url = "/driver/getalldriverpagination";
    return axiosClient.get(url, { params });
  };
  getDriverById = (id) => {
    const url = `/driver/getdriverbyid/${id}`;
    return axiosClient.get(url);
  };
  updateDriver = (id, data) => {
    const url = `/driver/updateDriver/${id}`;
    return axiosClient.put(url, data);
  };
  createDriver = (data) => {
    const url = `/driver/createdriver`;
    return axiosClient.post(url, data);
  };
  deleteDriver = (id) => {
    const url = `/driver/deleteDriver/${id}`;
    return axiosClient.delete(url);
  };
  countDriver = (id) => {
    const url = `/driver/countdriver?companyId=${id}`;
    return axiosClient.get(url);
  };
}

const driverApi = new DriverApi();
export default driverApi;
