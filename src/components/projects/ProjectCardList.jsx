import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectCardList = (props) => {
  return (
    <div className='grid md:grid-cols-3 grid-cols-1 gap-3'>
        {props.projectData.map((user,i) => {
            return(
                <ProjectCard 
                key={i} 
                name={props.projectData[i].name} 
                tools = {props.projectData[i].tools}
                note = {props.projectData[i].note}
                github = {props.projectData[i].github}
            />
            );
        })}
    </div>
  )
}

export default ProjectCardList