import React from 'react'
import style from '../styles/fit.module.css'
import All from './All';
import { useRef } from 'react';

function Fit() {

  const waistRef = useRef(null);

  const handleExploreClick = () => {
    waistRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
    <div style={{backgroundColor:'antiquewhite'}}>
    <div id={style.container}>
      <img src='/gym.jpg'/>
      <div id={style.imgtext1}>Welcome to 3F Fitness Center</div><br/>
      <div id={style.imgtext2} onClick={handleExploreClick} style={{ cursor: 'pointer' }}
      >Explore</div>
      <div id={style.imgtext3}>I wear white when I workout because it's funeral for my fat</div>
      <div id={style.imgtext4}><marquee>Fit-Fast-Forever</marquee></div>
    </div><br/>
    <h1 style={{textAlign:'center'}}>Select the exercise which you want to do...</h1><br/><br/>
    <div ref={waistRef}>
          <All />
      </div>
    </div>
    </>
  )
}

export default Fit
