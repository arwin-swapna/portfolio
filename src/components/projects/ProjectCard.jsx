import React from 'react'
import { FaGithub} from 'react-icons/fa'
import {FiFolder} from 'react-icons/fi'

const ProjectCard = ({name,tools,note,github}) => {
  return (
    <div>
        <div className="block p-5 max-w-full h-max bg-white rounded-lg border border-gray-200 shadow-md hover:bg-blue-100 dark:bg-blue-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className='flex flex-col justify-between'>
                <div className='flex justify-between p-3'>
                    <FiFolder size={35}/>
                    <FaGithub size={35}/>
                    
                </div>

                <div className='p4'>
                    <h5 className="mb-2 p-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                    <p className='p-4'>{note}</p>
                    <p className='p-5'>{tools}</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ProjectCard