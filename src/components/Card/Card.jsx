import React from 'react';
import './card.css'
function Card(props)
{
    return(

        <div className='card'>
            <a href={"challenge/"+ props.link}>

            <div className="card-1">
                <h2>{props.name}</h2>
                
            </div>
            </a>
            <div className="card-2">
                <div className='card-details'>
                    <p>{props.sections}</p>
                    <p>Section</p>
                </div>
                <div className='card-details'>
                    <p>{props.questions}</p>
                    <p>Question</p>
                </div>      
            </div>
        </div>
    );
}
export default Card;