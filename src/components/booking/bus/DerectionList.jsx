import React, { useRef, useEffect, useState } from 'react';
import { FaBusAlt } from 'react-icons/fa';
import { BiSolidTimeFive } from 'react-icons/bi';
import { PiFlowArrow } from 'react-icons/pi';
import { AiOutlineWifi } from 'react-icons/ai';
import { BsFillBadgeWcFill } from 'react-icons/bs';
import { BsQrCodeScan } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { setBookingData } from '../../../store/bookingData';
import { useDispatch } from 'react-redux';
const DerectionList = ({cityFrom, cityTo, item}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // Розділити час у хвилинах на години та залишок у хвилинах
    const hours = Math.floor(item.duration / 60);
    const minutes = item.duration % 60;

    const handleReserveTickets = () => {
        dispatch(setBookingData({item}));
        navigate('/booking-info-pas');
    }

    console.log('item',item);

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
                        {/* Вивести години та хвилини */}
                        <p>{`${hours} h ${minutes} m`}</p> 
                    </div>
                </div>
            </div>
            <div className='item_info_direct'>
                <div className='city_wrap city_from'>
                    <p>{item.timeStart}</p>
                    <p>{cityFrom}</p>
                </div>
                <PiFlowArrow/>
                <div className='city_wrap city_to'>
                    <p>{item.timeEnd}</p>
                    <p>{cityTo}</p>
                </div>
            </div> 
            <div className='direct_price'>
                <div className='icon_wrap_direct'>
                    <AiOutlineWifi/>
                    <BsFillBadgeWcFill/>
                    <BsQrCodeScan/>
                </div>
                <div className='price_direct'>
                    <button className='btn_prime' onClick={handleReserveTickets}>10 euro</button>
                </div>
            </div>
        </div>
    );
};

export default DerectionList;