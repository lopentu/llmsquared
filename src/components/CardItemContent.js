import '../App.css';
import { Link } from 'react-router-dom';
import React from 'react';


const CardItemContent = (props) => {
    return(
        <div className='card-item-content'>
        <div className='card-item-text'>
            <div className='number'>{props.num}</div>
            <h3>
                <strong>
                    {props.step}
                </strong>
            </h3>
            <p>{props.description}</p>
        </div>
        {props.link && (
                <Link to={props.link} title='深入了解' className='button w-button'>
                    深入了解
                </Link>
            )}        <p></p>
    </div>
    )
}

export default CardItemContent