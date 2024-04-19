import '../App.css';
import './DataCuration.css'
import Footer from "../components/Footer";
import CardItem from "../components/CardItem";
import Header from "../components/Header";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import dataCuration from '../data_curation.png'
import React from 'react';



const Application =()=>{

    return(
        <div >
            <Header />

            <div className='content-1'>
                <div className='project-title'>
                    <div className='text-container lef'>
                        <div className='title-area left'>
                            <h3>
                                <strong>
                                 main project
                                </strong>
                            </h3>
                            <h1>總計劃</h1>
                        </div>

                        <div className='project-tab-list'>

                        <NavLink
                            to="/plan/main-project"
                            className={({ isActive }) => 
                                [
                                ' button w-button ',
                                isActive ? 'router-link-active' : ' w--current'
                                ].join(' ')
                            }
                            >
                            總計劃說明
                        </NavLink>

                        <NavLink
                            to="/plan/data-curation"
                            className={({ isActive }) => 
                                [
                                ' button w-button ',
                                isActive ? 'router-link-active' : ' w--current'
                                ].join(' ')
                            }
                            >
                            數據收集
                        </NavLink>

                        <NavLink
                            to="/plan/model-training"
                            className={({ isActive }) => 
                                [
                                ' button w-button ',
                                isActive ? 'router-link-active' : ' w--current'
                                ].join(' ')
                            }
                            >
                            模型架構與訓練
                        </NavLink>


                        <NavLink
                            to="/plan/evaluation"
                            className={({ isActive }) => 
                                [
                                ' button w-button ',
                                isActive ? 'router-link-active' : ' w--current'
                                ].join(' ')
                            }
                            >
                            驗證與測試
                        </NavLink>

                        <NavLink
                            to="/plan/application"
                            className={({ isActive }) => 
                                [
                                ' button w-button ',
                                isActive ? 'router-link-active' : ' w--current'
                                ].join(' ')
                            }
                            >
                            部署與應用
                        </NavLink>
                        </div>

                    </div>

                </div>

                <section id='vision' className="section-2 beigebg">
                    <div className="horizontal-area mobile-switch">
                        <div className='text-container left'>
                            <div className='title-area left'>
                                <h2>deployment and application</h2>
                                <h3>部署與應用</h3>
                            </div>
                            <p>確保模型能在各種法律應用場景下運行。將模型應用於實際的法律語境中，並根據用戶反饋進行持續優化。</p>
                        </div>
                        <img src={dataCuration} loading="lazy" sizes="(max-width: 767px) 90vw, (max-width: 991px) 45vw, 40vw" alt=" " className="featured-image"/>

                    </div>
                </section>


            </div>

            <section className='footer'>
                <Footer/>
            </section>
        </div>
        )
}

export default Application;