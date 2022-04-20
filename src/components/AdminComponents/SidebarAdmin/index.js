import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AiFillHome,
  AiFillCar,
  AiOutlineCarryOut,
  AiFillGift,
  AiOutlineHistory,
} from "react-icons/ai";
import { BiLocationPlus } from "react-icons/bi";
import { FaGifts } from "react-icons/fa";
import { FcStatistics } from "react-icons/fc";
import { FaUserAstronaut } from "react-icons/fa";
import CustomLink from "../../../components/AdminComponents/CustomLink/CustomLink";

function SidebarAdmin() {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <CustomLink
              id="dashboard"
              to="/admin"
              className="nav-link d-flex alight-items-center"
              aria-current="page"
            >
              <AiFillHome className="icon-sidebarmenu" />
              <span>Dashboard</span>
            </CustomLink>
          </li>
          <li className="nav-item">
            <CustomLink
              to="/admin/car"
              className="nav-link d-flex alight-items-center"
              aria-current="page"
            >
              <AiFillCar className="icon-sidebarmenu" />
              Quản lý phương tiện
            </CustomLink>
          </li>
          <li className="nav-item">
            <CustomLink
              id="driver"
              to="/admin/driver"
              className="nav-link d-flex alight-items-center"
              aria-current="page"
            >
              <FaUserAstronaut className="icon-sidebarmenu" />
              <span>Quản lý tài xế</span>
            </CustomLink>
          </li>

          <li className="nav-item">
            <CustomLink
              id="station"
              to="/admin/station"
              className="nav-link d-flex alight-items-center"
              aria-current="page"
            >
              <BiLocationPlus className="icon-sidebarmenu" />
              <span>Quản lý địa điểm</span>
            </CustomLink>
          </li>

          <li className="nav-item">
            <hr />
          </li>
          <li className="nav-item">
            <CustomLink
              to="/admin/buses"
              className="nav-link d-flex alight-items-center"
              aria-current="page"
            >
              <AiOutlineCarryOut className="icon-sidebarmenu" />
              <span>Quản lý chuyến xe</span>
            </CustomLink>
          </li>
          <li className="nav-item">
            <CustomLink
              to="/admin/buses"
              className="nav-link d-flex alight-items-center"
              aria-current="page"
            >
              <AiFillGift className="icon-sidebarmenu" />
              <span>Quản lý gift</span>
            </CustomLink>
          </li>
          <li className="nav-item">
            <CustomLink
              to="/admin/buses"
              className="nav-link d-flex alight-items-center"
              aria-current="page"
            >
              <FaGifts className="icon-sidebarmenu" />
              <span>Quản lý voucher</span>
            </CustomLink>
          </li>
          <li className="nav-item">
            <hr />
          </li>
          <li className="nav-item">
            <CustomLink
              to="/admin/buses"
              className="nav-link d-flex alight-items-center"
              aria-current="page"
            >
              <FcStatistics className="icon-sidebarmenu" />
              <span>Thống kê</span>
            </CustomLink>
          </li>
          <li className="nav-item">
            <CustomLink
              to="/admin/buses"
              className="nav-link d-flex alight-items-center"
              aria-current="page"
            >
              <AiOutlineHistory className="icon-sidebarmenu" />
              <span>Lịch sử giao dịch</span>
            </CustomLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default SidebarAdmin;
