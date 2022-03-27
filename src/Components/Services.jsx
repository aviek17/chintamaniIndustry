import React from 'react'
import "../Styles/Services.css"
import plus from "../Images/plus-regular-24.png"
import project from "../Images/project.jpg"
import manpower from "../Images/manpower.png"
import products from "../Images/products.png"
import happy from "../Images/happy.png"

const Services = () => {
  return (
    <>
        <div className="services-section">
            <div className="inner-width">
                <h1 className="section-title">Our Speciality</h1>
                <div className="border"></div>
                <div className="services-container">
                    <div className="service-box"> 
                        <div className="service-icon"><img src={happy} alt="" height="25px"/></div>
                        <div className="serviceTitle">Happy Clients</div>
                        <div className="service-description">100 <img src={plus} alt="" height="20px"/> </div>
                    </div>
                    <div className="service-box">
                        <div className="service-icon"><img src={project} alt="" height="25px"/> </div>
                        <div className="serviceTitle">Project Completed</div>
                        <div className="service-description">60 <img src={plus} alt="" height="20px"/> </div>
                    </div>
                    <div className="service-box">
                        <div className="service-icon"><img src={manpower} alt="" height="25px"/></div>
                        <div className="serviceTitle">Manpower</div>
                        <div className="service-description">10 <img src={plus} alt="" height="20px"/> </div>
                    </div>
                    <div className="service-box">
                        <div className="service-icon"><img src={products} alt="" height="25px"/></div>
                        <div className="serviceTitle">Products</div>
                        <div className="service-description">12 <img src={plus} alt="" height="20px"/> </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Services