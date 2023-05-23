import React from 'react'
import mobile_icon from '../assets/img/mobile_3.svg';
import play_store from '../assets/img/play_store.svg';
import apple_store from '../assets/img/apple_store.svg';
const Mobiles = () => {
    return (
        <div className='mobile_views'>
            <div className='row mobiles_drag'>
                <div className='col-lg-3'></div>
                <div className='col-lg-6 justify-content-center'>
                    <div className='text-center top_brand_para'>
                        <div className="d-flex justify-content-center align-items-center mobile_display">
                            <img src={mobile_icon} alt="mobiles" className="smaller-icon" />
                            <img src={mobile_icon} alt="mobiles" className='my-5' height={'400px'}
                            width={'300px'} />
                            <img src={mobile_icon} alt="mobiles" className="smaller-icon" />
                        </div>
                    </div>
                </div>
                <div className='col-lg-3'></div>
            </div>
            <div className="row text-center mobile_tags">
                <div className='col-lg-2'></div>
                <div className='col-lg-8'>
                    <div className='mobile_header'>
                        <h5>Lorem ipsum is placeholder text commonly used in the graphic, print,</h5>
                    </div>
                    <div className='row justify-content-center text-center'>
                        <div className='playstore_view'>
                            <img src={play_store} alt="google_paly" style={{ marginRight: '20px' }} />
                            <img src={apple_store} alt="aple_store" />
                        </div>
                    </div>
                </div>
                <div className='col-lg-2'></div>
            </div>
        </div>
    )
}

export default Mobiles