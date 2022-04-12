import React from 'react'
import "../Styles/HomeProducts.css"
import brick from "../Images/Brick.jpg"
import zigzag from "../Images/zigzag.jpg"
import checkBox from "../Images/checkBox.png"
import flower from "../Images/Flower.png"
import cosmic from "../Images/cosmic.jpg"
import button from "../Images/Button.png"
import angle from "../Images/AngleBricks.jpg"
import diamondTiles from "../Images/DiamondTiles.jpg"
import arrow from "../Images/right-arrow-alt-solid-24.png"
import diamond from "../Images/diamondBricks.jpg"
import fourInch from "../Images/4Inch.png"
import sixInch from "../Images/6Inch.png"
import damru from "../Images/damru.jpg"
import { Link } from "react-router-dom"

const AllProducts = () => {
    return (
        <>
            <h1 className="productTitle">
                Our Products
            </h1>
            <div class="main">
                <div class="card">

                    <div class="image">
                        <img src={brick} />
                    </div>
                    <div class="title">
                        <h1>
                            Brick
                        </h1>
                    </div>
                    <div class="des">
                        <Link to="/product/brickshape"><button>Read More <img src={arrow} alt="" /></button></Link>
                    </div>
                </div>

                <div class="card">

                    <div class="image">
                        <img src={flower} />
                    </div>
                    <div class="title">
                        <h1>
                            Flower</h1>
                    </div>
                    <div class="des">

                        <Link to="/product/flower"><button>Read More <img src={arrow} alt="" /></button></Link>
                    </div>
                </div>



                <div class="card">

                    <div class="image">
                        <img src={cosmic} />
                    </div>
                    <div class="title">
                        <h1>
                            Cosmic</h1>
                    </div>
                    <div class="des">

                        <Link to="/product/cosmic"><button>Read More <img src={arrow} alt="" /></button></Link>
                    </div>
                </div>



                <div class="card">

                    <div class="image">
                        <img src={button} />
                    </div>
                    <div class="title">
                        <h1>
                            Button
                        </h1>
                    </div>
                    <div class="des">

                        <Link to="/product/button"><button>Read More <img src={arrow} alt="" /></button></Link>
                    </div>
                </div>



                <div class="card">

                    <div class="image">
                        <img src={checkBox} />
                    </div>
                    <div class="title">
                        <h1>
                            CheckBox</h1>
                    </div>
                    <div class="des">

                        <Link to="/product/checkbox"><button>Read More <img src={arrow} alt="" /></button></Link>
                    </div>
                </div>


                <div class="card">

                    <div class="image">
                        <img src={angle} />
                    </div>
                    <div class="title">
                        <h1>
                            Angle
                        </h1>
                    </div>
                    <div class="des">

                        <Link to="/product/Angle"><button>Read More <img src={arrow} alt="" /></button></Link>
                    </div>
                </div>


                <div class="card">

                    <div class="image">
                        <img src={diamond} />
                    </div>
                    <div class="title">
                        <h1>
                            Diamond
                        </h1>
                    </div>
                    <div class="des">

                        <Link to="/product/diamond"><button>Read More <img src={arrow} alt="" /></button></Link>

                    </div>
                </div>



                <div class="card">

                    <div class="image">
                        <img src={damru} />
                    </div>
                    <div class="title">
                        <h1>
                            Damru
                        </h1>
                    </div>
                    <div class="des">

                        <Link to="/product/damru"><button>Read More <img src={arrow} alt="" /></button></Link>
                    </div>
                </div>
                <div class="card">

                    <div class="image">
                        <img src={fourInch} />
                    </div>
                    <div class="title">
                        <h1>
                            4” Fly-ash Cement Brick
                        </h1>
                    </div>
                    <div class="des">

                        <Link to="/product/fourInch"><button>Read More <img src={arrow} alt="" /></button></Link>
                    </div>
                </div>


                <div class="card">

                    <div class="image">
                        <img src={zigzag} />
                    </div>
                    <div class="title">
                        <h1>
                            Zig Zag
                        </h1>
                    </div>
                    <div class="des">

                        <Link to="/product/zigzag"><button>Read More <img src={arrow} alt="" /></button></Link>

                    </div>
                </div>



                <div class="card">

                    <div class="image">
                        <img src={diamondTiles} />
                    </div>
                    <div class="title">
                        <h1>
                            Diamond
                        </h1>
                    </div>
                    <div class="des">

                        <Link to="/product/diamondtiles"><button>Read More <img src={arrow} alt="" /></button></Link>
                    </div>
                </div>
                <div class="card">

                    <div class="image">
                        <img src={sixInch} />
                    </div>
                    <div class="title">
                        <h1>
                            6” Fly-ash Cement Brick
                        </h1>
                    </div>
                    <div class="des">

                        <Link to="/product/sixInch"><button>Read More <img src={arrow} alt="" /></button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllProducts