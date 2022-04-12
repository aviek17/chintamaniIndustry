import React from 'react'
import "./../ProductsStyles.css"
import vcbImage from "../../../Images/Button.png"

const Button = () => {
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
                                Diamond
                            </h2>
                            <p>
                            We are devoted to presenting Checker Tiles, which is backed by our thriving business operations. The checker tiles we offer are made using very up-to-date technology and are available in a variety of styles and colors to meet the needs of our customers. We guarantee the quality of these Checker Tiles by thoroughly inspecting them and making them readily available to our customers at reasonable prices.
                            </p>
                            <div className="descriptionProduct">
                                <h3 > Description</h3>
                                <ul>

                                    <li>Material : Concrete Paver Tiles  </li>
                                    <li>Shape : Rectangle (1ft X1ft)</li>
                                    <li>Thickness : 15 mm </li>

                                </ul>
                            </div>
                            <div className="featuresProduct1">
                                <h3> Key Features</h3>
                                <ul>
                                    <li>Dimensional precision</li>
                                    <li>Excellent final product.</li>
                                    <li>High-quality durability</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Button