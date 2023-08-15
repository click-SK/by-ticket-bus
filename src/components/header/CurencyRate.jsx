import React, { useEffect, useState, useRef } from 'react';
import { AiOutlineDown } from 'react-icons/ai'
import { BsCurrencyDollar } from 'react-icons/bs'
import { BsCurrencyEuro } from 'react-icons/bs'
import { useSelector } from 'react-redux';
import { setCurrenciesName } from '../../store/currentCurrencies';
import { useDispatch } from 'react-redux';

const CurencyRate = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [curentRate, setCurentRate] = useState(localStorage.getItem('curentRate') || 'EUR')
    const changeColorRef = useRef(null);
    const currencies = useSelector((state) => state.currencies.currencies);

    const dispatch = useDispatch();

    const {currencieName} = useSelector((state) => state.currencies);
    
    const hendlerChangeRate = (e) =>{
        try {
            const curentContent = e?.currencieName;
            setCurentRate(curentContent)
            dispatch(setCurrenciesName(curentContent));
            localStorage.setItem('curentRate', curentContent)
            window.location.reload();
        } catch(e) {
            console.log(e);
        }
    }

    useEffect(() => {
        try{
            const handleOutsideClick = (event) => {
                if (changeColorRef.current && !changeColorRef.current.contains(event.target)) {

                    setIsOpen(false);
                }
            };

            document.addEventListener('mousedown', handleOutsideClick);
    
            return () => {
                document.removeEventListener('mousedown', handleOutsideClick);
            };
        } catch (error) {
            console.log(error)
        }
    }, []);

    return (
        <div 
        ref={changeColorRef}
        className='exchange_rate_wrap'
        onClick={() => setIsOpen(!isOpen)}>
        {/* <p>Dolar</p> */}
            <div className='icon_curency_header'>
            <div
            className='icon color '>{currencieName}</div>
                <AiOutlineDown
                style={{rotate: `${isOpen ? '180deg' : '0deg'}`}}
                className='icon arrow-down '/>
            </div>
            {isOpen && 
                <div className='change_coin_wrap'>
                    {currencies.length != 0 && currencies.map((item, idx) => (
                        <div 
                        key={idx}
                        onClick={(e) => hendlerChangeRate(item)}
                        className='icon color '>{item.currencieName}</div>
                    ))}
                </div>
            }
            
    </div>
    );
};

export default CurencyRate;