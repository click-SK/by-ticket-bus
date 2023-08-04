import React, { useRef, useEffect, useState } from 'react';
import SearchRouts from '../mainPage/SearchRouts';
import DerectionList from './bus/DerectionList';
import { useDispatch, useSelector } from 'react-redux';
import { setBookingData } from '../../store/bookingData';
import { Link } from 'react-router-dom';
import '../../style/Booking.scss'

const BookingDerect = () => {
    const[isOutbound, setIsOutbound] = useState(true)
    const[isReturn, setIsReturn] = useState(false)
    const [isFromTo, setIsFromTo] = useState(true)
    const [cityFrom, setCityFrom] = useState('')
    const [cityTo, setCityTo] = useState('')
    const [curentPasanger, setCurentPasanger] = useState(1)
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const dispatch = useDispatch();
    const {RDX_cityFrom, RDX_cityTo, RDX_curentPasanger, RDX_startDate, RDX_endDate} = useSelector((state) => state.booking);

    const listArr = [
        1, 2, 3, 4, 5
    ]

    useEffect (() => {
        setCityFrom(RDX_cityFrom);
        setCityTo(RDX_cityTo)
    },[])

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
                        <Link to={`/booking-direct№`}><DerectionList 
                        key={idx}
                        cityFrom = {cityFrom}
                        cityTo = {cityTo}
                        /> </Link>
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