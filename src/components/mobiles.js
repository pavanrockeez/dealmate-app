import React from 'react'
import mobile_icon from '../assets/img/mobile_3.svg';
import play_store from '../assets/img/play_store.svg';
import apple_store from '../assets/img/apple_store.svg';
const Mobiles = () => {
    return (
        <div className='row'>
            <div className="col-lg-12 text-center ">
                <div className="d-flex justify-content-center align-items-center mobile_display">
                    <img src={mobile_icon} alt="mobiles" className="smaller-icon" />
                    <img src={mobile_icon} alt="mobiles" className='my-5' height={'400px'} />
                    <img src={mobile_icon} alt="mobiles" className="smaller-icon" />
                </div>
            </div>
            <div className="col-lg-12 text-center mobile_tags">
                <div className="text-center mb-3 mt-3">
                    <h5>Lorem ipsum is placeholder text commonly used in the graphic, print,</h5>
                </div>
                <div className="d-inline-block">
                    <img src={play_store} alt="google_play" style={{ marginRight: '20px' }} />
                    <img src={apple_store} alt="apple_store" />
                </div>
            </div>
        </div>
    )
}

export default Mobiles