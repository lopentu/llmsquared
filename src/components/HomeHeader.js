import '../App.css';
import Navigation from './Navigation';
import { Link, NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import './HomeHeader.css'
import { useEffect, useRef, useState } from 'react';
import llmLogo from './llm_logo.png';
import React from 'react';


const HomeHeader = () => {
    const stickyHeaderRef = useRef(null);

    const [isFullScreen, setIsFullScreen] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const triggerPoint = stickyHeaderRef.current.offsetHeight;


            if (scrollTop <= triggerPoint) {
                setIsFullScreen(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <div className='w-nav '>
            <div className={`ani-header ${isFullScreen ? "full-screen" : ""} box`} ref={stickyHeaderRef}>
                <div className='header-title typewriter'>
                    <img src={llmLogo}  className='logo'/>
                    <div className='first-word'>LLM</div>
                    <div className='second-word'>Squared</div>
                </div>

            </div>
            <div>
                <Navigation />
            </div>

        </div>
    )
};

export default HomeHeader