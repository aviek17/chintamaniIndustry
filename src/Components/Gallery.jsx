import React from 'react'
import zigzag from "../Images/zigzag.jpg"
import cosmic from "../Images/cosmic2.jpg"
import diamond from "../Images/diamondBricks.jpg"
import angle from "../Images/AngleBricks.jpg"
import brick from "../Images/Brick.jpg"
import damru from "../Images/damru.jpg"
import flower from "../Images/Flower.png"
import checkbOX from "../Images/checkBox.png"
import diamondBricks from "../Images/DiamondTiles.jpg"
import button from "../Images/Button.png"
import FourInch from "../Images/4Inch.png"
import SixInch from "../Images/6Inch.png"
import "../Styles/Gallery.css"

const Gallery = () => {
  return (
    <>
    <h2 className="productHeader">Gallery</h2>
      <div className="gallery-section">
        <div className="gallery-wrap">
          <div className="gallery-images">
            <div className="gallery">
              <div className="image-section">
                <img src={zigzag} alt="" />
              </div>
              <div className="caption">
                <h3>Zig Zag</h3>
                <p>Shri Chintamnai University</p>
              </div>
            </div>
            <div className="gallery">
              <div className="image-section">
                <img src={cosmic} alt="" />
              </div>
              <div className="caption">
                <h3>Cosmic</h3>
                <p>Shri Chintamnai University</p>
              </div>
            </div>
            <div className="gallery">
              <div className="image-section">
                <img src={diamond} alt="" />
              </div>
              <div className="caption">
                <h3>Diamond</h3>
                <p>Shri Chintamnai University</p>
              </div>
            </div>
          </div>
          <div className="gallery-images">
            <div className="gallery">
              <div className="image-section">
                <img src={angle} alt="" />
              </div>
              <div className="caption">
                <h3>Angle</h3>
                <p>Shri Chintamnai University</p>
              </div>
            </div>
            <div className="gallery">
              <div className="image-section">
                <img src={brick} alt="" />
              </div>
              <div className="caption">
                <h3>Brick</h3>
                <p>Shri Chintamnai University</p>
              </div>
            </div>
            <div className="gallery">
              <div className="image-section">
                <img src={damru} alt="" />
              </div>
              <div className="caption">
                <h3>Damru</h3>
                <p>Shri Chintamnai University</p>
              </div>
            </div>
          </div>
          <div className="gallery-images">
            <div className="gallery">
              <div className="image-section">
                <img src={flower} alt="" />
              </div>
              <div className="caption">
                <h3>Flower</h3>
                <p>Shri Chintamnai University</p>
              </div>
            </div>
            <div className="gallery">
              <div className="image-section">
                <img src={checkbOX} alt="" />
              </div>
              <div className="caption">
                <h3>Check Box</h3>
                <p>Shri Chintamnai University</p>
              </div>
            </div>
            <div className="gallery">
              <div className="image-section">
                <img src={diamondBricks} alt="" />
              </div>
              <div className="caption">
                <h3>Diamond</h3>
                <p>Shri Chintamnai University</p>
              </div>
            </div>
          </div>
          <div className="gallery-images">
            <div className="gallery">
              <div className="image-section">
                <img src={button} alt="" />
              </div>
              <div className="caption">
                <h3>Button</h3>
                <p>Shri Chintamnai University</p>
              </div>
            </div>
            <div className="gallery">
              <div className="image-section">
                <img src={FourInch} alt="" />
              </div>
              <div className="caption">
                <h3>4” Fly-ash cement Brick</h3>
                <p>Shri Chintamnai University</p>
              </div>
            </div>
            <div className="gallery">
              <div className="image-section">
                <img src={SixInch} alt="" />
              </div>
              <div className="caption">
                <h3>6” Fly- ash cement Brick</h3>
                <p>Shri Chintamnai University</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Gallery