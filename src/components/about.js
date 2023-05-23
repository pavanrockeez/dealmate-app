import React from 'react'
import '../assets/css/styles.scss';
import dealmate_icon from '../assets/img/dealmate_icon.svg';
import google_paly from '../assets/img/google_paly.svg';
import './deals.scss'
import Footer from './footer';
import './footer.scss'
import './common.scss';
import play_store from '../assets/img/play_store.svg';
import apple_store from '../assets/img/apple_store.svg';
import TopBrands from './topBrands';
import '../assets/css/styles.scss'
import Mobiles from './mobiles';
import GreatDeals from './greatDeals';
const About = () => {
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
          <div className='col-lg-3'></div>
          <div className='col-lg-9'>
            <div className='header_text_div'>
              <h5>About Dealmate</h5>
            </div>
          </div>
          <div className='col-lg-1'></div>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-3'></div>
        <div className='col-lg-6'>
          <div className='about_div'>
            <div className='p_text'>
              <p>Quickshorts, as the name suggests, is a quick news application for the generation who wants everything quickly. Want to listen to the world updates real quick - download Quickshorts. We tell stories in just 10 seconds. With a few taps, you can listen to the world's news and keep yourself updated on what's going on around you. Just open the app on your mobile and you are all good to go.</p>
            </div>
            <div className='img_display'>
              <div className="d-inline-block">
                <img src={play_store} alt="google_play" style={{ marginRight: '20px' }} />
                <img src={apple_store} alt="apple_store" />
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-3'></div>
      </div>
      <TopBrands />
      <Mobiles />
      <GreatDeals />
      <Footer />
    </div>
  )
}

export default About