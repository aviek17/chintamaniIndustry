import React from 'react'
import "./../ProductsStyles.css"
import vcbImage from "../../../Images/cosmic2.jpg"

const Cosmic = () => {
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
                                Cosmic
                            </h2>
                            <p>
                            In Amravati, Shri Chintamani Industries is a renowned paver block manufacturer, supplier, and dealer. We produce a wide range of paver blocks that are of excellent quality and long-lasting. <br />
                            As a paver block manufacturer, we specialize in producing paver blocks in a variety of sizes, thicknesses, colors, and shapes to meet the needs of our customers. We provide paver blocks for a variety of applications, including industrial parks, gardens, warehouses, parking lots, and crosswalks.
                            </p>
                            <div className="descriptionProduct">
                                <h3 > Description</h3>
                                <ul>
                                    <li>Color : Red, Yellow </li>
                                    <li>Material : cement concrete block </li>
                                    <li>Shape : cosmic</li>
                                    <li>Thickness : 60mm, 80mm, 100mm</li>
                                    <li>Standard Sizes are available.</li>
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

export default Cosmic