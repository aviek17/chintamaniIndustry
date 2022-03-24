import React from 'react'
import "../Styles/Header.css"
import building from "../Images/buildings-regular-24.png"
import call from "../Images/phone-call-regular-24.png"
import envelope from "../Images/envelope-regular-24.png"

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="welcomeH">
                <span><img src={building} alt="" height="18px"/></span> Welcome to Shri Chintamani Industry
                </div>
                <div className="detailsHeader">

                <span><img src={call} alt="" height="15px"/></span> +91-8605 956751<span> || </span> <span><img src={envelope} alt="" height="15px" /></span> abhijeett620@gmail.com

                </div>
                <div className="iconsHeader">
                    <ul className="headersIcon">
                        <li><box-icon name='facebook-circle' type='logo' color='#2f4ed5' ></box-icon></li>
                        <li> <box-icon name='phone-call' type='solid' color='#cd7933' ></box-icon></li>
                        <li> <box-icon name='whatsapp' type='logo' color='#3eee7c' ></box-icon></li>
                        <li><box-icon name='linkedin-square' type='logo' color='#23a7db' ></box-icon></li>
                        <li><box-icon name='twitter' type='logo' color='#74c4e5' ></box-icon></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header