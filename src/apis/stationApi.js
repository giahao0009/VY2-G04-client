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
  getStationById = (id) => {
    const url = `/station/getstationbyid/${id}`;
    return axiosClient.get(url);
  };
  updateStationById = (id, data) => {
    const url = `/station/updatestation/${id}`;
    return axiosClient.put(url, data);
  };
  getStationByName = (name) => {
    const url = `/station/getstationbyname?stationName=${name}`;
    return axiosClient.get(url);
  };
}

const stationApi = new StationApi();
export default stationApi;
