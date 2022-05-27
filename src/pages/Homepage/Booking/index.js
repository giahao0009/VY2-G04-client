import React, { useContext, useState, useEffect } from "react";
import { setBooking } from "../../../context/booking/BookingAction";
import { BookingContext } from "../../../context/booking/BookingContext";
import { FaPlaneArrival } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import Coop from "../../../components/HomeComponents/Coop";
import Advertisement from "../../../components/HomeComponents/Advertisement";
import { Link, useNavigate } from "react-router-dom";
import stationApi from "../../../apis/stationApi";

function Booking() {
  let navigate = useNavigate();
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();

  const [state, dispatch] = useContext(BookingContext);
  const [stations, setStations] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [toAddress, setToAddress] = useState("");
  const [bookingData, setBookingData] = useState({
    pickupDate: yyyy + "-" + mm + "-" + dd,
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await stationApi.getAll();
      setStations(result.data);
    };

    fetchData();
  }, []);

  console.log(suggestions);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      dispatch(
        setBooking({
          fromAddress: "Sân bay quốc tế Tân Sơn Nhất",
          toAddress: bookingData.toAddress,
          pickupDate: bookingData.pickupDate,
          time: bookingData.time,
        })
      );
      navigate("/booking/vehicle");
    }
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const onSuggestHandler = (item) => {
    setKeyword(item.stationName);
    setBookingData({ ...bookingData, toAddress: item.stationName });
    setSuggestions([]);
  };

  const handleOnChangeKeyword = (e) => {
    let keyword = e.target.value;
    let matches = [];
    if (keyword.length > 0) {
      matches = stations.filter((item) => {
        const regex = new RegExp(`${keyword}`, "gi");
        return item.stationName.match(regex);
      });
    }
    setSuggestions(matches);
    setKeyword(keyword);
    setBookingData({ ...bookingData, [e.target.name]: keyword });
  };

  const handleValidation = () => {
    if (!bookingData.toAddress) {
      window.alert("Hãy nhập địa điểm cần đến");
      return;
    }
    if (!bookingData.pickupDate) {
      window.alert("Hãy nhập ngày đặt xe");
      return;
    }
    if (!bookingData.time) {
      window.alert("Hãy nhập giờ đặt xe");
      return;
    }

    return true;
  };

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
            <form
              className="booking-search-form"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className="form-search-group">
                <FaPlaneArrival className="input-icon" />
                <input
                  name="fromAddress"
                  value="Sân bay quốc tế Tân Sơn Nhất"
                  onChange={(e) => handleOnChange(e)}
                  disabled
                />
              </div>
              <div className="form-search-group">
                <ImLocation2 className="input-icon" />
                <input
                  name="toAddress"
                  type="text"
                  placeholder="Lựa chọn điểm đến"
                  onChange={(e) => handleOnChangeKeyword(e)}
                  value={keyword}
                  onBlur={() => {
                    setTimeout(() => {
                      setSuggestions([]);
                    }, 1000);
                  }}
                />
                {suggestions.length > 0 && (
                  <div className="suggestions-box">
                    {suggestions.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="suggestion"
                          onClick={() => onSuggestHandler(item)}
                        >
                          {item.stationName}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
              <div className="form-search-group">
                <input
                  name="pickupDate"
                  type="date"
                  value={bookingData.pickupDate}
                  onChange={(e) => handleOnChange(e)}
                  min={yyyy + "-" + mm + "-" + dd}
                  default
                />
              </div>
              <div className="form-search-group">
                <input
                  name="time"
                  type="time"
                  onChange={(e) => {
                    handleOnChange(e);
                  }}
                  value={bookingData.time || ""}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Tìm kiếm
              </button>
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
