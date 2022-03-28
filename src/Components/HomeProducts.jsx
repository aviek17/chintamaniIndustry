import React from 'react'
import "../Styles/HomeProducts.css"
import brick from "../Images/Brick.jpg"
import checkBox from "../Images/checkBox.png"
import flower from "../Images/Flower.png"
import cosmic from "../Images/cosmic.jpg"
import arrow from "../Images/right-arrow-alt-solid-24.png"
import more from "../Images/chevrons-right-regular-24.png"
const HomeProducts = () => {
    return (
        <>
            <h1 className="productTitle">
                Our Products
            </h1>
            <div className="homeProducts">
                <div className="grid">
                    <div className="grid-item">
                        <div className="card">
                            <img className="card-image" src={brick} alt="" />
                            <div className="card-content">
                                <h3 className="card-header">Brick</h3>
                                <button className="card-btn">
                                    Visit Here  <img src={arrow} alt="" />
                                    <div></div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="card">
                            <img className="card-image" src={checkBox} alt="" />
                            <div className="card-content">
                                <h3 className="card-header">CheckBox</h3>
                                <button className="card-btn">
                                    Visit Here      <img src={arrow} alt="" />
                                    <div></div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="card">
                            <img className="card-image" src={flower} alt="" />
                            <div className="card-content">
                                <h3 className="card-header">Flower</h3>
                                <button className="card-btn">
                                    Visit Here     <img src={arrow} alt="" />
                                    <div></div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="card">
                            <img className="card-image" src={cosmic} alt="" height="270px" />
                            <div className="card-content">
                                <h3 className="card-header">Cosmic</h3>
                                <button className="card-btn">
                                    Visit Here    <img src={arrow} alt="" />
                                    <div></div>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className="homeProducts">
                <div className="grid">
                    <div className="grid-item">
                        <div className="card">
                            <img className="card-image" src={brick} alt="" />
                            <div className="card-content">
                                <h3 className="card-header">Brick</h3>
                                <button className="card-btn">
                                    Visit Here  <img src={arrow} alt="" />
                                    <div></div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="card">
                            <img className="card-image" src={checkBox} alt="" />
                            <div className="card-content">
                                <h3 className="card-header">CheckBox</h3>
                                <button className="card-btn">
                                    Visit Here      <img src={arrow} alt="" />
                                    <div></div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="card">
                            <img className="card-image" src={flower} alt="" />
                            <div className="card-content">
                                <h3 className="card-header">Flower</h3>
                                <button className="card-btn">
                                    Visit Here     <img src={arrow} alt="" />
                                    <div></div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="card">
                            <img className="card-image" src={cosmic} alt="" height="270px" />
                            <div className="card-content">
                                <h3 className="card-header">Cosmic</h3>
                                <button className="card-btn">
                                    Visit Here    <img src={arrow} alt="" />
                                  
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="moreProducts">
                <button className="moreButtonProducts">
                    <a href="">More Products  <img src={more} alt="" />  </a>
                </button>
            </div>

        </>
    )
}

export default HomeProducts