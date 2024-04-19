import { Link } from 'react-router-dom'
import '../App.css'
import React from 'react';

const Footer = () =>{
    return(
        <div className='footer-container'>
        <div className='footer-wrapper'>
            <div className='footer-brand-area'>
            <a href="/" title="回到首頁" aria-current="page" className="footer-brand w-inline-block w--current02">
            </a>
            <div className='footer-social-links'>
                <a>
                    <div className='social-icon w-embed'></div>
                    <svg width="28" height="29" viewBox="0 0 28 29"></svg>
                </a>
                <a>
                    <div className='social-icon w-embed'></div>
                    <svg width="28" height="29" viewBox="0 0 28 29"></svg>
                </a>
                <a>
                    <div className='social-icon w-embed'></div>
                    <svg width="28" height="29" viewBox="0 0 28 29"></svg>
                </a>
            </div>
                {/*<div className='text_s'>
                    電話：
                    <br/>
                    email：
                    <br/>
                    地址：
    </div>*/}
            </div>

            <div className='footer-content'>
                <div className='footer-block'>
                    <Link to='/aboutus' className='footer-link-title w-inline-block'>
                        <div className='title-small'>關於計畫團隊</div>
                    </Link>
                    <Link to='/aboutus#vision' title='計畫願景' className='footer-link'>
                        計畫願景
                    </Link>
                    <Link to='/aboutus#our_team' title='計畫願景' className='footer-link'>
                        團隊介紹
                    </Link>
                    <Link to='/aboutus#sponsors' title='贊助' className='footer-link'>
                        贊助
                    </Link>
                    <Link to='/aboutus#contact_info' title='聯絡資訊' className='footer-link'>
                        聯絡資訊
                    </Link>
                </div>

                <div className='footer-block'>

                    <Link to='/plan/main-project' title='main project' className='footer-link-title w-inline-block'>
                    <div className='title-small'>總計劃</div>
                    </Link>
                      <Link to='/plan/data-curation' title='數據收集和預處理' className='footer-link'>
                        數據收集和預處理
                      </Link>
                      <Link to='/plan/model-training' title='模型架構與訓練' className='footer-link'>
                       模型架構與訓練
                      </Link>
                      <Link to='/plan/evaluation' title='驗證與測試' className='footer-link'>
                       驗證與測試
                      </Link>
                      <Link to='/plan/application' title='部署與應用' className='footer-link'>
                        部署與應用
                      </Link>

                </div>

                <div className='footer-block'>
                    <Link to='/sub-project/first' title='研究小組' className='footer-link-title w-inline-block'>
                        <div className='title-small'>研究小組</div>
                    </Link>
                    <Link to='/sub-project/first' title='「微調與評測」' className='footer-link'>
                        「微調與評測」
                    </Link>
                    <Link to='/sub-project/second' title='「引用與推薦」' className='footer-link'>
                        「引用與推薦」
                    </Link>
                    <Link to='/sub-project/third' title='「微調應用」' className='footer-link'>
                        「驗證與測試」
                    </Link>
                    <Link to='/sub-project/forth' title='「圖譜與視覺話」' className='footer-link'>
                        「微調應用」
                    </Link>
                </div>

                <div className='footer-block'>
                    <Link to='/news#news-list' title='最新消息' className='footer-link-title w-inline-block'>
                        <div className='title-small'>最新消息</div>
                    </Link>
                    <Link to='/news#news-list' title='最新消息' className='footer-link'>
                        最新消息
                    </Link>
                    <Link to='/news#recruit' title='招募' className='footer-link'>
                        招募
                    </Link>
                </div>

            </div>




        </div>
        <div className='footer-bottom'>
            <div className='footer-copyright-center'>Copyright © 2024</div>

        </div>

    </div>
    )
}

export default Footer