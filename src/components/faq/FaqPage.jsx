import React from 'react';
import { useTranslation } from "react-i18next";
import '../../style/blog.scss'
import { Link } from 'react-router-dom';

const FaqPage = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { t } = useTranslation();
    const arrFaq = [
        {
            title: 'How to find a ride',
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
        {
            title: 'How to find a ride',
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
    ]
    
    return (
<div className='blog_wrap'>
            <h2>News</h2>
            <div className='blog_body'>
                <div className='blog_content'>
                <div className='content_wraper'>
                    {/* { blogItemArr.map((item, idx) => (
                        <Link to='/news№'>
                            <div key={idx} className='item_wrap'>
                                <img className='blog_item_img' src={item.imgSrc} alt="blogimg" />
                                <div className='text_wrap-blog'>
                                <h2 className='blog_item_title'>{item.title}</h2>
                                <p className='blog_item_text'>{item.text} <span className='blog_item_text--more'>{t('More')}...</span></p>
                                
                                </div>
                            </div>
                        </Link>
                    ))} */}
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