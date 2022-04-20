import React from "react";
import { Link } from "react-router-dom";
import { FaHandshake } from "react-icons/fa";
import logo from "../../../images/traveloka_logo.png";

function Header() {
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
              <a href="#" className="link-login">
                Đăng nhập
              </a>
            </li>
            <li>
              <a className="btn btn-primary" href="#">
                Đăng ký
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
