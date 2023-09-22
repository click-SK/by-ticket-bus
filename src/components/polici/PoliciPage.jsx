import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../../style/aboutUsPage.scss'
import axios from 'axios';
import { API_URL } from '../../http/baseUrl';
import { useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";
const PoliciPage = () => {
    const [editorHtml, setEditorHtml] = useState('');
    const [policyData, setPolicyData] = useState('');

    const { t } = useTranslation();

    const lang = useSelector((state) => state.lang.language);

    useEffect(() => {
      axios.get(`${API_URL}/get-policy`)
      .then((res) => setPolicyData(res.data[0]))
      .catch((error) => {
        console.error('Request error:', error);
      });
    },[])
    
    const handleChange = (html) => {
      setEditorHtml(html);
    };
  
    useEffect (() => {
      if(lang == 'ENG') {
        setEditorHtml(policyData?.descriptionEn)
      } else if(lang == 'ESP') {
        setEditorHtml(policyData?.descriptionSp)
      }
    },[policyData,lang])


    const modules = {
      toolbar: false, // Вимкнути панель інструментів
    };
    const readOnly = true;
    return (
        <div className='about_us_page_wraper'>
        <h2>{t('Privacy Policy')}</h2>
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