import React from 'react'
import {Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import Header from "./Components/Header"
import Carousel from "./Components/Carousel"
import Footer from "./Components/Footer"
import AboutUs from "./Components/AboutUs"
import ZigZag from "./Components/Products/Components/ZigZag"
import Cosmic from "./Components/Products/Components/Cosmic"
import Diamond from "./Components/Products/Components/Diamond"
import Angle from './Components/Products/Components/Angle'
import BrickShape from './Components/Products/Components/BrickShape'
import Damru from './Components/Products/Components/Damru'
import Flower from './Components/Products/Components/Flower'
import CheckBox from "./Components/Products/Components/CheckBox"
import DiamondTiles from './Components/Products/Components/DiamondTiles'
import Button from './Components/Products/Components/Button'
import FourFlyAsh from './Components/Products/Components/FourFlyAsh'
import SixFlyAsh from './Components/Products/Components/SixFlyAsh'
import ContactUs from './Components/ContactUs'
import Gallery from './Components/Gallery'
import AllProducts from "./Components/AllProducts"

const App = () => {
  return (
    <>
      <Router>
        <Header/>
        <Navbar/>
        <Carousel/>
        <Switch>
          <Route exact path="/">
             <Home/>
          </Route>
          <Route path="/about">
            <AboutUs/>
          </Route>
          <Route path="/gallery">
              <Gallery/>
          </Route>
          <Route path="/contact">
            <ContactUs/>
          </Route>
          <Route path="/product/zigzag">
            <ZigZag/>
          </Route>
          <Route path="/product/cosmic">
            <Cosmic/>
          </Route>
          <Route path="/product/diamond">
            <Diamond/>
          </Route>
          <Route path="/product/Angle">
            <Angle/>
          </Route>
          <Route path="/product/brickshape">
            <BrickShape/>
          </Route>
          <Route path="/product/damru">
            <Damru/>
          </Route>
          <Route path="/product/flower">
            <Flower/>
          </Route>
          <Route path="/product/checkbox">
            <CheckBox/>
          </Route>
          <Route path="/product/diamondtiles">
            <DiamondTiles/>
          </Route>
          <Route path="/product/button">
            <Button/>
          </Route>
          <Route path="/product/fourInch">
            <FourFlyAsh/>
          </Route>
          <Route path="/product/sixInch">
            <SixFlyAsh/>
          </Route>
          <Route path="/productAll">
            <AllProducts/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </>
  )
}

export default App