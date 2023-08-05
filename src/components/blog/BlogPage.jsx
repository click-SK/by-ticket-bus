import React from 'react';
import { useTranslation } from "react-i18next";
import '../../style/blog.scss'
import { Link } from 'react-router-dom';


const BlogPage = () => {
    const { t } = useTranslation();

    const blogItemArr = [
        {
            imgSrc: './image/blog/1.png',
            title: 'travel easy',
            text: 'Travel easily with us - just buy a ticket and visit anywhere in Europe without additional effort'
        },
        {
            imgSrc: './image/blog/1.png',
            title: 'travel easy',
            text: 'Travel easily with us - just buy a ticket and visit anywhere in Europe without additional effort'
        },
        {
            imgSrc: './image/blog/2.png',
            title: 'travel easy',
            text: 'Travel easily with us - just buy a ticket and visit anywhere in Europe without additional effort'
        },
        {
            imgSrc: './image/blog/3.png',
            title: 'travel easy',
            text: 'Travel easily with us - just buy a ticket and visit anywhere in Europe without additional effort'
        },
        {
            imgSrc: './image/blog/4.png',
            title: 'travel easy',
            text: 'Travel easily with us - just buy a ticket and visit anywhere in Europe without additional effort'
        },
        {
            imgSrc: './image/blog/5.png',
            title: 'travel easy',
            text: 'Travel easily with us - just buy a ticket and visit anywhere in Europe without additional effort'
        },
    ]

    return (
        <div className='blog-page_wrap'>
            <h2>News</h2>
            <div className='blog_body'>
                <div className='blog_content'>
                <div className='content_wraper'>
                    { blogItemArr.map((item, idx) => (
                        <Link to='/news№'>
                            <div key={idx} className='item_wrap'>
                                <img className='blog_item_img' src={item.imgSrc} alt="blogimg" />
                                <div className='text_wrap-blog'>
                                <h2 className='blog_item_title'>{item.title}</h2>
                                <p className='blog_item_text'>{item.text} <span className='blog_item_text--more'>{t('More')}...</span></p>
                                
                                </div>
                            </div>
                        </Link>
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

export default BlogPage;