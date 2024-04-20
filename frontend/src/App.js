import React from 'react'
import Login from './pages/login/Login.jsx'
import SignUp from './pages/signup/Signup.jsx'
import Home from './pages/home/Home.jsx'
import { Route, Routes } from 'react-router-dom'
import {Toaster} from "react-hot-toast"

const App = () => {
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
        
        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>

        </Routes>
        <Toaster/>
       </div>
  )
}

export default App