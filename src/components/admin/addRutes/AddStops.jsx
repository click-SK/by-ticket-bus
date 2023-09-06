import React, { useEffect, useState } from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import ReactQuill from 'react-quill';
import CityStops from './CityStops';
import UrbanStops from './UrbanStops';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { API_URL } from '../../../http/baseUrl';
import { useTranslation } from "react-i18next";
import '../../../style/addRoutes.scss'


const AddStops = () => {
    const [ isAddRoutesCity, setIsAddRoutesCity] = useState(false);
    const [ isAddRoutesUrban, setIsAddRoutesUrban] = useState(false);

    const hendlerAddRoutesCity = () =>{
        setIsAddRoutesCity(!isAddRoutesCity)
        setIsAddRoutesUrban(false)
    }
    const hendlerAddRoutesUrban = () =>{
        setIsAddRoutesUrban(!isAddRoutesUrban)
        setIsAddRoutesCity(false)
    }
    
    return (
        <div className="add_post_wrap add_stops_wrap ">
            <div className='btn_wrap_add-routes'>
                <div
                    onClick={hendlerAddRoutesCity} 
                    className={`ernings_wraper-item admin_panel_items add_user_button ${true ? 'active_btn_user' : ''}`}>
                    <p className='curent_sum add_user-item'>City routs<IoMdAddCircle/></p>
                </div>
                <div
                    onClick={hendlerAddRoutesUrban} 
                    className={`ernings_wraper-item admin_panel_items add_user_button ${true ? 'active_btn_user' : ''}`}>
                    <p className='curent_sum add_user-item'>Urban routs <IoMdAddCircle/></p>
                </div>
            </div>
                {isAddRoutesCity &&
                <CityStops/>
                }
                {isAddRoutesUrban &&
                <UrbanStops/>
                }
        </div>
    );
};

export default AddStops;