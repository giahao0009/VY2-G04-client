import React, { useContext, useState } from "react";
import { AiFillMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import userApi from "../../apis/userApi";
import { AuthContext } from "../../context/auth/AuthContext";
import {
  loginFailuer,
  loginSuccess,
  loginStart,
} from "../../context/auth/AuthAction";

const styleIcon = {
  fontSize: "30px",
  marginRight: "20px",
  color: "grey",
};

const styleError = {
  color: "red",
};

function ModalLogin() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [err, setErr] = useState(null);
  const [password, setPassword] = useState("");
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await userApi.login({ email, password });
      if (response.status == 201) {
        let user = {
          userId: response.userId,
          name: response.name,
          accessToken: response.accessToken,
          email: response.email,
        };
        dispatch(loginSuccess(user));
        window.location.reload();
      } else {
        setErr("Có lỗi");
        return;
      }
    } catch (err) {
      setErr(err);
      console.log("ERR: " + err);
    }
  };
  return (
    <div
      className="modal fade"
      id="modalLoginForm"
      tabIndex="-1"
      aria-labelledby="#modalLoginFormLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={(e) => handleLogin(e)}>
            <div className="modal-header text-center">
              <h5 className="modal-title fs-3 w-100" id="modalLoginFormLabel">
                Sign in
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
                <AiFillMail style={styleIcon} />
                <input
                  type="email"
                  id="defaultForm-email"
                  className="form-control validate"
                  placeholder="Hãy nhập email của bạn"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="md-form mb-4 d-flex">
                <RiLockPasswordFill style={styleIcon} />
                <input
                  type="password"
                  id="defaultForm-pass"
                  className="form-control validate"
                  placeholder="Hãy nhập password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {}
              {err ? (
                <span style={styleError}>
                  Tài khoản hoặc mật khẩu không đúng
                </span>
              ) : null}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Đăng nhập
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalLogin;
