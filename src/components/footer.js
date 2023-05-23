import React from 'react'
import './footer.scss'
import apple_icon from '../assets/img/apple_icon.svg';
import store_icon from '../assets/img/store_icon.svg';
import linked_in_icon from '../assets/img/linked_in_icon.svg';
import twitter_icon from '../assets/img/twitter_icon.svg';
import youtube_icon from '../assets/img/youtube_icon.svg';
import instagram_icon from '../assets/img/instagram_icon.svg';
import truly_icon from '../assets/img/truly_icon.svg';
import { useNavigate } from 'react-router-dom';
const Footer = () => {
    const navigate = useNavigate();
    const navigateToTerms =()=>{
        navigate('/terms');
    }
    const navigateToPolicy =()=>{
        navigate('/policy')
    }
    return (
        <div>
            <div className='row follow_page'>
                <div className='col-lg-2'></div>
                <div className='col-lg-3 justify-content-start'>
                    <div className='download_now'>
                        <div className='d-flex justify-content-start'>
                            <img src={apple_icon} alt="apple_icon" />
                            <img src={store_icon} alt="store_icon" style={{ marginLeft: '20px' }} />
                        </div>
                        <div className='p_text text-left'>
                            <p>Download now on</p>
                        </div>
                    </div>
                </div>
                <div className='vertical_line'></div>
                <div className='col-lg-4'>
                    <div className='follow_div justify-content-start'>
                        <div className='follow_text'>
                            <p>follow</p>
                        </div>
                        <div className='d-flex justify-content-start'>
                            <img src={linked_in_icon} alt="linked_in" />
                            <img src={twitter_icon} alt="twitter_icon" style={{ marginLeft: '20px' }} />
                            <ig src={youtube_icon} alt="youtube_icon" style={{ marginLeft: '20px' }} />
                            <img src={instagram_icon} alt="instagram_icon" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='row from_truly'>
                <div className='col-lg-2'></div>
                <div className='col-lg-4 justify-content-start truly_div'>
                    <div className='flex_class'>
                        <img src={truly_icon} alt="truly_icon" />
                        <div className='texts_div'>
                            <p>we@quickshorts.app</p>
                            <h5>Work with Quickshorts</h5>
                        </div>
                    </div>

                </div>
                <div className='col-lg-4 from_truly'>
                    <div className='d-flex home_about terms_and_condition'>
                        <div>
                            <p><a href='/'>Home</a></p>
                            <p><a href='/about'>About Us</a></p>
                        </div>
                        <div className='terms_condition'>
                            <p><a href='/terms' onClick={()=> navigateToTerms()}>Terms & Conditions</a></p>
                            <p><a href='/policy' onClick={() => navigateToPolicy()}>Privacy Policy</a></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer