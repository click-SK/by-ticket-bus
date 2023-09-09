import React, { useEffect, useState } from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { API_URL } from '../../../http/baseUrl';
import { useTranslation } from "react-i18next";
import AddStops from './AddStops';
import VisibleAllRoutes from './VisibleAllRoutes';

const AddRouts = () => {
    const [reloadState, setReloadState] = useState(false);
    const [ isAddRoutes, setIsAddRoutes] = useState(false);
    const [allRoutes, setAllPosts] = useState([]);
    const { t } = useTranslation();

    return (
    <div className='admin_content_wrap blog_wrap'>
            <h2>Routes</h2>
            <div>
                    <div
                        onClick={() => setIsAddRoutes(!isAddRoutes)} 
                        className={`ernings_wraper-item admin_panel_items add_user_button ${true ? 'active_btn_user' : ''}`}>
                        <p className='curent_sum add_user-item'>Add routes <IoMdAddCircle/></p>
                    </div>
            </div>
            <div className='derection_table_wrap'>
                <VisibleAllRoutes/>
                    {isAddRoutes && 
                        <AddStops/>
                    }
                </div>
            
        </div>
    );
};


export default AddRouts;