import '../App.css'
import CardItemContent from './CardItemContent'
import { Link } from 'react-router-dom'
import React from 'react';

const CardItem = (props) =>{
    return(
        <div className='card-item'>
            <div className='card-item-title'>
                <h3>
                    <strong>
                        {props.title}
                    </strong>
                </h3>
            </div>
            <div className='card-item-content'>
                <div className='card-item-text left'>
                    {props.num && (
                        <div className='number'>{props.num}</div>
                    )}

                    {props.step && (
                        <h3>
                            <strong>
                                {props.step}
                            </strong>
                        </h3>                        
                    )

                    }

                    {props.description&&(
                    <p>{props.description}</p>
                    )}

                    {props.leader&&(
                        <div className='project-leader'>
                            <div className='leader-title'>
                                <strong>{props.leader}</strong>
                            </div>
                            <div>
                                {props.leaderName}
                            </div>
                        </div>                        
                    )}
                    {props.coleader&&(
                        <div className='project-leader'>
                            <div className='leader-title'>
                                <strong>{props.coleader}</strong>
                            </div>
                            <div>
                                {props.coleaderName}
                            </div>
                        </div>                        
                    )}

                </div>

                {props.link && (
                        <Link to={props.link} title='深入了解' className='button w-button'>
                            深入了解
                        </Link>
                    )}    

            </div>
        </div>
    )
}

export default CardItem