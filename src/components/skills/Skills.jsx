import React from 'react';
import ToolsCard from './ToolsCardList';
import LeetcodeStats from '../leetcode/LeetcodeStats';
import { tools } from './toolData';


const Skills = ({data}) => {
  return (

    <div name='skills' className='w-full h-screen bg-[#0b0d0f] text-[#dbdbdb] '>
      <div className='h-full flex flex-col md:mt-0 md:justify-center md:items-center '>
        <div className='max-w-[1150px] px-4 pb-[75px]'>
          <h2 className='md:text-8xl text-6xl text-[#EFEFEF59] mt-5 md:mt-0'>Experience</h2>
        
          {/*=======Tools ========== */}
          <div className=''>
            <h2 className='md:mt-5 mt-3 md:text-4xl text-2xl'> These are some of the tools I've worked with:</h2>
            <ToolsCard tools = {tools}/>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Skills