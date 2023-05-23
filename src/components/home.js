import React, { useState } from 'react'
import '../assets/css/styles.scss';
import dealmate_icon from '../assets/img/dealmate_icon.svg';
import google_paly from '../assets/img/google_paly.svg';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import TopBrands from './topBrands';
import share_icon from '../assets/img/share_icon.svg';
import Offers from './offers';
import ForKids from './forKids';
import Footer from './footer';
import './footer.scss';
import { useNavigate } from 'react-router-dom';
import Mobiles from './mobiles';
import GreatDeals from './greatDeals';
import './deals.scss'
import img1 from '../assets/img/puma_brand.svg';
const Home = () => {
  const [navTabs, setNavTabs] = useState('men');
  const navigate = useNavigate();
  const tabs = [
    {
      id: 1,
      name: 'Men',
      to: 'men'
    },
    {
      id: 2,
      name: 'Women',
      to: 'women'
    },
    {
      id: 3,
      name: 'Kids',
      to: 'kids'
    },
  ];
  const tabEvent = (tab) => {
    setNavTabs(tab);
    navigate('/alldeals');
  }
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
  const navigateToAllDeals =()=>{
    navigate('/alldeals')
  }
  return (
    <div className='home_page' style={{ overflowY: 'scroll', height: '100vh' }}>
      <div className='header_div'>
        <div className='bg_yellow'></div>
        <div className='row'>
          <div className='col-lg-1'></div>
          <div className='col-lg-10 flex_class justify-content-between headers_div'>
            <div>
              <img src={dealmate_icon} alt='dealmate' />
            </div>
            <div className='flex_class play_store'>
              <a href='/about'>About us</a>
              <img src={google_paly} alt="play_store" />
            </div>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='header_text_div'>
            <h5>Great deals</h5>
            <h5>on your fingertips</h5>
            <p>Lorem ipsum is placeholder text commonly used in the graphic,</p>
          </div>
        </div>
        <div className='row navtabs-show'>
          <div className='col-lg-2'></div>
          <div className='col-lg-8 justify-content-center mb-3'>
            <div className="bloc-tab">
              <ul
                className="nav nav-tabs singup-tabs justify-content-center"
                id="myTab"
                role="tablist"
              >
                {tabs.map((link) => {
                  return (
                    <li key={link.id} className="nav-item ">
                      <a
                        className={
                          "nav-link" + (
                            navTabs == link.to ? " active" : "")
                        }
                        href={"#" + link.to}
                        role="tab"
                        aria-controls="home"
                        data-bs-toggle="tab"
                        onClick={() => tabEvent(link.to)}
                      >
                        {link.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className='col-lg-2'></div>
        </div>
      </div>
      <div className='row dealers'>
        <div className='col-lg-2'></div>
        <div className='col-lg-9'>
          <div className='row alldeals justify-content-center'>
            {products.map((item, i) => (
              <div className="col-lg-3 card_dtl mr-2" key={i}>
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
            <div className='col-lg-3'></div>
          </div>
        </div>
        <div className='col-lg-1'></div>
      </div>
      <div className='row justify-content-center load_more'>
        <button onClick={()=> navigateToAllDeals()}>SEE ALL</button>
      </div>
      <TopBrands />
      <Offers />
      <ForKids />
      <Mobiles />
      <GreatDeals />
      <div className='row'>
        <div className='col-lg-12 footer_div'>
          <Footer />
        </div>
      </div>
    </div >
  )
}

export default Home