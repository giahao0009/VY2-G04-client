import axiosClient from "./axiosClient";

class VehicleApi {
  getAll = () => {
    const url = "/vehicle/getallvehicle";
    return axiosClient.get(url);
  };

  getVehicleWithPagination = (params) => {
    const url = "/vehicle/getAllVehicleWithPagination";
    return axiosClient.get(url, { params });
  };

  createVehicle = (data) => {
    const url = "/vehicle/createvehicle";
    return axiosClient.post(url, data);
  };

  getVehicleById = (id) => {
    const url = `/vehicle/getVehicleById/${id}`;
    return axiosClient.get(url);
  };

  updateVehicle = (id, data) => {
    const url = `/vehicle/updateVehicle/${id}`;
    return axiosClient.put(url, data);
  };

  searchVehicle = (params) => {
    const url = `/vehicle/search`;
    return axiosClient.get(url, { params });
  };

  deleteVehicle = (id) => {
    const url = `/vehicle/deletevehicle/${id}`;
    return axiosClient.delete(url);
  };

  filterVehicle = (params) => {
    const url = `/vehicle/filterVehicle`;
    return axiosClient.get(url, { params });
  };

  getVehicleStatus = () => {
    const url = `/vehicle/getallstatus`;
    return axiosClient.get(url);
  };
}

const vehicleApi = new VehicleApi();
export default vehicleApi;
