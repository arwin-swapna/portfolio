import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../navigation/Navigation'
import './Layout.scss'

const Layout = () => {
  return (
    <div className='App'>
        <Navigation/>

        <div className='page'>

          <Outlet/>

        </div>
    </div>
  )
}

export default Layout