import React, { useRef } from 'react'
// import ReactOwlCarousel from 'react-owl-carousel'
import Carousel from 'react-elastic-carousel'
import l1 from "../Logo/17.jpg"
import l2 from "../Logo/18.jpg"
import l3 from "../Logo/19.jpg"
import l4 from "../Logo/20.jpg"
import l5 from "../Logo//21.jpg"
import l7 from "../Logo/24.jpg"
import l9 from "../Logo/26.jpg"
import l10 from "../Logo/27.jpg"
import l11 from "../Logo/28.jpg"
import l12 from "../Logo/22.jpg"
import l13 from "../Logo/23.jpg"
import l14 from "../Logo/24.jpg"
import "../Styles/HomeClient.css"
import { NavLink } from 'react-router-dom'
const data = [
    {
        id: 1,
        src: l1,

    }, {
        id: 2,
        src: l2,

    }, {
        id: 3,
        src: l3,

    }, {
        id: 4,
        src: l4,

    },
    {
        id: 5,
        src: l5,

    },

    {
        id: 7,
        src: l7,

    },

    {
        id: 9,
        src: l9,

    }, {
        id: 10,
        src: l10,

    }, {
        id: 11,
        src: l11,

    }, {
        id: 12,
        src: l12,

    }, {
        id: 13,
        src: l13,

    }, {
        id: 14,
        src: l14,

    }
]

const HomeClient = () => {
   
    return (
        <>
            <div>
                <h1 className="teamTitle" data-aos="fade-down"><h3>Our Clients</h3></h1>
                <div className="containerC">

                    <Carousel itemsToShow={5}
                        enableAutoPlay autoPlaySpeed={1500}
                       
                        breakPoints={[
                            { width: 1, itemsToShow: 1 },
                            { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
                            { width: 850, itemsToShow: 4 },
                            { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
                            { width: 1450, itemsToShow: 5 },
                            { width: 1750, itemsToShow: 6 },
                        ]}>
                        {
                            data.map(user => {
                                return (

                                    <div className="cardC">
                                        <div className="contentC">
                                            <img src={user.src} alt="" />

                                            <p></p>
                                        </div>
                                    </div>

                                )
                            }
                            )
                        }
                    </Carousel>

                </div>

            </div>
        </>
    )
}

export default HomeClient