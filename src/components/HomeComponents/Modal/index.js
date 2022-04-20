import React from "react";
import PropTypes from "prop-types";

Modal.propTypes = {
  modalData: PropTypes.object,
};

Modal.defaultProps = {
  modalData: {},
};

function Modal(props) {
  return (
    <div
      className="modal fade bd-example-modal-lg"
      id="modal"
      tabindex="-1"
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
          <div className="modal-body">
            <div>
              <div>{props.modalData.name}</div>
              <div>Đến {props.modalData.to}</div>
              <div>Lịch trình linh hoạt</div>
              <div>{props.modalData.distance}</div>
            </div>
            <div>
              <label>Số lượng hành khách</label>
              <input placeholder="1" type="number" min="1" max="100" />
            </div>
          </div>
          <div className="modal-footer">
            <div>
              <span>Tổng tiền</span>
              <span>307.915</span> VND
            </div>
            <button type="button" className="btn btn-primary">
              Đặt ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
