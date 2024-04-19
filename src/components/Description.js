import '../App.css';
import CardItemContent from './CardItemContent';
import React from 'react';

const Description=()=>{
    return(
        <div className='content'>
            <div className='vertical-area'>
                <div className='text-container center'>
                    <div className='title-area'>
                        <h3>Description</h3> 
                        <h2>執行計畫總述</h2>
                    </div>
                    <p className='text-center'> 
                    創建第一個立基於台灣本土的大型法律語言模型，它能理解並生成與台灣法律文本相關的語言，優化法律文件的生成和理解，這個基礎模型，不僅可以提供法律輔助服務、提升法治教育，對於立法、司法從業人員、律師與相關專業從業人員與民眾，皆有極大的協助。
                    </p>
                </div>
                <div className='project01-description-container'>
                    <div className='content-row'>
                        <div className='card-item'>
                            <div className='card-item-title'>
                                <h3>
                                    <strong>
                                        步驟規劃及預期成果
                                    </strong>
                                </h3>
                            </div>
                            <div className='two-columns'>
                                <CardItemContent num='1' step='"數據收集和預處理"' description='協調、蒐集並清理豐富的台灣法律文本數據，用於訓練和驗證模型。' link='/plan/data-curation'/>
                                <CardItemContent num='2' step='"模型訓練和優化"' description='利用收集的數據和NVIDIA的高效計算資源進行模型的訓練與優化。' link='/plan/model-training'/>
                                <CardItemContent num='3' step='"驗證和調整"' description='對模型進行深入的驗證測試，並根據實際效果進行必要的調整。' link='/plan/evaluation'/>
                                <CardItemContent num='4' step='"部署與應用"' description='確保模型能在各種法律應用場景下運行，並根據用戶反饋進行持續優化。' link='/plan/application'/>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>












    );

}

export default Description