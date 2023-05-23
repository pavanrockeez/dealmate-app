import React from 'react'
import dealmate_icon from '../assets/img/dealmate_icon.svg';
import google_paly from '../assets/img/google_paly.svg';
import Footer from './footer';
import './common.scss'
const PrivacyPolicy = () => {
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
                        <div>
                            <img src={google_paly} alt="play_store" />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-3'></div>
                    <div className='col-lg-2 header_text_div'>
                        <h5>Privacy</h5>
                        <h5>Policy</h5>
                    </div>
                    <div className='col-lg-8'>

                    </div>
                    <div className='col-lg-1'></div>
                </div>
            </div>
            <div className='row terms_and_condtions_text'>
                <div className='col-lg-3'></div>
                <div className='col-lg-6 complete_terms'>
                    <div>
                        <h6>Reservation of Rights</h6>
                        <p>We reserve the right to request that you remove all links or any particular link to our Website. You approve of immediately removing all links to our Website upon request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
                            Removal of links from our website
                            If you find any link on our Website that is offensive for any reason, you are free to contact and inform us at any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.
                            We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.
                        </p>
                        <p>Disclaimer</p>
                        <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
                        </p>
                        <ul>
                            <li>limit or exclude our or your liability for misinterpreted news.
                            </li>
                            <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;
                            </li>
                            <li>limit any of our or your liabilities in any way that is not permitted under applicable law;
                            </li>
                            <li>exclude any of our or your liabilities that may not be excluded under applicable law.
                            </li>
                        </ul>
                        <p>The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort, and for breach of statutory duty.
                            As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>

                    </div>
                </div>
                <div className='col-lg-3'></div>
            </div>
            <Footer />
        </div>
    )
}

export default PrivacyPolicy