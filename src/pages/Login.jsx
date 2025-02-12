import React, { useState } from 'react'
import style from '../styles/login.module.css'
import {NavLink, useNavigate} from 'react-router-dom'
import {signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../Firebase'

function Login() {

  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  
  const onLogin = ()=>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      navigate("/fit")
      console.log("object")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  
  }

  return (
    <>
      <div id={style.main}>
        <div id={style.first}>
            <h1 style={{textAlign:'center', textDecoration:'underline'}}>Login</h1>
            <br/> <br/>
          
              <label>Email:-</label>
              <input type='email' 
              placeholder='write the email'
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              />
              
              <br/><br/>
              <label>Password:-</label>
              <input type='password'
              placeholder='write password'
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}} />

              <br/><br/>
              <span>{error}</span>
              <button onClick={onLogin}>Login</button>
              <br/><br/>
            
            <span>Don't have account? &nbsp;<NavLink to='/'>Signup</NavLink> </span>
        </div>
      </div>
    </>
  )
}

export default Login
