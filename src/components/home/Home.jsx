import React from 'react'
import ME from '../../assets/me.png'
import './Home.scss'


const Home = () => {
  return (
    <div name='home' className='home w-full h-screen flex'>
      <div className='w-full flex justify-center'>
        <div className='w-[1350px] flex flex-col md:flex-row justify-center md:justify-between items-center'>
          <div className=''>
            <h1 className='name w-fit text-[4.4rem] md:text-[12rem] sign'><span className='fast-flicker'>Ar</span>w<span className='flicker'>in</span> AS</h1>
            <p className='text-[2rem] md:text-[5rem] md:p-3 w-fit mx-auto md:mx-0'>Software Dev</p>
          </div>

          <div className='md:p-0 p-16'>
            <img src={ME} width='300px' alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
