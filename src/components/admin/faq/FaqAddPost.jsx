import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const FaqAddPost = () => {
    const [contentSpain, setContentSpain] = useState('');
    const [contentEng, setContentEng] = useState('');


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

                        {/* <div style={{marginBottom:'50px'}}>
                            <h4 style={{marginBottom:'10px'}}>Add image</h4>
                            <input type="file" />
                        </div> */}

                        <div className='add_title_item'>
                            <label htmlFor="title_eng_input">Question eng</label>
                            <input id='title_eng_input' type="text" />
                        </div>
                        <div className='add_title_item'>
                            <label htmlFor="title_spain_input">Question spain</label>
                            <input id='title_spain_input' type="text" />
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
                      <button className='admin_panel_items add_user_button active_btn_user'> Publish </button>  
            </div>
    );
};

export default FaqAddPost;