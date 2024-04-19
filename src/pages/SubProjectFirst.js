import '../App.css';
import './SubProjectFirst.css'
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


const SubProjectFirst =()=>{

    return(
        <div >
            <Header />

            <div className='content-1'>
                <div className='project-title'>
                    <div className='text-container lef'>
                        <div className='title-area left'>
                            <h3>
                                <strong>
                                 research teams
                                </strong>
                            </h3>
                            <h1>研究小組</h1>
                        </div>

                        <div className='project-tab-list'>

                        <NavLink
                            to="/sub-project/first"
                            className={({ isActive }) => 
                                [
                                ' button w-button ',
                                isActive ? 'router-link-active' : ' w--current'
                                ].join(' ')
                            }
                            >
                            「微調與評測」
                        </NavLink>

                        <NavLink
                            to="/sub-project/second"
                            className={({ isActive }) => 
                                [
                                ' button w-button ',
                                isActive ? 'router-link-active' : ' w--current'
                                ].join(' ')
                            }
                            >
                            「引用與推薦」
                        </NavLink>

                        <NavLink
                            to="/sub-project/third"
                            className={({ isActive }) => 
                                [
                                ' button w-button ',
                                isActive ? 'router-link-active' : ' w--current'
                                ].join(' ')
                            }
                            >
                            「驗證與測試」
                        </NavLink>

                        <NavLink
                            to="/sub-project/forth"
                            className={({ isActive }) => 
                                [
                                ' button w-button ',
                                isActive ? 'router-link-active' : ' w--current'
                                ].join(' ')
                            }
                            >
                            「微調應用」
                        </NavLink>

                        </div>

                    </div>

                </div>

                <section id='vision' className="section-2 beigebg">
                    <div className="horizontal-area mobile-switch">
                        <div className='text-container left'>
                            <div className='title-area left'>
                                <h3>team one</h3>
                                <h2>大型法律語言模型規範推理與可釋性（謝舒凱）</h2>
                            </div>
                            <div>
                                <p><strong>🚩法律語言與推理</strong></p>
                                <p>法律語言是一種具有獨特特色的專業語言。使用判決書作為 LLM 訓練資料可以幫助 LLM 更好地理解和處理法律語言，但需要克服資料複雜性、法律專有名詞和術語、推理邏輯和關聯結構等挑戰。法律語言學研究可以為解決這些挑戰提供理論基礎。</p>                                
                            </div>
                            <div>
                                <p><strong>🚩法律大型語言模型推理的提示工程與工具使用模型</strong></p>
                                <p>
                                    法律推理是 LLM 研究的一個重要領域。目前，LLM 在法律推理方面的能力還存在一些局限性。然而，隨著研究的深入，LLM 在法律推理方面的能力將會不斷提高。
                                </p>
                                <p>
                                我們的模型將參考 Poesia et al. (2023) 提出的一種工具使用模型 (tool use model)。在工具使用模型中，LLM 學習使用工具來完成任務。在我們的模型中，規範邏輯將作為一種工具，幫助 LLM 完成法律推理任務。
                                </p>
                            </div>
                            <div>
                                <p><strong>🚩大型法律語言模型的評測與可釋性</strong></p>    
                                <p>在模型訓練之後，我們將在第三年進行 LLM Squared 的最後評測與可釋性探究。我們將以所有子計畫
                                    執行兩年後的數據成果為基礎（包括律師高考題目、民法學說關聯、蘊涵關係數據等），進行
                                    LLM Squared 的最後評測與可釋性探究。
                                </p>                            
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

export default SubProjectFirst;