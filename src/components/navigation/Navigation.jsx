import React, {useState} from 'react'
import {FaBars, FaTimes,} from 'react-icons/fa'
import {Link} from 'react-scroll'
import Logo from "../../assets/logo_transparent.png"


const Navigation = () => {
    const [nav, setNavigation] = useState(false)
    const handleClick = () => setNavigation(!nav)
  return (
        <div className='md:h-[60px] fixed w-full h-[60px] flex justify-between 
                    items-center px-4 backdrop-blur text-[#dbdbdb]' >
            <div>
                <img className='object-center ' src={Logo} alt='' style={{width:'40px', height:'auto'}}/>
            </div>

            {/* Menu*/}
                <ul className='hidden md:flex duration-300'>
                    <li>
                        <Link to="home"  smooth={true} duration={500} >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="about"  smooth={true} duration={500} >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="skills"  smooth={true} duration={500} >
                            Skills
                        </Link></li>
                    <li>
                        <Link to="projects"  smooth={true} duration={500} >
                            Projects
                        </Link>
                    </li>
                    <li className='text-transparent bg-clip-text bg-gradient-to-r from-[#ffb16a] to-[#d0ffbc]'>
                        <Link to="contact"  smooth={true} duration={500} >
                            Let's Chat
                        </Link>
                    </li>
                </ul>

            {/* Hamburger*/}
            <div onClick={handleClick} className='md:hidden z-[99999]'>
                {!nav ? <FaBars/> : <FaTimes/>}
            </div>

            {/* Mobile Menu*/}
                <ul className={!nav? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0b0d0f] flex flex-col justify-center items-center z-[9999]'}>
                    <li className='py-6 text-4xl'>
                        <Link onClick={handleClick}  to="home"  smooth={true} duration={500} >
                            Home
                        </Link>
                    </li>
                    <li className='py-6 text-4xl'>
                        <Link onClick={handleClick} to="about"  smooth={true} duration={500} >
                            About
                        </Link>
                    </li>
                    <li className='py-6 text-4xl'>
                        <Link onClick={handleClick} to="skills"  smooth={true} duration={500} >
                            Skills
                        </Link>
                    </li>
                    <li className='py-6 text-4xl'>
                        <Link onClick={handleClick} to="projects"  smooth={true} duration={500} >
                            Projects
                        </Link>
                    </li>
                    <li className='py-6 text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#ffb16a] to-[#d0ffbc]'>
                        <Link onClick={handleClick} to="contact"  smooth={true} duration={500} >
                            Let's Chat
                        </Link>
                    </li>
                </ul> 

            {/* Social Icons*/}
            {/*
            <div className='hidden lg:flex fixed flex-col top-[300px] left-0 '>
                <ul>
                    <li className=' text-white w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700'>
                        <a href="https://www.linkedin.com/in/arwinswapna/" target='_blank' rel='noreferrer'
                            className='flex justify-between items-center w-full'>Linkedin <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className=' text-white w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a href="https://github.com/arwin-dev" target='_blank' rel='noreferrer'
                            className='flex justify-between items-center w-full'>GitHub <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className=' text-white w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a href="mailto:arwin.dev@outlook.com"
                            className='flex justify-between items-center w-full'>Email <HiOutlineMail size={30}/>
                        </a>
                    </li>
                    <li className=' text-white w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a href="tel:+18135705356"
                            className='flex justify-between items-center w-full'>Phone <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
                </ul>
            </div>
            */}

            
        </div>
    )
}

export default Navigation