import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHandshake } from "react-icons/fa";
import logo from "../../../images/traveloka_logo.png";

function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      let data = JSON.parse(localStorage.getItem("user"));
      setUser(data);
      console.log(user);
    }
  }, []);

  const logout = () => {
    localStorage.clear();
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
              <a href="#">
                <FaHandshake />
                <span>Hợp tác với chúng tôi</span>
              </a>
            </li>
            <li>
              {user ? (
                user.name
              ) : (
                <p
                  style={{ display: "inline-block", cursor: "pointer" }}
                  className="link-login"
                  data-bs-toggle="modal"
                  data-bs-target="#modalLoginForm"
                >
                  Đăng nhập
                </p>
              )}
            </li>
            <li>
              {user ? (
                <button className="btn btn-warning" onClick={logout}>
                  Đăng xuất
                </button>
              ) : (
                <button
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#modalRegisterForm"
                >
                  Đăng ký
                </button>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
