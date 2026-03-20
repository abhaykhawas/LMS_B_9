import { use, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Courses from './pages/Courses'
import Dasboard from './pages/Dashboard'
import CreateCourse from './pages/CreateCourse'
import Students from './pages/Students'
import Logout from './components/Logout'
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'
import Register from './pages/Register'
import Profile from './pages/Profile'

function App() {
  const {user} = useContext(AuthContext)


  return (
    <>
      { user?.token && <Logout/> }
      <div className="container">
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/courses' element={<Courses/>}/>
          <Route path='/dashboard' element={<Dasboard/>}/>
          <Route path='/create-course' element={<CreateCourse/>}/>
          <Route path='/students' element={<Students/>}/>
          <Route path='/signup' element={<Register/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
