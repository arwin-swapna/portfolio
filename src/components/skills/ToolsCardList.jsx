import React from 'react'
import Card from './ToolsCard'

const ToolsCard = (props) => {
  return (
    <div className='mt-6 grid grid-cols-2 md:grid-cols-6 gap-7'>
        {props.tools.map((user,i) => {
            return(
                <Card 
                key={i} 
                id={props.tools[i].id} 
                path = {props.tools[i].path}
            />
            );
        })}
    </div>
  );
}

export default ToolsCard