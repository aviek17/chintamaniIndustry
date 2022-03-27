import React from 'react'
import './App.css'
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import Header from "./Components/Header"
import Carousel from "./Components/Carousel"
import HomeAbout from "./Components/HomeAbout"
import WhyChoose from "./Components/WhyChoose"
import HomeProducts from "./Components/HomeProducts"
import Services from "./Components/Services"
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Router>
        <Header/>
        <Navbar/>
        <Carousel/>
        <HomeAbout/>
        <WhyChoose/>
        <HomeProducts/>
        <Services/>
      </Router>
    </>
  )
}

export default App