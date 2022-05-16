import axiosClient from "./axiosClient";

class KeyRelationApi {
  getAll = () => {
    const url = "/tablekeyrelation/getall";
    return axiosClient.get(url);
  };
}

const keyRelationApi = new KeyRelationApi();
export default keyRelationApi;
