import React from 'react'

const Card = ({id,path}) => {
    return(
        <div className="mx-auto hover:translate-y-[-15px] duration-300">
            <img src={path} alt="robots" style={{width: '100px'}}/>
        </div>
    );
}

export default Card