import axiosClient from "./axiosClient";

class UserApi {
  register = (data) => {
    const url = "/auth/register";
    return axiosClient.post(url, data);
  };

  login = (data) => {
    const url = "/auth/login";
    return axiosClient.post(url, data);
  };

  getUser = (params) => {
    const url = "/user/getUser";
    return axiosClient.get(url, { params });
  };
}
const userApi = new UserApi();
export default userApi;
