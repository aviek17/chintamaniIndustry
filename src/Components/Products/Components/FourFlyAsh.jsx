import React from 'react'
import "./../ProductsStyles.css"
import vcbImage from "../../../Images/4Inch.png"

const FourFlyAsh = () => {
    return (
        <>
            <h2 className="productHeader">Our Products</h2>
            <div className="productDesign">
                <div className="containerProduct containerProduct1">
                    <div className="imgBx">
                        <img src={vcbImage} alt="" />
                    </div>
                    <div className="detailsProduct">
                        <div className="contentProduct">
                            <h2>
                                4” Fly-ash Cement Brick
                            </h2>
                            <p>
                                Shri Chintamani Industries is a renowned fly ash brick maker, distributor, and supplier in Amaravati. We manufacture and distribute high-quality fly ash bricks for use in building to a variety of concrete producers and builders. We make fly ash bricks with sand, stone dust, fly ash, lime, gypsum, and cement as raw materials. For a limited time, we are offering fly ash bricks at a discounted price. <br />
                               <br/> We make fire-resistant, light-weight fly ash bricks with excellent strength to minimize breakage while carrying or using bricks. These fly ash bricks do not require a lime plaster finish. You can directly add gypsum plaster to them. Before using, a small sprinkle of water is adequate. We are well-known in the market as fly ash bricks manufacturers for producing high-quality fly ash bricks at reasonable costs.
                            </p>
                            <div className="benefits">
                                <h3>Benefits</h3>
                                <ul>
                                    <li>The construction has a long life due to its strong compressive strength.</li>
                                    <li>Due to its low density, the construction has a low dead weight.</li>
                                    <li>Because of the limited water absorption, there is no leaking.</li>
                                    <li>It is an environmentally friendly product because it is created from recycled materials, such as fly ash.</li>
                                    <li>Because of the rough surface, plastering is simple</li>
                                </ul>
                            </div>
                            <div >
                                <div className="descriptionProduct descriptionProduct1">
                                    <h3 > Description</h3>
                                    <ul>
                                        <li>Color : Grey</li>
                                        <li>Material : Fly-ash cement  </li>
                                        <li>Size : 4” </li>
                                        <li>Shape : Rectangular</li>
                                        <li>Usage/Application : Floor, Partition Walls, Roof, Side Walls</li>

                                    </ul>
                                </div>
                                <div className="featuresProduct">
                                    <h3> Key Features</h3>
                                    <ul>
                                        <li>It is lightweight.</li>
                                        <li>High tenacity</li>
                                        <li>Avoiding Breakage</li>
                                        <li>Low Water Penetration</li>
                                        <li>Affordability</li>
                                        <li>Sizes are consistent</li>
                                        <li>Useful for partition walls</li>

                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FourFlyAsh