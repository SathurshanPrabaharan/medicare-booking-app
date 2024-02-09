import React from 'react'

import {Routes, Route} from 'react-router-dom'

import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
import Login from '../Pages/Login'
import Services from '../Pages/Services'
import Signup from '../Pages/Signup'
import Doctors from '../Pages/Doctors/Doctors'
import DoctorDetails from '../Pages/Doctors/DoctorDetails'
import MyAccount from '../Dashboard/user-account/MyAccount'
import Dashboard from '../Dashboard/doctor-account/Dashboard'
import ProtectedRoute from './ProtectedRoute'

function Routers() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/doctors' element={<Doctors/>}/>
      <Route path='/doctors/:id' element={<DoctorDetails/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Signup/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/users/profile/me' element={<ProtectedRoute allowedRole={['patient']}> <MyAccount/></ProtectedRoute>}/>
      <Route path='/doctors/profile/me' element={<ProtectedRoute allowedRole={['doctor']}> <Dashboard/></ProtectedRoute>}/>
    </Routes>
    </>
  )
}

export default Routers