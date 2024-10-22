import React from 'react'
import dealmate_icon from '../assets/img/dealmate_icon.svg';
import google_paly from '../assets/img/google_paly.svg';
const Header = () => {
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
                        {/* <div>
                            <img src={google_paly} alt="play_store" />
                        </div> */}
                        <div className='flex_class play_store'>
                            <a href='/'>Home</a>
                            <a href='/about'>About us</a>
                            <img src={google_paly} alt="play_store" />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-3'></div>
                    <div className='col-lg-8'>
                        <div className='header_text_div'>
                            <h5>All Deals</h5>
                        </div>
                    </div>
                    <div className='col-lg-1'></div>
                </div>
            </div>
        </div>
    )
}

export default Header