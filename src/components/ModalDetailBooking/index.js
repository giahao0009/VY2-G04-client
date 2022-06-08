import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { BookingContext } from "../../context/booking/BookingContext";
import { setBooking } from "../../context/booking/BookingAction";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";

function ModalDetailBooking(props) {
  const navigate = useNavigate();
  const [state, dispatch] = useContext(BookingContext);
  const [numberPeoples, setNumberPeoples] = useState(1);
  const [totalCost, setTotalCost] = useState(null);
  const [show, setShow] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      setBooking({
        ...state,
        bookingStatus: "Đã đặt",
        vehicleId: props.modalData.vehicleId,
        numberPeoples: numberPeoples,
        totalCost: totalCost,
        customerId: state.user.userId,
        companyId: props.modalData.companyId,
      })
    );
    navigate("payment");
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
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Chi tiết đặt xe
        </Modal.Title>
      </Modal.Header>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Modal.Body>
          <div>
            <div>Biển số xe: {props.modalData.vehicleNumber}</div>
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
        </Modal.Body>
        <Modal.Footer>
          <div>
            <span>Tổng tiền</span> <br />
            <span className="totalCost" style={{ color: "#f96d01" }}>
              100.000 VND
            </span>
          </div>
          <button type="submit" className="btn btn-primary">
            Đặt ngay
          </button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default ModalDetailBooking;
