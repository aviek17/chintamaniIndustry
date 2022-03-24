import React from 'react'
import './App.css'
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import Header from "./Components/Header"
import Carousel from "./Components/Carousel"
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Router>
        <Header/>
        <Navbar/>
        <Carousel/>
      </Router>
    </>
  )
}

export default App