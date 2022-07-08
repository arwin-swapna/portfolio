import React from 'react'
import Resume from '../../assets/resume_Arwin_ArunSwapna_v4.1.pdf'

const Contact = () => {
  return (
    
    <div name='contact' className='w-full h-full md:h-screen bg-[#0b0d0f] text-[#dbdbdb]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1150px] w-full px-5'>
                <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-300 md:text-9xl text-5xl'>And CUT!!! </h1>
                <h1 className='mt-8 text-transparent bg-clip-text bg-gradient-to-l from-pink-500 to-purple-500 md:text-8xl text-4xl'>Piqued your interest?</h1>
                <h1 className='text-transparent bg-clip-text bg-gradient-to-l from-pink-500 to-purple-500 md:text-8xl text-4xl'>Just holler!!!</h1>
            </div>

            <div className='pb-10 text-3xl md:mt-40 mt-20 '>
                <ul className='flex md:flex-row flex-col justify-center items-center md:gap-[100px] gap-5'>
                    <li><a href={Resume} target='_blank' rel="noreferrer">Resume</a></li>
                    <li><a href="https://www.linkedin.com/in/arwinswapna/" target='_blank' rel="noreferrer">Linkedln</a></li>
                    <li><a href="https://github.com/arwin-dev" target='_blank' rel="noreferrer">GitHub</a></li>
                    <li><a href='mailto:arwin.dev@outlook.com' className='text-transparent bg-clip-text bg-gradient-to-r from-[#ffb16a] to-[#d0ffbc]'>Let's Chat?</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Contact

