import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from '../pages/admin/Dashboard.jsx';
import AddEquipments from '../pages/admin/AddEquipments.jsx';
import EditEquipment from '../pages/admin/EditEquipment.jsx';
import UsersList from '../pages/admin/UsersList.jsx';
import EquipmentDetails from '../components/EquipmentDetails.jsx';
import MyProfile from '../components/MyProfile.jsx';
import Signin from '../components/Signin.jsx';
import Signup from '../components/Signup.jsx';
import ForgotPassword from '../components/ForgotPassword.jsx';
import Home from '../pages/Home.jsx';
import EquipmentsList from '../components/EquipmentList.jsx';
const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />  } />
            <Route path='/admin/dashboard' element={<Dashboard />  } />
            <Route path='/admin/addequipments' element={<AddEquipments />  } />
            <Route path='/admin/userslist' element={<UsersList />} />
            <Route path='/admin/editequipment' element={<EditEquipment />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/forgotpassword' element={<ForgotPassword />} />
            <Route path='/equipmentdetails' element={<EquipmentDetails />} />
            <Route path='/equipmentslist' element={<EquipmentsList />} />
            <Route path='/myprofile' element={<MyProfile />} />
        </Routes>
    );
}

export default Router;
