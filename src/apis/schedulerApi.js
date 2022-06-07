import axiosClient from "./axiosClient";

class SchedulerApi {
  getAllSchedulerByCompanyId = (params) => {
    const url = `/scheduler/allscheduler`;
    return axiosClient.get(url, { params });
  };
  createScheduler = (data) => {
    const url = `/scheduler/createscheduler`;
    return axiosClient.post(url, data);
  };
  createDetailScheduler = (data) => {
    const url = `/schedulerdetail/createschedulerdetail`;
    return axiosClient.post(url, data);
  };
  getDetailScheduler = (id) => {
    const url = `/scheduler/detail/${id}`;
    return axiosClient.get(url);
  };
  filterScheduler = (key) => {
    const url = `/scheduler/filterscheduler?key=${key}`;
    return axiosClient.get(url);
  };
  searchScheduler = (carnumber, companyId) => {
    const url = `/scheduler/search?carnumber=${carnumber}&companyId=${companyId}`;
    return axiosClient.get(url);
  };
  schedulerPagination = (page, size, companyId) => {
    const url = `/scheduler/getwithpagination?page=${page}&size=${size}&companyId=${companyId}`;
    return axiosClient.get(url);
  };
}

const schedulerApi = new SchedulerApi();
export default schedulerApi;
