import About from "../components/About";
import Description from "../components/Description";
import Plan from "../components/Plan";
import Footer from "../components/Footer";
import CardItem from "../components/CardItem";
import CardItemContent from "../components/CardItemContent";
import ContactInfoContent from "../components/ContactInfoContent";
import Nav from 'react-bootstrap/Nav';
import Header from "../components/Header";
import "./AboutUs.css"
import llmImage from '../llm_studying.png'
import nvidia from '../nvidia.png'
import ntu from '../ntu.png'
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import typingCat from './typing_cat.png';
import BlogCard from '../components/BlogCard';
import white from './Posts/white.png'

const News = () =>{
        const go =[
            {to:'#news-list', to_where:'最新消息'},
            {to:'#recruit', to_where:'招募'}           
        ];    

    return( 
        <div >
            <Header go={go}/>

            <div className='content-1'>

                <section id='news-list' className="section-2 beigebg">
                    <div className="vertical-area">
                        <div className='text-container orizontal'>

                            <div className='title-area left'>
                                <h3>NEWS</h3>
                                <h2>最新消息</h2>
                            </div>
                        </div>
                            <div className='home-project-item-list w-dyn-list'>
                                <div role='list' className="project-items "> {/*w-dyn-items*/}
                                    <BlogCard title='4/20『法律黑客松』--台大法學院霖澤館1901 (9:00-17:00)' coverPhoto={white} datePublish='2024-04-20' postPath='/news/hackathon'/>
                                </div>
                            </div>

                    </div>
                </section>

                <section id='recruit' className="section-2 beigebg">
                    <div className="horizontal-area mobile-switch">
                                <div className='text-container left'>
                                    <div className='title-area left'>
                                        <h3>Recruit</h3>
                                        <h2>招募</h2>
                                    </div>
                                    <div className="square">
                                        <div className="inviting">
                                            <div className="google-button-container">                                            
                                                {/*<Nav.Link className='google-button google-w-button' href='https://forms.gle/7RzvtAZqpbrEYyZu5'>填寫表單</Nav.Link>*/}
                                            </div>
                                        <p>感謝您的關注！
                                            <br/>目前我們<strong>暫未進行招募</strong>，<br/>未來如有招募需求，將會在此公佈😊</p>                                          
                                        </div>
                                        <div className="sponsors">
                                    </div>  
                                    </div>
                                </div>
                    </div>
                </section>



            </div>

            <section className='footer'>
                <Footer/>
            </section>
        </div>    );

}

export default News