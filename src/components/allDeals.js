import React from 'react'
import '../assets/css/styles.scss';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img1 from '../assets/img/puma_brand.svg';
import share_icon from '../assets/img/share_icon.svg';
import dealmate_icon from '../assets/img/dealmate_icon.svg';
import google_paly from '../assets/img/google_paly.svg';
import './deals.scss'
import Footer from './footer';
const AllDeals = () => {
    const products = [
        {
            id: 1,
            img: img1,
            rating: 4.5,
            viewers: 135,
            mrp: 112,
            offer: 20,
            percentate: '20%',
            brnadlogo: ''
        },
        {
            id: 2,
            img: img1,
            rating: 4.5,
            viewers: 135,
            mrp: 112,
            offer: 20,
            percentate: '20%',
            brnadlogo: ''
        },
        {
            id: 3,
            img: img1,
            rating: 4.5,
            viewers: 135,
            mrp: 112,
            offer: 20,
            percentate: '20%',
            brnadlogo: ''
        },
        {
            id: 4,
            img: img1,
            rating: 4.5,
            viewers: 135,
            mrp: 112,
            offer: 20,
            percentate: '20%',
            brnadlogo: ''
        },
        {
            id: 5,
            img: img1,
            rating: 4.5,
            viewers: 135,
            mrp: 112,
            offer: 20,
            percentate: '20%',
            brnadlogo: ''
        },
        {
            id: 6,
            img: img1,
            rating: 4.5,
            viewers: 135,
            mrp: 112,
            offer: 20,
            percentate: '20%',
            brnadlogo: ''
        }
    ];

    return (
        <div className='home_page' style={{ overflowY: 'scroll', height: '100vh' }}>
            <div className='header_div'>
                <div className='bg_yellow'></div>
                <div className='row'>
                    <div className='col-lg-2'></div>
                    <div className='col-lg-8 flex_class justify-content-between headers_div'>
                        <div>
                            <img src={dealmate_icon} alt='dealmate' />
                        </div>
                        <div>
                            <img src={google_paly} alt="play_store" />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-4'></div>
                    <div className='col-lg-8'>
                        <div className='header_text_div'>
                            <h5>All Deals</h5>
                        </div>
                    </div>
                    <div className='col-lg-1'></div>
                </div>
            </div>
            <div className='row all_deals'>
                <div className='col-lg-2'></div>
                <div className='col-lg-8'>
                    <div className='row alldeals'>
                        {products.map((item, i) => (
                            <div className="col-lg-4 card_dtl" key={i}>
                                <div className="card">
                                    <div className="images_sec">
                                        <div className='text-left ratings'>
                                            <h5 className="card_head">{item.rating}</h5>
                                            <p className="grey_para">{item.viewers}</p>
                                        </div>
                                        <OwlCarousel
                                            items={1}
                                            className="owl-theme property_car"
                                            margin={20}
                                            loop
                                            dots={true}
                                        >
                                            <div className="item">
                                                <img src={item.img} className="main_img" alt="image" />
                                            </div>
                                            <div className="item">
                                                <img src={item.img} className="main_img" alt="image" />
                                            </div>
                                            <div className="item">
                                                <img src={item.img} className="main_img" alt="image" />
                                            </div>
                                        </OwlCarousel>
                                    </div>
                                    <div className="card_body text-center">
                                        <div className="d-flex justify-content-center card_b_details">
                                            <div className='text-center'>
                                                <h5>{item.percentate} OFF</h5>
                                                <p className="body_para text-left">MRP ₹{item.mrp} |  Offer ₹{item.offer} </p>
                                            </div>
                                        </div>
                                        <div className='hr_line'></div>
                                        <div className='d-flex justify-content-between shop_now'>
                                            <img src={share_icon} alt="share_icon" />
                                            <button>Shop Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
                <div className='col-lg-1'></div>
            </div>
            <div className='row justify-content-center load_more'>
                <button>Load More Deals</button>
            </div>
            <Footer />
        </div>
    )
}

export default AllDeals