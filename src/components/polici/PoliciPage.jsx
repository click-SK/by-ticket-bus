import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../../style/aboutUsPage.scss'

const PoliciPage = () => {
    const [editorHtml, setEditorHtml] = useState('');

    const handleChange = (html) => {
      setEditorHtml(html);
    };
  
    const adressArr = "Ukraine, Kyiv"
  
    useEffect (() => {
      setEditorHtml(`<p>Your privacy is important to us. This page outlines how we collect, use, and protect your personal information when you use our services. Please review our privacy policy to understand our practices.</p>`)
    },[])


    const modules = {
      toolbar: false, // Вимкнути панель інструментів
    };
    const readOnly = true;
    return (
        <div className='about_us_page_wraper'>
        <h2>Privacy Policy</h2>
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

export default PoliciPage;