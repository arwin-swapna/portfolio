import React from 'react'
import './Navigation.scss'
import {Link, NavLink} from 'react-router-dom'
import {FaHome, FaUser, FaEnvelope, FaBriefcase } from 'react-icons/fa'
import Logo from "../../assets/logo_transparent.png"


const Navigation = () => {
  return (
    <div className='h-[50px] w-full fixed flex justify-center bottom-5'>
        <div className='nav-bar bg-[#18181b] h-[50px] w-[300px] mx-auto rounded-3xl absolute z-10 mb-3'>
           {/*
                <Link className='logo block px-1' to='/'>
                    <img className='block mx-1' src={Logo} width='50' alt="" />
                </Link>
            */}
            <nav className='flex w-full justify-between mx-8'>
                <NavLink exact='true' activeclassname='active' to='/'>
                    <FaHome/>
                </NavLink>
                <NavLink exact='true' activeclassname='active' to='/about'>
                    <FaUser/>
                </NavLink>
                <NavLink exact='true' activeclassname='active' to='/skills'>
                    <FaBriefcase/>
                </NavLink>
                <NavLink exact='true' activeclassname='active' to='/projects'>
                    <FaEnvelope/>
                </NavLink>
                <NavLink exact='true' activeclassname='active' to='/contact'>
                    <FaEnvelope/>
                </NavLink>
            </nav>
        </div>
    </div>
  )
}

export default Navigation