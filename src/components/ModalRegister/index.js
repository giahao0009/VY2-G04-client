import React from "react";
import { AiFillMail, AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";

const styleIcon = {
  fontSize: "30px",
  marginRight: "20px",
  color: "grey",
};

function ModalLogin() {
  return (
    <div
      className="modal fade"
      id="modalRegisterForm"
      tabIndex="-1"
      aria-labelledby="#modalRegisterFormLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header text-center">
            <h5 className="modal-title fs-3 w-100" id="modalRegisterFormLabel">
              Sign up
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="md-form mb-5 d-flex">
              <AiOutlineUser style={styleIcon} />
              <input
                type="text"
                id="defaultForm-email"
                className="form-control validate"
                placeholder="Hãy nhập tên của bạn"
              />
            </div>

            <div className="md-form mb-5 d-flex">
              <AiFillMail style={styleIcon} />
              <input
                type="email"
                id="defaultForm-email"
                className="form-control validate"
                placeholder="Hãy nhập email của bạn"
              />
            </div>

            <div className="md-form mb-4 d-flex">
              <RiLockPasswordFill style={styleIcon} />
              <input
                type="password"
                id="defaultForm-pass"
                className="form-control validate"
                placeholder="Hãy nhập password"
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Đăng ký
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalLogin;
