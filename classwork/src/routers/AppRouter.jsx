import React from 'react'
import {BrowserRouter,Routes , Route} from 'react-router-dom';
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import Register from '../pages/Register'

export default function AppRouter() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path = "/" element = {<HomePage/>}> </Route>
        <Route path = "/login" element = {<LoginPage/>}></Route>
        <Route path = "/register" element = {<Register/>}></Route>
     </Routes>
    </BrowserRouter>
  )
}
