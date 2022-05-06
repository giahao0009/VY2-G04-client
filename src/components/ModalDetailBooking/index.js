import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { BookingContext } from "../../context/booking/BookingContext";
import { setBooking } from "../../context/booking/BookingAction";
import { useNavigate } from "react-router-dom";

Modal.propTypes = {
  modalData: PropTypes.object,
};

Modal.defaultProps = {
  modalData: {},
};

function Modal(props) {
  const navigate = useNavigate();
  const [state, dispatch] = useContext(BookingContext);
  const [numberPeoples, setNumberPeoples] = useState(1);
  const [totalCost, setTotalCost] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      setBooking({
        ...state,
        bookingStatus: "Đã đặt",
        vehicleId: props.modalData.vehicleId,
        numberPeoples: numberPeoples,
        totalCost: totalCost,
      })
    );
    navigate("booking/payment");
  };

  const handleChangePeoples = (e) => {
    setNumberPeoples(e.target.value);
    const baseCost = 100000;
    let totalCost = baseCost * e.target.value;
    setTotalCost(totalCost);
    totalCost = totalCost.toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    });
    document.querySelector(".totalCost").innerText = totalCost;
  };

  return (
    <div
      className="modal fade bd-example-modal-lg"
      id="modal"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title fs-4" id="exampleModalLabel">
              Thông tin chi tiết
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="modal-body">
              <div>
                <div>Mã phương tiện: {props.modalData.vehicleId}</div>
                <div>Mã nhà cung cấp dịch vụ: {props.modalData.companyId}</div>
                <div>Biển số xe: {props.modalData.vehicleNumber}</div>
                <div>Hiệu xe: {props.modalData.vehicleBrand}</div>
                <div>Địa điểm bắt đầu: {state.fromAddress}</div>
                <div>Địa điểm đến: {state.toAddress}</div>
                <div>Ngày đón: {state.pickupDate}</div>
                <div>Giờ đón: {state.time}</div>
              </div>
              <div>
                <label>Số lượng hành khách</label>
                <input
                  value={numberPeoples}
                  style={{ marginLeft: "10px", borderRadius: "4px" }}
                  placeholder="1"
                  type="number"
                  min="1"
                  max="100"
                  onChange={(e) => handleChangePeoples(e)}
                />
              </div>
            </div>
            <div className="modal-footer">
              <div>
                <span>Tổng tiền</span> <br />
                <span className="totalCost" style={{ color: "#f96d01" }}>
                  100.000 VND
                </span>
              </div>
              <button type="submit" className="btn btn-primary">
                Đặt ngay
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
