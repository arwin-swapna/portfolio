import React from 'react'
import { FaGithub} from 'react-icons/fa'
import {FiFolder} from 'react-icons/fi'

const ProjectCard = ({name,tools,note,github}) => {
  return (
    <div>
        <div className="block p-9 max-w-full h-max rounded-lg bg-slate-800 shadow-md">
            <div className='flex flex-col justify-between'>
                <div className='flex justify-between pb-3'>
                    <FiFolder size={35}/>
                    <FaGithub size={35}/>
                    
                </div>

                <div className=''>
                    <h5 className="text-2xl font-bold text-white">{name}</h5>
                    <p className='text-cyan-500'>{tools}</p>
                    <p className='leading-tight'>{note}</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ProjectCard