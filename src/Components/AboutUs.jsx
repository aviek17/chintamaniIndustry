import React from 'react'
import "../Styles/AboutUs.css"

const AboutUs = () => {
    return (
        <>
            <div className="about-section">
                <div className="inner-container">
                    <h3>About Us</h3>
                    <p className="text">
                        We are happy to inform ourselves as a quality-conscious and growth-oriented organization. Production is in line with the company, and it has a lot of experience with civil product production and marketing. We can tell you that we never compromise on quality and are currently one of the best on the market. This product has a stronghold on the international market and is well-known. Our products are offered at extremely low pricing. Customers have been overwhelmingly happy about our new product. Many of our customers are completely satisfied.
                    </p>

                </div>
            </div>

            <div className="views">
                <div className="teamTitle" data-aos="zoom-out-up">
                    <h3>
                        Our Vision
                    </h3>
                </div>
                <div className="missionDescription" data-aos="zoom-out">
                    <br />
                    <p>To be a socially and environmentally responsible organization that goes above and beyond customer satisfaction by providing high-quality products, services, and value.</p>
                    <br />
                </div>

            </div>
            <div className="views">
                <div className="teamTitle" data-aos="zoom-out-up">
                    <h3>
                        Our Mission
                    </h3>
                </div>
                <div className="missionDescription" data-aos="zoom-out">
                    <br />
                    <p>To achieve greatness via honorable and ethical business practices, as well as a commitment to quality and perfection.</p>
                    <br />
                </div>

            </div>
        </>
    )
}

export default AboutUs