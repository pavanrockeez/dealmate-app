import React, { useState } from 'react'
import '../assets/css/styles.scss';
import dealmate_icon from '../assets/img/dealmate_icon.svg';
import google_paly from '../assets/img/google_paly.svg';
import play_store from '../assets/img/play_store.svg';
import Products from './products';
import TopBrands from './topBrands';
import apple_store from '../assets/img/apple_store.svg';
import Offers from './offers';
import ForKids from './forKids';
import Footer from './footer';
import offers_icon from '../assets/img/offers_icon.svg';
import './footer.scss';
import { useNavigate } from 'react-router-dom';
import Mobiles from './mobiles';
import GreatDeals from './greatDeals';
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
        <div className='row'>
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
    </div>
  )
}

export default Home