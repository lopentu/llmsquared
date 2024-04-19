import '../App.css';
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


const SubProjectTwo =()=>{

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
                                <h3>team two</h3>
                                <h2>應用大語言模型建立法學理論之知識圖譜與引用推薦（黃詩淳）</h2>
                            </div>
                            <div>
                                <p><strong>🚩專家定義之學說關聯性之標記</strong></p>
                                <p>本子計畫期待法律大型語言模型在回答法律問題時，能針對其回答內容「正確」引用文獻
                                    （學說關聯性的正確分類），且所引用的是「重要文獻」。因此，必須對法律大型語言模型做文獻
                                    引用的prompting，還必須將此結果與其他研究方法所產生的結果做比較。
                                </p>                                
                            </div>
                            <div>
                                <p><strong>🚩法律大型語言模型的文獻引用 Prompting Engineering</strong></p>
                                <p>
                                總計畫將使用裁判書資料與元照出版社所提供的法學期刊論文、解題書之內容，作為本
                                計畫大型語言模型的訓練資料。而本子計畫在本年度將針對該大型語言模型產出的問答內容
                                ，進行文獻引用的prompting engineering。
                                Prompting engineering（提示工程）是在與大型語言模型互動時，設計輸入提示（prompts
                                ）的過程，以獲得更精確或更符合期望的輸出回答。這個過程涉及理解模型的機制，以及如何
                                通過特定的語言提示來引導模型提供所需的資訊或進行特定的任務。
                                </p>
                            </div>
                            <div>
                                <p><strong>🚩引用推薦與成效評估</strong></p>    
                                <p>本年度將前一年度的引用推薦結果，與其他傳統引用推薦模型（baseline）之成效做比較。
                                    此外，第一年度的成果亦將與子計畫四合作，建置知識圖譜之視覺化平台。研究成果發表為期
                                    刊論文一篇（英文）、研討會論文一篇（英文）。工作人員將參與引用推薦模型及知識圖譜的設置
                                    ，可培養其自然語言處理技巧與機器學習方法之運用能力。
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

export default SubProjectTwo;