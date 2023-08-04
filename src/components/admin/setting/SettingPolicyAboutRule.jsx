import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../../../style/aboutUsPage.scss'

const SettingPolicyAboutRule = ({content,title,input}) => {

    const [editorHtml, setEditorHtml] = useState('');
    const [editCity, setEditCity] = useState('');
    const [editCountry, setEditCountry] = useState('');
    const [editStreet, setEditStreet] = useState('');
    const [editNumb, setEditNumb] = useState('');

    const handleChange = (html) => {
      setEditorHtml(html);
    };
  
    useEffect (() => {
        setEditorHtml(content)
      },[])

    const modules = {
      toolbar: true, // Вимкнути панель інструментів
    };
    const readOnly = false;

    return (
        <div className='admin_panel_items content_additional_page_edit'>
            <h2>{title}</h2>
            <ReactQuill
                  theme="snow"
                  modules={modules}
                  readOnly={readOnly}
                  value={editorHtml}
                  onChange={handleChange}
            />
            {input && 
                <div className='input_content_edit'>
                    <div className='input_wrap'>
                        <label htmlFor="country">Сountry</label>
                        <input id='country' type="text"  value={editCountry} onChange={(e)=> setEditCountry(e.target.value)}/>
                    </div>
                    <div className='input_wrap'>
                        <label htmlFor="city">City</label>
                        <input id='city' type="text" value={editCity} onChange={(e)=> setEditCity(e.target.value)} />
                    </div>
                    <div className='input_wrap'>
                        <label htmlFor="street">Street</label>
                        <input id='street' type="text" value={editStreet} onChange={(e)=> setEditStreet(e.target.value)} />
                    </div>
                    <div className='input_wrap'>
                        <label htmlFor="numb">Numb</label>
                        <input id='numb' type="number" value={editNumb} onChange={(e)=> setEditNumb(e.target.value)} />
                    </div>
                </div>
            }
            <div className='btn_wrap_edit_content'>
                <button className='add_user_button active_btn_user save_edit_content'>Save</button>
            </div>
        </div>
    );
};

export default SettingPolicyAboutRule;