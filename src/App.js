import React, {useEffect} from 'react'
import NavbarTop from './pages/NavbarTop'
import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import KindergartenPage from './pages/KindergartenPage'
import EducationPage from './pages/EducationPage'
import TeachersPage from './pages/TeachersPage'
import Aos from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    Aos.init({duration: 1000})
  }, [])

  return (
    <div>
      <NavbarTop/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/teachers" element={<TeachersPage/>}/>
        <Route path="/education" element={<EducationPage/>}/>
        <Route path="/kindergarten" element={<KindergartenPage/>}/>
      </Routes>
    </div>
  )
}

export default App
