import React, {useState, useEffect} from 'react';
import { useTranslation } from "react-i18next";
import { BsSearch } from 'react-icons/bs';
import axios from 'axios';
import { API_URL } from '../../http/baseUrl';
import '../../style/faq.scss'
import '../../style/blog.scss'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ReactQuill from 'react-quill';

const FaqPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [allPosts, setAllPosts] = useState([]);
    const { t } = useTranslation();
    const [editorHtml, setEditorHtml] = useState('');

    const lang = useSelector((state) => state.lang.language);

    useEffect(() => {
        axios.get(`${API_URL}/get-all-faq-posts`)
        .then((res) => setAllPosts(res.data))
    },[])

    console.log('lang',lang);

    const handleChange = (html) => {
        setEditorHtml(html);
      };
  
      const modules = {
        toolbar: false, // Вимкнути панель інструментів
      };
      const readOnly = true;

    return (
<div className='blog-page_wrap'>
            <h2>FAQ</h2>
            <div className='search_faq'>
                <BsSearch
                className='search_svg-faq'/>
                <input value={search} placeholder='Search' onChange={(e) => setSearch(e.target.value)} type="text" />
            </div>
            <div className='blog_body'>
                <div className='blog_content'>
                <div className='content_wraper'>
                    {allPosts.length != 0 && allPosts.map((item, idx) => (
                        <div key={idx} className='faq_item_wrap'>
                            <div >
                                {lang == 'ENG' && <h4 className='title_faq-item'>{item.titleEn} ?</h4>}
                                {lang == 'ESP' && <h4 className='title_faq-item'>{item.titleSp} ?</h4>}
                            </div>
                            <div className='faq_item_text'>
                            {lang == 'ENG' && 
                            // <p>{item.descriptionEn}</p>
                            <ReactQuill
                            className='item_faq_text-description'
                            theme="snow"
                            modules={modules}
                            readOnly={readOnly}
                            value={item.descriptionEn}
                            onChange={handleChange}
                          />
                          }
                            {lang == 'ESP' && 
                            // <p>{item.descriptionSp}</p>
                            <ReactQuill
                            className='item_faq_text-description'
                            theme="snow"
                            modules={modules}
                            readOnly={readOnly}
                            value={item.descriptionSp}
                            onChange={handleChange}
                          />
                            }
                            </div>
                        </div>
                    ))}
                 </div>
                </div>
                <div className='blog_menu'>
                    <ul className='blog_menu_wrap'>
                        <li className='blog_menu_wrap-item'>All</li>
                        <li className='blog_menu_wrap-item'>Direct</li>
                        <li className='blog_menu_wrap-item'>Paymant</li>
                        <li className='blog_menu_wrap-item'>Booking</li>
                        <li className='blog_menu_wrap-item'>For partner</li>
                    </ul>
                </div>
            </div>
            <div className='blog_pagination'>
                <ul className='blog_pagination_wrap'>
                    <li className='blog_pagination_item'>1</li>
                    <li className='blog_pagination_item'>2</li>
                    <li className='blog_pagination_item'>3</li>
                    <li className='blog_pagination_item'>. . .</li>
                    <li className='blog_pagination_item'>7</li>
                    <li className='blog_pagination_item'>8</li>
                    <li className='blog_pagination_item'>9</li>
                </ul>

            </div>
        </div>
    );
};

export default FaqPage;