import React from 'react';
import {Outlet} from 'react-router-dom';
import HeaderAdmin from '../../components/AdminComponents/HeaderAdmin';
import SidebarAdmin from '../../components/AdminComponents/SidebarAdmin';
import './admin.scss';

function Admin() {
    return (
        <div>
            <HeaderAdmin/>
            <div className="container-fluid">
                <div className="row">
                    <SidebarAdmin/>
                    <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div className="mt-4">
                            <Outlet/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin;
