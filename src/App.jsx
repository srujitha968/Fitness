import React from 'react'
import Home from './pages/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Fit from './pages/Fit'
import Protected from './Protected'
import Waist from './pages/Waist'
import Back from './pages/Back'
import Chest from './pages/Chest'
import Neck from './pages/Neck'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/fit' element={
            <Protected><Fit/></Protected> }/>
          <Route path='/waist' element={<Waist/>} />
          <Route path='/back' element={<Back/>} />
          <Route path='/chest' element={<Chest/>} />
          <Route path='/neck' element={<Neck/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
