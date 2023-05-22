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
import mobile_icon from '../assets/img/mobile_3.svg';
import offers_icon from '../assets/img/offers_icon.svg';
import Footer from './footer';
import './footer.scss';
const Home = () => {
  const [navTabs, setNavTabs] = useState('men');
  const tabs = [
    {
      id: 1,
      name: 'Men',
      to: 'men'
    },
    {
      id: 2,
      name: 'Women',
      to: 'woment'
    },
    {
      id: 3,
      name: 'Kids',
      to: 'kids'
    },
  ];
  const tabEvent = (tab) => {
    setNavTabs(tab);
  }
  return (
    <div className='home_page' style={{ overflowY: 'scroll', height: '100vh' }}>
      <div className='header_div'>
        <div className='bg_yellow'></div>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 flex_class justify-content-between'>
              <div className='flex_class'>
                <img src={dealmate_icon} alt='dealmate' />
              </div>
              <div className='flex_class play_store'>
                <a href='/about'>About us</a>
                <img src={google_paly} alt="play_store" />
              </div>
            </div>
            <div className='col-lg-12 text-center great_deals'>
              <div className='header_text'>
                <h5>Great deals</h5>
                <h5>on your fingertips</h5>
              </div>
              <div className='justify-content-center header_text'>
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
              <div className='col-lg-12 card_dtl'>
                <Products />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className="top_brands text-center">
          <TopBrands />
          <div className='flex_class store_links justify-content-center'>
            <img src={play_store} alt="google_paly" style={{ marginRight: '20px' }} />
            <img src={apple_store} alt="aple_store" />
          </div>
        </div>
      </div>
      <div className='row'>
        <div className="top_offers text-center">
          <Offers />
          <div className='flex_class store_links justify-content-center'>
            <img src={play_store} alt="google_paly" style={{ marginRight: '20px' }} />
            <img src={apple_store} alt="aple_store" />
          </div>
        </div>
      </div>
      <div className='row top_brands_kids'>
        <div className="top_brands text-center top_brands_kids">
          <ForKids />
        </div>
      </div>
      <div className='row mobile_vew'>
        <div className="col-12 text-center ">
          <div className="d-flex justify-content-center align-items-center mobile_display">
            <img src={mobile_icon} alt="mobiles" className="smaller-icon" />
            <img src={mobile_icon} alt="mobiles" className='my-5' height={'400px'} />
            <img src={mobile_icon} alt="mobiles" className="smaller-icon" />
          </div>
        </div>
        <div className="col-12 text-center mobile_tags">
          <div className="text-center mb-3 mt-3">
            <h5>Lorem ipsum is placeholder text commonly used in the graphic, print,</h5>
          </div>
          <div className="d-inline-block">
            <img src={play_store} alt="google_play" style={{ marginRight: '20px' }} />
            <img src={apple_store} alt="apple_store" />
          </div>
        </div>
      </div>
      <div className='row deals_div'>
        <div className='col-lg-2'></div>
        <div className='col-g-2'>
          <div className='great_deals_text'>
            <h5>Great deals everyday</h5>
            <p className='break-word'>Lorem ipsum is placeholder  text</p>
          </div>
          <div className='great_deals_text'>
            <h5>Great deals everyday</h5>
            <p>Lorem ipsum is placeholder</p>
          </div>
          <div className='great_deals_text'>
            <h5>Great deals everyday</h5>
            <p>Lorem ipsum is placeholder</p>
          </div>
        </div>
        <div className='col-lg-1'>
          <div className='logo_icons'>
            <img src={offers_icon} alt="logo_icon" height={'70px'} width={'70px'} />
          </div>
          <div className='logo_icons'>
            <img src={offers_icon} alt="logo_icon" height={'70px'} width={'70px'} />
          </div>
          <div className='logo_icons'>
            <img src={offers_icon} alt="logo_icon" height={'70px'} width={'70px'} />
          </div>
        </div>
        <div className='col-lg-1'>
          <div className='logo_icons'>
            <img src={offers_icon} alt="logo_icon" height={'70px'} width={'70px'} />
          </div>
          <div className='logo_icons'>
            <img src={offers_icon} alt="logo_icon" height={'70px'} width={'70px'} />
          </div>
          <div className='logo_icons'>
            <img src={offers_icon} alt="logo_icon" height={'70px'} width={'70px'} />
          </div>
        </div>
        <div className='col-g-2'>
          <div className='great_deals_text'>
            <h5>Great deals everyday</h5>
            <p>Lorem ipsum is placeholder</p>
          </div>
          <div className='great_deals_text'>
            <h5>Great deals everyday</h5>
            <p>Lorem ipsum is placeholder</p>
          </div>
          <div className='great_deals_text'>
            <h5>Great deals everyday</h5>
            <p>Lorem ipsum is placeholder</p>
          </div>
        </div>
        <div className='col-g-2'></div>
      </div>
      <div className='row'>
        <div className='col-lg-12 footer_div'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home