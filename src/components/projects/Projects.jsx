import React from 'react'
import ProjectCardList from './ProjectCardList'
import { projectData } from './projectData'

const Projects = () => {
  return (
    <div name='projects' className='w-full h-full md:h-screen bg-[#0b0d0f] text-[#dbdbdb] pb-[25%] pt-20'>

      <div className='max-w-[1150px] px-5 mx-auto flex flex-col justify-center '>

        <h2 className='md:text-8xl text-4xl text-[#EFEFEF59]'>Projects</h2>
        <div className='md:mt-8 mt-4'>
          <ProjectCardList projectData = {projectData}/>
        </div>

      </div>

    </div>
  )
}

export default Projects