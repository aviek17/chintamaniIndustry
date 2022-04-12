import React from 'react'
import "./../ProductsStyles.css"
import vcbImage from "../../../Images/damru.jpg"

const Damru = () => {
  return (
    <>
         <h2 className="productHeader">Our Products</h2>
            <div className="productDesign">
                <div className="containerProduct">
                    <div className="imgBx">
                        <img src={vcbImage} alt="" />
                    </div>
                    <div className="detailsProduct">
                        <div className="contentProduct">
                            <h2>
                                Damru Shape
                            </h2>
                            <p>
                            Shri Chintamani Industries is among Amravati's top paver block producers, suppliers, and dealers. We produce a wide variety of paver blocks that are of high quality and extremely durable.<br />
                            As a paver block manufacturer, we specialise in producing paver blocks in a variety of sizes, thicknesses, colours, and shapes to meet the needs of our customers. We provide paver blocks for a variety of functions, including industrial estates, gardens, warehouses, parking lots, and crosswalks.
                            </p>
                            <div className="descriptionProduct">
                                <h3 > Description</h3>
                                <ul>
                                   
                                    <li>Material : cement concrete block </li>
                                    <li>Shape : Damru Shape</li>
                                    <li>Thickness : 60mm, 80mm, 100mm</li>
                                   
                                </ul>
                            </div>
                            <div className="featuresProduct">
                                <h3> Key Features</h3>
                                <ul>
                                    <li>Light weight </li>
                                    <li>High Strength </li>
                                    <li>Prevent Breakage</li>
                                    <li>Low Water Penetration</li>
                                    <li>Cost effective</li>
                                    <li>Available in Uniform Sizes</li>
                                    <li>Applicable for partitions walls</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Damru