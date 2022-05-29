import React, { useEffect, useState } from "react";
import img from "../../../images/airport_transfer_header.jpg";
import voucherApi from "../../../apis/voucherApi";
import { AiOutlinePlus } from "react-icons/ai";
import moment from "moment";

function ManagerVoucher() {
  const [vouchers, setVouchers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const request = await voucherApi.getAllVoucher();
      setVouchers(request.data.data.vouchers);
    };
    fetchData();
  }, []);
  return (
    <div>
      <a
        href="http://voucher.vovanhoangtuan.xyz/partner/"
        target="_blank"
        className="btn btn-primary mb-3"
      >
        Quản lý voucher
      </a>
      <div className="row">
        {vouchers.map((item, index) => {
          return (
            <div key={index} className="col-3">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={item.imageUrl ? item.imageUrl : img}
                  className="card-img-top"
                  alt="hình ảnh"
                />
                <div className="card-body">
                  <p
                    className="card-title"
                    style={{ fontSize: "20px", fontWeight: "bold" }}
                  >
                    {item.title}
                  </p>
                  <hr />
                  <p>{item.description}</p>
                  <hr />
                  <p>
                    <span style={{ fontWeight: "bold" }}>Ngày hiệu lực</span>:{" "}
                    {moment(item.effectiveAt).format("DD-MM-YYYY")}
                  </p>
                  <p>
                    <span style={{ fontWeight: "bold" }}>
                      Ngày hết hiệu lực
                    </span>
                    : {moment(item.expirationAt).format("DD-MM-YYYY")}
                  </p>
                  <p>
                    <span style={{ fontWeight: "bold" }}>Số tiền để mua</span>:{" "}
                    {item.amount}
                  </p>
                  <a
                    href="http://128.199.241.206:8081/"
                    target="_blank"
                    class="btn btn-primary w-100 mt-2"
                  >
                    Xem chi tiết
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default ManagerVoucher;
