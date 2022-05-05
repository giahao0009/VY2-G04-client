import React from "react";
import VietnamIcon from "../../../images/vietnam.png";

function Payment() {
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
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Họ tên <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      required
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
                          type="text"
                          id="phone"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <label htmlFor="email" className="col-form-label">
                        Email <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="email"
                        className="form-control w-100"
                        required
                      />
                    </div>
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
              <p>Đến Khách Sạn Hoa Thiên</p>
              <hr />
              <div>
                <p>Sân bay quốc tế Tân Sơn Nhất</p>
                <p>Khách Sạn Hoa Thiên</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
