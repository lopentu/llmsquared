import React from 'react';
import './Cover.css';



const Cover =()=> {
  return (    
    <div>
    <div className='container'>
        <div className='title-container'>
            <h1 class="title-word title-word-1">台灣</h1>
            <h1 class="title-word title-word-2">法律</h1>
            <h1 class="title-word title-word-3">大型語言模型</h1>              
        </div>
    </div>
      <div className='button-container'>
            <button href="javascript: void(0)" class="btn">
                <span> &#129303;  Hugging Face</span>
            </button>
            <button href="javascript: void(0)" class="btn">
                <span> <i className="fab fa-github"></i> Github</span>
                <i class="icon-github"></i>

            </button>        
      </div>
    </div>

      
  );
} 

export default Cover;
