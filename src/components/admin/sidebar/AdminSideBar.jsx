import React from 'react'
import { Outlet } from 'react-router-dom'

export const AdminSideBar = () => {
  return (
    <div>
      <h1>ADMIN SIDEBAR</h1>
      <Outlet/>
    </div>
  )
}
