import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "bootstrap/dist/css/bootstrap.css";
import '../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Bars = () => {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [animationClass, setAnimationClass] = useState('modal-slide-down');
  const [isClosing, setIsClosing] = useState(false);


//  function handleShow(breakpoint) {
//    setFullscreen(breakpoint);
//    //setModalAnimationClass('fade-in');
//    setShow(true);
//  }

  const handleClose = () => {
    if (!isClosing) {
      setIsClosing(true);
      setAnimationClass('modal-slide-up');
      setTimeout(() => {
        setShow(false);
        setIsClosing(false);
        setAnimationClass('modal-slide-down'); // 重置动画类
      }, 500); // 确保这个时间与您的 CSS 动画时间一致
    }
  };

  return (
    <>
      {values.map((v, idx) => (
        <Button variant="dark" key={idx} className="me-2 mb-2" onClick={()=>{setAnimationClass('modal-slide-down'); setShow(true)}} size='lg'>
          <FontAwesomeIcon icon={faBars} />
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={handleClose}  className={animationClass}>

      <Modal.Header className='custom-modal-bg'>
          <Modal.Title >Modal</Modal.Title>

          <Button variant="light" onClick={handleClose} className="me-2 mb-2" size='lg'>
            <FontAwesomeIcon icon={faTimes} /> {/* 使用 FontAwesome 图标 */}
          </Button>

      </Modal.Header>


        <Modal.Body className='custom-modal-bg'>
        <div className='menu-content'>
          <div className='menu-links'>

            <div className='menu-open-links'>

              <a title='ABOUT US 關於計畫團隊'>
                <h2>ABOUT US</h2>
                <h3>關於計畫團隊</h3>
              </a>
              <div className='menu-item-links'>
                <a title='計畫願景' className='menu-open-link'>計畫願景</a>
                <a title='團隊介紹' className='menu-open-link'>團隊介紹</a>
                <a title='聯絡資訊' className='menu-open-link'>聯絡資訊</a>
                <a title='聯絡我們' className='menu-open-link'>聯絡我們</a>
              </div>
            </div>

            <div className='menu-open-links'>
              <a title='PROJECT 01'>
                <h2>PROJECT 01</h2>
                <h3>關於計畫團隊</h3>
              </a>
              <div className='menu-item-links'>
                <a title='計畫願景' className='menu-open-link'>計畫願景</a>
                <a title='團隊介紹' className='menu-open-link'>團隊介紹</a>
                <a title='聯絡資訊' className='menu-open-link'>聯絡資訊</a>
                <a title='聯絡我們' className='menu-open-link'>聯絡我們</a>
              </div>
            </div>

            <div className='menu-open-links'>
              <a title='PROJECT 02'>
                <h2>PROJECT 02</h2>
                <h3>關於計畫團隊</h3>
              </a>
              <div className='menu-item-links'>
                <a title='計畫願景' className='menu-open-link'>計畫願景</a>
                <a title='團隊介紹' className='menu-open-link'>團隊介紹</a>
                <a title='聯絡資訊' className='menu-open-link'>聯絡資訊</a>
                <a title='聯絡我們' className='menu-open-link'>聯絡我們</a>
              </div>
            </div>

            <div className='menu-open-links'>
              <a title='PROJECT 03'>
                <h2>PROJECT 03</h2>
                <h3>關於計畫團隊</h3>
              </a>
              <div className='menu-item-links'>
                <a title='計畫願景' className='menu-open-link'>計畫願景</a>
                <a title='團隊介紹' className='menu-open-link'>團隊介紹</a>
                <a title='聯絡資訊' className='menu-open-link'>聯絡資訊</a>
                <a title='聯絡我們' className='menu-open-link'>聯絡我們</a>
              </div>
            </div>

            <div className='menu-open-links'>
              <a title='PROJECT 04'>
                <h2>ABOUT US</h2>
                <h3>關於計畫團隊</h3>
              </a>
              <div className='menu-item-links'>
                <a title='計畫願景' className='menu-open-link'>計畫願景</a>
                <a title='團隊介紹' className='menu-open-link'>團隊介紹</a>
                <a title='聯絡資訊' className='menu-open-link'>聯絡資訊</a>
                <a title='聯絡我們' className='menu-open-link'>聯絡我們</a>
              </div>
            </div>

            <div className='menu-open-links'>
              <a title='PROJECT 04'>
                <h2>ABOUT US</h2>
                <h3>關於計畫團隊</h3>
              </a>
              <div className='menu-item-links'>
                <a title='計畫願景' className='menu-open-link'>計畫願景</a>
                <a title='團隊介紹' className='menu-open-link'>團隊介紹</a>
                <a title='聯絡資訊' className='menu-open-link'>聯絡資訊</a>
                <a title='聯絡我們' className='menu-open-link'>聯絡我們</a>
              </div>
            </div>


          </div>
        </div>
        </Modal.Body>


        </Modal>
    </>
  );
}

export default Bars;