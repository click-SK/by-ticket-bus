import React, {useState, useEffect} from 'react';
import { useTranslation } from "react-i18next";
import { BsSearch } from 'react-icons/bs';
import axios from 'axios';
import { API_URL } from '../../http/baseUrl';
import '../../style/faq.scss'
import '../../style/blog.scss'
import { Link } from 'react-router-dom';

const FaqPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [allPosts, setAllPosts] = useState([]);
    const { t } = useTranslation();

    useEffect(() => {
        axios.get(`${API_URL}/get-all-faq-posts`)
        .then((res) => setAllPosts(res.data))
    },[])

    const arrFaq = [
        {
            title: 'How to find a ride',
            text: 'Lorem ipsum dolor sit amet consectetur. Quisque pellentesque tincidunt id turpis. Netus quisque nec dui sit placerat urna id. Diam aenean eu orci porttitor nec. Congue imperdiet amet elit etiam enim. Mauris dignissim etiam at tincidunt quis. Pellentesque in nisi mi imperdiet a non viverra eu. Tristique vulputate proin adipiscing semper convallis consequat dignissim. Sit proin ullamcorper est mus. Risus quis aliquam a montes. Viverra nascetur rhoncus rhoncus risus vulputate proin orci lacinia mattis pellentesque. Duis amet enim non egestas sem sagittis et. Lectus dignissim erat interdum suspendisse. Massa bibendum massa eu pulvinar.'
        },
        {
            title: 'How to 3',
            text: 'Lorem ipsum dolor sit amet consectetur. Quisque pellentesque tincidunt id turpis. Netus quisque nec dui sit placerat urna id. Diam aenean eu orci porttitor nec. Congue imperdiet amet elit etiam enim. Mauris dignissim etiam at tincidunt quis. Pellentesque in nisi mi imperdiet a non viverra eu. Tristique vulputate proin adipiscing semper convallis consequat dignissim. Sit proin ullamcorper est mus. Risus quis aliquam a montes. Viverra nascetur rhoncus rhoncus risus vulputate proin orci lacinia mattis pellentesque. Duis amet enim non egestas sem sagittis et. Lectus dignissim erat interdum suspendisse. Massa bibendum massa eu pulvinar.'
        },
        {
            title: 'How to find a ride',
            text: 'Lorem ipsum dolor sit amet consectetur. Quisque pellentesque tincidunt id turpis. Netus quisque nec dui sit placerat urna id. Diam aenean eu orci porttitor nec. Congue imperdiet amet elit etiam enim. Mauris dignissim etiam at tincidunt quis. Pellentesque in nisi mi imperdiet a non viverra eu. Tristique vulputate proin adipiscing semper convallis consequat dignissim. Sit proin ullamcorper est mus. Risus quis aliquam a montes. Viverra nascetur rhoncus rhoncus risus vulputate proin orci lacinia mattis pellentesque. Duis amet enim non egestas sem sagittis et. Lectus dignissim erat interdum suspendisse. Massa bibendum massa eu pulvinar.'
        },
        {
            title: 'How to find a 2',
            text: 'Lorem ipsum dolor sit amet consectetur. Quisque pellentesque tincidunt id turpis. Netus quisque nec dui sit placerat urna id. Diam aenean eu orci porttitor nec. Congue imperdiet amet elit etiam enim. Mauris dignissim etiam at tincidunt quis. Pellentesque in nisi mi imperdiet a non viverra eu. Tristique vulputate proin adipiscing semper convallis consequat dignissim. Sit proin ullamcorper est mus. Risus quis aliquam a montes. Viverra nascetur rhoncus rhoncus risus vulputate proin orci lacinia mattis pellentesque. Duis amet enim non egestas sem sagittis et. Lectus dignissim erat interdum suspendisse. Massa bibendum massa eu pulvinar.'
        },
        {
            title: 'How to find a ride',
            text: 'Lorem ipsum dolor sit amet consectetur. Quisque pellentesque tincidunt id turpis. Netus quisque nec dui sit placerat urna id. Diam aenean eu orci porttitor nec. Congue imperdiet amet elit etiam enim. Mauris dignissim etiam at tincidunt quis. Pellentesque in nisi mi imperdiet a non viverra eu. Tristique vulputate proin adipiscing semper convallis consequat dignissim. Sit proin ullamcorper est mus. Risus quis aliquam a montes. Viverra nascetur rhoncus rhoncus risus vulputate proin orci lacinia mattis pellentesque. Duis amet enim non egestas sem sagittis et. Lectus dignissim erat interdum suspendisse. Massa bibendum massa eu pulvinar.'
        },
        {
            title: 'How to find a ride',
            text: 'Lorem ipsum dolor sit amet consectetur. Quisque pellentesque tincidunt id turpis. Netus quisque nec dui sit placerat urna id. Diam aenean eu orci porttitor nec. Congue imperdiet amet elit etiam enim. Mauris dignissim etiam at tincidunt quis. Pellentesque in nisi mi imperdiet a non viverra eu. Tristique vulputate proin adipiscing semper convallis consequat dignissim. Sit proin ullamcorper est mus. Risus quis aliquam a montes. Viverra nascetur rhoncus rhoncus risus vulputate proin orci lacinia mattis pellentesque. Duis amet enim non egestas sem sagittis et. Lectus dignissim erat interdum suspendisse. Massa bibendum massa eu pulvinar.'
        },
    ];

    const filteredArrFaq = arrFaq.filter((item) => {
        // Фільтруємо елементи масиву, зберігаючи тільки ті, які містять search
        return item.title.toLowerCase().includes(search.toLowerCase()) || item.text.toLowerCase().includes(search.toLowerCase());
      });
    
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
                                <h4 className='title_faq-item'>{item.titleEn} ?</h4>
                            </div>
                            <div>
                                <p>{item.descriptionEn}</p>
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