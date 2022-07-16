import React from 'react'
import LeetcodeStats from './LeetcodeStats'

const Leetcode = ({data}) => {
    console.log(data)
  return (
    <div name='about' className='w-full h-screen bg-[#0b0d0f] text-[#dbdbdb]'>
        <div className='h-full flex flex-col md:mt-0 md:justify-center md:items-center'>
            <div className='max-w-[1150px]  px-4 pb-[75px]'>

                <div className=''>
                <h1 className='md:text-8xl text-6xl text-[#EFEFEF59] mt-5 md:mt-0'>LeetCode Stats</h1>
                </div>

                <div className='mt-6'>
                    <LeetcodeStats data={data}/>
                </div>
        
            </div>
        </div>
    </div>

  )
}

export default Leetcode