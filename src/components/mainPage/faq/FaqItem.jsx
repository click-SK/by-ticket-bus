import React, { useState } from 'react';
import { BiRightArrow } from 'react-icons/bi';
import ReactQuill from 'react-quill';

const FaqItem = ({idx, itemTitle, itemText}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [editorHtml, setEditorHtml] = useState('');
    
    
    const handleChange = (html) => {
        setEditorHtml(html);
      };
  

const modules = {
  toolbar: false, // Вимкнути панель інструментів
};
const readOnly = true;
    return (
            <div key={idx}
                onClick={() => setIsOpen(!isOpen)}
                className={`item_faq ${idx === 0 || idx % 2 === 0 ? 'faq-prime' : 'faq-second'} ${isOpen ? 'open' : ''}`}>
                <div className={`item_title ${isOpen ? 'item_title-prime' : ''}`}>
                    <p>{idx + 1}.   {itemTitle}</p>
                    <BiRightArrow className='svg-faq'/>
                </div>
                <div className={`item_faq_text-description ${isOpen ? '' : 'none'}`}>
                    {/* {itemText} */}
                    <ReactQuill
                        className='item_faq_text-description'
                        theme="snow"
                        modules={modules}
                        readOnly={readOnly}
                        value={itemText}
                        onChange={handleChange}
                      />
                </div>
                {/* {isOpen && 
                } */}
            </div>
    );
};

export default FaqItem;