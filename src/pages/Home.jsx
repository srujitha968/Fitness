import React, { useEffect, useState } from 'react'
import style from '../styles/Home.module.css'
import { auth } from '../Firebase'
import {useNavigate, NavLink, Link} from 'react-router-dom'
import {createUserWithEmailAndPassword } from "firebase/auth";

function Home() {

  const [hcm, setHcm] = useState('')        //hcm means height in centi-meters from convertor
  const [hf, setHf] = useState('')          //hf means height in feet from convertor
  const [feet, setFeet] = useState(5)
  const [inch, setInch] = useState(1)
  const [Weight, setWeight] = useState(49)
  const [bmi, setBmi] = useState(null)
  const [result, setResult] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const cal = () => {
    let f = parseInt(feet)
    let inches = parseInt(inch)
    let height = (f * 12 + inches) * 0.0254
    let w = parseInt(Weight)
    let ans = w / (height * height)
    setBmi(ans)
    setHcm('')
    setHf('')
  }
  useEffect(() => {
    if (bmi !== null) {
      if (bmi < 18.5) {
        setResult('you are under weight')
      }
      else if (bmi > 18.5 && bmi < 24.5) {
        setResult('you are normal')
      }
      else if (bmi > 24.5) {
        setResult('you are over weight')
      }
    }
  },
  [bmi])

  const onSignup=(e)=>{
    e.preventDefault()
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredintial)=>{ 
    const user = userCredintial.user ;
    navigate("/login")
  })
  .catch((error)=>{
    setError(error.code)
  })
  }

  return (
    <>
      <div id={style.main}>
        <div id={style.bmi}>
          <h1 id={style.name}>BMI Calculator</h1>
          <h3 style={{ paddingLeft: '15px' }}>Convert your height from cm to feet</h3>
          <div id={style.first}>
            <input type='text'
              value={hcm}
              onChange={(e) => {
                setHcm(e.target.value);
                const feet = (e.target.value / 30.48).toFixed(1);
                setHf(parseFloat(feet))}}
              placeholder='Height in cm'
              className={style.i}
            /> &nbsp; = &nbsp;

            <input type='text'
              value={hf}
              style={{ color: 'red' }}
              onChange={(e) => setHf(e.target.value)}
              placeholder='Height in feet' disabled
              className={style.i} />

          </div>
          <h2 style={{ paddingLeft: '15px' }}>Now claculate the BMI</h2>
          <div style={{ paddingLeft: '15px' }}>
            <h3>Height  &nbsp;  {feet}ft</h3>

            <input type='range'
              min='1'
              max='7'
              value={feet}
              onChange={(e) => { setFeet(e.target.value) }} id={style.in}
            />
            <h3>Inches &nbsp; {inch}in</h3>
            <input type='range'
              min='0'
              max='11'
              value={inch}
              onChange={(e) => { setInch(e.target.value) }} id={style.in}
            />
            <h3>Weight &nbsp; {Weight}kg</h3>
            <input type='range'
              min='30'
              max='120'
              step='0.1' value={Weight}
              onChange={(e) => { setWeight(e.target.value) }} id={style.in}
            /><br /><br/>
            <button onClick={cal} className={style.btn}>Calculate BMI</button><br /><br />
            <h2>BMI:-{bmi}</h2><br />
            <p style={{fontWeight:' bolder', fontSize:' large'}}>{result}</p>
          </div><br /><br />
        </div>

        <div id={style.signup}>
        <div id={style.second}>
          <h1 style={{ textAlign: 'center', textDecoration: 'underline', paddingTop:'20px' }}>Signup</h1>
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
            <br/><br/>
            <span style={{color:'red', fontWeight:'bold'}}>{error}</span><br/>
            <button onClick={onSignup} style={{backgroundColor:'#2980B9', color:'white'}}>Signup</button>
            <br/><br/>
          </form>
          <p>Have an account? <NavLink to='/login'>Login</NavLink> </p>
        </div>
        </div>
      </div>
    </>
  )
}

export default Home