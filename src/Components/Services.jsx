import React from 'react'
import "../Styles/Services.css"
import plus from "../Images/plus-regular-24.png"
import project from "../Images/project.png"
import manpower from "../Images/mp2.jpg"
import products from "../Images/p3.jpg"
import happy from "../Images/happy.png"
import brick from "../Images/Brick.jpg"
import checkBox from "../Images/checkBox.png"
import flower from "../Images/Flower.png"
import cosmic from "../Images/cosmic.jpg"
import arrow from "../Images/right-arrow-alt-solid-24.png"
import more from "../Images/chevrons-right-regular-24.png"

const Services = () => {
    return (
        <>
            <div className="services-section">
                <div className="inner-width">
                    <h1 className="section-title">Our Speciality</h1>
                    <div className="border"></div>
                    <div className="services-container">
                        <div className="service-box">
                            <div className="service-icon"><img src={happy} alt="" height="40px" /></div>
                            <div className="serviceTitle">Happy Clients</div>
                            <div className="service-description">50 <span>+</span> </div>
                        </div>
                        <div className="service-box">
                            <div className="service-icon"><img src={project} alt="" height="40px" /> </div>
                            <div className="serviceTitle">Projects Completed</div>
                            <div className="service-description">60 <span>+</span> </div>
                        </div>
                        <div className="service-box">
                            <div className="service-icon"><img src={manpower} alt="" height="30px" /></div>
                            <div className="serviceTitle">Manpower</div>
                            <div className="service-description">10 <span>+</span> </div>
                        </div>
                        <div className="service-box">
                            <div className="service-icon"><img src={products} alt="" height="40px" /></div>
                            <div className="serviceTitle">Products</div>
                            <div className="service-description">12 <span>+</span> </div>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className="productTitle galleryTitle">
                Our Gallery
            </h1>

            <div className="homeProducts">
                <div className="grid">
                    <div className="grid-item">
                        <div className="card cards">
                            <img className="card-image galleryImg" src={brick} alt="" />
                        
                                <h3 className=" headers">Shri Chintamani Industry</h3>
                            </div>

                        
                    </div>
                    <div className="grid-item">
                        <div className="card cards">
                            <img className="card-image galleryImg" src={checkBox} alt="" />
                        
                                <h3 className=" headers">Shri Chintamani Industry</h3>
                            </div>

                        
                    </div>
                    <div className="grid-item">
                        <div className="card cards">
                            <img className="card-image galleryImg" src={flower} alt="" />
                        
                                <h3 className=" headers">Shri Chintamani Industry</h3>
                            </div>

                        
                    </div>
                    <div className="grid-item">
                        <div className="card cards">
                            <img className="card-image galleryImg1" src={cosmic} alt="" height="270px" />
                        
                                <h3 className=" headers1">Shri Chintamani Industry</h3>
                            </div>

                        
                    </div>

                </div>

            </div>
            <div className="homeProducts">
                <div className="grid">
                    <div className="grid-item">
                        <div className="card cards">
                            <img className="card-image galleryImg" src={brick} alt="" />
                        
                                <h3 className=" headers">Shri Chintamani Industry</h3>
                            </div>

                        
                    </div>
                    <div className="grid-item">
                        <div className="card cards">
                            <img className="card-image galleryImg" src={checkBox} alt="" />
                        
                                <h3 className=" headers">Shri Chintamani Industry</h3>
                            </div>

                        
                    </div>
                    <div className="grid-item">
                        <div className="card cards">
                            <img className="card-image galleryImg" src={flower} alt="" />
                        
                                <h3 className=" headers">Shri Chintamani Industry</h3>
                            </div>

                        
                    </div>
                    <div className="grid-item">
                        <div className="card cards">
                            <img className="card-image galleryImg1" src={cosmic} alt="" height="270px" />
                        
                                <h3 className=" headers1">Shri Chintamani Industry</h3>
                            </div>

                        
                    </div>

                </div>

            </div>
            {/* <div className="moreProducts">
                <button className="moreButtonProducts">
                    <a href="">More Products  <img src={more} alt="" />  </a>
                </button>
            </div> */}
        </>
    )
}

export default Services