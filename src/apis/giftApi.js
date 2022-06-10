import axios from "axios";

class GiftApi {
  getGiftsAvailable = (userId, partnerId) => {
    const url = `https://api.votuan.xyz/api/v1/user/gift-card/eligible?typeVoucher=AIRPORT`;
    return axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        user_id: userId,
        partner_id: partnerId,
      },
    });
  };
  checkGift = (userId, partnerId, giftCode, amount) => {
    const url = `https://api.votuan.xyz/api/v1/user/gift-card/check-condition?amount=${amount}&code=${giftCode}&typeVoucher=AIRPORT`;
    return axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        user_id: userId,
        partner_id: partnerId,
      },
    });
  };
  applyGift = (data, userId, partnerId) => {
    const url = `https://api.votuan.xyz/api/v1/user/gift-card/pre-order`;
    return axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
        user_id: userId,
        partner_id: partnerId,
      },
    });
  };
  statusGift = (data, userId, partnerId) => {
    const url = `https://api.votuan.xyz/api/v1/user/gift-card/state`;
    return axios.put(url, data, {
      headers: {
        "Content-Type": "application/json",
        user_id: userId,
        partner_id: partnerId,
      },
    });
  };
}

const giftApi = new GiftApi();
export default giftApi;
