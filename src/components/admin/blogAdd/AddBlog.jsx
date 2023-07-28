import React, { useEffect, useState } from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import AddPostItem from './AddPostItem';
import PostListItem from './PostListItem';

const AddBlog = () => {

    const [content, setContent] = useState('');
    const [ isAddNews, setIsAddNews] = useState(false);

    const handleChange = (value) => {
      setContent(value);
    };

    const postList = [
        { 
            date : '24/07/23',
            titleEng : 'travel easy',
            titleSpian : 'travel easy',
            textEng: 'Travel easily with us - just buy a ticket and visit anywhere in Europe without additional effort',
            textSpain: 'Travel easily with us - just buy a ticket and visit anywhere in Europe without additional effort',
            img: './image/blog/1.png'
        },
        { 
            date : '24/07/23',
            titleEng : 'travel easy',
            titleSpian : 'travel easy',
            textEng: 'Travel easily with us - just buy a ticket and visit anywhere in Europe without additional effort',
            textSpain: 'Travel easily with us - just buy a ticket and visit anywhere in Europe without additional effort',
            img: './image/blog/1.png'
        },
        { 
            date : '23/07/23',
            titleEng : 'travel easy',
            titleSpian : 'travel easy',
            textEng: 'Travel easily with us - just buy a ticket and visit anywhere in Europe without additional effort',
            textSpain: 'Travel easily with us - just buy a ticket and visit anywhere in Europe without additional effort',
            img: './image/blog/1.png'
        },
        { 
            date : '22/07/23',
            titleEng : 'travel easy',
            titleSpian : 'travel easy',
            textEng: 'Travel easily with us - just buy a ticket and visit anywhere in Europe without additional effort',
            textSpain: 'Travel easily with us - just buy a ticket and visit anywhere in Europe without additional effort',
            img: './image/blog/1.png'
        },
        { 
            date : '21/07/23',
            titleEng : 'travel easy',
            titleSpian : 'travel easy',
            textEng: 'Travel easily with us - just buy a ticket and visit anywhere in Europe without additional effort',
            textSpain: 'Travel easily with us - just buy a ticket and visit anywhere in Europe without additional effort',
            img: './image/blog/1.png'
        },
        { 
            date : '20/07/23',
            titleEng : 'travel easy',
            titleSpian : 'travel easy',
            textEng: 'Travel easily with us - just buy a ticket and visit anywhere in Europe without additional effort',
            textSpain: 'Travel easily with us - just buy a ticket and visit anywhere in Europe without additional effort',
            img: './image/blog/1.png'
        },

    ]
    return (
    <div className='admin_content_wrap blog_wrap'>
            <h2>Blog</h2>
            <div>
                    <div
                        onClick={() => setIsAddNews(!isAddNews)} 
                        className={`ernings_wraper-item admin_panel_items add_user_button ${true ? 'active_btn_user' : ''}`}>
                        <p className='curent_sum add_user-item'>Add News <IoMdAddCircle/></p>
                    </div>
            </div>
            <div className='derection_table_wrap'>
                    <div className='table_header  '>
                        <p className='colum colum_name table_partner-item'>Title</p>
                        <p className='colum table_partner-item'>Date</p>

                    </div>
                    {isAddNews && 
                        <AddPostItem setIsAddNews={setIsAddNews}/>
                    }
                    <div className='table_body'>
                    {postList.map((item, idx) => (
                       
                        // <div key={idx} className='table_info_item'> 
                        //     <p className='colum row colum_name table_partner-item'>{item.titleEng}</p>
                        //     <p className='colum row colum_progres table_partner-item'> {item.date}</p>
                        // </div>
                        <PostListItem
                            key = {idx}
                            item = {item}
                        />
                    ))
                    }
                    </div>
                </div>
            
        </div>
    );
};

export default AddBlog;