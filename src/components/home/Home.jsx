import React from 'react'
import ME from '../../assets/me.png'
import './Home.scss'


const Home = () => {
  return (
    <div name='home' className='home w-full h-screen flex'>
      <div className='w-full flex justify-center'>
        <div className='w-[1250px] flex justify-between items-center'>
          <div className=''>
            <h1 className='name w-fit'>Arw<span>i</span>n AS</h1>
            <p className='text-5xl w-fit'>Software Dev</p>
          </div>

          <div>
            <img src={ME} width='300px' alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
