import React, { useEffect, useState } from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import FaqAddPost from './FaqAddPost';
import { FcEditImage } from 'react-icons/fc';

const FaqListItem = ({item}) => {
    const [ isOpenPostItem, setIsOpenPostItem] = useState(false)
    const [ isEditTextEng, setIsEditTextEng] = useState(false)
    const [contentSpain, setContentSpain] = useState('');
    const [contentEng, setContentEng] = useState('');


    const handleChangeEng = (value) => {
      setContentEng(value);
    };
    const handleChangeSpain = (value) => {
      setContentSpain(value);
    };
    return (
          <div 
                
                className='table_info_item'> 
                    <p onClick={() => setIsOpenPostItem(!isOpenPostItem)} className='colum row colum_name table_partner-item'>{item.titleEng}</p>
                    <p className='colum row colum_progres table_partner-item'> {item.date}</p>
                        {isOpenPostItem &&
                            <div className='post_item_wrap'>
                                <FcEditImage
                                onClick={() => setIsEditTextEng(!isEditTextEng)}/>
                                <h4>{item.titleEng}</h4>
                                <div>{item.date}</div>
                                <div className='item_text'>{item.textEng}
                                    {isEditTextEng && 
                                            <ReactQuill
                                            className='text_area'
                                            value={item.textEng}
                                            onChange={handleChangeEng}
                                            placeholder="Write your blog article here..."
                                            modules={{
                                                toolbar: [
                                                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                                                ['bold', 'italic', 'underline', 'strike'],
                                                [{ list: 'ordered' }, { list: 'bullet' }],
                                                ['blockquote', 'code-block'],
                                                [{ color: [] }, { background: [] }],
                                                [{ align: [] }],
                                                ['link'],
                                                ['clean'],
                                                ],
                                            }}
                                            formats={[
                                                'header',
                                                'bold',
                                                'italic',
                                                'underline',
                                                'strike',
                                                'list',
                                                'bullet',
                                                'blockquote',
                                                'code-block',
                                                'color',
                                                'background',
                                                'align',
                                                'link',
                                                
                                            ]}
                                            />
                                            
                                    }
                                    </div>
                                <div className='btn_faq_item_wrap'>
                                    <button className='admin_panel_items add_user_button active_btn_user'>Publish</button>
                                    <button
                                    onClick={() => setIsOpenPostItem(!isOpenPostItem)}
                                    className='admin_panel_items add_user_button active_btn_user btn_cancel'>Cancel</button>
                                </div>
                            </div>
                            
                         }
            </div>  
    );
};

export default FaqListItem;