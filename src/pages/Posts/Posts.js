import "../../App.css"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ArticleList from "../../components/ArticleList";
import shukai from '../../shukai.png'
import React from 'react';


const Posts = () =>{


    return(
        <div>
            <Header/>

            <div className="content-1">
                <section className="container-posts">
                    <header className="title">
                        <div className='post-title '>

                                <h1>法律領域的大型語言模型</h1>
                                <h3>
                                    <strong>
                                        A domain-specific Legal Large Language Model
                                    </strong>
                                </h3>
                                <div className='post-details'>
                                    <div className='author'>
                                        <img src={shukai}/>
                                        <h3>謝舒凱 教授</h3>
                                    </div>
                                    <div className='date'>
                                        <h3>2024-04-08</h3>
                                    </div>
                                </div>

                        </div>
                    </header>

                    <div className="content-posts">
                        <div className="post-content">
                            <p>開發台灣本土法律大型語言模型是一件研究與應用上價值都很高的工作。這樣的模型可以在許多法律相關的智能應用上發揮作用，例如法律文件的生成、分類、檢索、摘要、諮詢問答、案例解說與預測等等。實務上可以幫助司法公部門、律師事務所、公司法務法遵部門、法律資料科學家等專業人士提高工作效率、降低成本、提高服務品質。同時在學理上，這樣的模型可以幫助我們更好地理解法律文本的結構、語義與論理邏輯 (Rechtsdogmatik; legal doctrine)。隨著多模態大型語言模型的發展，更可以從文本、影像、聲音等多種數據中學習，協助數位司法鑑識 (digital forensics)與數位治理等系統的進展。</p>
                            <p>這樣的模型開發，涉及到專門領域的 LLM 建構。考量與通用型的 LLM (如 OpenAI’s GPT-4, Meta’s Llama 2, or Google’s Gemini) 不同。目前在工程上的作法，大概可以分幾類：</p>
                            <p>
                                - 從頭開始建構 (Training from scratch)<br/>
                                - 在通用 LLM 上進行提示工程 (Prompt Engineering)<br/>
                                - 搭配通用 LLM 做 RAG (Retrieval Augmented Generation)<br/>
                                - 基於通用 LLM 在領域語料庫上進行微調 (Fine-tuning)<br/>
                                - 基於通用 LLM 在領域語料庫上進行持續預訓練 (Continual pretraining)<br/>
                            </p>
                            <p>我們在日後會進一步探討這些工程技術的優缺點，以及在法律領域的應用。以下先簡要來說。</p>
                            <p>從頭開始建構 (Training from scratch) 是最具挑戰性的工作，需要大量的領域語料庫、計算資源與時間。</p>
                            <p>如財經領域的 <i>BloombergGPT</i>, 法律領域的 <i>Kelvin Legal GPT</i>。</p>
                            <p>特別值得關注的是 Kevin legal (https://kelvin.legal/) 是一間美國法律新創 273 Ventures 提供的法律智能科技服務。在今年 2 月，Kelvin legal 宣布了 <i>KL3M</i>，這是號稱第一個 from scratch 專門為法律（與財經）領域訓練的大型語言模型。所提供的兩個版本 (kl3m-170m and kl3m-1.7b）據稱在 perplexity 和 toxicity 上都超越了一些主流通用 LLM，並且在人類偏好、草案和法規問答等領域上贏得了一些競爭對手。</p>
                            <p>因為還沒看到正式實驗報告，我們先做個保留。但是儘管從頭訓練有一些可能的優點，如資料安全控管、可避免訓練語料違反著作權等。但可能的應用問題是，如果涉及到一般使用者，不適合以專業提升來犧牲自然語言的一般能力。就是說，我們不會想要法律領域的語言模型，說話像是司法官的語言。此外，不像醫療與其他領域，法律領域有很強的本土性。很難做跨語言的遷移學習。</p>
                            <p>對通用 LLM 進行「微調」（Fine-tuning）和「持續預訓練」（Continual Pre-training）是較兩種常見的技術。</p>
                            <p>微調是指在一個已經預訓練的語言模型的基礎上，進一步在一個或多個特定任務的數據集上訓練模型。這個過程通常涉及整個模型的參數，並且訓練的目標是使模型更好地適應這些特定的任務。微調時，學習率通常設置得比預訓練階段低，以避免過度干擾已學習的特徵。目的比較是使模型更好地適應特定的下游任務。</p>
                            <p>持續預訓練 (Continual Pre-training)，特別是特定領域持續預訓練 (DACP, domain-adaptive continual pretraining) 則是指在通用模型的預訓練階段之後，對模型進行額外的預訓練，通常是在新的數據集上或針對特定的應用領域。訓練上可能更專注於模型的某些部分，如只調整模型的頂層或添加新的層或模塊來吸收新的知識。這一過程可以被看作是在擴展模型的知識基礎，比起微調，用意在使其更好的理解特定領域的語言和概念，而不是直接針對特定的下游任務進行優化。在Nvidia-台大人工智慧聯合研究中心的算力資助之下，我們將會採用 DACP 的工程技術，並且在法律領域的應用上進行實驗與研究。</p>
                        </div>
                    </div>


                </section>

            </div>

            <section className='footer'>
                <Footer/>
            </section>

        </div>

    );

}

export default Posts