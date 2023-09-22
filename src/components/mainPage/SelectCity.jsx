import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../http/baseUrl';
import { useTranslation } from "react-i18next";
import { BiDownArrow } from 'react-icons/bi';
import '../../style/selectCity.scss';
const SelectCity = ({selectedCity, citys, isOpenSelect, setIsOpenSelect}) => {
    const { t } = useTranslation();


    const handleAdd = (el) => {
        selectedCity(el)
        setIsOpenSelect(!isOpenSelect)
    }
    
    return (
        <div className='select_wrap_city'>
        {/* <div className='name_coin_city'>
            <p
            onClick={() => setIsOpenSelect(!isOpenSelect)}
            className='select_header_city'
            >{t('Open buses list')} 
            <BiDownArrow
            className={isOpenSelect ? 'open_svg' : ''}
            /></p>
        </div> */}
            <div className={`option_select_city ${isOpenSelect ? 'open' : 'close'}`}>
                {citys.length != 0 && citys.map((el, idx) => (
                    <div
                        key={idx}
                        onClick={() => handleAdd(el)}
                        className='coin_list-item-new_city'>
                            <p>{el}</p>    
                    </div>
                ))}
            </div>
    </div>
    );
};

export default SelectCity;