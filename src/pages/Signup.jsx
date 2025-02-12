import React, { useState } from 'react'
import style from '../styles/signup.module.css'
import { auth } from '../Firebase'
import {useNavigate, NavLink} from 'react-router-dom'
import {createUserWithEmailAndPassword } from "firebase/auth";

function Signup() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const onSignup=(e)=>{
      e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredintial)=>{ 
      const user = userCredintial.user ;
      navigate("/login")
  })
  }

  return (
    <>
      <div id={style.signup}>
        <div id={style.second}>
          <h1 style={{ textAlign: 'center', textDecoration: 'underline' }}>Signup</h1>
          <br/>
          <br/>
          <form>
            <label>Email:-</label>
            <input type='email'
             placeholder='write your email' 
             value={email}
             onChange={(e)=>{setEmail(e.target.value)}}
             />
            <br/>
            <br/>
            <label>Password:-</label>
            <input type='password' 
            placeholder='write your password' 
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            />
            <br/>
            <button onClick={onSignup}>Signup</button>
            <br/><br/>
          </form>
          <h4>Already have an account?</h4>
          <NavLink to='/login'>Login </NavLink>
        </div>
      </div>
    </>
  )
}

export default Signup
