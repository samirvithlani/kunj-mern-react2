import React from 'react'
import { Outlet } from 'react-router-dom'

export const UserSideBar = () => {
  return (
    <div>
      <h1>USER SIDE</h1>
      <Outlet/>
    </div>
  )
}
