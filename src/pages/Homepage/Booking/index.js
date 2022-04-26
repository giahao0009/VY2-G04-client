import React, { useContext } from "react";
import { BookingContext } from "../../../context/booking/BookingContext";
import { FaPlaneArrival } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import Coop from "../../../components/HomeComponents/Coop";
import Advertisement from "../../../components/HomeComponents/Advertisement";
import { Link } from "react-router-dom";
function Booking() {
  const [state, dispatch] = useContext(BookingContext);

  console.log(state);

  return (
    <div className="booking">
      <div className="booking-wrapper">
        <div className="booking-title container">
          <h2 className="title">Dịch vụ đưa đón sân bay</h2>
          <p className="description mt-2">
            Bạn cần đi đến/từ Sân bay? Hãy đảm bảo cho hành trình du lịch của
            bạn được thuận lợi với các lựa chọn đưa đón đa dạng từ xe riêng,
            taxi và các lựa chọn trung chuyển sân bay đa dạng khác!
          </p>
        </div>
        <div className="booking-search">
          <div className="booking-search-wrapper">
            <div className="booking-search-tab">
              <span className="active">Tìm xe đón ở sân bay</span>
              <span>Tìm xe đi sân bay</span>
            </div>
            <form className="booking-search-form">
              <div className="form-search-group">
                <FaPlaneArrival className="input-icon" />
                <input placeholder="Lựa chọn sân bay" />
              </div>
              <div className="form-search-group">
                <ImLocation2 className="input-icon" />
                <input placeholder="Lựa chọn điểm đến" />
              </div>
              <div className="form-search-group">
                <input placeholder="Ngày đón" type="date" />
              </div>
              <div className="form-search-group">
                <input type="time" />
              </div>

              <Link to="/booking/vehicle" className="btn btn-primary">
                Tìm kiếm
              </Link>
            </form>
          </div>
        </div>
      </div>
      <div className="container advantage-content">
        <div className="advantage-item">
          <div className="item-icon wide-range-of-selections"></div>
          <div className="item-detail">
            <div className="item-detail__title">
              Nhiều lựa chọn xe đưa đón sân bay
            </div>
            <div className="item-detail__info">
              Tuỳ chọn giữa thuê xe riêng, tàu, xe buýt, và hơn thế nữa
            </div>
          </div>
        </div>
        <div className="advantage-item">
          <div className="item-icon no-hidden-costs"></div>
          <div className="item-detail">
            <div className="item-detail__title">Giá tốt tiết kiệm đến 40%</div>
            <div className="item-detail__info">
              Tuỳ chọn giữa thuê xe riêng, tàu, xe buýt, và hơn thế nữa
            </div>
          </div>
        </div>
        <div className="advantage-item">
          <div className="item-icon customer-support"></div>
          <div className="item-detail">
            <div className="item-detail__title">
              Hỗ trợ khách hàng đa ngôn ngữ
            </div>
            <div className="item-detail__info">
              Tuỳ chọn giữa thuê xe riêng, tàu, xe buýt, và hơn thế nữa
            </div>
          </div>
        </div>
      </div>
      <Coop />
      <Advertisement />
    </div>
  );
}

export default Booking;
