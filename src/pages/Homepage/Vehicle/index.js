import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BsShieldFillCheck } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";
import { BiBusSchool, BiTrain } from "react-icons/bi";
import Modal from "../../../components/HomeComponents/Modal";
import { BookingContext } from "../../../context/booking/BookingContext";

function Vehicle() {
  const navigate = useNavigate();
  const [typeVehicle, setTypeVehicle] = useState("bus");
  const [modalData, setModalData] = useState({});
  const [state, dispatch] = useContext(BookingContext);

  console.log(state);
  // useEffect(() => {
  //   if (!state.toAddress || !state.fromAddress) {
  //     navigate("/booking");
  //   }
  // }, []);

  const data = [
    {
      id: "1",
      name: "KLIA Ekspres - One-way",
      image:
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/09/17/1537175788462-5964aa6b8e1fd443162671d985498573.jpeg?tr=q-75",
      price: "307.860",
      time: "28 Phút",
      from: "Kuala Lumpur International",
      to: "KL Sentral Station",
      distance: "1183.7 km",
    },
    {
      id: "2",
      name: "KLIA Ekspres - One-way",
      image:
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/09/17/1537175788462-5964aa6b8e1fd443162671d985498573.jpeg?tr=q-75",
      price: "307.860",
      time: "28 Phút",
      from: "Kuala Lumpur International",
      to: "KL Sentral Station",
      distance: "1183.7 km",
    },
    {
      id: "3",
      name: "KLIA Ekspres - One-way",
      image:
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/09/17/1537175788462-5964aa6b8e1fd443162671d985498573.jpeg?tr=q-75",
      price: "307.860",
      time: "28 Phút",
      from: "Kuala Lumpur International",
      to: "KL Sentral Station",
      distance: "1183.7 km",
    },
    {
      id: "4",
      name: "KLIA Ekspres - One-way",
      image:
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/09/17/1537175788462-5964aa6b8e1fd443162671d985498573.jpeg?tr=q-75",
      price: "307.860",
      time: "28 Phút",
      from: "Kuala Lumpur International",
      to: "KL Sentral Station",
      distance: "1183.7 km",
    },
    {
      id: "5",
      name: "KLIA Ekspres - One-way",
      image:
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/09/17/1537175788462-5964aa6b8e1fd443162671d985498573.jpeg?tr=q-75",
      price: "307.860",
      time: "28 Phút",
      from: "Kuala Lumpur International",
      to: "KL Sentral Station",
      distance: "1183.7 km",
    },
    {
      id: "6",
      name: "KLIA Ekspres - One-way",
      image:
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/09/17/1537175788462-5964aa6b8e1fd443162671d985498573.jpeg?tr=q-75",
      price: "307.860",
      time: "28 Phút",
      from: "Kuala Lumpur International",
      to: "KL Sentral Station",
      distance: "1183.7 km",
    },
    {
      id: "7",
      name: "KLIA Ekspres - One-way",
      image:
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/09/17/1537175788462-5964aa6b8e1fd443162671d985498573.jpeg?tr=q-75",
      price: "307.860",
      time: "28 Phút",
      from: "Kuala Lumpur International",
      to: "KL Sentral Station",
      distance: "1183.7 km",
    },
    {
      id: "8",
      name: "KLIA Ekspres - One-way",
      image:
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/09/17/1537175788462-5964aa6b8e1fd443162671d985498573.jpeg?tr=q-75",
      price: "307.860",
      time: "28 Phút",
      from: "Kuala Lumpur International",
      to: "KL Sentral Station",
      distance: "1183.7 km",
    },
    {
      id: "9",
      name: "KLIA Ekspres - One-way",
      image:
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/09/17/1537175788462-5964aa6b8e1fd443162671d985498573.jpeg?tr=q-75",
      price: "307.860",
      time: "28 Phút",
      from: "Kuala Lumpur International",
      to: "KL Sentral Station",
      distance: "1183.7 km",
    },
    {
      id: "10",
      name: "KLIA Ekspres - One-way",
      image:
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/09/17/1537175788462-5964aa6b8e1fd443162671d985498573.jpeg?tr=q-75",
      price: "307.860",
      time: "28 Phút",
      from: "Kuala Lumpur International",
      to: "KL Sentral Station",
      distance: "1183.7 km",
    },
  ];

  return (
    <div className="booking-vehicle-wrapper">
      <div className="booking-vehicle-header">
        <div className="container">
          <h2 className="title">Xe đưa đón sân bay</h2>
          <div className="airport-info">
            <div className="info">
              <span className="title-info">Tìm xe đón ở sân bay</span>
              <p>
                <span>Sân bay quốc tế Tân Sơn Nhất</span> &rarr;
                <span>682 Sư Vạn Hạnh, TP HCM</span>
              </p>
            </div>
            <div className="info">
              <span className="title-info">Ngày & Giờ</span>
              <p>20/04/2022 09:00 AM</p>
            </div>
            <div className="info">
              <span className="title-info">Số lượng khách</span>
              <p>2 Khách</p>
            </div>
            <div>
              <button className="btn btn-warning mt-2 me-3">Thay đổi</button>
            </div>
          </div>
        </div>
      </div>
      <div className="epidemic">
        <div className="epidemic container">
          <div className="epidemic-title mb-3">
            <BsShieldFillCheck />
            <span>Thực Hiện Các Biện Pháp Vệ Sinh</span>
          </div>
          <div className="epidemic-meature-content d-flex align-items-center justify-content-between mb-3">
            <div className="epidemic-meature">
              Các biện pháp vệ sinh & tăng cường sức khoẻ
            </div>
            <div className="epidemic-answer">
              Sức khoẻ và sự an toàn của bạn là ưu tiên hàng đầu của chúng tôi.
              Khi bạn nhìn thấy dịch vụ được gắn thẻ “{" "}
              <b style={{ fontWeight: 700 }}>Thực Hiện Các Biện Pháp Vệ Sinh</b>
              ” từ nhà cung cấp, điều đó có nghĩa là họ đã áp dụng các biện pháp
              vệ sinh sau đây để đảm bảo an toàn và an tâm cho bạn:
            </div>
          </div>
          <div className="epidemic-meature-detail d-flex justify-content-around">
            <div className="epidemic-meature-detail-item">
              Thường xuyên vệ sinh và làm sạch các khu vực tiếp xúc
            </div>
            <div className="epidemic-meature-detail-item">
              Cung cấp nước sát khuẩn và khử trùng tay
            </div>
            <div className="epidemic-meature-detail-item">
              Tài xế có đeo khẩu trang
            </div>
            <div className="epidemic-meature-detail-item">
              Xe luôn được vệ sinh sau mỗi chuyến đón khách
            </div>
            <div className="epidemic-meature-detail-item">
              Cửa sổ được mở để đảm bảo thông thoáng
            </div>
          </div>
        </div>
      </div>
      <div className="at-home-center">
        <div className="container">
          <div className="row">
            <div className="at-service-tip col-3">
              <div className="tip-title">Tại sao nên chọn chúng tôi ?</div>
              <div className="tip-list">
                <div className="tip-item">
                  <AiFillCheckCircle className="tip-icon" />
                  Tiết kiệm thời gian
                </div>
                <div className="tip-item">
                  <AiFillCheckCircle className="tip-icon" />
                  Thoải mái và an toàn
                </div>
                <div className="tip-item">
                  <AiFillCheckCircle className="tip-icon" />
                  Phù hợp với gia đình
                </div>
              </div>
            </div>
            <div className="at-content col-9">
              <div className="list-vehicle">
                <div
                  className={
                    typeVehicle == "bus"
                      ? "vehicle-item active"
                      : "vehicle-item"
                  }
                >
                  <BiBusSchool className="vehicle-icon" /> Bus trung chuyển
                </div>
                <div
                  className={
                    typeVehicle == "train"
                      ? "vehicle-item active"
                      : "vehicle-item"
                  }
                >
                  <BiTrain className="vehicle-icon" /> Tàu điện
                </div>
              </div>
              <div className="list-booking">
                {data.map((item, index) => {
                  return (
                    <div key={index} className="container-fluid booking-item">
                      <div className="row">
                        <div className="col-4">
                          <img src={item.image} />
                        </div>
                        <div className="col-8">
                          <div className="title">{item.name}</div>
                          <div className="lt">Lịch trình</div>
                          <div>
                            {item.from} &rarr; {item.to}{" "}
                            <b style={{ fontWeight: "700" }}>
                              ({item.distance})
                            </b>
                          </div>
                          <div>
                            <button
                              type="button"
                              className="btn btn-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#modal"
                              onClick={() => {
                                setModalData(item);
                              }}
                            >
                              Đặt ngay
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal modalData={modalData} />
    </div>
  );
}

export default Vehicle;
