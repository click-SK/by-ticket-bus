import React from 'react';
import TripSelection from './TripSelection';
import TripInformation from './TripInformation';
import { Link } from 'react-router-dom';
import { CgEditBlackPoint } from "react-icons/cg";
import { HiLocationMarker } from "react-icons/hi";

const DirectCurent = () => {
    return (
        <div className=''>
            <div className='direct_curent_wrap'>
                <div className='direct_wrap_item direct_wrap_left_item'>
                        <h3>Trip selection</h3>
                        <TripSelection/>
                </div>
                <div className='direct_wrap_item direct_wrap_right_item'>
                        <h3>Trip information</h3>
                        <TripInformation/>
                </div>
            </div>
            <div className='price_trip_wrap'>
                <div className='price_wrap'>
                    <p className='price_trip'>10 EUR</p>
                    <p className='info_booking'>1 ADULT, ESSENTIAL, STANDARD</p>
                </div>
                <Link to='/booking-info-pas'> 
                    <button className='btn_prime'>Cintinue</button>
                </Link>
            </div>
        </div>
    );
};

export default DirectCurent;