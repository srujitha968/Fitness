import React from 'react'
import Home from './pages/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Fit from './pages/Fit'
import Protected from './Protected'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/fit' element={
            <Protected><Fit/></Protected> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
