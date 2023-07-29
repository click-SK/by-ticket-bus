import React, { useRef, useEffect, useState } from 'react';
import BusTest from './BusTest';
import SearchRouts from '../../mainPage/SearchRouts';
import '../../../style/Booking.scss'

const BussСheme = () => {

    return (
        <div className='bus_cheme'>
            {/* <div className='bus_booking_seats-wrap'>
                <BusTest/>
            </div> */}
            <SearchRouts/>
        </div>
    );
};

export default BussСheme;