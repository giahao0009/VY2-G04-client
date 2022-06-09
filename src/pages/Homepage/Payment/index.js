import React, { useContext, useState, useEffect } from "react";
import { BookingContext } from "../../../context/booking/BookingContext";
import { setBooking } from "../../../context/booking/BookingAction";
import VietnamIcon from "../../../images/vietnam.png";
import { useNavigate } from "react-router-dom";
import voucherApi from "../../../apis/voucherApi";

function Payment() {
  const navigate = useNavigate();
  const [state, dispatch] = useContext(BookingContext);
  const [cusName, setCusName] = useState("");
  const [cusEmail, setCusEmail] = useState("");
  const [cusPhone, setCusPhone] = useState("");
  const [vouchers, setVouchers] = useState([]);
  const [checkCondition, setCheckCondition] = useState({});
  const [voucherApply, setVoucherApply] = useState("");

  useEffect(() => {
    const getVouchers = async () => {
      const user = JSON.parse(localStorage.getItem("user"));
      const response = await voucherApi.getVouchersAvailable(
        user.userId,
        state.companyId
      );

      console.log(response);
      setVouchers(response.data.data.vouchers);
    };
    getVouchers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cusName == "" || cusEmail == "" || cusPhone == "") {
      window.location.alert("Hãy nhập đầy đủ thông tin thanh toán");
      return;
    }
    await dispatch(
      setBooking({
        ...state,
        cusName: cusName,
        cusEmail: cusEmail,
        cusPhone: cusPhone,
      })
    );
    console.log(state);
    await localStorage.setItem("transaction", JSON.stringify(state));
    navigate("/booking/payment-stripe");
  };

  const handleChangeVoucher = (e) => {
    const checkMyVoucher = async () => {
      const user = JSON.parse(localStorage.getItem("user"));
      const response = await voucherApi.checkVoucher(
        { amount: state.numberPeoples * 100000, code: e.target.value },
        user.userId,
        state.companyId
      );
      dispatch(
        setBooking({
          ...state,
          discount: response.data.data.amount,
          voucherCode: e.target.value,
        })
      );
    };
    checkMyVoucher();
  };

  console.log(checkCondition);

  return (
    <div className="payment-wrapper">
      <div className="container-custom">
        <div className="payment-title">
          <h2 className="title">Đặt chỗ của tôi</h2>
          <span className="sub-title">Điền thông tin và xem lại đặt chỗ.</span>
        </div>

        <div className="row">
          <div className="col-8">
            <div className="d-flex align-items-center justify-content-around me-2 cameo-voucher">
              <img src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/web-ui/shared/images/LoginBenefits-f1c56ba06a2c7641f0ece59f9ae8d44c.png" />
              <div>
                <p>Có thể thanh toán bằng stripe và voucher/gift</p>
                <p>Đặt chỗ nhanh và dễ dàng với traveloka</p>
              </div>
            </div>
            <div className="info-payment">
              <div className="info-title d-flex justify-content-between">
                <p className="title">Thông tin liên hệ</p>
                <p className="description">Điền thông tin</p>
              </div>
              <hr />
              <div className="form-payment">
                <form onSubmit={(e) => handleSubmit(e)}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Họ tên <span className="required">*</span>
                    </label>
                    <input
                      name="cusName"
                      type="text"
                      className="form-control"
                      id="name"
                      required
                      onChange={(e) => setCusName(e.target.value)}
                    />
                  </div>

                  <div className="row g-3 align-items-center mb-3">
                    <div className="col-6">
                      <label htmlFor="phone" className="col-form-label">
                        Điện thoại di động <span className="required">*</span>
                      </label>
                      <div className="d-flex">
                        <div className="phone-country d-flex justify-content-between align-items-center me-2">
                          <img
                            src={VietnamIcon}
                            className="vietnam-icon me-1"
                            style={{ width: "30px" }}
                          />{" "}
                          +84
                        </div>
                        <input
                          name="cusPhone"
                          type="text"
                          id="phone"
                          className="form-control"
                          required
                          onChange={(e) => setCusPhone(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <label htmlFor="email" className="col-form-label">
                        Email <span className="required">*</span>
                      </label>
                      <input
                        name="cusEmail"
                        type="text"
                        id="email"
                        className="form-control w-100"
                        required
                        onChange={(e) => setCusEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Danh sách voucher khả dụng{" "}
                    </label>
                    <select
                      className="form-control"
                      onChange={(e) => handleChangeVoucher(e)}
                    >
                      <option>Lựa chọn voucher</option>
                      {!vouchers
                        ? null
                        : vouchers.map((item, index) => {
                            return (
                              <option key={index} value={item.voucherCode}>
                                {item.title}
                              </option>
                            );
                          })}
                    </select>
                  </div>
                  <button className="btn btn-primary float-end w-100">
                    Tiếp tục
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div>
              <p>Đến {state.toAddress}</p>
              <hr />
              <div>
                <p>{state.fromAddress}</p>
                <p>{state.toAddress}</p>
                <p>Số lượng người đi: {state.numberPeoples}</p>
                <p>Ngày đặt: {state.pickupDate}</p>
                <p>Giờ đặt: {state.time}</p>
                <p>Mã số hãng xe: {state.companyId}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
