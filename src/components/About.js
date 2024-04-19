import '../App.css';
import './About.css';
import { Link } from 'react-router-dom';
import llmImage from '../llm_studying.png'
import React from 'react';

const About = () =>{
    return (
    <div className="horizontal-area mobile-switch ">
        <div className='text-container left'>
            <div className='title-area left '>
                    <h3>ABOUT US</h3>
                    <h2>關於計畫團隊</h2>
            </div>
            <p>
                我們的團隊，是一個結合法律學、語言學、自然語言處理的研究人員組成，幾年來參加司法院與七法法律搜尋引擎(Lawsnote)舉辦的黑客松活動獲得各種不同的獎項。
            </p>
            
            <Link to='/aboutus' className='button w-button'>深入瞭解</Link>
        </div>
        <img src={llmImage} loading="lazy" sizes="(max-width: 767px) 90vw, (max-width: 991px) 45vw, 40vw" alt=" " className="featured-image"/>

    </div>
    );
}

export default About

