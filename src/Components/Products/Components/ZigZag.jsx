import React from 'react'
import "./../ProductsStyles.css"
import vcbImage from "../../../Images/zigzag.jpg"

const ZigZag = () => {
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
                                Zig-Zag
                            </h2>
                            <p>
                                Shri Chintamani Industries is one of Amravati's prominent paver block producers, suppliers, and dealers. We produce a variety of paver blocks that are of high quality and long lasting. <br />
                                As a paver block manufacturer, we are known for producing paver blocks in a variety of sizes, thicknesses, colors, and shapes to meet the needs of our customers. We provide paver blocks for a variety of applications, including industrial estates, gardens, warehouses, parking lots, and crosswalks.
                            </p>
                            <div className="descriptionProduct">
                                <h3 > Description</h3>
                                <ul>
                                    <li>Color : Red, Yellow, grey black </li>
                                    <li>Material : cement concrete block </li>
                                    <li>Shape : zig-zag</li>
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

export default ZigZag