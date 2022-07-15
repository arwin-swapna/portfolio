import React from 'react';
import ToolsCard from './ToolsCardList';
import LeetcodeStats from './LeetcodeStats';
import { tools } from './toolData';


const Skills = ({data}) => {
  return (

    <div name='skills' className='w-full h-screen bg-[#0b0d0f] text-[#dbdbdb] pt-20'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1150px] w-full px-5'>
          <h2 className='md:text-8xl mt-8 text-4xl text-[#EFEFEF59]'>Experience</h2>
        
          {/*=======Tools ========== */}
          <div className=''>
            <h2 className='md:mt-5 mt-3 md:text-4xl text-2xl'> These are some of the tools I've worked with:</h2>
            <ToolsCard tools = {tools}/>
          </div>


          {/*======= Leetcode Stats ========== */}
          <div className='mt-6'>
            <p className='mt-5 md:text-4xl text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#aefaff] to-[#258cd3]'> My LeetCode Stats:</p>   
            <LeetcodeStats data={data}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills