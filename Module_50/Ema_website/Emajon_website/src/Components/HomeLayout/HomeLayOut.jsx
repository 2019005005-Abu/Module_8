import React from 'react'
import { Header } from '../HeaderLayout/Header'
import { Outlet } from 'react-router-dom'

export const HomeLayOut = () => {
  return (
    <div>
        <Header></Header>
        <Outlet></Outlet>
    </div>
  )
}
