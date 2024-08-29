import React from 'react'
import Navbar from './Navbar/Navbar'
import './App.css'
import Footer from './Footer/Footer'
import ContentDisplay from './ContentDisplay/ContentDisplay'

const App = () => {
  return (
    <div>
        <Navbar/>
        <ContentDisplay/>
        <Footer/>
    </div>
  )
}

export default App