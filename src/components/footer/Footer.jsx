import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import {FaFacebookSquare } from 'react-icons/fa';
import {FaTwitterSquare } from 'react-icons/fa';

import '../../style/footer.scss'

const Footer = () => {
    return (
        <div className='footer_wrapper'>
            <div className='content_footer-wrap'>
                <div className='wrap_item social_footer'>
                    <p className='social_item' style={{fontSize: '48px'}}>BUS LOGO</p>
                    <p className='social_item social_item-svg'><AiFillInstagram/> Instagram </p>
                    <p className='social_item social_item-svg'><FaFacebookSquare/> Facebook </p>
                    <p className='social_item social_item-svg'><FaTwitterSquare/> Twitter </p>
                    <div className='policy'>
                        <p>© 2023 Busbud Inc., All rights reserved</p>
                        <p className='policy_link'> - Terms of use</p>
                        <p className='policy_link'> - Privacy</p>
                        <p className='policy_link'> - Refund policy</p>
                    </div>
                </div>
                <div className='wrap_item wrap_item-company'>
                    <h4>COMPANY</h4>
                    <ul>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Press</li>
                        <li>Blog</li>
                        <li>Partner</li>
                    </ul>
                </div>
                <div className='wrap_item wrap_item-coverage'>
                    <h4>GLOBAL COVERAGE</h4>
                    <ul>
                        <li>All station</li>
                        <li>All cities</li>
                        <li>All countries</li>
                    </ul>
                </div>
                <div className='wrap_item wrap_item-help-app'>
                    <div className='item-text'> 
                        <h4>SUPPORT</h4>
                        <ul>
                            <li>Help</li>
                        </ul>
                    </div>
                    <div className='item-app-link'>
                        <img src="./image/app/App_Store.svg" alt="" />
                        <img src="./image/app/Google_Play.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;