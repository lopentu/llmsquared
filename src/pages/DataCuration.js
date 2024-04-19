import '../App.css';
import './DataCuration.css'
import Footer from "../components/Footer";
import CardItem from "../components/CardItem";
import Header from "../components/Header";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import dataCuration from '../data_curation.png'
import dataComparison from '../data_comparison.png'
import verdict from '../verdict.png'
import React from 'react';

const DataCuration =()=>{

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
                                <h2>Data Curation</h2>
                                <h3>數據收集</h3>
                            </div>
                            <p>選擇和預處理法律文本數據。目前已經蒐集超過十年的司法院判決、判例、解釋；與持續更新的社群語料庫法律相關的貼文 (ptt/D) ，與關鍵詞與構式擷取與處理工具。</p>
                            <div>
                                <img src={dataComparison} />
                                <div className='data_caption'>LLM²與其他模型使用數據之比較</div>
                                <div><br/></div>
                                <img src={verdict} />
                                <div className='data_caption'>訓練資料範例：判決書</div>
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

export default DataCuration;