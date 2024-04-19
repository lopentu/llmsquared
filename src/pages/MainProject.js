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
import mainProject from '../main-project.png'
import React from 'react';



const MainProject =()=>{

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
                                <h2>Main Project Description</h2>
                                <h3>總計劃說明</h3>
                            </div>
                            <p>本計畫團隊由不同系所的研究人員所組成，包括台大語言所計算語言學實驗室 LOPE（謝舒凱）、台大法律系法律分析實驗室 Laboratory of Legal Analytics (黃詩淳)、台大新聞所計算傳播研究室 Computational Communication Lab （謝吉隆），與臺北醫學大學醫療暨生物科技法律研究所法律資料分析與計算中國研究室（邵軒磊）。</p>
                            <div>
                                <div><br/></div>
                                <img src={mainProject} />
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

export default MainProject;