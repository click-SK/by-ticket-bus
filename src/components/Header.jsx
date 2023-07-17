import React from 'react';
import '../style/header.scss'
import { MdDirectionsBus } from 'react-icons/md';
import { BiSolidBusiness } from 'react-icons/bi'
import { AiOutlineDown } from 'react-icons/ai'
import { BsCurrencyDollar } from 'react-icons/bs'
import { useTheme } from '../hooks/use-thems';
import ChangeColor from './ChangeColor';


const Header = () => {

    return (
        <div className='header_wrapper'>
            <div className='logo_wrap'>
                <p style={{fontSize: '48px'}}>BUS LOGO</p>
                <div className='routs_var'>
                    <div className='routs_item_header local_routs'>
                        <MdDirectionsBus
                        className='icon '/>
                        <p className='p-header'>local</p>
                    </div>
                    <div className='routs_item_header place_routs'>
                        <BiSolidBusiness
                        className='icon '/>
                        <p className='p-header'>place</p>
                    </div>
                </div>
            </div>
            <div className='custom_profile'>
                <div className='change_lang'> 
                    <p className='p-header'>Language</p>
                    <div className='lang_img_wrap'>
                        <img 
                        className='color'
                        src="./lang/eng.svg" alt="eng" />
                        <AiOutlineDown
                        className='icon'/>
                    </div>
                </div>
                <div className='exchange_rate_wrap'>
                    {/* <p>Dolar</p> */}
                        <BsCurrencyDollar
                        className='icon color'/>
                        <AiOutlineDown
                        className='icon'/>
                </div>
                <ChangeColor/>
                <button className='btn_prime btn_sing-in'>Sing In</button>
            </div>
        </div>
    );
};

export default Header;