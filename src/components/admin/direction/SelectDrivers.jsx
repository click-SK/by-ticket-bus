import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../../http/baseUrl';
import { useTranslation } from "react-i18next";
import { BiDownArrow } from 'react-icons/bi';
import $api from '../../../http/httpUsers';
const SelectDrivers = ({setSelectedDrivers, drivers, setDrivers}) => {
    const [isOpenSelect, setIsOpenSelect] = useState(false);
    const [allDrivers, setAllDrivers] = useState([]);
    const { t } = useTranslation();

    useEffect(() => {
        try {
            $api.get(`${API_URL}/get-all-drivers`).then((res) => {
                setAllDrivers(res.data)
            })
        }catch(error) {
            console.log(error);
        }
    },[])

    const handleAdd = (el) => {
        if(!drivers.includes(el.fullName)) {
            setDrivers((state) => [...state, el.fullName])
        } else {
            alert('Driver added')
        }
    }

    const handleDelete = (el) => {
        const newArray = drivers.filter((item) => item !== el.fullName);
        setDrivers(newArray);
    }


    return (
        <div className='select_wrap_coin'>
        <div className='name_coin'>
            <p
            onClick={() => setIsOpenSelect(!isOpenSelect)}
            className='select_header'
            >{t('Open drivers list')} 
            <BiDownArrow
            className={isOpenSelect ? 'open_svg' : ''}
            /></p>
        </div>
            <div className={`option_select ${isOpenSelect ? 'open' : 'close'}`}>
                {allDrivers.length != 0 && allDrivers.map((el, idx) => (
                    <div
                        key={idx}
                        className='coin_list-item-new'>
                            <p onClick={() => handleAdd(el)}>{el.fullName}</p>    
                            <p onClick={() => handleDelete(el)}>X</p>
                    </div>
                ))}
            </div>
    </div>
    );
};

export default SelectDrivers;