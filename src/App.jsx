import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AgeCounter from './pages/Dob'
import About from './pages/About'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Projects from './pages/Projects'

const App = () => {
  return (
    <>
    <Navbar/>

   
     
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
    </Router>
   
    </>
    
  )
}

export default App