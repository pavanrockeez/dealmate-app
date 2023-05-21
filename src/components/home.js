import React, { useState } from 'react'
import '../assets/css/styles.scss';
import dealmate_icon from '../assets/img/dealmate_icon.svg';
import google_paly from '../assets/img/google_paly.svg';
import Products from './products';
import TopBrands from './topBrands';
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
        </div>
      </div>
    </div>
  )
}

export default Home