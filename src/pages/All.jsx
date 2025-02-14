import React from 'react'
import style from '../styles/all.module.css'
import { useNavigate } from 'react-router-dom'

function All() {
    const navigate = useNavigate()
  return (
    <>  
        <div id={style.main}>
        <div className={style.container}>
            <img src='/back.jpg' className={style.im} onClick={()=>navigate('/back')}/>
            <h3 style={{textAlign:'center'}}>BACK</h3>
        </div>
        <div className={style.container}>
            <img src='/waist.jpg' className={style.im} onClick={()=>navigate('/waist')}/>
            <h3 style={{textAlign:'center'}}>Waist</h3>
        </div>
        <div className={style.container}>
            <img src='/arms.jpg' className={style.im} onClick={()=>navigate('/arms')}/>
            <h3 style={{textAlign:'center'}}>Lower Arms</h3>
        </div>
        <div className={style.container}>
            <img src='/chest.jpg' className={style.im} onClick={()=>navigate('/chest')}/>
            <h3 style={{textAlign:'center'}}>Chest</h3>
        </div>
        <div className={style.container}>
            <img src='/neck.jpg' className={style.im} onClick={()=>navigate('/neck')}/>
            <h3 style={{textAlign:'center'}}>Neck</h3>
        </div>
        <div className={style.container}>
            <img src='/legs.jpg' className={style.im} onClick={()=>navigate('/legs')}/>
            <h3 style={{textAlign:'center'}}>Lower Legs</h3>
        </div>
        <div className={style.container}>
            <img src='/upperleg.jpg' className={style.im} onClick={()=>navigate('/upperlegs')}/>
            <h3 style={{textAlign:'center'}}>Upper Legs</h3>
        </div>
        <div className={style.container}>
            <img src='/upperarm.jpg' className={style.im} onClick={()=>navigate('/upperarms')}/>
            <h3 style={{textAlign:'center'}}>Upper Arms</h3>
        </div>
        </div>
    </>
  )
}

export default All
