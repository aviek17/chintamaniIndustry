import React from 'react'
import "../Styles/WhyChoose.css"
import whyImage from "../Images/whyImage.jpg"
import arrow from "../Images/right-arrow-alt-solid-24.png"

const WhyChoose = () => {
    return (
        <>

            <div className="whySection">
                <div className="whyContainer">
                    <div className="title">
                        <h2>Why Choose Shri Chintamani Industry?</h2>
                    </div>
                    <div className="row">
                    <div>
                        <div className="whyImg">
                            <img src={whyImage} alt="" />
                        </div>
                        <div className="whyContent">
                            <ul>
                                <li>We provide a large variety of products with timely delivery.</li>
                                <li>Our professional teams are highly competent and experienced in production and civil products.</li>
                                <li>Our quality standards are never compromised.</li>
                                <li>The satisfaction of our customers is our main focus.</li>
                                <li>We respect the company's ethical rules and preserve transparency in our business dealings.</li>
                                <li>We make our customers happy by providing high-quality products that meet their needs.</li>
                            </ul>
                        </div>
                    </div>
                    </div>

                </div>
            </div>
            

        </>
    )
}

export default WhyChoose