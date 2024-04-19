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



const Evaluation =()=>{

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
                            <h1>總計畫</h1>
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
                                <h2>Evaluation</h2>
                                <h3>驗證與測試</h3>
                            </div>
                            <p>對模型進行深入的驗證測試，並根據實際效果進行必要的調整。在任務評測部分，將以 Legal-AI 幾個常見任務作為對象，包括：司法人員與律師高考、法律資訊運用服務、事實認定與判例援引。</p>
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

export default Evaluation;