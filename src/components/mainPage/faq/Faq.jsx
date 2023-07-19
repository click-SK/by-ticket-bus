import React, { useState } from 'react';
import { BiRightArrow } from 'react-icons/bi';
import FaqItem from './FaqItem';
import '../../../style/faqSection.scss'

const Faq = () => {
    const [isOpen, setIsOpen] = useState(false)

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
        <div className='faq_section_wrap'>
            <h2 className='news_title'>FAQ</h2>
            <div className='content_wrap-faq' >
                {arrFaq.map((item,idx) => (
                    <FaqItem
                    idx = {idx}
                    itemTitle = {item.title} 
                    itemText = {item.text} 
                    isOpen= {isOpen}
                    setIsOpen={setIsOpen}
                    />
                    // <div key={idx}
                    //     onClick={() => setIsOpen(!isOpen)}
                    //     className={`item_faq ${idx === 0 || idx % 2 === 0 ? 'faq-prime' : 'faq-second'} ${isOpen ? 'open' : ''}`}>
                    //     <div className='item_title'>
                    //         <p>{idx + 1}.   {item.title}</p>
                    //         <BiRightArrow className='svg-faq'/>
                    //     </div>
                    //     {isOpen && 
                    //         <p className='item_faq_text-description'>{item.text}</p>
                    //     }
                    // </div>
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

export default Faq;