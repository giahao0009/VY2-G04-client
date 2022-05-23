import axiosClient from "./axiosClient";

class TransactionApi {
  createTransaction = (data) => {
    const url = `/transaction/createtransaction`;
    return axiosClient.post(url, data);
  };
  getTransaction = (id) => {
    const url = `/transaction/gettransactionbycomid/${id}`;
    return axiosClient.get(url);
  };
  getTransactionById = (id) => {
    const url = `/transaction/gettransactionbyid/${id}`;
    return axiosClient.get(url);
  };
}

const transactionApi = new TransactionApi();
export default transactionApi;
