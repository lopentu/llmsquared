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


const SubProjectThree =()=>{

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
                                <h3>team three</h3>
                                <h2>大型語言模型端到端自動解答--以法律領域試題為例（邵軒磊）</h2>
                            </div>
                            <div>
                                <p>本研究的預期影響包括提高法律學習效率，實現個人化教學，增加評分的公平性和客觀性，以及推動教育模式創新。預期成果旨在開發能夠端到端自動解答法學考試的LLMs，
                                    自動化評價申論題解答的複雜層次，並生成新的選擇題和申論題題庫，以支持法學教育
                                    的發展。
                                </p>
                                <br/>
                                <p><strong>🚩原始資料獲取、資料結構建立、建立baseline與評估指標。</strong></p>
                                <p>與元照出版社簽訂協議，取得法學考試資料，含選擇題、申論題。數據
                                    集準備：與「元照出版社」洽詢，收集和整理法律試題及其標準答案，包括歷年的國家考
                                    試/法學院考試題目、模擬試題和專業法律回答。並且轉為Nvidia訓練所需要的資料格式
                                    ，使用總計畫所做的選擇的基線模型（TAIDE、Taiwan-llama2、Mistra, Model I）等，做初
                                    步測試。訂定正確率、相似度等評估指標。
                                </p>                                
                            </div>
                            <div>
                                <p><strong>🚩資料微調與RAG（第一年下半）</strong></p>
                                <p>
                                    配合總計畫，團隊會根據法律領域的特定需求進行微調（Fine-tuning, model II）或檢
                                    索增強生成（Retrieval-Augmented Generation, RAG, model III）。
                                </p>
                                <p>
                                    可以利用預訓練模型的通用知
                                    識，減少在特定任務上所需的訓練時間和數據量。理解特定法學的細節和特點，從而在
                                    該任務上達到更好的性能，也設法找到最佳的微調參數（如學習率、訓練周期等）可能需
                                    要大量的算力和人力。
                                </p>
                                <p>
                                    RAG 使模型能夠生成包含豐富背景知識的文本，這在創建
                                    詳細的申論答題、報告或解釋時特別有用，也能夠適應知識的更新和變化，這對於處理
                                    快㏿變化的主題（如新聞事件）特別重要。
                                </p>
                            </div>
                            <div>
                                <p><strong>🚩選擇題/申論題答題與prompting</strong></p> 
                                <p>
                                    本計畫會開始使用model I, II, III來大規模試驗測試組（未曾在資料庫出現或用以訓練
                                    的題庫），並考驗其正確性與評估分數。
                                </p>   
                                <p>
                                Prompting-design（提示設計）可以有效提高模型的答題質量和準
                                確性。Prompting是指向模型提供一定的指令或背景信息，引導模型生成特定的輸出。以
                                下是選擇題和申論題答題的prompting策略，這需要反覆試錯與較準。比如說選擇題
                                prompt直接引導模型從提供的選項中選擇。為了提高準確性，還可以加入額外的指令，
                                比如要求模型解釋其選擇。對於申論題，prompt需要提供問題背景並引導模型進行詳細
                                的解答。
                                </p>                            
                            </div>
                            <div>
                                <p><strong>🚩申論題自動化評估與題庫/擬答生成</strong></p> 
                                <p>
                                申論題自動化評估系統旨在自動評分學生的開放式回答。利用LLMs（或NLP）技術理
                                解學生回答的內容，包括語法分析、語義理解等。評分標準匹配：根據預設的評分標準或
                                標準答案，評估學生回答的完整性、準確性和深度。可能使用文本相似或語意相似等指
                                標，加上評估回答的語言質量，包括流暢性、一致性和語言多樣性。最後給出一個分數。
                                </p>   
                                <p>
                                題庫和擬答生成系統旨在自動創建試題和相應的標準答案。從前述的LLMs與法學
                                VDB中提取關鍵概念和知識點。再根據提取的知識點，自動生成各種類型的試題，如選
                                擇題、填空題和申論題。並創設標準答案，為每個生成的試題創建標準答案或擬答。根
                                據學習目標和學生水平，調整試題的難度和深度。
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

export default SubProjectThree;