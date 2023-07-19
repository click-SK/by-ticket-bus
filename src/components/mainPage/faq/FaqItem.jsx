import React, { useState } from 'react';
import { BiRightArrow } from 'react-icons/bi';

const FaqItem = ({idx, itemTitle, itemText}) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
            <div key={idx}
                onClick={() => setIsOpen(!isOpen)}
                className={`item_faq ${idx === 0 || idx % 2 === 0 ? 'faq-prime' : 'faq-second'} ${isOpen ? 'open' : ''}`}>
                <div className={`item_title ${isOpen ? 'item_title-prime' : ''}`}>
                    <p>{idx + 1}.   {itemTitle}</p>
                    <BiRightArrow className='svg-faq'/>
                </div>
                <p className={`item_faq_text-description ${isOpen ? '' : 'none'}`}>{itemText}</p>
                {/* {isOpen && 
                } */}
            </div>
    );
};

export default FaqItem;