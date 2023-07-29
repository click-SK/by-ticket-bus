import React from 'react';
import { BiRightArrow } from 'react-icons/bi';
import { useTranslation } from "react-i18next";
import '../../../style/newsSection.scss'

const NewsSection = () => {
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
        <div className='news_section_wrap'>
            <h2 className='news_title'>{t('News')}</h2>
            <div className='content_wraper'>
                    { blogItemArr.map((item, idx) => (
                        <div key={idx} className='item_wrap'>
                            <img className='blog_item_img' src={item.imgSrc} alt="blogimg" />
                            <div className='text_wrap-blog'>
                            <h2 className='blog_item_title'>{item.title}</h2>
                            <p className='blog_item_text'>{item.text} <span className='blog_item_text--more'>More...</span></p>
                            
                            </div>
                        </div>
                    ))}
            </div>
            <div className='more_btn'>
                <p>More <BiRightArrow
                className='svg_more-btn'
                /></p>
                
            </div>
        </div>
    );
};

export default NewsSection;