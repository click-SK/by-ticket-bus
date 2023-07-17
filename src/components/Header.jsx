import React from 'react';
import '../style/header.scss'
import { MdDirectionsBus } from 'react-icons/md';
import { BiSolidBusiness } from 'react-icons/bi'
import { AiOutlineDown } from 'react-icons/ai'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { useTheme } from '../hooks/use-thems';
import ChangeColor from './ChangeColor';


const Header = () => {

    return (
        <div className='header_wrapper'>
            <div className='logo_wrap'>
                <p>BUS LOGO</p>
            </div>
            <div className='routs_var'>
                <div className='routs_item_header local_routs'>
                    <MdDirectionsBus
                    className='icon'/>
                    <p>local</p>
                </div>
                <div className='routs_item_header place_routs'>
                    <BiSolidBusiness
                    className='icon'/>
                    <p>place</p>
                </div>
            </div>
            <div className='custom_profile'>
                <div className='change_lang'> 
                    <p>Language</p>
                    <div className='lang_img_wrap'>
                        <img src="./lang/eng.svg" alt="eng" />
                        <AiOutlineDown
                        className='icon'/>
                    </div>
                </div>
                <div className='exchange_rate_wrap'>
                    {/* <p>Dolar</p> */}
                        <AiOutlineDollarCircle
                        className='icon'/>
                        <AiOutlineDown
                        className='icon'/>
                </div>
                <button className='btn_prime btn_sing-in'>Sing In</button>
                <ChangeColor/>
            </div>
        </div>
    );
};

export default Header;