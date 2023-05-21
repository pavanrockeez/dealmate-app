import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import offers_icon from '../assets/img/offers_icon.svg';
const Offers = () => {
    const offers = [
        {
            id: 1,
            offer:'78%'
        },
        {
            id: 2,
            offer:'84%'
        },
        {
            id: 3,
            offer:'69%'
        },
        {
            id: 4,
            offer:'59%'
        },
        {
            id: 5,
            offer:'88%'
        },
        {
            id: 6,
            offer:'80%'
        },
        {
            id: 7,
            offer:'80%'
        },
        {
            id: 8,
            offer:'80%'
        },
    ]
    const options = {
        loop: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        },
    };
    return (
        <div className='topbrands_text'>
            <div className='col-lg-12'>
                <div>
                    <p>Explore by Great deals</p>
                    <h5>Top Brands</h5>
                    <h5>Great deals Everyday</h5>
                </div>
                <div className='col-lg-2'></div>
                <div className='container col-lg-8 owl-carosal'>
                    <div>
                        <OwlCarousel className="owl-theme" {...options}>
                            {offers.map((item, index) => (
                                <div className="item" key={index} style={{marginRight:'20px'}}>
                                    <img src={offers_icon} alt={`Image ${index + 1}`} width={'100px'} 
                                    height={'100px'} />
                                    <p className="percentage">{item.offer}</p>
                                </div>
                            ))}
                        </OwlCarousel>
                    </div>
                </div>
                <div className='col-lg-2'></div>

            </div>
        </div>
    )
}

export default Offers