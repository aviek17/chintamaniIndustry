import React from 'react'
import HomeAbout from "../Components/HomeAbout"
import WhyChoose from "../Components/WhyChoose"
import HomeProduct from "../Components/HomeProducts"
import Services from "../Components/Services"
import HomeClient from "../Components/HomeClient"

const Home = () => {
  return (
   <>
       <HomeAbout/>
       <WhyChoose/>
       <HomeProduct/>
       <Services/>
       <HomeClient/>
   </>
  )
}

export default Home