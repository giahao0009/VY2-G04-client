import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaHandshake } from "react-icons/fa";
import logo from "../../../images/traveloka_logo.png";
import { findGetParameter } from "../../../untils";
import authApi from "../../../apis/authApi";

function Header() {
  const [user, setUser] = useState(null);

  console.log(findGetParameter("token"));

  useEffect(() => {
    const getUser = async () => {
      const response = await authApi.getUser(findGetParameter("token"));
      console.log(response.data.data);
    };
    getUser();
  }, []);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      let data = JSON.parse(localStorage.getItem("user"));
      setUser(data);
      console.log(user);
    }
  }, []);

  const logout = () => {
    localStorage.clear();
    window.history.replaceState({}, document.title, "/");

    window.location.reload();
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar custom-navbar">
          <Link to="/" className="navbar-brand fs-2 text custom-navbar-brand">
            <img
              src={logo}
              style={{ width: "100%", backgroundColor: "transparent" }}
            />
          </Link>
          <ul className="navbar-control">
            <li>
              <Link to="/booking">Đặt xe</Link>
            </li>
            <li>
              <a href="https://profile.vinhphancommunity.xyz/partnership">
                <FaHandshake />
                <span>Hợp tác với chúng tôi</span>
              </a>
            </li>

            <li>
              {user ? (
                <div className="dropdown" style={{ display: "inline-block" }}>
                  <p
                    className="dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {user.name}
                  </p>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://profile.vinhphancommunity.xyz/profile/view"
                        target="_blank"
                      >
                        Thông tin tài khoản
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Giao dịch
                      </a>
                    </li>
                  </ul>
                </div>
              ) : (
                <a href="https://profile.vinhphancommunity.xyz/Login?redirect=http://localhost:3000">
                  Đăng nhập
                </a>
              )}
            </li>
            <li>
              {user ? (
                <button className="btn btn-warning" onClick={logout}>
                  Đăng xuất
                </button>
              ) : (
                <a
                  href="https://profile.vinhphancommunity.xyz/signup"
                  className="btn btn-primary"
                >
                  Đăng ký
                </a>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
