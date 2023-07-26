import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const FaqAddPost = () => {
    const [contentSpain, setContentSpain] = useState('');
    const [contentEng, setContentEng] = useState('');
    const [isEngVar, setIsEngVar] = useState(true)


    const handleChangeEng = (value) => {
      setContentEng(value);
    };
    const handleChangeSpain = (value) => {
      setContentSpain(value);
    };
    return (
                <div className='add_post_wrap'>
                        <div style={{marginBottom:'50px'}}>
                            <h3>Add faq</h3>
                        </div>
                        <div className='blog_tabs_btn'>
                            <button
                            onClick={() => setIsEngVar(true)}
                            className={`admin_panel_items add_user_button btn_tabs ${isEngVar ? 'btn_tabs-active': ''}`}>ENG</button>
                            <button 
                            onClick={() => setIsEngVar(false)}
                            className={`admin_panel_items add_user_button btn_tabs ${isEngVar ? '': 'btn_tabs-active'}`}>ESP</button>
                        </div>
                        {isEngVar ? 
                            <>
                                <div className='add_title_item'>
                                    <label htmlFor="title_eng_input">Question eng</label>
                                    <input id='title_eng_input' type="text" />
                                </div>
                                <div className='add_text_item'>
                                    <h4>Eng text</h4>
                                    <ReactQuill
                                    value={contentEng}
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
                                        ['link', 'image'],
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
                                        'image',
                                    ]}
                                    />
                                </div>
                            </> 
                            : 
                            <>
                                <div className='add_title_item'>
                                    <label htmlFor="title_spain_input">Question spain</label>
                                    <input id='title_spain_input' type="text" />
                                </div>
                                <div className='add_text_item'>
                                    <h4>Spain text</h4>
                                    <ReactQuill
                                    value={contentSpain}
                                    onChange={handleChangeSpain}
                                    placeholder="Write your blog article here..."
                                    modules={{
                                        toolbar: [
                                        [{ header: [1, 2, 3, 4, 5, 6, false] }],
                                        ['bold', 'italic', 'underline', 'strike'],
                                        [{ list: 'ordered' }, { list: 'bullet' }],
                                        ['blockquote', 'code-block'],
                                        [{ color: [] }, { background: [] }],
                                        [{ align: [] }],
                                        ['link', 'image'],
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
                                        'image',
                                    ]}
                                    />
                                </div>
                            </>

                        }
                      <button className='admin_panel_items add_user_button active_btn_user'> Publish </button>  
            </div>
    );
};

export default FaqAddPost;