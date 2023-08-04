import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../../style/aboutUsPage.scss'


const RulesPage = () => {
    const [editorHtml, setEditorHtml] = useState('');

    const handleChange = (html) => {
      setEditorHtml(html);
    };
  
    const adressArr = "Ukraine, Kyiv"
  
    useEffect (() => {
      setEditorHtml(` <p>Our bus travel company follows certain rules and regulations to ensure a safe and enjoyable journey for all passengers.</p><p>Please familiarize yourself with our travel rules before booking your ticket.</p>`)
    },[])


    const modules = {
      toolbar: false, // Вимкнути панель інструментів
    };
    const readOnly = true;
  return (
<div className='about_us_page_wraper'>
        <h2>Travel Rules</h2>
        <ReactQuill
                  className='contact_content_text about_as_content_text'
                  theme="snow"
                  modules={modules}
                  readOnly={readOnly}
                  value={editorHtml}
                  onChange={handleChange}
        />
        
      </div>
  );
};

export default RulesPage;