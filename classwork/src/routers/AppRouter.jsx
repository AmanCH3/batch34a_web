import React from 'react'
import {BrowserRouter,Routes , Route} from 'react-router-dom';
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import Register from '../pages/Register'
import MainLayout from '../layouts/MainLayout';

export default function AppRouter() {
  return (
    <BrowserRouter>
     <Routes>
        <Route element = {<MainLayout/>}>
        {/* main layout will show in every routes below */}
          <Route path = "/" element = {<HomePage/>}> </Route>
           <Route path = "/login" element = {<LoginPage/>}></Route>
           <Route path = "/register" element = {<Register/>}></Route>
        
        </Route>
     </Routes>
    </BrowserRouter>
  )
}
