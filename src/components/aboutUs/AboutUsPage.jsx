import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../../style/aboutUsPage.scss'
import axios from 'axios';
import { API_URL } from '../../http/baseUrl';
import { useSelector } from 'react-redux';
const AboutUsPage = () => {
    const [editorHtml, setEditorHtml] = useState('');
    const [aboutUsData, setAboutUsData] = useState('');

    const lang = useSelector((state) => state.lang.language);
    console.log('lang about',lang);

    useEffect(() => {
      axios.get(`${API_URL}/get-about-us`)
      .then((res) => setAboutUsData(res.data[0]))
    },[])
    
    const handleChange = (html) => {
      setEditorHtml(html);
    };
  
    useEffect (() => {
      if(lang == 'ENG') {
        setEditorHtml(aboutUsData?.descriptionEn)
      } else if(lang == 'ESP') {
        setEditorHtml(aboutUsData?.descriptionSp)
      }
    },[aboutUsData, lang])


    const modules = {
      toolbar: false, // Вимкнути панель інструментів
    };
    const readOnly = true;

    return (
        <div className='about_us_page_wraper'>
          <h2>About Us</h2>
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

export default AboutUsPage;