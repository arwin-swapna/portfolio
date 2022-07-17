import React from 'react'

const Card = ({id,name,path}) => {
    return(
        <div className="mx-auto hover:translate-y-[-15px] duration-300">
            <img src={path} alt="robots" style={{width: '150px'}}/>
            <h1 className='text-center pt-3'>{name}</h1>
        </div>
    );
}

export default Card