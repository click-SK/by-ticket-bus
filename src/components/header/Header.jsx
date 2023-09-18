import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../style/header.scss'
import { MdDirectionsBus } from 'react-icons/md';
import { BiSolidBusiness } from 'react-icons/bi'
import { AiOutlineDown } from 'react-icons/ai'
import { BsArrowBarLeft } from 'react-icons/bs'
import { useTheme } from '../../hooks/use-thems';
import ChangeColor from './ChangeColor';
import CurencyRate from './CurencyRate';
import ChooseLanguage from './ChooseLanguage';
import { useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";

const Header = () => {
    const isAuthUser = useSelector((state) => state.authUser.isAuthUser);
    const [isMenu, setIsMenu] = useState(false)
    const [isMenuClose, setIsMenuClose] = useState(true)
    const { t } = useTranslation();

    // useEffect(() =>{
    //     if (!isMenu) {
    //         setIsMenuClose(!isMenuClose)  
    //     } 
    // },[isMenu])

    // const hendlerOpneMenu = () => {
    //     setIsMenu(true)
    //     if (isMenu === false) {
    //         setIsMenu
    //     }
    // }

    return (
        <>
        <div className='header_wrapper'>
            <div className='content_wrap-header'>
            <div className='logo_wrap'>
                <Link to={'/'} ><p style={{fontSize: '48px'}}>BUS LOGO</p> </Link>
                <div className='routs_var'>
                    <div className='routs_item_header local_routs'>
                        <MdDirectionsBus
                        className='icon '/>
                        <p className='p-header'>{t('local')}</p>
                    </div>
                    <div className='routs_item_header place_routs'>
                        <BiSolidBusiness
                        className='icon '/>
                        <p className='p-header'>{t('place')}</p>
                    </div>
                </div>
            </div>
            <div className='custom_profile'>
                <ChooseLanguage/>
                <CurencyRate/>
                <ChangeColor/>
                {isAuthUser 
                ?
                <Link to='/user-profile'><button className='btn_prime btn_sing-in'>{t('My profile')}</button></Link>
                :
                <Link to='/login'><button className='btn_prime btn_sing-in'>{t('Sign in')}</button></Link>
                }
                
            </div>
            </div>
        </div>
        <div className='button_open-menu'>
                <button
                    className='btn_prime btn_opened_mobile-menu'
                    onClick={() => setIsMenu(!isMenu)}
                    > <BsArrowBarLeft/> Open</button>
            {/* {isMenu && */}
                <div className={`header_wrapper hidden header_wrapper-mobile ${isMenu ? 'mobile_menu_opened' : 'mobile_menu_close'}`}>
                    <div className='content_wrap-mobile'>
                    <button
                    className='btn_prime close_mobile-menu'
                    onClick={() => setIsMenu(!isMenu)}
                    > Close menu</button>
                    <div className='logo_wrap'>
                        <Link to={'/'} ><p onClick={() => setIsMenu(!isMenu)} style={{fontSize: '48px'}}>BUS LOGO</p> </Link>
                        <div className='routs_var'>
                            <div className='routs_item_header local_routs'>
                                <MdDirectionsBus
                                className='icon '/>
                                <p className='p-header'>{t('local')}</p>
                            </div>
                            <div className='routs_item_header place_routs'>
                                <BiSolidBusiness
                                className='icon '/>
                                <p className='p-header'>{t('place')}</p>
                            </div>
                        </div>
                    </div>
                    <div className='custom_profile'>
                        <ChooseLanguage/>
                        <CurencyRate/>
                        <ChangeColor/>
                        {isAuthUser 
                        ?
                        <Link to='/user-profile'><button onClick={() => setIsMenu(!isMenu)} className='btn_prime btn_sing-in'>{t('My profile')}</button></Link>
                        :
                        <Link to='/login'><button onClick={() => setIsMenu(!isMenu)} className='btn_prime btn_sing-in'>{t('Sign in')}</button></Link>
                        }
                        
                    </div>
                    </div>
                </div>
                {/* } */}
            </div>
        </>
    );
};

export default Header;