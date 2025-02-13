import React, { useState } from 'react'
import style from '../styles/login.module.css'
import {NavLink, useNavigate} from 'react-router-dom'
import {signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../Firebase'

function Login() {

  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState('')
  
  const onLogin = (e)=>{
    e.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      navigate("/fit")
      
    })
    .catch((error) => {
      setErr(error.code)
    });
  
  }

  return (
    <>
      <div id={style.main}>
        <div id={style.first}>
            <h1 style={{textAlign:'center', textDecoration:'underline', color:'white'}}>Login</h1>
            <br/> <br/>
            <form>
            <label className={style.col}>Email:-</label>
            <input type='email'
             placeholder='write your email' 
             value={email}
             onChange={(e)=>{setEmail(e.target.value)}}
             />
            <br/>
            <br/>
            <label className={style.col}>Password:-</label>
            <input type='password' 
            placeholder='write your password' 
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            />
            <br/><br/>
            <span style={{color:'white', fontWeight:'bold'}}>{err}</span><br/>
            <button onClick={onLogin}>Login</button>
            <br/><br/>
          </form>
            <span className={style.col}>Don't have account? &nbsp;<NavLink to='/'
             className={style.col}>Signup</NavLink> </span>
        </div>
      </div>
    </>
  )
}

export default Login
