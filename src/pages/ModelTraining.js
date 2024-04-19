import '../App.css'
import './ModelTraining.css'
import Button from 'react-bootstrap/Button';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Footer from "../components/Footer";
import dataCuration from "../data_curation.png"
import workFlow from '../workflow.png'
import React from 'react';



const ModelTraining =()=>{

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
                                <h2>model architecture and training</h2>
                                <h3>模型架構與訓練</h3>
                            </div>

                            <p>利用收集的數據和NVIDIA的高效計算資源進行模型的訓練與優化。NVIDIA的 NeMo SDK 為生成式 AI 建立良好的安全護欄，並搭配 LangChain 工具包使用並在開發的應用程式加入限制。</p>
                            <div className="image-container">
                                <img src={workFlow} alt="Workflow" />
                                <div className='caption'>本計畫的持續預訓練與領域適應模型訓練架構</div>
                            </div>


                        </div>

                        <img src={dataCuration} />

                    </div>
                </section>


            </div>

            <section className='footer'>
                <Footer/>
            </section>
        </div>
        )
}

export default ModelTraining;