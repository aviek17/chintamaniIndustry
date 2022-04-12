import React from 'react'
import "../Styles/HomeAbout.css"
import {Link} from 'react-router-dom'

const HomeAbout = () => {
  return (
    <>
      <div className="about-section">
        <div className="inner-container">
          <h3>About Us</h3>
          <p className="text">
            Shri Chintamani Industries, based in Amaravti, Maharashtra, India, is one of the most well-known and respected companies in the industry. We're a major manufacturer and distributor of high-quality paver blocks, paver tiles, and fly ash cement bricks. In the market, there is a lot of demand for our goods. We supply excellent quality items at Indian standards, in accordance with industry norms and requirements. We ensure that we will provide the highest quality items at competitive costs to meet the needs of our customers.
          </p>
          <div className="skills">
            <button><Link to="/about">Read More</Link></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeAbout