import '../App.css';
import Footer from "../components/Footer";
import CardItem from "../components/CardItem";
import Header from "../components/Header";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import dataCuration from '../data_curation.png'
import entailment from '../Entailment.png'
import React from 'react';


const SubProjectFour =()=>{

    return(
        <div >
            <Header />

            <div className='content-1'>
                <div className='project-title'>
                    <div className='text-container lef'>
                        <div className='title-area left'>
                            <h3>
                                <strong>
                                 Research Teams
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
                                <h3>Team four</h3>
                                <h2>運用大型語言模型抽取法律判決書中的蘊含關係與知識圖譜視覺化探究（謝吉隆）</h2>
                            </div>
                            <div>
                                <p>
                                本研究旨在探討、定義與萃取法律判決書中的蘊含關係，以針對不同案類來建立其判決
                                書的知識圖譜，最終提供給常民使用，以討論這樣的工具是否有助於常民理解法律。這
                                樣的過程必須要透過對法律判決書進行結構化的分析和知識萃取，來探索和呈現不同
                                案件間的蘊含關係。本計畫將透過大型語言模型和文本探勘技術來處理法律判決書中
                                的非結構化文本，並從中萃取出具有意義的知識和關係。此外，本研究也將探討不同案
                                件類型間的關係模式，並嘗試提升訊息萃取的正確率，進一步提出一個有效的視覺化方
                                法，以幫助公眾理解各案類的特色。
                                </p>
                                <br/>
                                <p><strong>🚩用LLMs抽取法律判決書中的蘊含關係</strong></p>
                                <p>
                                本計畫大型語言模型的運用主要會運用OpenAI來偵測 (1) 抽取判例中的泛化的知識本
                                體、(2) 命名實體與其間的蘊含關係、(3) 法條-要件-違規事實的對應。
                                泛化的知識本體抽取是基於2023年與法學專家、語言學專家（總計畫主持人謝舒凱教
                                授）的經驗，將設計提示（Prompt）抽取判例中包含如下圖的主觀構成要件、客觀構成要
                                6
                                件與效果。主觀構成要件則包含行為主體、故意、過失、意圖、明知等面向，而客觀要件
                                則包含行為、客體、結果、工具與情狀（包含地點、時間、違法性要素）。
                                </p>                                
                            </div>

                            <div>
                                <p><strong>🚩建立基於蘊含關係的知識圖譜</strong></p> 
                                <p>
                                在法律判決書的上下文中，「蘊含關係」（Entailment）通常指的是在法律文件或判決書中
                                ，某些事實、法律條文、判決理由或論點之間的邏輯或因果關係。這種關係涉及對文本
                                的深層解讀，以確定如何從一個或多個給定的陳述（前提）推導出其他陳述（結論）的過
                                程。在法律分析的背景下，這通常涉及以下幾個層面：
                                1. 法律條文與案件事實的對應關係：評估特定的案件事實如何適用於相關的法律條
                                文。例如，判決書可能會說明案件事實如何滿足（或不滿足）特定罪行的構成要
                                件。
                                2. 理由與結論之間的關係：判決書會基於一系列的事實和法律分析提出判決理由，
                                並由此得出判決的結論。這些理由與結論之間存在蘊含關係，即理由支持或導致
                                了結論。
                                3. 證據與判決之間的關係：判決書中會探討證據如何支持特定的法律判斷或事實認
                                定。這涉及到從提供的證據中推導出對案件有利或不利的結論。
                                在利用自然語言處理（NLP）技術，尤其是在構建知識圖譜時，確定這些蘊含關係對於抽
                                取和表示判決書中的結構化訊息至關重要。這不僅有助於理解判決書的內容，還能夠對
                                相關法律原則和判例進行更深入的分析和理解。
                                </p>  
                                <img src={entailment}/>
                                <div className='data_caption'>判決書的一般化知識抽取的本體圖譜</div>
                      
                            </div>

                            <div>
                                <p><strong>🚩知識圖譜視覺化</strong></p> 
                                <p>
                                互動介面與視覺化對理解法律知識的影響分析：本研究將提供實證數據和分析，顯示視覺化介面如何幫助專業人員和普通民眾更好地理解法律文本中的蘊含關係和其他法律概念。預期結果將揭示視覺化元素（如圖形、圖表和顏色編碼）如何促進或阻礙了法律知識的理解。
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

export default SubProjectFour;