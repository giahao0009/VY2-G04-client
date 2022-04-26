import axiosClient from "./axiosClient";

class StationApi {
  getAll = () => {
    const url = "/station/getallstation";
    return axiosClient.get(url);
  };
  createStation = (data) => {
    const url = "/station/createstation";
    return axiosClient.post(url, data);
  };
  getAllStationWithPagination = (params) => {
    const url = "/station/getallstationpagination";
    return axiosClient.get(url, { params });
  };
}

const stationApi = new StationApi();
export default stationApi;
