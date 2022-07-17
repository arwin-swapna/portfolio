import React from 'react'
import './Navigation.scss'
import {NavLink} from 'react-router-dom'
import {FaHome, FaUser, FaEnvelope, FaBriefcase, FaRobot } from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'
import { IconContext } from 'react-icons/lib'


const Navigation = () => {
  return (
    <div className='h-[60px] w-full fixed flex justify-center bottom-0 md:mb-5'>
        <div className='nav-bar bg-gradient-to-l from-green-400 to-blue-500 text-black h-[45px] md:h-[55px] w-[350px] md:w-[450px] mx-auto rounded-3xl absolute'>
            <nav className='flex w-full justify-between mx-8'>
                <IconContext.Provider value={{size: 30}}>
                    <NavLink exact='true' activeclassname='active' to='/'>
                        <FaHome/>
                    </NavLink>

                    <NavLink exact='true' activeclassname='active' to='/about'>
                        <FaUser/>
                    </NavLink>

                    <NavLink exact='true' activeclassname='active' to='/skills'>
                        <FaBriefcase/>
                    </NavLink>

                    <NavLink exact='true' activeclassname='active' to='/leetcode'>
                        <SiLeetcode/>
                    </NavLink>

                    <NavLink exact='true' activeclassname='active' to='/projects'>
                        <FaRobot/>
                    </NavLink>

                    <NavLink exact='true' activeclassname='active' to='/contact'>
                        <FaEnvelope/>
                    </NavLink>

                </IconContext.Provider>
            </nav>
        </div>
    </div>
  )
}

export default Navigation