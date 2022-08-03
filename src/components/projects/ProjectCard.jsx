import React from 'react'
import { FaGithub} from 'react-icons/fa'
import {FiFolder} from 'react-icons/fi'

const ProjectCard = ({name,tools,note,github}) => {
  return (
    <div>
        <div className="block p-9 max-w-full h-max rounded-lg bg-slate-800 shadow-md hover:translate-y-[-8px] duration-300">
            <div className='flex flex-col justify-between'>
                <div className='flex justify-between pb-3'>
                    <FiFolder size={35}/>
                    <a className='hover:opacity-100 opacity-50 duration-300' rel="noreferrer" href={github} target='_blank'><FaGithub size={35}/></a>
                    
                </div>

                <div className='pt-4'>
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