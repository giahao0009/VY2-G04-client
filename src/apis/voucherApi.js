import axios from "axios";

class VoucherApi {
  getAllVoucher = () => {
    const url = `http://api.votuan.xyz/api/v1/partner/voucher?type=AIRPORT`;
    return axios.get(url, {
      headers: {
        accept: "application/json",
      },
    });
  };
  getVouchersAvailable = (userId, partnerId) => {
    const url = `http://api.votuan.xyz/api/v1/user/voucher/eligible?typeVoucher=AIRPORT`;
    return axios.get(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        user_id: userId,
        partner_id: partnerId,
      },
    });
  };
  checkVoucher = (params, userId, partnerId) => {
    const url = `http://api.votuan.xyz/api/v1/user/voucher/check-condition?amount=${params.amount}&code=${params.code}&typeVoucher=AIRPORT`;
    return axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        user_id: userId,
        partner_id: partnerId,
      },
    });
  };
  applyVoucher = (data, userId, partnerId) => {
    const url = `http://api.votuan.xyz/api/v1/user/voucher/pre-order`;
    return axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
        user_id: userId,
        partner_id: partnerId,
      },
    });
  };
  statusVoucher = (data, userId, partnerId) => {
    const url = `http://api.votuan.xyz/api/v1/user/voucher/state`;
    return axios.put(url, data, {
      headers: {
        "Content-Type": "application/json",
        user_id: userId,
        partner_id: partnerId,
      },
    });
  };
}

const voucherApi = new VoucherApi();
export default voucherApi;
