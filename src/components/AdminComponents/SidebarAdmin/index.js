import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {AiFillHome, AiFillCar, AiFillSchedule} from 'react-icons/ai';
import {FaUserAstronaut} from 'react-icons/fa';
import CustomLink from '../../../components/AdminComponents/CustomLink/CustomLink';
import './sidebarAdmin.scss';

function SidebarAdmin() {
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <CustomLink id="dashboard" to = "/admin" className="nav-link d-flex alight-items-center" aria-current="page" href="#">
                            <AiFillHome className="icon-sidebarmenu"/>
                            <span>Dashboard</span>
                        </CustomLink>
                    </li>
                    <li className="nav-item" >
                        <div id="vehicle" className="nav-link d-flex alight-items-center"  aria-current="page">
                            <AiFillCar className="icon-sidebarmenu"/>
                            <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Quản lý phương tiện</span>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                    <Link to="/admin/typecar" className="dropdown-item" type="button">Quản lý loại xe</Link>
                                </li>
                                <li>
                                    <Link  to="/admin/car" className="dropdown-item" type="button">Quản lý xe</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <CustomLink id="driver" to="/admin/driver" className="nav-link d-flex alight-items-center" aria-current="page" href="#">
                            <FaUserAstronaut className="icon-sidebarmenu"/>
                            <span>Quản lý tài xế</span>
                        </CustomLink>
                    </li>
                    <li className="nav-item">
                        <CustomLink id="schedule" to="/admin/schedule" className="nav-link d-flex alight-items-center" aria-current="page" href="#">
                            <AiFillSchedule className="icon-sidebarmenu"/>
                            <span>Quản lý lịch làm</span>
                        </CustomLink>
                    </li>
                    <li className="nav-item">
                        <hr/>
                    </li>
                </ul>

                
            </div>
        </nav>
    )
}

export default SidebarAdmin;