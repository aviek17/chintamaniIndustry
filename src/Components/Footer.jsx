import React from 'react'
import "../Styles/Footer.css"
import icon from "../Images/IconOri.jpeg"
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer class="footer">
        <div class="l-footer">
          <h1>
            Contact Us
          </h1>
          <p>
            {/* <br/> */}
            Mr. Abhijeet A. Thakur <br /> <br />
            +91-8605 956751 <br /> <br />
            +91-9699 187001 <br /> <br />
            abhijeett620@gmail.com<br/>
          </p>
          <div className="socials">
            <a href=""><box-icon name='facebook' type='logo' color='#2e8bdc' ></box-icon></a>
            <a href=""><box-icon name='whatsapp' type='logo' color='#45cb88' ></box-icon></a>
            <a href=""><box-icon name='linkedin' type='logo' color='#4d91ce' ></box-icon></a>
            <a href=""><box-icon name='twitter' type='logo' color='#66bddd' ></box-icon></a>
            <a href=""><box-icon name='instagram' type='logo' color='#dd2b90' ></box-icon></a>
          </div>
        </div>
        <ul class="r-footer">
          <li>
          
            <h2>
              Address
            </h2>
            <ul class="box">
              <li><a href="#">Plot. No.: 34/A, Lane 2 <br />New MIDC Sawardi,<br /> Nagpur Road, Nandgaon <br/>Peth Dist. Amravati <br /> 444902</a></li>
            </ul>
          </li>
          <li class="features">
            <h2>
              Quick Links
            </h2>
            <ul class="box h-box">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/productAll">Products</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/contact">Enquiry</Link></li>
            </ul>
          </li>
          <li>
            <h2>
              Reach Us
            </h2>
            <img src={icon} alt="" height="180px" />
          </li>
        </ul>
        <div class="b-footer">
          <p>
            Designed & Developed by eSparse Matrix Solutions Pvt. Ltd. All rights reserved</p>
        </div>
      </footer>
    </>
  )
}

export default Footer