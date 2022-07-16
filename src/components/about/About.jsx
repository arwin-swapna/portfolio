import React from 'react'
import './About.scss'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0b0d0f] text-[#dbdbdb]'>
        <div className='h-full flex flex-col md:mt-0 md:justify-center md:items-center'>

          <div className='max-w-[1150px]  px-4 pb-[75px]'>

            <div className=''>
              <h1 className='md:text-8xl text-6xl text-[#EFEFEF59] mt-5 md:mt-0'>Greetings</h1>
            </div>

            <div className='md:text-4xl text-2xl flex flex-col md:gap-6 gap-4 mt-5 '>
              <p>
                I'm a Software Engineer, currently learning Full-Stack Development 
                to build highly scalable Web Applications.
              </p>
              <p>
                Enrolled as a Computer Science student at <span className='text-green-800 font-medium'>USF</span>, based in Tampa, FL
              </p>
              <p>
                I've previously worked as a R&D Intern at <span className='text-[#ff000f] font-medium'>ABB</span> & <span className='text-[#337179] font-medium'>DODGE</span>
              </p>
              <p className='font-medium'>
                "Perfection is not attainable, but if we chase perfection we 
                can catch excellence."
              </p>
              <p>
                This philosophy is what drives the <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#ff6da5] to-[#ff8a58]'>engineer in me.</span>
              </p>

            </div>

          </div>

        </div>
    
    </div>
  )
}

export default About

