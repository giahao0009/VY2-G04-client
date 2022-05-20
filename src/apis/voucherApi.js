import axios from "axios";

class VoucherApi {
  getAllVoucher = () => {
    const url = `${process.env.REACT_APP_BASE_URL_VOUCHER}/voucher/eligible?typeVoucher=dua-don`;
    return axios.get(url, {
      headers: {
        accept: "application/json",
        user_id: "123",
        partner_id: "3b2db9ec-aded-4361-a4cc-beb7ba66184d",
      },
    });
  };
}

const voucherApi = new VoucherApi();
export default voucherApi;
