import React from 'react'
import "../Styles/Navbar.css"
import icon from "../Images/IconOri.jpeg"
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="logo">
                    <Link to="/"><img src={icon} alt="" height="60px" width="100px" /></Link>
                    <label htmlFor="btn" className="icon">
                        <box-icon name='menu-alt-left' flip='vertical' color='#000' ></box-icon>
                    </label>
                    <input type="checkbox" id="btn" />
                    <ul className="navUL">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li>
                            <label htmlFor="btn-1" className="show showMe"> Productsꜜ </label>

                            <Link to="">Products ꜜ</Link>
                            <input type="checkbox" id="btn-1" />
                            <ul>
                                <li>
                                    <label htmlFor="btn-3" className="show">Paver Blockꜜ </label>
                                    <Link to="">Paver Block </Link>
                                    <input type="checkbox" id="btn-3" />
                                    <ul className="paver">
                                        <li><Link to="/product/zigzag">Zig-zag</Link></li>
                                        <li><Link to="/product/cosmic">Cosmic</Link></li>
                                        <li><Link to="/product/diamond">Diamond </Link></li>
                                        <li><Link to="/product/Angle">Angle</Link></li>
                                        <li><Link to="/product/brickshape">Brick shape </Link></li>
                                        <li><Link to="/product/damru">Damru shape</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <label htmlFor="btn-4" className="show">Checker Tilesꜜ </label>
                                    <Link to="checker">Checker Tiles</Link>
                                    <input type="checkbox" id="btn-4" />
                                    <ul>
                                        <li><Link to="/product/flower">Flower </Link></li>
                                        <li><Link to="/product/checkbox">Check Box </Link></li>
                                        <li><Link to="/product/diamondtiles">Diamond</Link></li>
                                        <li><Link to="/product/button">Button</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <label htmlFor="btn-5" className="show">Fly-ash Concrete Bricksꜜ</label>
                                    <Link to="flyAsh">Fly-ash Concrete Bricks </Link>
                                    <input type="checkbox" id="btn-5" />
                                    <ul className="lastNav">
                                        <li><Link to="/product/fourInch">4” Fly-ash cement Brick</Link></li>
                                        <li><Link to="/product/sixInch">6” Fly- ash cement Brick</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        {/* <li><Link to="">Enquiry</a></li> */}
                    </ul>
                </div>
            </nav>
           
        </>
    )
}

export default Navbar