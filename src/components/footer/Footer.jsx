import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import {FaFacebookSquare } from 'react-icons/fa';
import {FaTwitterSquare } from 'react-icons/fa';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import '../../style/footer.scss'

const Footer = () => {
    const { t } = useTranslation();
    return (
        <div className='footer_wrapper'>
            <div className='content_footer-wrap'>
                <div className='wrap_item social_footer'>
                    <p className='social_item' style={{fontSize: '48px'}}>BUS LOGO</p>
                    <p className='social_item social_item-svg'><AiFillInstagram/> Instagram </p>
                    <p className='social_item social_item-svg'><FaFacebookSquare/> Facebook </p>
                    <p className='social_item social_item-svg'><FaTwitterSquare/> Twitter </p>
                    <div className='policy'>
                        <p>© 2023 {t('Busbud Inc., All rights reserved')}</p>
                        <p className='policy_link'> - {t('Terms of use')}</p>
                        <Link to='/policy'><p className='policy_link'> - {t('Privacy')}</p> </Link>
                        <p className='policy_link'> - {t('Refund policy')}</p>
                    </div>
                </div>
                <div className='wrap_item wrap_item-company'>
                    <h4>{t('COMPANY')}</h4>
                    <ul>
                        <li>{t('About')}</li>
                        <li>{t('Careers')}</li>
                        <li>{t('Press')}</li>
                        <li>{t('Blog')}</li>
                        <li>{t('Partner')}</li>
                    </ul>
                </div>
                <div className='wrap_item wrap_item-coverage'>
                    <h4>{t('GLOBAL COVERAGE')}</h4>
                    <ul>
                        <li>{t('All station')}</li>
                        <li>{t('All cities')}</li>
                        <li>{t('All countries')}</li>
                    </ul>
                </div>
                <div className='wrap_item wrap_item-help-app'>
                    <div className='item-text'> 
                        <h4>{t('SUPPORT')}</h4>
                        <ul>
                            <Link to='/contact'><li>{t('Contact Us')}</li> </Link>
                            <Link to='/about-ua'><li>{t('Privacy Policy')}</li> </Link>
                            <Link to='/rule'><li>{t('Travel Rules')}</li> </Link>
                            
                            <li>{t('Help')}</li>
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