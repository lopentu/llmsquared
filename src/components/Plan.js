import '../App.css';
import React from 'react';

const Plan = (props) =>{
    return(
        <div role='listitem' className='w-dyn-item'>
            <a title='深入瞭解' href='' className="latest-project-item w-inline-block">
                <div className='latest-project-image'>
                    <div className='latest-project-image-hover' >
                        <div className='project-more-icon w-embed'>
                        ::before
                        <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 7.17993C0.447715 7.17993 4.82823e-08 7.62765 0 8.17993C-4.82823e-08 8.73222 0.447715 9.17993 1 9.17993L1 7.17993ZM12.7071 8.88704C13.0976 8.49652 13.0976 7.86335 12.7071 7.47283L6.34315 1.10886C5.95262 0.71834 5.31946 0.71834 4.92893 1.10886C4.53841 1.49939 4.53841 2.13255 4.92893 2.52308L10.5858 8.17993L4.92893 13.8368C4.53841 14.2273 4.53841 14.8605 4.92893 15.251C5.31946 15.6415 5.95262 15.6415 6.34315 15.251L12.7071 8.88704ZM1 9.17993L12 9.17993L12 7.17993L1 7.17993L1 9.17993Z" fill="#323232"></path>
                        </svg>
                        ::after
                        </div>
                    </div>
                    <img loading='lazy' srcSet={props.imgSrc} className='full-image'></img>
                </div>
                <h4>{props.text}</h4>
            </a>
        </div>
    )
}

export default Plan
