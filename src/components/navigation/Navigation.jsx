import React from 'react'
import './Navigation.scss'
import {FaHome, FaUser, FaEnvelope, FaBriefcase, FaRobot } from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'
import {NavLink} from 'react-router-dom'
import { IconContext } from 'react-icons/lib'


const Navigation = () => {
  return (
    <div className='w-screen md:flex justify-center'>
        <div className='nav-bar px-20 fixed hidden md:flex justify-between items-center'>
                <IconContext.Provider value={{size: 30}}>
                    <NavLink exact='true' activeclassname='active' to='/'>
                        <p>Home</p>
                    </NavLink>

                    <NavLink exact='true' activeclassname='active' to='/about'>
                        <p>About</p>
                    </NavLink>

                    <NavLink exact='true' activeclassname='active' to='/skills'>
                        <p>Skills</p>
                    </NavLink>

                    <NavLink exact='true' activeclassname='active' to='/leetcode'>
                        <p>Leetcode</p>
                    </NavLink>

                    <NavLink exact='true' activeclassname='active' to='/projects'>
                        <p>Project</p>
                    </NavLink>

                    <NavLink exact='true' activeclassname='active' to='/contact'>
                        <p className='text-transparent bg-clip-text bg-gradient-to-r from-[#ffb16a] to-[#d0ffbc]'>Let's Chat?</p>
                    </NavLink>
                </IconContext.Provider>
        </div>

        <div className='px-5'>
            <div className='nav-ham px-5 rounded-3xl shadow-md fixed bottom-0 md:hidden flex justify-between items-center'>
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
        
            </div>
        </div>
    </div>
  )
}

export default Navigation