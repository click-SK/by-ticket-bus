import React, { useRef, useEffect, useState } from 'react';
import { FaBusAlt } from 'react-icons/fa';
import { BiSolidTimeFive } from 'react-icons/bi';
import { PiFlowArrow } from 'react-icons/pi';
import { AiOutlineWifi } from 'react-icons/ai';
import { BsFillBadgeWcFill } from 'react-icons/bs';
import { BsQrCodeScan } from 'react-icons/bs';

const DerectionList = () => {
    return (
        <div className='list_item_wrap'>
            <div className='item_info_time'>
                <div className='direct_wrap'><p>BUS</p> <span>LOGO</span></div>
                <div className='info_direct_time'>
                    <div className='info_direct_time-item'> 
                        <FaBusAlt/> 
                        <p>Bus</p>
                    </div>
                    <div className='info_direct_time-item'> 
                        <BiSolidTimeFive/>
                        <p> 1d 4h </p> 
                    </div>
                </div>
            </div>
            <div className='item_info_direct'>
                <div className='city_wrap city_from'>
                    <p>6:54 am</p>
                    <p>City</p>
                </div>
                <PiFlowArrow/>
                <div className='city_wrap city_to'>
                    <p>6:54 am</p>
                    <p>City</p>
                </div>
            </div> 
            <div className='direct_price'>
                    <div className='icon_wrap_direct'>
                        <AiOutlineWifi/>
                        <BsFillBadgeWcFill/>
                        <BsQrCodeScan/>
                    </div>
                    <div className='price_direct'>
                        <button className='btn_prime'>10 euro</button>
                    </div>
            </div>
        </div>
    );
};

export default DerectionList;