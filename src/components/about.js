import React from 'react'
import '../assets/css/styles.scss';
import dealmate_icon from '../assets/img/dealmate_icon.svg';
import google_paly from '../assets/img/google_paly.svg';
import './deals.scss'
import Footer from './footer';
import './footer.scss'
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
          <div className='col-lg-4'></div>
          <div className='col-lg-8'>
            <div className='header_text_div'>
              <h5>About Dealmate</h5>
            </div>
          </div>
          <div className='col-lg-1'></div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About