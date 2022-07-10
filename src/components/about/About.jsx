import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-full md:h-screen bg-[#0b0d0f] text-[#dbdbdb] pt-20'>
        <div className='flex flex-col justify-center items-center w-full h-full '>
          <div className='max-w-[1150px] w-full px-5'>
            <div className='flex md:text-8xl text-4xl '>
              <h2 className=' text-[#EFEFEF59]'>Greetings</h2>
              <p className='ml-3'>👋🏽</p>
            </div>
            <div className='md:text-3xl text-2xl md:mt-8 mt-2 flex flex-col gap-5 '>
              <h2>
                I'm a Software Engineer, currently learning 
                Full-Stack Development to build highly scalable Web Applications.
              </h2>
              <h2>
                Enrolled as a Computer Science student at 
                <span className='text-[#006747] font-medium'>
                  <a href='https://www.usf.edu/' rel="noreferrer" target='_blank'> USF</a>
                </span>, based in Tampa, FL
              </h2>
              <h2>
                I've previously worked as a R&D Intern at 
                <span className='text-[#ff000f] font-medium'> ABB </span>&
                <span className='text-[#337179] font-medium'> DODGE</span>
              </h2>
              <h2 className='mt-5 text-4xl'>
                "Perfection is not attainable, 
                but if we chase perfection we can catch excellence."
              </h2>
              <h2 className=''>
                This philosophy is what drives the <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#ff6da5] to-[#ff8a58]'>engineer in me.</span>
              </h2>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About

