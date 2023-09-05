import React, { useEffect, useState } from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { API_URL } from '../../../http/baseUrl';
import { useTranslation } from "react-i18next";
import '../../../style/addRoutes.scss'

const AddStops = () => {
    return (
        <div className="add_post_wrap add_stops_wrap">
            <div className='one_block_wrap right_block-stops'>
                <input type="text" placeholder='Start' />
            </div>
            <div className='one_block_wrap left_block-stops'>
                <iframe
                    title="Company Location"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: '0' }}
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCzM_aopt5Y3rgR-o30mKxKoRrsSv2k02w&q=Ukraine,Kyiv&zoom=15`}
                    allowFullScreen
                    ></iframe>
            </div>
        </div>
    );
};

export default AddStops;