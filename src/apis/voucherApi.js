import axios from "axios";

class VoucherApi {
  getAllVoucher = () => {
    const url = `http://api.vovanhoangtuan.xyz/api/v1/partner/voucher?type=AIRPORT`;
    return axios.get(url, {
      headers: {
        accept: "application/json",
        secret_key: "QUTsxNH7xZ",
      },
    });
  };
}

const voucherApi = new VoucherApi();
export default voucherApi;
