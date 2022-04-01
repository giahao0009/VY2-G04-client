import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Admin from './pages/Admin';
import Dashboard from './pages/Admin/Dashboard';
import ManagerDriver from './pages/Admin/ManagerDriver';
import ManagerSchedule from './pages/Admin/ManagerSchedule';
import ManagerTypecar from './pages/Admin/ManagerTypecar';
import ManagerCar from './pages/Admin/ManagerCar';

function Router(){
    return (
        <Routes>
            <Route index path="/" element={<Homepage/>}/>
            <Route path="/admin" element={<Admin/>} >
                <Route index element={<Dashboard/>}/>
                <Route path="driver" element={<ManagerDriver/>} />
                <Route path="schedule" element={<ManagerSchedule/>} />
                <Route path="typecar" element={<ManagerTypecar/>} />
                <Route path="car" element={<ManagerCar/>} />
            </Route>
        </Routes>
    )
}

export default Router;