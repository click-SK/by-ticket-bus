import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../../http/baseUrl';
import { useTranslation } from "react-i18next";
import { BiDownArrow } from 'react-icons/bi';
const SelectBuses = ({setSelectedBuses}) => {
    const [isOpenSelect, setIsOpenSelect] = useState(false);
    const [allBuses, setAllBuses] = useState([]);
    const { t } = useTranslation();

    useEffect(() => {
        axios.get(`${API_URL}/get-all-bus`).then((res) => {
            setAllBuses(res.data)
        }) .catch((error) => {
            console.error('Request error:', error);
          });
    },[])

    const handleAdd = (el) => {
        setSelectedBuses(el)
    }
    
    return (
        <div className='select_wrap_coin'>
        <div className='name_coin'>
            <p
            onClick={() => setIsOpenSelect(!isOpenSelect)}
            className='select_header'
            >{t('Open buses list')} 
            <BiDownArrow
            className={isOpenSelect ? 'open_svg' : ''}
            /></p>
        </div>
            <div className={`option_select ${isOpenSelect ? 'open' : 'close'}`}>
                {allBuses.length != 0 && allBuses.map((el, idx) => (
                    <div
                        key={idx}
                        onClick={() => handleAdd(el)}
                        className='coin_list-item-new'>
                            <p>{el.nameBus}</p>    
                    </div>
                ))}
            </div>
    </div>
    );
};

export default SelectBuses;