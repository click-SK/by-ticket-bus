import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '../../style/routesSection.scss'
import { FaLocationDot } from 'react-icons/fa6';

const RoutesSection = () => {
    const [curentRate, setCurentRate] = useState(localStorage.getItem('curentRate'));
    const [ratePrice, setRatePrice] = useState(localStorage.getItem('curentRate') || 'EUR');

    const {currencieValue} = useSelector((state) => state.currencies);
    useEffect (() => {
        setRatePrice(curentRate) 
    },[curentRate])
    
    console.log('currencieValue', currencieValue );


    
    const directionArr = [
        {
            locStart: 'Kyiv',
            locEnd: 'Warszawa',
            price: 18
        },
        {
            locStart: 'Kyiv',
            locEnd: 'Bratislava',
            price: 51
        },
        {
            locStart: 'Kyiv',
            locEnd: 'Chisinau',
            price: 25
        },
        {
            locStart: 'Kyiv',
            locEnd: 'Budapesht',
            price: 56
        },
        {
            locStart: 'Kyiv',
            locEnd: 'Praha',
            price: 43
        },
        {
            locStart: 'Kyiv',
            locEnd: 'Wien',
            price: 64
        },
    ]
    return (
        <>
            {directionArr.map((item,idx) => (
                <div 
                key={idx}
                className='route_item'>
                    <div className='direct_name_price'>
                        <div><FaLocationDot/>{item.locStart}</div>
                        <p>{(item.price * currencieValue).toFixed(1)} {ratePrice}</p>
                    </div>
                    <img className='routes_img' src="./image/routes.svg" alt="routes" />
                    <div className='direct_name_end'>{item.locEnd}</div>
                    <div className='burron_booking'>
                    <button className='btn_prime'>Booking</button>
                    </div>
                </div>
            ))}
        </>
    );
};

export default RoutesSection;