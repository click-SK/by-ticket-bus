import React, { useRef, useEffect, useState } from 'react';
import SearchRouts from '../mainPage/SearchRouts';
import DerectionList from './bus/DerectionList';
import { Link } from 'react-router-dom';
import '../../style/Booking.scss'

const BookingDerect = () => {
    const[isOutbound, setIsOutbound] = useState(true)
    const[isReturn, setIsReturn] = useState(false)

    const listArr = [
        1, 2, 3, 4, 5
    ]
    return (
        <div className='booking_wrap'>
            <SearchRouts/>
            <div className='direction_wrap'>
                <div className='title_list_direct'>
                    <p 
                    onClick={() => setIsOutbound(true)}
                    className={isOutbound ? 'active_tab_direct' : 'non-active_tab_direct'}>Outbound</p>
                    <p 
                    onClick={() => setIsOutbound(false)}
                    className={!isOutbound ? 'active_tab_direct' : 'non-active_tab_direct'}>Return</p>
                </div>
                <div className='list_wrap'>
                {isOutbound ?
                    (listArr.map((item, idx) => (
                        <Link to="/booking-direct№"><DerectionList key={idx}/> </Link>
                    )))
                :
                    <DerectionList/> 
                }
                </div>
            </div>
        </div>
    );
};

export default BookingDerect;