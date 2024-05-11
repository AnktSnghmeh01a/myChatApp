import React from 'react'
import Login from './pages/login/Login.jsx'
import Signup from './pages/signup/Signup.jsx'
import Home from './pages/home/Home.jsx'
import { useAuthContext } from './context/AuthContext.jsx'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

const App = () => {
  const {authUser} = useAuthContext()
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
    
      <Routes>

        <Route path='/' element={authUser?<Home/>:<Navigate to={"/login"}/>}/>
        <Route path='/login' element={authUser?<Navigate to={"/"}/>:<Login/>}/>
      <Route path='/signup' element={authUser?<Navigate to={"/"}/>:<Signup/>}/>

      </Routes>
        <Toaster/>
      </div>
  )
}

export default App
