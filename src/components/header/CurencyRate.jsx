import React, { useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai'
import { BsCurrencyDollar } from 'react-icons/bs'
import { BsCurrencyEuro } from 'react-icons/bs'

const CurencyRate = () => {
    const [isOpen, setIsOpent] = useState(false);
    const [curentRate, setCurentRate] = useState(localStorage.getItem('curentRate') || 'EUR')
    
    const hendlerChangeRate = (e) =>{
        const curentContent = e?.name;
        setCurentRate(curentContent)
        localStorage.setItem('curentRate', curentContent)
    }

    const rateArr = [
        {
            name: 'EUR',
            rate: 1
        },
        {
            name: 'USD',
            rate: 1.12
        }
    ]

    return (
        <div className='exchange_rate_wrap'
        onClick={() => setIsOpent(!isOpen)}>
        {/* <p>Dolar</p> */}
            <div className='icon_curency_header'>
            <div
            className='icon color '>{curentRate}</div>
                <AiOutlineDown
                style={{rotate: `${isOpen ? '180deg' : '0deg'}`}}
                className='icon arrow-down '/>
            </div>
            {isOpen && 
                <div className='change_coin_wrap'>
                    {rateArr.map((item, idx) => (
                        <div 
                        key={idx}
                        onClick={(e) => hendlerChangeRate(item)}
                        className='icon color '>{item?.name}</div>
                    ))}
                </div>
            }
            
    </div>
    );
};

export default CurencyRate;