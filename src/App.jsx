import React from 'react'
import Navbar from './Navbar/Navbar'
import './App.css'
import Footer from './Footer/Footer'
import Projects from './Projects/Projects'

const App = () => {
  return (
    <div>
        <Navbar/>
        <Projects/>
        <Footer/>
    </div>
  )
}

export default App