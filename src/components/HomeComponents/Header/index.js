import React from "react";
import { Link } from "react-router-dom";
import { FaHandshake } from "react-icons/fa";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="navbar-brand fs-2 text custom-navbar-brand">
            VY2G04
          </Link>
          <ul className="navbar-control">
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
              <a className="btn btn-dark" href="#">
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
