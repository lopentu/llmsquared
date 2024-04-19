import '../App.css';
import { Link } from 'react-router-dom';
import React from 'react';

const Navigation=()=>{
    return(
        <div className="navigation">
        <input type="checkbox" className="navigation__checkbox" id="nav-toggle" />
        <label htmlFor="nav-toggle" className="navigation__button">
            <span className="navigation__icon" aria-label="toggle navigation menu"></span>
        </label>
        <div className="navigation__background"></div>

            <nav className="navigation__nav" role="navigation">
              <div className='menu-content'>
                <div className='menu-links'>

                  <div className='menu-open-links'>
                    <Link to='/aboutus' title='ABOUT US 關於計畫團隊' className='navigation__link'>
                      <h2>ABOUT US</h2>
                      <h3>關於計畫團隊</h3>
                    </Link>
                    <div className='menu-item-links navigation__link'> 
                      <Link to='/aboutus#vision' title='計畫願景' className='menu-open-link'>
                        計畫願景
                      </Link>
                      <Link to='/aboutus#our_team' title='計畫願景' className='menu-open-link'>
                        團隊介紹
                      </Link>
                      <Link to='/aboutus#sponsors' title='算力贊助' className='menu-open-link'>
                        算力贊助
                      </Link>
                      <Link to='/aboutus#knowledge' title='知識募集' className='menu-open-link'>
                        知識募集
                      </Link>
                      <Link to='/aboutus#contact_info' title='聯絡資訊' className='menu-open-link'>
                        聯絡資訊
                      </Link>

                    </div>

                  </div>

                  <div className='menu-open-links'>
                    <Link to='/plan/main-project' title='main project' className='navigation__link'>
                      <h2>Main Project</h2>
                      <h3>總計畫</h3>
                    </Link>
                    <div className='menu-item-links navigation__link'>
                      <Link to='/plan/data-curation' title='數據收集和預處理' className='menu-open-link'>
                        數據收集和預處理
                      </Link>
                      <Link to='/plan/model-training' title='模型架構與訓練' className='menu-open-link'>
                       模型架構與訓練
                      </Link>
                      <Link to='/plan/evaluation' title='驗證與測試' className='menu-open-link'>
                       驗證與測試
                      </Link>
                      <Link to='/plan/application' title='部署與應用' className='menu-open-link'>
                        部署與應用
                      </Link>
                    </div>
                  </div>

                  <div className='menu-open-links'>
                    <Link to='/sub-project/first' title='子計畫' className='navigation__link'>
                      <h2>Research Groups</h2>
                      <h3>研究小組</h3>
                    </Link>
                    <div className='menu-item-links navigation__link'>
                      <Link to='/sub-project/first' title='「微調與評測」' className='menu-open-link'>
                      「微調與評測」
                      </Link>
                      <Link to='/sub-project/second' title='「引用與推薦」' className='menu-open-link'>
                      「引用與推薦」
                      </Link>
                      <Link to='/sub-project/third' title='「微調應用」' className='menu-open-link'>
                      「驗證與測試」
                      </Link>
                      <Link to='/sub-project/forth' title='「圖譜與視覺話」' className='menu-open-link'>
                      「微調應用」
                      </Link>
                    </div>
                  </div>

                    <div className='menu-open-links'>
                      <Link to='/news#news-list' title='最新消息' className='navigation__link'>
                        <h2>NEWS</h2>
                        <h3>最新消息</h3>                      
                      </Link>

                      <div className='menu-item-links navigation__link'>
                      <Link to='/news#news-list' title='最新消息' className='menu-open-link'>
                        最新消息
                      </Link>
                      <Link to='/news#recruit' title='招募' className='menu-open-link'>
                      招募
                      </Link>
                      </div>
                    </div>




                  </div>
              </div>
            </nav>
        </div>

    )
}

export default Navigation