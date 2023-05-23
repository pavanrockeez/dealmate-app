import React from 'react'
import offers_icon from '../assets/img/offers_icon.svg';
import '../assets/css/styles.scss'
const GreatDeals = () => {
    return (
        <div className='row deals_div'>
            <div className='col-lg-2'></div>
            <div className='col-g-4'>
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
            <div className='col-lg-4'>
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
        </div>
    )
}

export default GreatDeals