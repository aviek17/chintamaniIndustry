import React from 'react'
import "../Styles/Navbar.css"
import icon from "../Images/IconOri.jpeg"


const Navbar = () => {
    return (
        <>
            <nav>
                <div className="logo">
                    <img src={icon} alt="" height="60px" width="100px" />
                    <label htmlFor="btn" className="icon">
                        <box-icon name='menu-alt-left' flip='vertical' color='#000' ></box-icon>
                    </label>
                    <input type="checkbox" id="btn" />
                    <ul className="navUL">
                        <li><a href="">Home</a></li>
                        <li><a href="">About Us</a></li>
                        <li>
                            <label htmlFor="btn-1" className="show showMe"> Productsꜜ </label>

                            <a href="">Products ꜜ</a>
                            <input type="checkbox" id="btn-1" />
                            <ul>
                                <li>
                                    <label htmlFor="btn-3" className="show">Paver Blockꜜ </label>
                                    <a href="">Paver Block </a>
                                    <input type="checkbox" id="btn-3" />
                                    <ul className="paver">
                                        <li><a href="">Zig-zag</a></li>
                                        <li><a href="">Cosmic</a></li>
                                        <li><a href="">Diamond </a></li>
                                        <li><a href="">Angle</a></li>
                                        <li><a href="">Brick shape </a></li>
                                        <li><a href="">Damru shape</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <label htmlFor="btn-4" className="show">Checker Tilesꜜ </label>
                                    <a href="checker">Checker Tiles</a>
                                    <input type="checkbox" id="btn-4" />
                                    <ul>
                                        <li><a href="">Flower </a></li>
                                        <li><a href="">Check Box </a></li>
                                        <li><a href="">Diamond</a></li>
                                        <li><a href="">Button</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <label htmlFor="btn-5" className="show">Fly-ash Concrete Bricksꜜ</label>
                                    <a href="flyAsh">Fly-ash Concrete Bricks </a>
                                    <input type="checkbox" id="btn-5" />
                                    <ul className="lastNav">
                                        <li><a href="">4” Fly-ash cement Brick</a></li>
                                        <li><a href="">6” Fly- ash cement Brick</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a href="">Gallery</a></li>
                        <li><a href="">Contact Us</a></li>
                        <li><a href="">Enquiry</a></li>
                    </ul>
                </div>
            </nav>
           
        </>
    )
}

export default Navbar