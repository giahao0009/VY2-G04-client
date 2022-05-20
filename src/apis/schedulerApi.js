import axiosClient from "./axiosClient";

class SchedulerApi {
  getAllSchedulerByCompanyId = (params) => {
    const url = `/scheduler/allscheduler`;
    return axiosClient.get(url, { params });
  };
}

const schedulerApi = new SchedulerApi();
export default schedulerApi;
