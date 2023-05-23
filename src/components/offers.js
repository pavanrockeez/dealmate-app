import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import offers_icon from '../assets/img/offers_icon.svg';
import play_store from '../assets/img/play_store.svg';
import apple_store from '../assets/img/apple_store.svg';
const Offers = () => {
    const offers = [
        {
            id: 1,
            offer: '78%'
        },
        {
            id: 2,
            offer: '84%'
        },
        {
            id: 3,
            offer: '69%'
        },
        {
            id: 4,
            offer: '59%'
        },
        {
            id: 5,
            offer: '88%'
        },
        {
            id: 6,
            offer: '80%'
        },
        {
            id: 7,
            offer: '80%'
        },
        {
            id: 8,
            offer: '80%'
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
        <div className='top_brands_view top_offers'>
            <div className='row'>
                <div className='col-lg-3'></div>
                <div className='col-lg-6 justify-content-center'>
                    <div className='text-center top_brand_para'>
                        <p>Explore by Great deals</p>
                        <h5>Top Brands Great deals Everyday</h5>
                        <p className='some_text'>Lorem ipsum is placeholder
                            text commonly used in the graphic
                        </p>
                    </div>
                </div>
                <div className='col-lg-3'></div>
            </div>
            <div className='row'>
                <div className='col-lg-2'></div>
                <div className='col-lg-8 owl-carosal'>
                    <div className='top_brand_images'>
                        <div>
                            <OwlCarousel className="owl-theme" {...options}>
                                {offers.map((item, index) => (
                                    <div className="item" key={index} style={{ marginRight: '20px' }}>
                                        <img src={offers_icon} alt={`Image ${index + 1}`} width={'100px'}
                                            height={'100px'} />
                                        <p className="percentage">{item.offer}</p>
                                    </div>
                                ))}
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
                <div className='col-lg-2'></div>
            </div>
            <div className='row justify-content-center text-center'>
                <div className='playstore_view'>
                    <img src={play_store} alt="google_paly" style={{ marginRight: '20px' }} />
                    <img src={apple_store} alt="aple_store" />
                </div>
            </div>

        </div>
        // <div className='topbrands_text'>
        //     <div className='col-lg-12'>
        //         <div>
        //             <p>Explore by Great deals</p>
        //             <h5>Top Brands</h5>
        //             <h5>Great deals Everyday</h5>
        //         </div>
        //         <div className='col-lg-2'></div>
        //         <div className='container col-lg-8 owl-carosal'>
        //             <div>
        //                 <OwlCarousel className="owl-theme" {...options}>
        //                     {offers.map((item, index) => (
        //                         <div className="item" key={index} style={{marginRight:'20px'}}>
        //                             <img src={offers_icon} alt={`Image ${index + 1}`} width={'100px'} 
        //                             height={'100px'} />
        //                             <p className="percentage">{item.offer}</p>
        //                         </div>
        //                     ))}
        //                 </OwlCarousel>
        //             </div>
        //         </div>
        //         <div className='col-lg-2'></div>

        //     </div>
        // </div>
    )
}

export default Offers