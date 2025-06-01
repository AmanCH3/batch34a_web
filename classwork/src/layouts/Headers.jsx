import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Headers() {
  return (
    <header className='container mx-4'>
      <div className='space-x-4'></div>
      <div>
        Header
      </div>
      <NavLink to= "/">Home</NavLink>
      <Link to = "/login">Login</Link>
      <Link to = "/register">Register</Link>
    </header>
  )
}
