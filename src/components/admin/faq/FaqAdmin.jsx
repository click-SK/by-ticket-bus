import React, { useEffect, useState } from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import FaqAddPost from './FaqAddPost';
import FaqListItem from './FaqListItem';
import axios from 'axios';
import { API_URL } from '../../../http/baseUrl';
import { useTranslation } from "react-i18next";
const FaqAdmin = () => {
    const [reloadState, setReloadState] = useState(false);
    const [ isAddNews, setIsAddNews] = useState(false);
    const [allFaqPosts, setAllFaqPosts] = useState([]);
    const { t } = useTranslation();

    useEffect(() => {
            axios.get(`${API_URL}/get-all-faq-posts`)
            .then((res) => {
                setAllFaqPosts(res.data);
            })
            .catch((error) => {
                console.error('Request error:', error);
              });
    },[reloadState])

    return (
    <div className='admin_content_wrap blog_wrap'>
            <h2>FAQ</h2>
            <div>
                <div
                    onClick={() => setIsAddNews(true)} 
                    className={`ernings_wraper-item admin_panel_items add_user_button ${true ? 'active_btn_user' : ''}`}>
                    <p className='curent_sum add_user-item'>Add faq <IoMdAddCircle/></p>
                </div>
            </div>
            <div className='derection_table_wrap'>
                    <div className='table_header  '>
                        <p className='colum colum_name table_partner-item'>{t('Title')}</p>
                        <p className='colum table_partner-item'>{t('Date')}</p>

                    </div>
                    {isAddNews && 
                        <FaqAddPost setIsAddNews={setIsAddNews}
                        setReloadState={setReloadState}/>
                    }
                    <div className='table_body'>
                    {allFaqPosts.length != 0 && allFaqPosts.map((item, idx) => (
                        <FaqListItem
                            key={idx}
                            item = {item}
                            setReloadState={setReloadState}
                        />
                    ))
                    }
                    </div>
                </div>
            
        </div>
    );
};

export default FaqAdmin;