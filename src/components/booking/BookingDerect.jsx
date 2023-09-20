import React, { useRef, useEffect, useState } from 'react';
import SearchRouts from '../mainPage/SearchRouts';
import DerectionList from './bus/DerectionList';
import { useDispatch, useSelector } from 'react-redux';
import { setBookingData } from '../../store/bookingData';
import { Link } from 'react-router-dom';
import '../../style/Booking.scss'
import axios from 'axios';
import { API_URL } from '../../http/baseUrl';

const BookingDerect = () => {
    const[isOutbound, setIsOutbound] = useState(true)
    const[isReturn, setIsReturn] = useState(false)
    const [isFromTo, setIsFromTo] = useState(true)
    const [cityFrom, setCityFrom] = useState('')
    const [cityTo, setCityTo] = useState('')
    const [curentPasanger, setCurentPasanger] = useState(1)
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [allDirections, setAllDirections] = useState([]);
    const [currentDirections, setCurrentDirections] = useState([]);
    const dispatch = useDispatch();
    const {RDX_cityFrom, RDX_cityTo, RDX_curentPasanger, RDX_startDate, RDX_endDate} = useSelector((state) => state.booking);

    const listArr = [
        1, 2, 3, 4
    ]

    useEffect (() => {
        setCityFrom(RDX_cityFrom);
        setCityTo(RDX_cityTo)
    },[])

    useEffect(() => {
        axios.get(`${API_URL}/get-all-directions`).then((res) => {
            setAllDirections(res.data)
        }).catch((error) => {
            console.log(error);
        })
    },[])

    useEffect(() => {
        console.log('effect work');
        const currentRoutes = [];
        if(allDirections.length != 0) {
            allDirections.forEach((rout) => {
                if(rout.startRout == RDX_cityFrom && rout.endRout == RDX_cityTo) {
                    console.log('rout',rout);
                    currentRoutes.push(rout)
                }
            })
        }
        setCurrentDirections(currentRoutes)
    },[allDirections])

    console.log('currentDirections',currentDirections);

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
                    (currentDirections.length != 0 && currentDirections.map((item, idx) => (
                        <Link to={`/booking-info-pas`}>
                        <DerectionList 
                        key={idx}
                        cityFrom = {cityFrom}
                        cityTo = {cityTo}
                        item={item}
                        /> 
                        </Link>
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