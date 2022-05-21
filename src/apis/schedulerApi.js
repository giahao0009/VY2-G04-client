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
    const url = `/scheduler/createdetailscheduler`;
    return axiosClient.post(url, data);
  };
}

const schedulerApi = new SchedulerApi();
export default schedulerApi;
