import React, {useEffect, useState} from 'react';
import { useTranslation } from "react-i18next";
import axios from 'axios';
import { API_URL } from '../../../http/baseUrl';
import BusOne from './BusOne';
const VisibleAllBuses = () => {
    const [allbus, setAllBus] = useState([]);
    const { t } = useTranslation();

    useEffect(() => {
        axios.get(`${API_URL}/get-all-bus`).then((res) => {
            setAllBus(res.data)
        })
    },[])
    
    return (
        <div className='derection_table_wrap'>
        <div className='table_header'>
            <p className='colum colum_name table_partner-item'>{t('Name')}</p>
            <p className='colum table_partner-item'>Number</p>
        </div>
        <div className='table_body'>
            {allbus.length != 0 && allbus.map((item, idx) => (
                <BusOne key={item._id} item={item}/>
            ))}
        </div>
    </div>
    );
};

export default VisibleAllBuses;