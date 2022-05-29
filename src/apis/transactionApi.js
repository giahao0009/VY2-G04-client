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
  countTransaction = (id) => {
    const url = `/transaction/counttransaction?companyId=${id}`;
    return axiosClient.get(url);
  };
  sumTransaction = (id) => {
    const url = `/transaction/sumcosttransaction?companyId=${id}`;
    return axiosClient.get(url);
  };
  reportTransaction = (id) => {
    const url = `/transaction/reportmonth?companyId=${id}`;
    return axiosClient.get(url);
  };
}

const transactionApi = new TransactionApi();
export default transactionApi;
